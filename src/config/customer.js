// Customer identity — populated per demo from the Demo Brief (§1).
// Default: Alexion (the master template's example fill).

export const CLIENT = {
  name: 'Alexion',
  parentCompany: 'AstraZeneca',
  division: 'Rare Disease',
  franchiseDescription:
    'Complement inhibitors for rare hematologic and neurological disorders (PNH, aHUS, gMG, NMOSD)',
  cloudLabel: 'your cloud',
  // Optional accent color override. Leave null to inherit the Aurivian palette.
  accentHex: null,
  // Optional logo asset path or URL (SVG preferred). Leave null to use the wordmark.
  logoSrc: null,
};

export const CAPTURE_APP_URL = 'https://aurivian-capture-demo.vercel.app';
