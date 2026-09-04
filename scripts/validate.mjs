import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const conceptsDirectory = join(root, "concepts");
const registryPath = join(root, "registry", "concepts.json");
const writeRegistry = process.argv.includes("--write-registry");

if (process.argv.length > 3 || (process.argv[2] && !writeRegistry)) {
  console.error("Usage: node scripts/validate.mjs [--write-registry]");
  process.exit(2);
}

async function readJson(path) {
  const source = await readFile(path, "utf8");
  try {
    return JSON.parse(source);
  } catch (error) {
    throw new Error(`${path}: invalid JSON: ${error.message}`);
  }
}

function normalizedLabel(value) {
  return value.trim().toLocaleLowerCase("en-US");
}

function formatAjvErrors(errors = []) {
  return errors
    .map((error) => `${error.instancePath || "/"} ${error.message}`)
    .join("; ");
}

function findDirectedCycle(concepts, relationType) {
  const edges = new Map(
    concepts.map((concept) => [
      concept.id,
      concept.relations
        .filter((relation) => relation.type === relationType)
        .map((relation) => relation.target),
    ]),
  );
  const visited = new Set();
  const active = new Set();
  const path = [];

  function visit(id) {
    if (active.has(id)) {
      const cycleStart = path.indexOf(id);
      return [...path.slice(cycleStart), id];
    }
    if (visited.has(id)) return null;

    visited.add(id);
    active.add(id);
    path.push(id);
    for (const target of edges.get(id) ?? []) {
      const cycle = visit(target);
      if (cycle) return cycle;
    }
    path.pop();
    active.delete(id);
    return null;
  }

  for (const concept of concepts) {
    const cycle = visit(concept.id);
    if (cycle) return cycle;
  }
  return null;
}

const version = (await readFile(join(root, "VERSION"), "utf8")).trim();
const packageJson = await readJson(join(root, "package.json"));
const semverPattern = /^0\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;
if (!semverPattern.test(version)) {
  throw new Error(`VERSION must be a valid 0.x SemVer value; received ${version}`);
}
if (packageJson.version !== version) {
  throw new Error(`package.json version ${packageJson.version} does not match VERSION ${version}`);
}
if (packageJson.private !== true) {
  throw new Error("package.json must remain private to prevent accidental publication");
}

const relationSchema = await readJson(join(root, "schemas", "relation.schema.json"));
const conceptSchema = await readJson(join(root, "schemas", "concept.schema.json"));
const capabilitySchema = await readJson(join(root, "schemas", "capability.schema.json"));

const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addSchema(relationSchema);
const validateConcept = ajv.compile(conceptSchema);
ajv.compile(capabilitySchema);

const conceptFiles = (await readdir(conceptsDirectory))
  .filter((name) => name.endsWith(".json"))
  .sort();
if (conceptFiles.length === 0) {
  throw new Error("No concept records found");
}

const concepts = [];
const conceptById = new Map();
const labelOwner = new Map();

for (const filename of conceptFiles) {
  const path = join(conceptsDirectory, filename);
  const concept = await readJson(path);
  if (!validateConcept(concept)) {
    throw new Error(`${filename}: ${formatAjvErrors(validateConcept.errors)}`);
  }
  if (filename !== `${concept.id}.json`) {
    throw new Error(`${filename}: filename must match concept ID ${concept.id}`);
  }
  if (conceptById.has(concept.id)) {
    throw new Error(`${filename}: duplicate concept ID ${concept.id}`);
  }

  for (const label of [concept.title, ...concept.aliases]) {
    const normalized = normalizedLabel(label);
    const owner = labelOwner.get(normalized);
    if (owner && owner !== concept.id) {
      throw new Error(`${filename}: label or alias ${JSON.stringify(label)} already belongs to ${owner}`);
    }
    labelOwner.set(normalized, concept.id);
  }

  const edges = new Set();
  for (const relation of concept.relations) {
    const edge = `${relation.type}\u0000${relation.target}`;
    if (edges.has(edge)) {
      throw new Error(`${filename}: duplicate ${relation.type} relation to ${relation.target}`);
    }
    edges.add(edge);
    if (relation.target === concept.id) {
      throw new Error(`${filename}: self-relations are not allowed`);
    }
    if (relation.type === "analogous-to" && concept.id.localeCompare(relation.target) >= 0) {
      throw new Error(`${filename}: analogous-to must be authored on the lexicographically smaller concept ID`);
    }
  }

  concepts.push(concept);
  conceptById.set(concept.id, concept);
}

for (const concept of concepts) {
  for (const relation of concept.relations) {
    if (!conceptById.has(relation.target)) {
      throw new Error(`${concept.id}: ${relation.type} targets unknown concept ${relation.target}`);
    }
  }
}

for (const relationType of ["requires", "generalizes", "derived-from"]) {
  const cycle = findDirectedCycle(concepts, relationType);
  if (cycle) {
    throw new Error(`${relationType} cycle: ${cycle.join(" -> ")}`);
  }
}

concepts.sort((left, right) => left.id.localeCompare(right.id));
const domains = [...new Set(concepts.flatMap((concept) => concept.domains))].sort();
const relationTypes = relationSchema.properties.type.enum;
const registry = {
  core_version: version,
  source_of_truth: "concepts/*.json",
  domains,
  relation_types: relationTypes,
  concepts,
};
const expectedRegistry = `${JSON.stringify(registry, null, 2)}\n`;

if (writeRegistry) {
  await writeFile(registryPath, expectedRegistry, "utf8");
  console.log(`Wrote registry/concepts.json from ${concepts.length} canonical concepts.`);
} else {
  let actualRegistry;
  try {
    actualRegistry = await readFile(registryPath, "utf8");
  } catch {
    throw new Error("registry/concepts.json is missing; run npm run build:registry");
  }
  if (actualRegistry !== expectedRegistry) {
    throw new Error("registry/concepts.json is stale; run npm run build:registry");
  }
}

const relationCount = concepts.reduce((count, concept) => count + concept.relations.length, 0);
console.log(
  `Validated Physica Core ${version}: ${concepts.length} concepts, ${relationCount} relations, ${domains.length} domains.`,
);
