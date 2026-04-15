// Portfolio — Demo Brief §2.
// Products surface in the header selector and scope most agent views.

export const PRODUCT_OPTIONS = [
  {
    id: 'dyne-101',
    name: 'DYNE-101',
    generic: 'z-basivarsen',
    indications: ['DM1 — Myotonic Dystrophy Type 1'],
    stage: 'Phase 3 (ACHIEVE)',
  },
  {
    id: 'dyne-251',
    name: 'DYNE-251',
    generic: 'z-rostudirsen',
    indications: ['DMD — Duchenne Muscular Dystrophy (exon-51 skipping)'],
    stage: 'Phase 2/3 (DELIVER)',
  },
  {
    id: 'dyne-pompe',
    name: 'FORCE-Pompe',
    generic: 'FORCE-enabled GAA oligonucleotide',
    indications: ['Pompe disease'],
    stage: 'Preclinical / IND-enabling',
  },
  {
    id: 'dyne-fshd',
    name: 'FORCE-FSHD',
    generic: 'FORCE-enabled DUX4-targeting oligonucleotide',
    indications: ['Facioscapulohumeral Muscular Dystrophy'],
    stage: 'Preclinical',
  },
];

// Platform / mechanism lens — the cross-indication FORCE frame Dyne's
// medical team uses. Surfaced in ARIA tagging and NOVA synthesis.
export const PLATFORM_LENS = {
  name: 'FORCE™',
  description:
    'Antigen-binding fragment (Fab) + linker + payload construct, targeting transferrin receptor 1 (TfR1) to deliver oligonucleotides to skeletal, cardiac, smooth muscle — and increasingly CNS.',
  appliesToProducts: ['dyne-101', 'dyne-251', 'dyne-pompe', 'dyne-fshd'],
  competitiveMoaLenses: [
    { id: 'exon-skipping',   label: 'Exon-skipping oligos (legacy systemic)' },
    { id: 'gene-therapy',    label: 'Gene therapy (single-dose)' },
    { id: 'sirna',           label: 'siRNA / RNAi' },
    { id: 'small-molecule',  label: 'Small molecule modulators' },
    { id: 'enzyme-replace',  label: 'Enzyme replacement (Pompe legacy)' },
  ],
};
