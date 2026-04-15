// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Establish Ultomiris as preferred C5 inhibitor',         description: 'Drive conversion where clinically appropriate; sustain Soliris in indications where Ultomiris is not yet available.' },
  { id: 'p2', title: 'Expand guideline footprint in gMG and NMOSD',           description: 'Shape treatment paradigms where complement inhibition is positioned neutrally in current guidance.' },
  { id: 'p3', title: 'Deepen evidence in pediatric and rare subpopulations',  description: 'RWE and sub-analyses where registrational data are thin.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'Real-world evidence',   description: 'Generate and disseminate RWE in rare subpopulations, including pediatric and long-term outcomes.', ispPillarRef: 'p3' },
  { id: 'MO2', name: 'HCP switching education', description: 'Build community-hematologist confidence in switching stable patients from Soliris to Ultomiris.', ispPillarRef: 'p1' },
  { id: 'MO3', name: 'Guideline alignment',   description: 'Support guideline strengthening for C5 inhibition in gMG and NMOSD.',                              ispPillarRef: 'p2' },
  { id: 'MO4', name: 'Scientific exchange',    description: 'Facilitate peer-to-peer exchange on complement biology and emerging mechanisms.',                   ispPillarRef: 'p2' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'RWE awareness gaps',             moRef: 'MO1', kiq: 'Are community hematologists aware of long-term Ultomiris RWE?',                   kits: ['RWE summary card', 'Congress abstract'] },
  { id: 'LP2', name: 'Switch-patient confidence',      moRef: 'MO2', kiq: 'What is driving hesitancy to switch stable Soliris patients to Ultomiris?',        kits: ['Switching algorithm', 'MSL FAQ'] },
  { id: 'LP3', name: 'gMG guideline positioning',      moRef: 'MO3', kiq: 'Do neurologists feel current gMG guidelines adequately position C5 inhibition?',  kits: ['Guideline readout', 'Ad board summary'] },
  { id: 'LP4', name: 'NMOSD treatment paradigm',       moRef: 'MO3', kiq: 'How are NMOSD specialists sequencing C5 inhibitors vs IL-6 and CD19-targeted?',   kits: ['Treatment algorithm', 'KOL panel'] },
  { id: 'LP5', name: 'Pediatric evidence gaps',        moRef: 'MO1', kiq: 'What data gaps prevent confident pediatric aHUS management?',                     kits: ['Pediatric registry summary'] },
];

// Coverage score per MO at the moment of the demo.
export const COVERAGE_TARGETS = {
  MO1: 'Low',
  MO2: 'Sufficient',
  MO3: 'Low',
  MO4: 'Gap',
};
