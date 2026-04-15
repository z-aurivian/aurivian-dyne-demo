// Actionable insights — Demo Brief §5.
// Fill: Dyne Therapeutics. Source quotes synthesized-from-public — the
// underlying trials (ACHIEVE, DELIVER), endpoints, and competitor
// programs are real; the specific field quotes are invented but
// plausible and anchored to named congresses / roles.

export const INSIGHTS = [
  {
    id: 'AI1',
    title: 'Delivery skepticism among legacy PMO-trained DMD specialists',
    priority: 'High',
    lpRefs: ['LP1', 'LP2'],
    moRefs: ['MO1', 'MO2'],
    recurrence: 4,
    recency: '2026-03',
    summary:
      'Senior DMD specialists trained on systemic PMOs frame FORCE delivery as "interesting engineering" but withhold endorsement pending longer-term biodistribution data. Sentiment softens substantially in the 3–5 year tenure cohort.',
    sourceInsights: [
      { type: 'Congress debrief', role: 'DMD PI',                     location: 'MDA 2026 — Orlando',       quote: 'Show me tissue concentration in cardiac muscle at 6 months post-dose and I\'ll change how I talk about this.',                date: '2026-03-17' },
      { type: 'MSL interaction',  role: 'Pediatric neurologist',      location: 'Boston, MA',                quote: 'We\'ve been burned on delivery before. The question isn\'t whether it works — it\'s whether it keeps working.',                      date: '2026-03-22' },
      { type: 'Ad board',         role: 'DMD center director',        location: 'Virtual',                   quote: 'Younger colleagues are already sold. The senior cohort wants to see what the 104-week data looks like.',                             date: '2026-02-18' },
      { type: 'MSL interaction',  role: 'DMD fellow',                 location: 'Philadelphia, PA',          quote: 'Honestly, FORCE makes more mechanistic sense than gene therapy. The durability is what sells it.',                                  date: '2026-03-28' },
    ],
    status: 'Prioritised',
    confidenceScore: 0.86,
    provenance: 'synthesized-from-public',
  },
  {
    id: 'AI2',
    title: 'DM1 community unprepared for functional-endpoint interpretation',
    priority: 'High',
    lpRefs: ['LP3'],
    moRefs: ['MO4'],
    recurrence: 3,
    recency: '2026-04',
    summary:
      'DM1 specialists (outside registrational trial centers) are asking how to contextualize myotonia reduction, grip strength, and DM1-ActiveC data when they read out. Field lacks a pre-launch scientific primer on functional endpoint interpretation for ACHIEVE.',
    sourceInsights: [
      { type: 'Congress debrief', role: 'DM1 specialist',             location: 'MDF 2025',                   quote: 'I know what a 30% myotonia reduction looks like clinically. I don\'t know what it means for payer coverage.',                     date: '2025-10-04' },
      { type: 'MSL interaction',  role: 'Neuromuscular neurologist',  location: 'Minneapolis, MN',            quote: 'If this is approved, I need to be able to pick candidates in clinic. Who are good candidates? Who aren\'t?',                       date: '2026-03-11' },
      { type: 'Med Info query',   role: 'Community neurologist',      location: 'Tampa, FL',                  quote: 'Asked for a clinician-facing primer on ACHIEVE endpoints. Nothing in the MSL kit today.',                                              date: '2026-04-02' },
    ],
    status: 'Validated',
    confidenceScore: 0.81,
    provenance: 'synthesized-from-public',
  },
  {
    id: 'AI3',
    title: 'Avidity AOC positioning debate is intensifying',
    priority: 'High',
    lpRefs: ['LP7'],
    moRefs: ['MO2'],
    recurrence: 3,
    recency: '2026-03',
    summary:
      'Cross-indication KOLs are being asked by community HCPs to explain differences between FORCE and Avidity\'s AOC platform. Confusion centers on whether "antibody-oligo conjugate" and "Fab-based TfR1 delivery" are meaningfully distinct.',
    sourceInsights: [
      { type: 'Ad board',         role: 'DM1 KOL',                    location: 'Virtual',                     quote: 'If I\'m honest, most of my community referrers can\'t tell these two platforms apart from the press releases.',                    date: '2026-02-25' },
      { type: 'Congress debrief', role: 'Translational scientist',    location: 'WMS 2025 — Vienna',           quote: 'There are real biophysical differences but the public-facing narrative has been collapsed into "antibody-delivered oligo."',      date: '2025-10-09' },
      { type: 'MSL interaction',  role: 'DMD PI',                     location: 'Chicago, IL',                  quote: 'I\'d like a one-pager I can actually hand to colleagues. The current decks are too internal.',                                         date: '2026-03-19' },
    ],
    status: 'Validated',
    confidenceScore: 0.78,
    provenance: 'synthesized-from-public',
  },
  {
    id: 'AI4',
    title: 'Cross-indication KOL scarcity is a real constraint',
    priority: 'Medium',
    lpRefs: ['LP4'],
    moRefs: ['MO3'],
    recurrence: 2,
    recency: '2026-03',
    summary:
      'Very few neuromuscular KOLs author or speak across multiple FORCE-relevant indications. Portfolio narrative is landing fragmented because the engagement model is disease-siloed.',
    sourceInsights: [
      { type: 'MSL interaction',  role: 'Global medical lead (ex)',   location: 'Internal',                    quote: 'We have ten DMD KOLs, twelve DM1 KOLs, and almost nobody who speaks to both.',                                                     date: '2026-03-06' },
      { type: 'Congress debrief', role: 'NM center director',         location: 'MDA 2026 — Orlando',          quote: 'There are maybe five people in the US who can credibly talk about FORCE as a platform vs. as four separate programs.',                 date: '2026-03-18' },
    ],
    status: 'Validated',
    confidenceScore: 0.74,
    provenance: 'synthesized',
  },
  {
    id: 'AI5',
    title: 'Pompe ERT transition hesitancy from patient advocates',
    priority: 'Medium',
    lpRefs: ['LP5'],
    moRefs: ['MO2'],
    recurrence: 2,
    recency: '2026-03',
    summary:
      'Pompe advocacy community — patients and clinicians — report fatigue from two decades of ERT dosing but express caution about transitioning to an IND-stage FORCE-delivered oligonucleotide.',
    sourceInsights: [
      { type: 'Ad board',         role: 'Pompe specialist',           location: 'Virtual',                     quote: 'Patients don\'t want to be the first ones off ERT. Bring us the durability data and the conversation changes.',                  date: '2026-03-04' },
      { type: 'Med Info query',   role: 'Patient advocate',           location: 'AMDA community forum',         quote: 'We\'ve been on ERT for 20 years. Show us something better, not just something different.',                                            date: '2026-03-15' },
    ],
    status: 'Triaged',
    confidenceScore: 0.69,
    provenance: 'synthesized',
  },
  {
    id: 'AI6',
    title: 'FSHD community split on DUX4 mechanistic consensus',
    priority: 'Medium',
    lpRefs: ['LP6'],
    moRefs: ['MO1'],
    recurrence: 2,
    recency: '2025-10',
    summary:
      'FSHD scientific community remains split between small-molecule (Fulcrum) and oligo (FORCE-FSHD, Avidity) approaches to DUX4 suppression. Mechanistic debates are public and vocal.',
    sourceInsights: [
      { type: 'Congress debrief', role: 'FSHD researcher',            location: 'WMS 2025 — Vienna',           quote: 'We\'re still arguing about whether you should suppress DUX4 transcription or block downstream signaling.',                        date: '2025-10-08' },
      { type: 'MSL interaction',  role: 'FSHD clinician',             location: 'Seattle, WA',                   quote: 'I want to see DUX4 protein suppression quantified. Everyone is claiming it; few are showing it cleanly.',                        date: '2026-01-22' },
    ],
    status: 'Triaged',
    confidenceScore: 0.67,
    provenance: 'synthesized-from-public',
  },
  {
    id: 'AI7',
    title: 'Insight capture discipline still being built',
    priority: 'Low',
    lpRefs: ['LP4'],
    moRefs: ['MO4'],
    recurrence: 1,
    recency: '2026-04',
    summary:
      'Eric\'s team is actively standing up the insight capture process. Current interactions are logged ad-hoc and not consistently triaged against listening priorities.',
    sourceInsights: [
      { type: 'Internal', role: 'Medical Affairs ops', location: 'Internal', quote: 'We have good field instincts but no structured pipeline yet. That\'s what Aurivian needs to plug into.', date: '2026-04-10' },
    ],
    status: 'Captured',
    confidenceScore: 0.55,
    provenance: 'synthesized',
  },
];
