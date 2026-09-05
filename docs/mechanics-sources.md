# Classical mechanics source review

Reviewed 2026-09-05 for Core v0.7.0: 38 additive concepts and 117 new relations. All 179 previous records and 519 relations are retained unchanged. Sources inform definitions and direct semantic relations; they do not prescribe Illuminatio browsing groups.

## Scope decisions

- Newtonian, Lagrangian and Hamiltonian mechanics are formulations, not a chain of special cases. Motion models form a separate browsing route.
- Damped and driven oscillator families include their zero-parameter limits. The ideal pendulum only approaches harmonic motion at small angle; no exact subtype edge is asserted.
- Central-force motion permits arbitrary radial interactions. The isolated two-body reduction requires internal action–reaction symmetry; inverse-square attraction is additional for Kepler orbits.
- The new angular momentum record is explicitly classical; intrinsic quantum spin is not folded into it. A scalar moment of inertia is an axis projection, not an alias for the full inertia tensor.
- ODE and IVP are shared mathematics. Phase space is not configuration space; the concrete Hamiltonian learning route assumes regular mechanics.
- Core contains definitions and relation evidence, not formulas, simulation parameters, URLs, learning levels or product routing. See the consumer's formula annotations for display assumptions and derivation notation.

## Primary sources

- [MIT 8.01: Classical Mechanics, Chapter 4](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter4.pdf) — Read §§4.1–4.4: kinematics distinguishes description from force models, velocity is a position derivative, acceleration is a velocity derivative. Three-dimensional cards apply these componentwise.

- [MIT 8.01: Classical Mechanics, Chapter 5](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter5.pdf) — Read Cartesian vector representation and independent components; position annotation extends the displayed planar decomposition to three dimensions.

- [MIT 8.01: Classical Mechanics, Chapter 7](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter7.pdf) — Read force vectors, resultant forces, inertia, and Newton's laws. The force card is vector addition, not a duplicate of the second-law card.

