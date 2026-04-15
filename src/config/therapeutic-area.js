// Therapeutic area — Demo Brief §3.
// Fill: Neuromuscular (Dyne).

export const THERAPEUTIC_AREA = {
  name: 'Neuromuscular Disease',
  subIndications: [
    { id: 'dmd',   name: 'Duchenne Muscular Dystrophy',              short: 'DMD'   },
    { id: 'dm1',   name: 'Myotonic Dystrophy Type 1',                short: 'DM1'   },
    { id: 'pompe', name: 'Pompe Disease',                            short: 'Pompe' },
    { id: 'fshd',  name: 'Facioscapulohumeral Muscular Dystrophy',   short: 'FSHD'  },
  ],

  // Key competitors across the neuromuscular oligo / gene-therapy landscape.
  // provenance: all public from corporate pipelines + press.
  competitors: [
    { name: 'Sarepta Therapeutics',   products: ['Eteplirsen', 'Golodirsen', 'Casimersen', 'Elevidys'], moa: 'Exon-skipping PMO + microdystrophin gene therapy', indication: 'DMD', posture: 'Incumbent — established systemic PMO franchise + approved DMD gene therapy', provenance: 'public' },
    { name: 'Avidity Biosciences',    products: ['AOC 1001 / del-desiran', 'AOC 1044', 'AOC 1020'],    moa: 'Antibody-oligonucleotide conjugates (AOC)',         indication: 'DM1 / DMD / FSHD', posture: 'Direct platform competitor — nearest FORCE analog',     provenance: 'public' },
    { name: 'PepGen',                 products: ['PGN-EDO51', 'PGN-EDODM1'],                           moa: 'Enhanced delivery oligonucleotide (EDO)',           indication: 'DMD / DM1', posture: 'Emerging clinical-stage competitor',                      provenance: 'public' },
    { name: 'Solid Biosciences',      products: ['SGT-003'],                                            moa: 'Next-generation microdystrophin AAV',               indication: 'DMD',       posture: 'Gene therapy differentiation vs FORCE-delivered oligos',    provenance: 'public' },
    { name: 'Sanofi',                 products: ['Nexviazyme (avalglucosidase alfa)'],                 moa: 'Recombinant enzyme replacement (ERT)',              indication: 'Pompe',     posture: 'ERT standard of care — FORCE-Pompe positioning comparator', provenance: 'public' },
    { name: 'Fulcrum Therapeutics',   products: ['Losmapimod'],                                         moa: 'p38 MAPK inhibition (DUX4 suppression)',            indication: 'FSHD',      posture: 'Small molecule FSHD competitor',                           provenance: 'public' },
  ],

  // Patient advocacy / society orgs that matter in neuromuscular.
  advocacyOrgs: [
    { id: 'mda',    name: 'Muscular Dystrophy Association',                 scope: 'DMD / DM1 / Pompe / FSHD' },
    { id: 'ppmd',   name: 'Parent Project Muscular Dystrophy',              scope: 'DMD' },
    { id: 'mdf',    name: 'Myotonic Dystrophy Foundation',                  scope: 'DM1' },
    { id: 'fshdsoc', name: 'FSHD Society',                                  scope: 'FSHD' },
    { id: 'api',    name: 'Acid Maltase Deficiency Association (AMDA)',     scope: 'Pompe' },
  ],
};
