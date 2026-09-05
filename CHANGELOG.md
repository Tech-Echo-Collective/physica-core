# Changelog

All notable changes to Physica Core are documented here.

## 0.9.0 - 2026-09-05

- Add eight independently reviewed concepts for quantum states/uncertainty, normal and quotient groups, thermodynamic potentials, and statistical ensembles (229 concepts, 669 relations).
- Preserve all 221 prior records and all 653 prior relations unchanged. No schema/domain changes.
- Keep article identity, source reads, placement proposals, queues and publication receipts in the organizing product; no Wikipedia article bodies are stored in Core.
- Record scoped scientific evidence in docs/live-foundations-sources.md.

## 0.8.0 - 2026-09-05

- Add four reviewed concepts: Canonical Transformation, Hamilton–Jacobi Equation, Fourier Transform and Partial Differential Equation (221 concepts, 653 relations).
- Preserve all 217 previous concept records and 636 relations unchanged. Add 17 scoped relations without changing schemas or domains.
- Distinguish PDEs from ODEs, continuous Fourier transforms from Fourier series/DFT, and semiclassical Hamilton–Jacobi use from exact quantum evolution.
- Record primary-source review in docs/transform-methods-sources.md. Consumer-owned formulas and placements remain outside Core.

## 0.7.0 - 2026-09-05

- Add 38 concepts for Newtonian foundations, work and energy, rotation, oscillators, central-force motion, and shared ODE/phase-space tools (217 concepts, 636 relations).
- Preserve all 179 prior concept records, including all 519 prior relations, without changing schemas or the eleven domains.
- Treat driven/damped oscillator families as inclusive of zero drive/damping; do not encode the pendulum's small-angle approximation as a subtype.
- Distinguish isolated two-body reduction from the inverse-square Kepler case, and scalar moments of inertia from the surrounding tensor formulation.
- Review primary sources in docs/mechanics-sources.md. Formula displays, browsing membership and future Theatrum candidate mappings remain consumer-owned.

## 0.6.0 - 2026-09-05

- Add 49 concepts for broad physics fields, groups, thermal/statistical physics and shared probability tools (179 concepts, 519 relations).
- Keep classical Hamiltonian functions distinct from quantum Hamiltonian operators; add field actions separately from the existing mechanical action.
- Explicitly connect geodesics and Christoffel symbols to GR as applications of shared geometry.
- Preserve all 130 previous IDs, definitions, aliases and relations; add 137 relations without schema changes.
- Record primary mathematical and physics sources in docs/field-sources.md. Browsing parents and future Atlas mapping candidates remain consumer-owned.

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
