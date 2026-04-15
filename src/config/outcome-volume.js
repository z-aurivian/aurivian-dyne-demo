// Outcome Volume (RaaS) — Demo Brief §10.
// Fill: Dyne Q2 2026. Early-engagement volume (lower absolute numbers
// than a larger MA organization) with meaningful per-agent variation so
// the byAgent breakdown reads realistically.

export const OUTCOME_VOLUME = {
  period: 'Q2 2026',
  committed: 600,
  consumed: 284,
  byAgent: {
    aria: { committed: 250, consumed: 142 }, // ARIA-heavy — MDA + WMS just happened
    luca: { committed: 200, consumed:  86 }, // LUCA ramping with KOL map build-out
    nova: { committed: 150, consumed:  56 }, // NOVA lighter pre-launch — insight pipeline still standing up
  },
  momentumNote: 'First full quarter of engagement',
};
