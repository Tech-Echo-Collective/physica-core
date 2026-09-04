# Ontology semantics

Physica Core 0.2 is a small concept graph, not an exhaustive physics taxonomy.
Each file in `concepts/` defines one canonical node. Its `relations` array
defines outgoing edges from that node to another canonical concept ID.

## Concept fields

| Field | Meaning |
| --- | --- |
| `id` | Stable canonical join key. |
| `title` | Primary English display title; not an identity key. |
| `description` | Product-neutral scope and meaning. |
| `domains` | Broad discovery facets such as `relativity`; not Atlas research fields. |
| `aliases` | Alternate discovery labels that resolve to the canonical ID. |
| `relations` | Direct semantic edges authored on this concept. |

Domain slugs use the same lowercase kebab-case convention as concept IDs. In
0.2, domains are lightweight facets derived into the registry rather than
separate nodes with their own hierarchy.

## Relation direction

For a record **A** containing `{ "type": T, "target": "B" }`:

| Type | Direction and meaning |
| --- | --- |
| `requires` | **A requires B**: learning or understanding A normally depends on B. Store direct, useful prerequisites rather than every transitive ancestor. |
| `generalizes` | **A generalizes B**: A is the broader theory or construction and B is recovered as a restricted or special case. |
| `derived-from` | **A is derived from B**: A's standard mathematical construction or defining result is obtained directly from B. This is stronger than historical influence and does not replace `requires`. |
| `used-in` | **A is used in B**: A is an applied tool, representation, or ingredient in the treatment of B. It does not by itself assert a learning prerequisite. |
| `analogous-to` | **A is analogous to B**: the concepts have a useful structural analogy without identity or derivation. The meaning is symmetric even though it is stored once. Author it only on the lexicographically smaller ID. |

The initial data does not force an `analogous-to` example because no pair in
the first set needs that claim. A relation type can be part of the contract
without being used prematurely.

## Authoring rules

- Every target must exist in the same pinned Core version.
- Self-relations and duplicate `(type, target)` edges are invalid.
- `requires`, `generalizes`, and `derived-from` edges must be acyclic.
- Store a direct relation only when it adds meaning; do not materialize a full
  transitive closure in concept files.
- Several relation types may connect the same pair when each makes a distinct,
  defensible statement.
- A note may narrow or explain an edge, but it must not reverse its direction.

`requires` is a pedagogical default, not a claim that every curriculum must use
the same order. `generalizes` is about conceptual or mathematical scope, not
social importance. `used-in` does not make its target a subfield.

## Scope boundary

Core stores shared semantics only. Consumer-specific weights, confidence,
layout, translations, paper evidence, simulations, and runtime state belong to
the consuming product. If metadata is meaningful to only one product, it does
not belong in this ontology.
