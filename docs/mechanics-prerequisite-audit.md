# Classical mechanics prerequisite audit

Reviewed 2026-09-05 for Core 0.10.0. This bounded review adds three elementary
vector concepts and corrects direct learning prerequisites across Newtonian,
rotational, oscillatory, orbital, Lagrangian and Hamiltonian mechanics.
The generated registry contains 232 concepts, 685 relations and 11 domains:
27 relations are added and 11 removed relative to 0.9.0.
All 229 prior IDs, definitions, aliases and domains are preserved. The five
relation meanings and schemas are unchanged. Sources support the mathematics
and teaching routes; the particular graph edges are editorial judgments under
[Core's ontology semantics](ontology.md), not a source-published ontology.

## Elementary vectors and Newtonian foundations

New records are `euclidean-vector`, `dot-product` and `cross-product`. Only the
last two require `euclidean-vector`. The geometric vector is an elementary
Euclidean object; the dot product uses real components of equal dimension;
the cross product is limited to oriented three-dimensional Euclidean space.
No abstract vector-space, inner-product-space or dot-product prerequisite is
added to these elementary records. See [MIT 18.013A §3.1](https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter03/section01.html),
[MIT 18.013A §3.3](https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter03/section03.html)
and [OpenStax University Physics §2.4, eqs. 2.35–2.41](https://openstax.org/books/university-physics-volume-1/pages/2-4-products-of-vectors).

| Source concept | Exact prerequisite change |
| --- | --- |
| `position`, `force` | Replace `requires vector-space` with `requires euclidean-vector`. |
| `work` | Replace `requires inner-product-space` with `requires dot-product`; add `requires position`. |
| `angular-velocity`, `torque`, `angular-momentum` | Replace `requires linear-algebra` with `requires cross-product`. |
| `moment-of-inertia` | Remove `requires linear-algebra`; add `matrix used-in moment-of-inertia` with a tensor-extension-only note. |
| `conservation-of-linear-momentum` | Add `requires force`. |
| `rotational-dynamics` | Add `requires angular-velocity`. |
| `inertial-reference-frame` | Add `requires acceleration` and `requires force`, scoped to the Newtonian free-particle criterion. |

These changes put component addition and vector products before their mechanical
applications without requiring an abstract algebra course. Work needs displacement
of the force's point of application; momentum conservation distinguishes external
forces from cancelling internal forces. Inertial motion is defined through the
unaccelerated motion of free particles. Sources: [MIT 8.01 Chapter 7, Newton's laws](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter7.pdf),
[Chapter 10 §§10.2–10.5, momentum balance](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter10.pdf)
and [Chapter 13, work and scalar products](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter13.pdf).

Angular velocity and its point-velocity cross product are reviewed in
[MIT 16.07 Lecture L25, pp. 1–3 and eq. 4](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/419be4d742e628d70acfbc5496eab967_MIT16_07F09_Lec25.pdf).
Torque and angular momentum use cross products in [MIT 8.01 Chapter 17 §§17.1, 17.3–17.4](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter17.pdf)
and [Chapter 19 §§19.2–19.3](https://live.ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter19.pdf).
The scalar axis moment does not require the full tensor machinery; the matrix
application is explicitly restricted to that extension. See [MIT 8.01 Chapter 16 and Appendix 16A](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter16.pdf)
and [MIT 8.09 Chapter 2 §§2.3–2.4](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf).

## Analytical mechanics and shared mathematics

| Source concept | Exact prerequisite change |
| --- | --- |
| `generalized-momentum` | Add `requires partial-derivative`. |
| `first-variation` | Add `requires derivative`. |
| `action-functional` | Add `requires riemann-integral`, scoped to a smooth mechanical action on a finite interval. |
| `euler-lagrange-equation` | Add `requires action-functional` and `requires partial-derivative`. |
| `legendre-transform` | Replace `requires calculus` with `requires partial-derivative`. |
| `hamiltonian` | Add `requires phase-space`. |
| `hamiltonian-mechanics` | Add `requires ordinary-differential-equation`. |
| `phase-space` | Remove `requires generalized-momentum`; add the reverse application `generalized-momentum used-in phase-space`. |

The first variation differentiates a scalar perturbation parameter; see
[Liberzon §1.3.2, eqs. 1.34–1.36](https://liberzon.csl.illinois.edu/teaching/cvoc/node15.html).
The mechanical action is a definite integral, and its Euler–Lagrange equation
uses partial derivatives of independent configuration and velocity arguments.
See [Tong §2.1, eqs. 2.29–2.33](https://davidtong.org/teaching/classical-dynamics/dynhtml/S2)
and [Durham §2.1](https://www.maths.dur.ac.uk/users/inaki.garcia-etxebarria/MPII/Lectures.html).

Conjugate momentum and the smooth local Legendre transform use partial
derivatives. Hamiltonian dynamics evolves phase-space coordinates through a
first-order ODE system. See [Tong §§4.1–4.1.2, eqs. 4.269–4.282](https://davidtong.org/teaching/classical-dynamics/dynhtml/S4).
Generic state-space coordinates need not be canonical momenta: positions and
velocities can specify mechanical states. The existing configuration-space
edge is retained, and the momentum application names the canonical Hamiltonian
representation. See [Durham §5.1](https://www.maths.dur.ac.uk/users/inaki.garcia-etxebarria/MPII/Lectures.html).

## Oscillations and orbits

| Source concept | Exact prerequisite change |
| --- | --- |
| `simple-pendulum` | Remove `requires holonomic-constraint`; add `requires newtons-second-law` and the reverse application `holonomic-constraint used-in simple-pendulum`. |
| `simple-harmonic-oscillator` | Add `requires newtons-second-law`. |
| `kepler-orbit` | Remove `requires two-body-problem`; add the reverse application `two-body-problem used-in kepler-orbit`. |

The mechanical oscillator and pendulum are introduced through force balance;
the elementary pendulum need not first introduce analytical constraint
terminology. Their existing Newtonian `derived-from` relations remain because
derivation and teaching dependency are distinct claims. A pendulum is harmonic
only in its small-angle approximation. See [MIT 8.01 §§23.2–23.3.1, eqs. 23.3.15–23.3.19](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter23.pdf)
and [Durham §§2.2–2.3](https://www.maths.dur.ac.uk/users/inaki.garcia-etxebarria/MPII/Lectures.html).

A Kepler orbit may be introduced for a particle in a fixed inverse-square
field. The isolated two-body reduction is an application, not an unconditional
prerequisite for that definition. See [MIT 16.07 Lecture L15, pp. 1–4](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/d931dd84ca3025a3676ed2244f48ab85_MIT16_07F09_Lec15.pdf).

## Retained choices and migration

- Keep `functional requires calculus`; broader generic-functional cleanup is deferred.
- Keep Hamiltonian prerequisites on the Legendre transform and generalized momentum for the existing regular-Lagrangian teaching route. Do not add a mandatory sequence of Newtonian, Lagrangian and Hamiltonian formulations.
- Keep Euler–Lagrange prerequisites on the first variation and fundamental lemma; keep the on-solution conservation prerequisites of cyclic coordinates, Lagrangian energy and Noether's theorem.
- Keep the SHO → damped → driven → resonance teaching sequence, alongside the separate zero-parameter `generalizes` edges; [MIT 8.01 §§23.5–23.6](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter23.pdf) supports the models.
- Keep normal-mode prerequisites on SHO, eigenvalues and matrices for the stated mass-and-stiffness eigenproblem; see [MIT 8.03 §§3.2.4–3.3, eq. 3.68](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/29afe7e96aadefce1bd80486771aeae9_MIT8_03SCF16_Text_Ch3.pdf).
- Keep central-force/angular-momentum and effective-potential prerequisites, and center-of-mass/reduced-mass dependencies in the isolated two-body reduction. The Kepler application does not make gravitation mandatory for general central forces.

**BREAKING:** relation removals change the graph contract even though every
previous concept ID is preserved. No ID migration is required. Consumers must
pin 0.10.0 explicitly, replace their complete generated registry, and recompute
prerequisite closures and any dependent layout or learning-path caches. Do not
merge the new relations into an older edge set: the removed prerequisites would
otherwise survive. Applications using the three new IDs require Core 0.10.0 or
later. Layout and learning-depth rules remain consumer-owned.