- [David Tong, Cambridge: Dynamics and Relativity, Chapter 1](https://www.damtp.cam.ac.uk/user/tong/relativity/one.pdf) — Read §1.3 on equation of motion, inertial mass, momentum, dependence on position/velocity, and initial data. Fixed-mass conditions intentionally exclude rocket momentum-flux subtleties.

- [MIT 8.01: Classical Mechanics, Chapter 10](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter10.pdf) — Read §§10.2–10.5: particle momentum, cancellation of internal forces, external momentum balance, and mass-weighted center of mass. Zero external force alone is insufficient if the chosen system omits momentum carriers.

- [MIT 8.01: Classical Mechanics, Chapter 13](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter13.pdf) — Read work, kinetic energy, work–energy theorem, and scalar-product form. Work is evaluated at the force's point of application and need not be path independent.

- [MIT 8.01: Classical Mechanics, Chapter 14](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter14.pdf) — Read §14.2 on path independence and the closed-path test, potential-energy differences, and force from potential. An additive energy constant is a convention. The conservative-force card uses the global closed-loop criterion, avoiding an unqualified curl-free equivalence.

- [MIT 8.01SC, Chapter 23: Simple Harmonic Motion](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter23.pdf) — Read §§23.2, 23.3.1, 23.5, 23.6 and 23.6.1. Important: exact displacement resonance is equation (23.6.11), not the weak-damping approximation ω≈ω₀. Pendulum sine equation is exact; small-angle period is approximate. Use own notation and no copied prose.

- [MIT 8.03SC, Chapter 3: Normal Modes](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/29afe7e96aadefce1bd80486771aeae9_MIT8_03SCF16_Text_Ch3.pdf) — Read §§3.2.4–3.3 and 3.4.3. M⁻¹K a=ω²a is rewritten equivalently as K a=ω²M a. Positive-frequency vibration is distinguished from zero modes and unstable negative eigenvalues.

- [David Tong, Cambridge: Dynamics and Relativity, Chapter 4: Central Forces](https://www.damtp.cam.ac.uk/user/tong/relativity/four.pdf) — Read §§4.2–4.3.1. Author's l is angular momentum per mass; asset instead uses L as full relative angular momentum. Corresponding centrifugal term is L²/(2μr²), and Kepler p=L²/(μκ). This algebraic notation translation was checked against Chapter 5's reduced-mass reduction.

- [David Tong, Cambridge: Dynamics and Relativity, Chapter 5: Systems of Particles](https://www.damtp.cam.ac.uk/user/tong/relativity/five.pdf) — Read §5.1.5. Isolated two-body separation requires equal-and-opposite internal forces; centrality and an inverse-square force are additional, not automatic. Reduced mass belongs to relative motion, not total center-of-mass motion.

- [David Tong, Cambridge: Classical Dynamics, Chapter 1: Newton's Laws of Motion](https://www.damtp.cam.ac.uk/user/tong/dynamics/dynhtml/S1.html) — Read §§1.2.4 and 1.3.3, which give gravitational point-particle force, two-body potential, and relative mass. The point-pair form uses force on particle 1 and separation r₁−r₂ to make the attractive sign unambiguous.

- [MIT 8.01SC: Chapter 17, Two Dimensional Rotational Dynamics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter17.pdf) — Read §§17.1, 17.3–17.4. Supports force moments and fixed-axis limits; internal torques cancel only with the additional appropriate interaction assumptions.

- [MIT 8.09, Iain Stewart: Chapter 2, Rigid Body Dynamics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf) — Read §§2.1 and 2.3–2.4, equations (2.1), (2.37)–(2.43), (2.50), (2.66)–(2.68). Inertia is a tensor in general; angular momentum and angular velocity need not be parallel.

- [MIT 16.07, J. Peraire and S. Widnall: Lecture L25, 3D Rigid Body Kinematics](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/419be4d742e628d70acfbc5496eab967_MIT16_07F09_Lec25.pdf) — Read pages 1–3 and 7–8, especially equation (4). Angular velocity is an instantaneous vector, unlike finite rotations; general body-point velocity includes translation.

- [MIT 8.01SC: Chapter 19, Angular Momentum](https://live.ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter19.pdf) — Read §§19.2–19.3 and 19.6. Particle/system angular momentum is relative to a reference point; restrict the simple torque-rate law to a fixed inertial origin here.

- [MIT 8.01SC: Chapter 20, Rigid Body Translation and Rotation](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter20.pdf) — Read introduction and Appendix 20A alongside MIT 8.09 §2.1. Supports the distance-preserving rigid-body idealization and translation/rotation decomposition.

- [Jishan Hu and Wei-Ping Li, HKUST: Theory of Ordinary Differential Equations](https://www.math.hkust.edu.hk/~majhu/Math303/Notes.pdf) — Read §1.1, equations (1.1) and first-order reduction, and §1.5.1 local-existence theorem. An independent variable need not represent physical time.

- [Per-Olof Persson, UC Berkeley: Initial-Value Problems for Ordinary Differential Equations](https://persson.berkeley.edu/math128a/slides/ch5math128a.html) — Read definitions, existence/uniqueness, and well-posedness. An initial condition is extra data; uniqueness is not automatic for an arbitrary equation.

- [David Tong, Cambridge: Classical Dynamics, §4.1](https://www.damtp.cam.ac.uk/user/tong/dynamics/four.pdf) — Read first two pages, which distinguish n configuration coordinates from 2n phase coordinates and illustrate the pendulum phase cylinder.

- [Iñaki García Etxebarria, Durham: Lagrangian and Hamiltonian Mechanics, §5.2](https://www.maths.dur.ac.uk/users/inaki.garcia-etxebarria/MPII/Lectures.html) — Read Poisson-bracket definition and fundamental brackets. Coordinate/momentum arguments are independent in partial derivatives; the displayed bracket is canonical.

- [MIT 8.01SC: Chapter 16, Two Dimensional Rotational Kinematics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter16.pdf) — Read moment-of-inertia and rotational-energy definitions and Appendix 16A. The scalar moment is defined relative to an axis, not merely to an object.
