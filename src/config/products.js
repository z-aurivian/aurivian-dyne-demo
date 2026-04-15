// Portfolio — Demo Brief §2.
// Products surface in the header selector and scope most agent views.
// Optional: platformLens for customers that track a cross-indication
// platform/mechanism (e.g. Dyne FORCE™).

export const PRODUCT_OPTIONS = [
  { id: 'soliris',   name: 'Soliris',   generic: 'eculizumab',  indications: ['PNH', 'aHUS', 'gMG', 'NMOSD'] },
  { id: 'ultomiris', name: 'Ultomiris', generic: 'ravulizumab', indications: ['PNH', 'aHUS', 'gMG', 'NMOSD'] },
];

// Platform / mechanism lens. Leave null when not applicable.
// Example when populated:
//   { name: 'FORCE™', description: 'Fab + linker + payload, TfR1-targeted delivery',
//     appliesToProducts: ['dyne-101', 'dyne-251'] }
export const PLATFORM_LENS = null;
