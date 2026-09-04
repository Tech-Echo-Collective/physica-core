# Physica Core

Physica Core is the language-neutral ontology, schema, and contract layer shared
by Atlas Physicus, Illuminatio Physica, and Theatrum Physicum.

Current version: **0.1.0**. This is an early, intentionally small contract. It
is not a frozen 1.0 standard.

## What Core owns

- stable, canonical physics concept IDs;
- the `PhysicsConcept` record shape;
- a small vocabulary of concept-relation semantics;
- shared concept metadata such as titles, aliases, and domains;
- an optional, metadata-only capability declaration shape.

The canonical source is the set of files under [`concepts/`](concepts/).
[`registry/concepts.json`](registry/concepts.json) is a deterministic generated
bundle for consumers. Do not edit the registry by hand.

## What Core does not own

- papers, authors, institutions, citations, metrics, or Atlas field mappings;
- Illuminatio coordinates, layouts, camera state, or visual styling;
- Theatrum solvers, simulation state, numerical results, or rendered scenes;
- services, product APIs, internal URLs, or deployment configuration.

Core is not a fourth product, a microservice, or an npm/PyPI package. Products
pin a Core release or commit and consume the data at build or ingestion time.

## Atlas compatibility boundary

Physics Atlas already has a separate `physics-field-ontology-v1` used to
classify papers for field-specific metrics. A research field such as `gr-qc`
is not the same entity as a learnable concept such as `geodesic`. Core does not
replace that ontology or its `field_id` relationships. A future Atlas
integration only needs a separate `concept_id` mapping validated against this
registry.

## Repository layout

```text
physica-core/
├── concepts/                  canonical concept records (source of truth)
├── registry/concepts.json     generated, consumer-friendly bundle
├── schemas/
│   ├── concept.schema.json
│   ├── relation.schema.json
│   └── capability.schema.json
├── docs/
├── scripts/validate.mjs
├── VERSION
└── package.json               validation tooling only; not a published package
```

## First concept set

Version 0.1.0 contains 13 concepts: the ten initial Physica concepts plus the
three support concepts `differential-geometry`, `special-relativity`, and
`general-relativity`. The small relation vocabulary is:

- `requires`
- `generalizes`
- `derived-from`
- `used-in`
- `analogous-to`

Precise direction and authoring rules are defined in
[`docs/ontology.md`](docs/ontology.md).

## Validate a change

Node.js 22 or newer is required only for repository validation.

```bash
npm ci
npm run build:registry
npm test
```

`npm run build:registry` validates every concept before rewriting the generated
registry. `npm test` then checks that schemas compile, IDs and aliases are
unambiguous, relation targets exist, directed semantic cycles are absent, and
the checked-in registry is current.

## Consumer rule

Pin an exact release tag such as `v0.1.0` (or a commit), read
`registry/concepts.json`, and store canonical IDs as strings. Do not couple one
Physica product to another product's database schema or runtime URL. See the
[`integration guide`](docs/integration.md) and
[`versioning policy`](docs/versioning.md).

## License

Apache License 2.0. See [`LICENSE`](LICENSE).
