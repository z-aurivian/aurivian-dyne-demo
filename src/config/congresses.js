// Congress roster — Demo Brief §3 (+ §8 for per-congress ARIA data).

export const CONGRESS_OPTIONS = [
  {
    id: 'ash-2024',
    name: 'ASH 2024',
    fullName: 'American Society of Hematology Annual Meeting 2024',
    location: 'San Diego, CA',
    date: 'Dec 7–10, 2024',
    available: true,
  },
  {
    id: 'ash-2025',
    name: 'ASH 2025',
    fullName: 'American Society of Hematology Annual Meeting 2025',
    location: 'Atlanta, GA',
    date: 'Dec 6–9, 2025',
    available: true,
  },
  {
    id: 'trend-2024-2025',
    name: 'Trend: 2024 → 2025',
    fullName: 'Sentiment trend ASH 2024 to ASH 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'ash-2026',
    name: 'ASH 2026',
    fullName: 'American Society of Hematology Annual Meeting 2026',
    location: 'TBD',
    date: 'December 2026',
    available: false,
    comingSoon: true,
  },
  { id: 'eha',   name: 'EHA',   fullName: 'European Hematology Association Congress',                              location: '—', date: '—', available: false, comingSoon: true },
  { id: 'aanem', name: 'AANEM', fullName: 'American Association of Neuromuscular & Electrodiagnostic Medicine',    location: '—', date: '—', available: false, comingSoon: true },
];
