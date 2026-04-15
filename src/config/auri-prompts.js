// Auri canned Q&A — Demo Brief §12.
// Fill: Dyne. Every response cites populated config objects.
// Mix of prompts from the Dyne write-up (direct agent queries) plus
// synthesis prompts that cross agents.

export const AURI_PROMPTS = [
  {
    prompt: 'What did we learn about exon-skipping vs gene therapy in DMD at MDA and WMS this year?',
    response:
      'The DMD discourse at MDA 2026 and WMS 2025 clustered around durability and sequencing, not efficacy:\n\n• Senior DMD PIs trained on legacy PMOs (Mendell archetype) frame FORCE as "interesting engineering" but are withholding endorsement pending long-term biodistribution data (**AI1**). Younger DMD fellows are already mechanistically sold.\n• **Francesco Muntoni** is shifting from PMO-aligned to mechanism-curious after WMS 2025 — Tier 1 EU DMD voice now worth proactive engagement.\n• Competitor visibility at MDA 2026 was up 22% vs MDA 2025 — Sarepta and Avidity both expanded their footprints.\n• Action A1 (52-week FORCE biodistribution summary) is Started. A3 (co-create DMD sequencing algorithm with 3–5 PIs) is Proposed — no owner yet.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'kol',     id: 'kol-7' },
      { type: 'action',  id: 'A1'   },
      { type: 'action',  id: 'A3'   },
      { type: 'congress', id: 'mda-2026' },
      { type: 'congress', id: 'wms-2025' },
    ],
  },
  {
    prompt: 'Summarise the most important signals relevant to the FORCE platform across neuromuscular congresses this season.',
    response:
      'Three platform-level signals dominate:\n\n1. **Delivery durability is the unlock.** Across MDA 2026, WMS 2025, and ASGCT messaging, the senior-cohort ask is consistent: 52+ week biodistribution data, especially cardiac and CNS. ARIA tagged this as the #1 recurring theme.\n2. **Avidity AOC positioning is tightening the competitive window.** AI3 tracks the FORCE vs AOC differentiation debate across ad boards and congress Q&A. Community HCPs are confused; MSL materials read as too internal.\n3. **Cross-indication narrative is landing fragmented.** AI4 confirms only ~5 US KOLs can credibly frame FORCE as a platform vs 4 separate programs. That scarcity is the binding constraint on portfolio-level storytelling.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI4' },
    ],
  },
  {
    prompt: 'Who are the cross-indication KOLs touching both DM1 and Pompe and speaking at MDA and WMS?',
    response:
      '**Benedikt Schoser** (LMU Munich) is the clearest fit — Tier 2, Advocate, authored a WMS 2025 piece touching both adult-onset Pompe and late-onset DM1. Platform-friendly framing.\n\nStephan Züchner (U. Miami) also qualifies at the broader level — speaks across DMD / DM1 / FSHD at MDA regularly — but his work is more genetics-focused than Pompe-clinical.\n\nThis is exactly the scarcity AI4 surfaced: the Pompe × DM1 intersection is structurally thin. The Gap Radar proposes a new KIQ ("which 3–5 KOLs can credibly frame FORCE across ≥2 indications") specifically because LP4 covers mapping but not this narrower readiness question.',
    cites: [
      { type: 'kol',     id: 'kol-4' },
      { type: 'kol',     id: 'kol-3' },
      { type: 'insight', id: 'AI4'   },
    ],
  },
  {
    prompt: 'Which KOLs have recently changed their stance on RNA-based DMD therapies based on 2026 congress data?',
    response:
      '**Francesco Muntoni** (UCL) is the standout shift — historically PMO-aligned, now warming to FORCE after the WMS 2025 delivery session. LUCA flagged the sentiment trend on April 10th.\n\n**Jerry Mendell** (Nationwide) remains the clearest hold-out — Elevidys-aligned, publicly cautious on systemic oligo delivery. Directly the "show me 104-week data" archetype behind AI1.\n\nThe 3–5 year tenure cohort is trending clearly pro-FORCE; the senior cohort is gated on long-term biodistribution. Action A1 (52-week summary) is designed to unblock them.',
    cites: [
      { type: 'kol',     id: 'kol-7' },
      { type: 'kol',     id: 'kol-6' },
      { type: 'insight', id: 'AI1'   },
      { type: 'action',  id: 'A1'    },
    ],
  },
  {
    prompt: 'What are the top 5 cross-indication insights relevant to FORCE from the last 2 congress cycles?',
    response:
      '1. **AI1 — senior DMD PI delivery skepticism** (Prioritised, confidence 86%). Biodistribution data is the unlock.\n2. **AI3 — Avidity AOC differentiation debate** (Validated, 78%). FORCE vs AOC community confusion is intensifying.\n3. **AI4 — cross-indication KOL scarcity** (Validated, 74%). Structural constraint on portfolio narrative.\n4. **AI2 — DM1 community unprepared for endpoint interpretation** (Validated, 81%). Clinician readiness gap ahead of ACHIEVE readout.\n5. **AI6 — FSHD DUX4 mechanistic split** (Triaged, 67%). Public scientific debate Dyne can enter with evidence (A7 is proposed).',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI4' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI6' },
    ],
  },
  {
    prompt: 'What are KOLs still uncertain about in DM1 and DMD, and how should we adjust our medical narrative?',
    response:
      '**DM1 uncertainty:** community neurologists (outside ACHIEVE centers) lack confidence in candidate selection and functional-endpoint interpretation. Asked repeatedly: "Who are good candidates? Who isn\'t?" (AI2). Fix: ACHIEVE endpoint primer (A4, Accepted, Q2) + Gap Radar KIQ on candidate-selection confidence.\n\n**DMD uncertainty:** senior PIs want longer-term FORCE biodistribution — especially cardiac and CNS — before publicly endorsing (AI1). Fix: 52-week biodistribution summary (A1, Started) + co-create sequencing algorithm vs gene therapy (A3, Proposed).\n\n**Narrative adjustment:** lead with durability data and mechanism, not with platform framing. Cross-indication story should wait until AI4 (KOL scarcity) is addressed via A5 (cross-indication engagement model).',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI4' },
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A3'  },
      { type: 'action',  id: 'A4'  },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'Where are our biggest strategic coverage gaps?',
    response:
      'Two standouts:\n\n• **MO3 (Cross-indication KOL engagement)** — scored *Gap*. AI4 shows only ~5 KOLs credibly portfolio-ready. A5 is Started to stand up a cross-indication engagement model (flagged as *Changed* impact — actually shifting strategy).\n• **MO2 (Sequencing & modality education)** and **MO4 (Pre-launch medical readiness)** both *Low*. Multiple actions in-flight but no single piece is load-bearing yet.\n\nGap Radar proposes a new advocacy-intelligence LP under MO3 and a new KIT (community-facing FORCE vs AOC one-pager) under MO2. Artifact ART4 is the draft for the latter.',
    cites: [
      { type: 'mo',       id: 'MO3' },
      { type: 'mo',       id: 'MO2' },
      { type: 'mo',       id: 'MO4' },
      { type: 'insight',  id: 'AI4' },
      { type: 'action',   id: 'A5'  },
      { type: 'artifact', id: 'ART4' },
    ],
  },
  {
    prompt: 'What would NOVA change about the current plan if given free rein?',
    response:
      'Three concrete moves:\n\n1. **Adopt the new cross-indication KOL engagement model (A5) formally** — this is already flagged as *Changed* impact. Commit resource to Schoser, Tawil, Monckton, Lochmüller, Züchner as the portfolio voices, not the disease-specific engagement list.\n2. **Prioritize A1 (52-week biodistribution) and A2 (FORCE vs AOC one-pager) over A6 (Pompe durability comparator)** — AI1 and AI3 both recur 3–4× this cycle; AI5 recurs 2×.\n3. **Activate the advocacy-intelligence LP the Gap Radar proposed.** Rare-disease pre-launch medical strategy without an advocacy listening stream is underpowered. Pompe and DMD communities are already talking — Dyne just isn\'t structured to hear them.',
    cites: [
      { type: 'action',  id: 'A1' },
      { type: 'action',  id: 'A2' },
      { type: 'action',  id: 'A5' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI5' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'What did we learn about exon-skipping vs gene therapy in DMD at MDA and WMS this year?',
  'Summarise the most important signals relevant to the FORCE platform across neuromuscular congresses this season.',
  'Who are the cross-indication KOLs touching both DM1 and Pompe and speaking at MDA and WMS?',
  'Which KOLs have recently changed their stance on RNA-based DMD therapies based on 2026 congress data?',
  'What are the top 5 cross-indication insights relevant to FORCE from the last 2 congress cycles?',
  'What are KOLs still uncertain about in DM1 and DMD, and how should we adjust our medical narrative?',
  'Where are our biggest strategic coverage gaps?',
  'What would NOVA change about the current plan if given free rein?',
];
