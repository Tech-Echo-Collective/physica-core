# Integration guide

Consumers should pin an exact Core release tag or commit and read the generated
`registry/concepts.json` during build, ingestion, or validation. The registry
contains complete concept records and relation edges. No Physica product needs
to call another product at runtime.

## Atlas Physicus

### Existing boundary

The current Physics Atlas implementation has canonical `science_domains`,
`research_fields`, and `paper_fields`. Its `physics-field-ontology-v1` supports
paper classification and metric calculation. Core concepts serve a different
purpose and must not be inserted into that field hierarchy.

### Minimal future integration

Atlas only needs to store a mapping from an Atlas-owned entity to a canonical
Core ID. A paper mapping can remain an Atlas record such as:

```json
{
  "paper_id": "atlas-owned-paper-id",
  "concept_id": "geodesic",
  "core_version": "0.1.0",
  "mapping_method": "reviewed-manual"
}
```

The exact table or file remains an Atlas decision. The low-risk path is a
separate `paper_concepts` mapping boundary rather than adding Core concepts to
`research_fields` or changing `paper_fields`. At ingestion or CI time, Atlas
validates each `concept_id` against its pinned registry. It should retain its
own evidence, confidence, and provenance beside the mapping.

Core does not own paper IDs, mapping confidence, provider evidence, or database
foreign keys. Atlas should not create a cross-repository database foreign key;
the pinned registry is the compatibility check.

## Illuminatio Physica

Illuminatio is the primary graph consumer:

1. load `registry/concepts.json` at build time;
2. create one graph node per concept `id`;
3. create edges directly from each relation's source, `type`, and `target`;
4. treat `analogous-to` as semantically undirected;
5. compute any transitive prerequisite view in Illuminatio rather than writing
   derived closure edges back to Core.

Search may use `title` and `aliases`. Coordinates, force-layout parameters,
clusters, colors, camera state, and learning-path UI state remain Illuminatio
data. They must not be committed to Core.

## Theatrum Physicum

A Theatrum template can declare the concepts it demonstrates:

```json
{
  "id": "schwarzschild-geodesic-demo",
  "core_version": "0.1.0",
  "concept_ids": [
    "schwarzschild-spacetime",
    "geodesic",
    "christoffel-symbol"
  ]
}
```

Theatrum validates these strings against its pinned registry before accepting
the template. Solver choice, equations, parameters, numerical outputs, scene
objects, and rendering remain Theatrum-owned data. Core does not prescribe the
template's runtime schema beyond canonical concept references.

## Capability metadata

`schemas/capability.schema.json` is an optional compatibility label for a
future product manifest: product ID, manifest version, pinned Core version, and
capability slugs. Version 0.1 ships no capability instances because no
cross-product negotiation is needed yet. The schema deliberately contains no
URL, transport, authentication, endpoint, or business-operation fields.

## Version pinning

Consumers must not track `main` as a production contract. Pin `v0.1.0` or an
exact commit, record the selected Core version with mappings/templates, and
upgrade deliberately after running consumer tests. Generated language bindings
may be added later, but JSON Schema and JSON data remain authoritative.
