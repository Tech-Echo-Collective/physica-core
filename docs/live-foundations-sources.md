# Live Wikipedia foundations review

Reviewed 2026-09-05. Wikipedia identities are read live by Illuminatio; Core retains only original concept descriptions and typed relationships. Article text is not mirrored. Evidence below supports the scoped definitions and edges; this is editorial review, not automatic certification of whole articles.

## Density Matrix

An operator representation of a quantum state formed from pure-state projectors with nonnegative statistical weights summing to one, representing both pure and mixed states and their measurement statistics.

Scope limits: Representation, not a subtype of pure/mixed state.

Source: [MIT 5.74, The Density Matrix](https://ocw.mit.edu/courses/5-74-introductory-quantum-mechanics-ii-spring-2009/a1a6a947e655c9e9af9a9e5aa3b99cc9_MIT5_74s09_lec12.pdf), pp. 1–3, equations (1.1), (1.3), (1.8)–(1.13). Projectors, normalization, mixture representation and measurement expectations.

Relations: requires → quantum-state; used-in → mixed-quantum-state.

## Uncertainty Principle

A constraint on statistical spreads of quantum observables in a given state. The Robertson bound relates the product of their standard deviations to the expectation value of their commutator, subject to the relevant operator-domain conditions.

Scope limits: Preparation variance bound, not measurement disturbance.

Source: [MIT 22.02, Introduction to Quantum Mechanics](https://ocw.mit.edu/courses/22-02-introduction-to-applied-nuclear-physics-spring-2012/0456d26b0767e6aab3bace1e6f86d78b_MIT22_02S12_lec_ch2.pdf), §2.5.3, pp. 33–34. Preparation uncertainty is expressed with variances of observables and their commutator.

Relations: requires → quantum-observable; requires → variance.

## Normal Subgroup

A subgroup preserved by conjugation with every element of its ambient group. Normality is a property relative to that ambient group.

Scope limits: Normality is relative to the ambient group.

Source: [MIT Algebra I, Lecture 6](https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/mit18_701f21_lec6.pdf), §6.2, Definition 6.2 and Example 6.3, p. 27. Conjugation invariance defines normality; kernels of homomorphisms are normal.

Relations: requires → subgroup; used-in → group-homomorphism.

## Quotient Group

The group of cosets of a normal subgroup, with multiplication induced by the original group operation. Normality makes the coset operation well-defined.

Scope limits: Only normal subgroups yield this quotient group.

Source: [MIT Algebra I, Lecture 6](https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/mit18_701f21_lec6.pdf), §6.3, Definition 6.8 and Theorem 6.9, p. 29. Normal subgroups give well-defined coset multiplication and the quotient homomorphism.

Relations: requires → normal-subgroup; used-in → group-homomorphism.

## Enthalpy

A thermodynamic potential defined by adding pressure times volume to internal energy. Equality between an enthalpy change and exchanged heat requires additional process conditions.

Scope limits: Not an unconditional heat-content interpretation.

Source: [David Tong, Classical Thermodynamics](https://www.damtp.cam.ac.uk/user/tong/statphys/four.pdf), §4.4.1, p. 131. Enthalpy is the thermodynamic potential E+pV.

Relations: requires → internal-energy; used-in → thermodynamics.

## Helmholtz Free Energy

The thermodynamic potential obtained by subtracting temperature times entropy from internal energy. In the usual closed-system setting it is minimized at equilibrium under fixed temperature, volume, and particle number.

Scope limits: Fixed T,V,N closed-system equilibrium; not Gibbs free energy.

Source: [David Tong, Classical Thermodynamics](https://www.damtp.cam.ac.uk/user/tong/statphys/four.pdf), §4.4, pp. 129–130. Helmholtz free energy is E−TS with fixed-temperature equilibrium minimization.

Relations: requires → internal-energy; requires → thermodynamic-entropy.

## Grand Canonical Ensemble

An equilibrium statistical ensemble for a system exchanging energy and particles with reservoirs, at fixed temperature, chemical potentials, and mechanical parameters such as volume.

Scope limits: Not the fixed-N canonical ensemble.

Source: [Penn State, Thermodynamic and Statistical Mechanics](https://sites.esm.psu.edu/~vfm5153/TSM/lecture14.html), Lecture 14, Key Definitions: Grand canonical ensemble and Gibbs' probability distribution. The ensemble exchanges particles and energy and uses fixed T,V,μ weights.

Relations: requires → statistical-ensemble; requires → temperature.

## Boltzmann Distribution

The equilibrium probability law assigning each microscopic state a normalized weight proportional to the exponential of minus its energy divided by Boltzmann's constant times temperature.

Scope limits: Microscopic-state weighting, not a speed distribution; convergence is required.

Source: [David Tong, Statistical Physics](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html), §1.3, equation (1.19), and §1.3.1. Canonical microscopic-state weights are exponential in energy, normalized by the partition function.

Relations: used-in → canonical-ensemble; requires → partition-function.
