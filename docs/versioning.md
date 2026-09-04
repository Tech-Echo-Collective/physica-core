# Versioning

Physica Core follows Semantic Versioning and remains in the `0.x` development
series. The initial version is `0.1.0`; 1.0 stability is not implied.

## 0.x release policy

- **Patch (`0.1.1`)**: typo fixes, clearer descriptions, or tooling fixes that
  do not change an ID, schema shape, relation meaning, or graph result.
- **Minor (`0.2.0`)**: new concepts, domains, relation edges, relation types, or
  optional schema fields. A necessary breaking change before 1.0 also bumps the
  minor version and must be labeled `BREAKING` with migration notes.
- **Major (`1.0.0`)**: reserved for a deliberately stabilized contract after at
  least two products have integrated it and migrations have been exercised.

Although SemVer permits rapid change before 1.0, this project treats canonical
IDs conservatively. Consumers should still pin an exact release because even
an additive graph change can alter layout, search results, or learning paths.

## Breaking changes

The following are breaking:

- removing, renaming, splitting, merging, or materially redefining an ID;
- reversing or redefining a relation type;
- removing a relation that a consumer may rely on;
- adding a required field or narrowing an accepted schema value;
- changing a generated registry field's meaning.

Before 1.0, an unavoidable breaking change requires:

1. a new 0.x minor release;
2. a `BREAKING` changelog entry;
3. an old-to-new ID or field migration table when identity changes;
4. updated integration examples and validation;
5. preservation of prior Git tags so historical consumers remain reproducible.

Patch releases must never contain a breaking change.

## Release invariants

- `VERSION`, `package.json`, and `registry/concepts.json` carry the same version.
- Release tags use `vMAJOR.MINOR.PATCH`, for example `v0.1.0`.
- `concepts/*.json` remains the source of truth; the registry is regenerated.
- A release is cut only after the validation workflow passes from a clean
  checkout.
- Consumers record the exact Core version alongside persisted concept IDs.

Generated TypeScript or Python bindings may appear in a future minor release,
but they will remain derived conveniences rather than the normative contract.
