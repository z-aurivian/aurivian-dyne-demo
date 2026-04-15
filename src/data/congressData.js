// ============================================================================
// Congress Intelligence Data — Dyne / Neuromuscular fill.
// Keys off CONGRESS_OPTIONS from clientConfig (mda-2025, mda-2026, wms-2025).
// ============================================================================

import { PRODUCT_OPTIONS } from '../config/clientConfig';

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-MDA 2025', 'Post-WMS 2025', 'Q1 2026', 'MDA 2026', 'Current'],
  scientific: [
    { period: 'Post-MDA 2025',  [productNames[0]]: 58, [productNames[1]]: 62, 'Avidity AOC': 54, 'Sarepta (PMO + gene therapy)': 68, Other: 48 },
    { period: 'Post-WMS 2025',  [productNames[0]]: 62, [productNames[1]]: 66, 'Avidity AOC': 58, 'Sarepta (PMO + gene therapy)': 66, Other: 50 },
    { period: 'Q1 2026',        [productNames[0]]: 66, [productNames[1]]: 70, 'Avidity AOC': 62, 'Sarepta (PMO + gene therapy)': 64, Other: 52 },
    { period: 'MDA 2026',       [productNames[0]]: 72, [productNames[1]]: 74, 'Avidity AOC': 68, 'Sarepta (PMO + gene therapy)': 62, Other: 54 },
    { period: 'Current',        [productNames[0]]: 74, [productNames[1]]: 76, 'Avidity AOC': 72, 'Sarepta (PMO + gene therapy)': 60, Other: 56 },
  ],
  social: [
    { period: 'Post-MDA 2025',  [productNames[0]]: 52, [productNames[1]]: 56, 'Avidity AOC': 48, 'Sarepta (PMO + gene therapy)': 70, Other: 46 },
    { period: 'Post-WMS 2025',  [productNames[0]]: 56, [productNames[1]]: 60, 'Avidity AOC': 54, 'Sarepta (PMO + gene therapy)': 68, Other: 48 },
    { period: 'Q1 2026',        [productNames[0]]: 60, [productNames[1]]: 64, 'Avidity AOC': 60, 'Sarepta (PMO + gene therapy)': 66, Other: 50 },
    { period: 'MDA 2026',       [productNames[0]]: 66, [productNames[1]]: 68, 'Avidity AOC': 66, 'Sarepta (PMO + gene therapy)': 64, Other: 52 },
    { period: 'Current',        [productNames[0]]: 70, [productNames[1]]: 72, 'Avidity AOC': 70, 'Sarepta (PMO + gene therapy)': 62, Other: 54 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'FORCE platform biodistribution in non-human primates: skeletal, cardiac, and CNS penetration', journalOrCongress: 'ASGCT 2025', date: '2025-05', product: 'FORCE platform', sentiment: 'positive' },
  { title: 'DYNE-101 Phase 1/2 topline — myotonia reduction in adult DM1',                                   journalOrCongress: 'WMS 2025',   date: '2025-10', product: productNames[0], sentiment: 'positive' },
  { title: 'DELIVER topline safety and PD in DMD exon-51 amenable patients',                                journalOrCongress: 'MDA 2026',   date: '2026-03', product: productNames[1], sentiment: 'positive' },
  { title: 'Avidity AOC 1001 / del-desiran longer-term data in DM1',                                         journalOrCongress: 'MDA 2026',   date: '2026-03', product: 'Avidity AOC', sentiment: 'neutral'  },
  { title: 'PepGen EDODM1 Phase 1b topline — mixed receptivity',                                             journalOrCongress: 'Press',      date: '2026-04', product: 'PepGen EDO',  sentiment: 'neutral'  },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'X / Twitter',            author: 'Prof. D. Monckton',   topic: 'DM1 RNA biology and TfR1 delivery',                     date: '2026-03', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn',               author: 'Dr. C. Thornton',     topic: 'ACHIEVE endpoint interpretation for community neurologists', date: '2026-04', product: productNames[0], sentiment: 'positive' },
  { platform: 'X / Twitter',            author: 'Dr. F. Muntoni',      topic: 'WMS 2025 delivery-mechanism session reflections',        date: '2025-10', product: productNames[1], sentiment: 'positive' },
  { platform: 'Conference backchannel', author: 'Multiple',            topic: 'FORCE vs Avidity AOC positioning at MDA 2026',          date: '2026-03', product: 'FORCE platform', sentiment: 'neutral'  },
  { platform: 'LinkedIn',               author: 'Dr. P. Kishnani',     topic: 'Pompe ERT-to-oligo transition readiness',               date: '2026-02', product: 'FORCE-Pompe',   sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 8,
  abstracts: 612,
  posters: 284,
  speakers: 198,
  publicationsLinked: 842,
  sessions: [
    { title: 'FORCE-Mediated TfR1 Delivery — Biodistribution and Durability',  track: 'Translational Science', products: [productNames[0], productNames[1]] },
    { title: 'Exon-Skipping vs Gene Therapy — DMD Sequencing in 2026',         track: 'Clinical Practice',     products: [productNames[1], 'Sarepta Elevidys'] },
    { title: 'DM1 Therapeutic Horizon: ACHIEVE and Competitor Programs',       track: 'Clinical Trials',        products: [productNames[0], 'Avidity AOC 1001'] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'mda-2025': {
    agendas: 6,
    abstracts: 498,
    posters: 212,
    speakers: 156,
    publicationsLinked: 694,
    sessions: [
      { title: 'DMD Treatment Landscape: Current and Emerging Modalities',        track: 'Clinical Practice',      products: [productNames[1], 'Sarepta Elevidys'] },
      { title: 'Myotonic Dystrophy: From Molecular Biology to Clinical Trials',   track: 'Translational Science', products: [productNames[0], 'Avidity AOC 1001'] },
      { title: 'Pompe and FSHD Rare Disease Roundtable',                          track: 'Rare Disease',           products: ['FORCE-Pompe', 'FORCE-FSHD'] },
    ],
  },
  'mda-2026': {
    agendas: 8,
    abstracts: 612,
    posters: 284,
    speakers: 198,
    publicationsLinked: 842,
    sessions: [
      { title: 'Late-breaking: DELIVER z-rostudirsen topline in DMD',             track: 'Late-Breaker',           products: [productNames[1]] },
      { title: 'Late-breaking: ACHIEVE Phase 3 design for DM1',                    track: 'Late-Breaker',           products: [productNames[0]] },
      { title: 'FORCE Platform Scientific Symposium',                              track: 'Translational Science', products: [productNames[0], productNames[1], 'FORCE-Pompe'] },
      { title: 'DMD Gene Therapy vs Oligo Approach — Paradigm Debate',             track: 'Clinical Practice',      products: [productNames[1], 'Sarepta Elevidys', 'Avidity AOC'] },
    ],
  },
  'wms-2025': {
    agendas: 7,
    abstracts: 534,
    posters: 248,
    speakers: 178,
    publicationsLinked: 746,
    sessions: [
      { title: 'FORCE-Mediated Biodistribution: Muscle, Heart, and CNS',           track: 'Translational Science', products: [productNames[0], productNames[1]] },
      { title: 'DM1 RNA-Targeted Approaches: ASO vs ASO+Fab vs ASO+Antibody',      track: 'Clinical Trials',        products: [productNames[0], 'Avidity AOC 1001', 'PepGen EDO'] },
      { title: 'FSHD DUX4 Biology and Therapeutic Approaches',                     track: 'Translational Science', products: ['FORCE-FSHD', 'Fulcrum losmapimod', 'Avidity AOC 1020'] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'FORCE delivery durability & biodistribution',
    momentum: 94,
    mentions: 58,
    summary: 'Senior DMD PIs and translational scientists are concentrated on a single question: what does tissue concentration look like at 6, 12, and 24+ months post-dose — especially cardiac and CNS? Mechanistic enthusiasm is high; durability evidence is the bottleneck.',
    action: 'Prioritize A1 (52-week FORCE biodistribution summary). Front-load data at ASGCT 2026 and ICNMD 2026 where translational audiences are concentrated.',
  },
  {
    theme: 'Exon-skipping oligo vs gene therapy in DMD',
    momentum: 91,
    mentions: 47,
    summary: 'MDA 2026 saw the sharpest sequencing debate yet between PMO/FORCE oligos and Elevidys / next-gen microdystrophin gene therapy. KOLs are coalescing around "both-and" sequencing rather than displacement.',
    action: 'Co-create a DMD sequencing algorithm with 3–5 DMD center PIs (A3 Proposed). Lead with durability comparison, not efficacy.',
  },
  {
    theme: 'DM1 functional-endpoint interpretation gap',
    momentum: 85,
    mentions: 39,
    summary: 'Community neurologists (outside ACHIEVE centers) are openly asking how to contextualize myotonia reduction, grip strength, and DM1-ActiveC data when they read out. Field lacks a pre-launch clinician-facing primer.',
    action: 'Deliver ACHIEVE endpoint primer for community neurologists (A4 Accepted, Q2 target). Pair with candidate-selection guidance.',
  },
  {
    theme: 'FORCE vs Avidity AOC differentiation',
    momentum: 83,
    mentions: 36,
    summary: 'Community HCPs and even some translational scientists are collapsing FORCE and Avidity AOC into "antibody-delivered oligo" in public-facing framing. Real biophysical differences are not landing outside technical audiences.',
    action: 'Ship community-facing FORCE vs AOC one-pager (A2 Started; ART4 draft). Non-internal language, handable to referring colleagues.',
  },
  {
    theme: 'Cross-indication platform narrative',
    momentum: 76,
    mentions: 28,
    summary: 'Portfolio-level conversation — FORCE across DM1 / DMD / Pompe / FSHD — remains structurally thin. Very few US KOLs (estimated ≤5) can credibly carry the platform narrative across ≥2 indications.',
    action: 'Stand up cross-indication KOL engagement model (A5 Started, flagged as Changed impact). Focus on Monckton, Tawil, Schoser, Lochmüller, Züchner.',
  },
  {
    theme: 'Pompe ERT-to-oligo transition discourse',
    momentum: 68,
    mentions: 22,
    summary: 'Pompe specialists and patient advocates are cautious — ERT-fatigued but unwilling to see patients as first movers onto an IND-stage modality. Durability evidence is the unlock here too, but with a different audience.',
    action: 'Prepare Pompe durability comparator vs ERT (A6 Proposed). Defer patient-advocacy outreach until post-IND (A9 Declined, flagged Challenged — advocates\' pushback was the signal).',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[1]} (Dyne)`,                 share: 22, mentions: 94 },
  { product: `${productNames[0]} (Dyne)`,                 share: 18, mentions: 78 },
  { product: 'Avidity AOC 1001 / del-desiran',            share: 20, mentions: 86 },
  { product: 'Avidity AOC 1044 (DMD)',                    share: 10, mentions: 42 },
  { product: 'Sarepta Elevidys & PMO franchise',          share: 18, mentions: 76 },
  { product: 'PepGen EDODM1 / EDO51',                     share:  7, mentions: 30 },
  { product: 'Fulcrum losmapimod (FSHD)',                 share:  5, mentions: 22 },
];

export const MOCK_TRIALS = {
  total: 38,
  linkedToKOLs: 26,
  byIndication: { DMD: 14, DM1: 12, Pompe: 5, FSHD: 7 },
  sample: [
    { nctId: 'NCT05481879', title: 'DELIVER — DYNE-251 in DMD (exon-51 amenable)',                           phase: 'Phase 1/2/3',  sponsor: 'Dyne',         product: productNames[1],     indication: 'DMD',   status: 'Active',    sites: 18 },
    { nctId: 'NCT05481892', title: 'ACHIEVE — DYNE-101 Phase 3 in DM1',                                       phase: 'Phase 3',      sponsor: 'Dyne',         product: productNames[0],     indication: 'DM1',   status: 'Recruiting', sites: 22 },
    { nctId: 'NCT05027269', title: 'MARINA — del-desiran (AOC 1001) in DM1',                                  phase: 'Phase 1/2',    sponsor: 'Avidity',      product: 'Avidity AOC 1001',   indication: 'DM1',   status: 'Active',    sites: 14 },
    { nctId: 'NCT05712135', title: 'EXPLORE44 — AOC 1044 in DMD',                                             phase: 'Phase 1/2',    sponsor: 'Avidity',      product: 'Avidity AOC 1044',   indication: 'DMD',   status: 'Active',    sites: 12 },
    { nctId: 'NCT03375164', title: 'Elevidys (delandistrogene moxeparvovec) — long-term follow-up',           phase: 'Phase 3',      sponsor: 'Sarepta',      product: 'Elevidys',           indication: 'DMD',   status: 'Active',    sites: 28 },
    { nctId: 'NCT05976555', title: 'Losmapimod Phase 3 in FSHD (REACH)',                                     phase: 'Phase 3',      sponsor: 'Fulcrum',      product: 'Losmapimod',         indication: 'FSHD',  status: 'Active',    sites: 16 },
    { nctId: 'NCT05027270', title: 'FORTITUDE — AOC 1020 in FSHD',                                            phase: 'Phase 1/2',    sponsor: 'Avidity',      product: 'Avidity AOC 1020',   indication: 'FSHD',  status: 'Active',    sites: 10 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3120,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'X / Twitter',            mentions: 1080, kolsTracked: 74 },
    { platform: 'LinkedIn',               mentions:  820, kolsTracked: 88 },
    { platform: 'PubMed / alerts',        mentions:  420, kolsTracked: 240 },
    { platform: 'Conference backchannels', mentions:  800, kolsTracked: 112 },
  ],
  sample: [
    { platform: 'X / Twitter', author: 'Prof. D. Monckton', topic: 'DM1 RNA biology + TfR1 delivery commentary',  sentiment: 'positive', date: '2026-03-20' },
    { platform: 'LinkedIn',    author: 'Dr. F. Muntoni',    topic: 'Warming to FORCE mechanism post-WMS 2025',      sentiment: 'positive', date: '2026-04-08' },
    { platform: 'PubMed alert', author: 'Multiple',          topic: 'FORCE-enabled oligo delivery systematic review', sentiment: 'positive', date: '2026-03-15' },
    { platform: 'Backchannel', author: 'Multiple',           topic: 'FORCE vs Avidity AOC — MDA 2026 hallway debate', sentiment: 'neutral',  date: '2026-03-18' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText',      status: 'connected', description: 'MDA / WMS / ICNMD / ASGCT abstracts, posters, speakers, linked publications' },
  { id: 'trials',   label: 'Clinical Trials',          iconId: 'Activity',      status: 'connected', description: 'DELIVER, ACHIEVE, competitor programs (Avidity, Sarepta, PepGen, Fulcrum)' },
  { id: 'social',   label: 'Social & Digital',         iconId: 'MessageCircle', status: 'connected', description: 'Scientific and digital footprint signals across KOL network' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
