# Changelog

All notable changes to Physica Core are documented here.

## 0.5.0 - 2026-09-05

- Add 83 concepts spanning all initial physics and mathematics entry topics (130 concepts, 382 relations).
- Add explicit vector-space/operator, pure/mixed quantum-state, Lorentz-boost and four-vector refinements without treating navigation membership as subtyping.
- Connect the expanded subjects to the existing geometry backbone and record primary university sources in docs/overview-sources.md.
- Preserve all existing IDs, descriptions, aliases and relations; reuse Affine Connection for its existing covariant-derivative identity.
- Retain the same schema, domains and five-relation vocabulary. No product layout, routing or browse metadata enters Core.

## 0.4.0 - 2026-09-05

- Add 16 concepts across coordinates, maps, manifold structures, operations on forms, integration, and cohomology (47 concepts, 131 relations).
- Record smooth-map/diffeomorphism and smooth/complex/symplectic refinements explicitly.
- Add the smooth-atlas prerequisite without redefining existing concept IDs or relation types.
- Keep product browse levels, editorial groups, and layout outside the ontology.

## 0.3.0 - 2026-09-05

- Add Manifold and the differential-form concepts Wedge Product, Exterior Derivative, Closed Form, and Exact Form (31 concepts, 86 relations).
- Make the smooth/metric refinement chain and alternating tensor specialization explicit, without treating product navigation groups as ontology relations.
- Record mathematical sources and the distinction between local closedness and global exactness in docs/geometry-sources.md.

## 0.2.1 - 2026-09-05

- Clarify the scope of metric, connection, Riemann-curvature, Ricci-curvature,
  and Christoffel Symbol descriptions without changing IDs or graph edges.

## 0.2.0 - 2026-09-05

- Add 12 canonical differential-geometry concepts spanning manifolds, tangent
  and cotangent spaces, tensor fields, connections, transport, and curvature.
- Connect the new concepts to the existing Metric, Christoffel Symbol,
  Geodesic, Differential Geometry, and relativity records.
- Preserve the v0.1 schema and five-relation vocabulary while expanding the
  generated registry to support nested knowledge views.

## 0.1.0 - 2026-09-04

- Define the initial language-neutral concept and relation schemas.
- Add 13 canonical concepts and five relation types.
- Add a generated concept registry and deterministic validation.
- Document Atlas, Illuminatio, and Theatrum integration boundaries.
- Add the 0.x SemVer policy and minimal CI validation.
