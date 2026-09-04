# Concept ID convention

Concept IDs are the stable join keys shared by Physica products. A title can be
edited or translated; an ID must remain semantically stable.

## Syntax

An ID must:

- use lowercase ASCII letters and digits;
- separate words with one hyphen;
- start and end with a letter or digit;
- contain no product, version, language, or display-order prefix;
- match its filename exactly: `geodesic` lives in `concepts/geodesic.json`.

The enforced pattern is:

```text
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

Good IDs include `linear-algebra`, `christoffel-symbol`, and
`schwarzschild-spacetime`. Avoid `atlas-geodesic`, `v1_metric`, or a translated
label such as `测地线` as the canonical key. Localized titles belong in product
presentation data, not in the ID.

## Identity before wording

Choose the concept's scope before choosing its slug. For example, the 0.1
`metric` record is explicitly scoped to the differential-geometric metric
tensor used in relativity; it does not silently cover every mathematical use
of the word “metric.” Use the description and aliases to make that boundary
clear.

Aliases are discovery metadata, not alternate IDs. They must be globally
unambiguous after trimming and case folding. A consumer stores the canonical
ID after resolving an alias.

## Stability and collisions

- Do not rename an ID for capitalization, typography, or preference.
- Do not reuse a removed ID for a different concept.
- If two records overlap, clarify their scopes before adding either one.
- A semantic rename, split, or merge is a breaking ontology change and follows
  the 0.x migration rules in [`versioning.md`](versioning.md).

## Atlas field IDs are a separate namespace

Physics Atlas already uses identifiers such as `gr-qc` and `quant-ph` for its
research-field classification ontology. Core concept IDs identify ideas, not
paper-classification buckets. Products must keep the columns and mappings
explicitly separate:

```text
field_id    = gr-qc
concept_id  = geodesic
```

An identical string must never be assumed to mean identical entities across
those namespaces. Core does not replace Atlas field IDs.
