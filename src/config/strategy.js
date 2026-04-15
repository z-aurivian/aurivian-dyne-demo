// Strategic framework — Demo Brief §4.
// Fill: Dyne Therapeutics, FORCE-enabled neuromuscular portfolio.
//
// Synthesized by Aurivian from Dyne's public pipeline stage, competitive
// landscape, and Eric Krauter's field-medical build-out. Intended as a
// working draft for the prospect meeting; Eric's team will refine.

export const ISP_PILLARS = [
  {
    id: 'p1',
    title: 'Validate the FORCE platform across neuromuscular indications',
    description:
      'Establish FORCE-enabled oligonucleotide delivery as the category-defining modality for inherited muscle disease. Use DM1 (DYNE-101) and DMD (DYNE-251) readouts to anchor platform credibility for Pompe and FSHD.',
  },
  {
    id: 'p2',
    title: 'Shape treatment-paradigm conversations ahead of launch',
    description:
      'Influence how the neuromuscular community sequences FORCE oligos against gene therapy, legacy PMOs, and enzyme replacement — before commercial positioning narrows the conversation.',
  },
  {
    id: 'p3',
    title: 'Build a cross-indication evidence and KOL network',
    description:
      'Stand up an evidence generation program and KOL engagement model that compounds across DM1 / DMD / Pompe / FSHD, not siloed per program.',
  },
];

export const MEDICAL_OBJECTIVES = [
  {
    id: 'MO1',
    name: 'FORCE platform evidence',
    description:
      'Generate and disseminate data establishing FORCE delivery as a validated platform — tissue distribution, dosing interval, CNS penetration, durability vs legacy PMOs.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO2',
    name: 'Sequencing & modality education',
    description:
      'Build HCP confidence in how to sequence FORCE-enabled oligos vs. gene therapy, legacy PMOs, and enzyme replacement across each indication.',
    ispPillarRef: 'p2',
  },
  {
    id: 'MO3',
    name: 'Cross-indication KOL engagement',
    description:
      'Map and engage KOLs whose work spans multiple neuromuscular indications; treat FORCE as portfolio conversation rather than four disease-specific ones.',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO4',
    name: 'Pre-launch medical readiness',
    description:
      'Establish scientific communication, MSL readiness, and field insight capture before DM1 / DMD registrational readouts drive commercial engagement.',
    ispPillarRef: 'p2',
  },
];

export const LISTENING_PRIORITIES = [
  {
    id: 'LP1',
    name: 'FORCE delivery & tissue biodistribution',
    moRef: 'MO1',
    kiq: 'Do neuromuscular specialists view FORCE-mediated TfR1 delivery as a categorically superior alternative to legacy PMO systemic dosing?',
    kits: ['ASGCT delivery data summary', 'MSL platform FAQ'],
  },
  {
    id: 'LP2',
    name: 'Exon-skipping vs gene therapy sequencing (DMD)',
    moRef: 'MO2',
    kiq: 'How are DMD specialists planning to sequence FORCE-delivered exon-skipping vs. Elevidys and next-gen microdystrophin gene therapies?',
    kits: ['DMD sequencing algorithm', 'Gene therapy vs oligo MSL talking points'],
  },
  {
    id: 'LP3',
    name: 'DM1 treatment readiness & functional endpoints',
    moRef: 'MO4',
    kiq: 'Are DM1 centers prepared to interpret and act on functional endpoint data (myotonia, grip, DM1-ActiveC) when DYNE-101 Phase 3 reads out?',
    kits: ['ACHIEVE endpoint primer', 'DM1 functional assessment briefing'],
  },
  {
    id: 'LP4',
    name: 'Cross-indication KOL mapping',
    moRef: 'MO3',
    kiq: 'Which KOLs are actively authoring or speaking across two or more of DMD / DM1 / Pompe / FSHD, and how are their platform views evolving?',
    kits: ['Cross-indication KOL map', 'MSL engagement playbook'],
  },
  {
    id: 'LP5',
    name: 'Pompe ERT-to-oligo transition',
    moRef: 'MO2',
    kiq: 'How do Pompe specialists view the prospect of transitioning from enzyme replacement to FORCE-enabled GAA oligonucleotides?',
    kits: ['Pompe ERT comparator positioning', 'IND-stage MSL readiness'],
  },
  {
    id: 'LP6',
    name: 'FSHD DUX4 mechanistic discourse',
    moRef: 'MO1',
    kiq: 'Where is FSHD scientific consensus moving on DUX4-targeted modalities (oligo vs small molecule)?',
    kits: ['FSHD DUX4 evidence map', 'Scientific exchange plan'],
  },
  {
    id: 'LP7',
    name: 'Competitor AOC (Avidity) differentiation',
    moRef: 'MO2',
    kiq: 'How do KOLs differentiate FORCE from Avidity AOC technology, and where are scientific debates concentrated?',
    kits: ['FORCE vs AOC positioning brief', 'Ad board readout'],
  },
];

// Coverage score per MO at the moment of the demo. Intentionally
// distributed: MO1 Sufficient (platform data visible), MO2 Low (sequencing
// conversations ramping), MO3 Gap (cross-indication KOL map still thin),
// MO4 Low (pre-launch readiness work is actively building).
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Gap',
  MO4: 'Low',
};
