# Dyne Demo — Session Notes 2026-04-15

## What this is

First Aurivian demo built from the `aurivian-master-demo` template. Prospect meeting for Dyne Therapeutics — Medical Affairs, FORCE™-enabled neuromuscular portfolio (DMD, DM1, Pompe, FSHD).

- **GitHub:** https://github.com/z-aurivian/aurivian-dyne-demo
- **Primary contact:** Eric Krauter, Exec Dir US MSLs, ex-Otsuka Global Medical Strategy (warm intro from Lauren Few)
- **Template scaffold SHA:** `109ff4c` from master-demo

## Work done

Scaffolded from master and customized in six config chunks:

- `e64e05b` — baseline scaffold from template
- `f43dc8e` — chunk 1/6: customer, portfolio (FORCE platform lens), TA, congresses, system prompt
- `e39e627` — chunk 2/6: Strategy-to-Action spine (3 ISP pillars, 4 MOs, 7 LPs, 7 insights, 9 actions, 4 gap radar)
- `8f29401` — chunk 3/6: 18 neuromuscular KOLs (5 cross-indication). Inverted the kols re-export so `config/kols.js` is authoritative
- `d377cbf` — chunk 4/6: hub content (signals, outcome volume, artifacts)
- `5d30819` — chunk 5/6: 8 canned Auri Q&A answering all 5 prompts from Dyne write-up + synthesis/strategy prompts
- `6904c7f` — chunk 6/6: ARIA congress data (neuromuscular MDA/WMS/ICNMD/ASGCT fill)
- `ae54f63` — NOVA = Strategy-to-Action only (legacy Alexion tabs retired)
- `b764cf3` — Insight Journey board (new `/journey` surface)
- `23c0ac7` — Command Center density trim (product feedback: "feels too busy")
- `3261d16` — Dashboard surface removed

## Key content decisions

- **FORCE platform is a first-class frame.** `PLATFORM_LENS` config populated with the cross-indication mechanism so agents can tag against it. First demo to use this optional config slot.
- **Strategic framework is synthesized.** Dyne hasn't published their ISP. We constructed a plausible one grounded in their pipeline stage (Phase 3 in DM1, Phase 2/3 in DMD, preclinical in Pompe/FSHD), the Avidity AOC competitive frame, and Eric's field-medical build-out mandate. Eric's team will refine; the structure is what he'll recognize (he'll see the Gilead-style spine).
- **KOLs are public names** (PubMed + MDA/WMS/ICNMD programs); **sentiment, engagement tiers, and strategies are synthesized**. Every record carries `provenance: 'public' | 'synthesized' | 'synthesized-from-public'`.
- **5 KOLs flagged cross-indication** (Monckton, Tawil, Schoser, Lochmüller, Züchner) — directly supports AI4 ("cross-indication KOL scarcity") and LP4 (cross-indication mapping).
- **Strategy Impact moments**: AI4 → A5 *Changed* (shifted strategy); AI5 → A9 *Challenged* and Declined (advocate pushback on ERT transition).

## Product feedback resolved this session

- "Landing page feels too busy" → applied **option (a)**: dropped duplicate agent pills from surfaces row, top-3 signals + "view all", featured-single Gap Radar + "+N more", welcome copy folded into directive header. Approved.
- "Legacy NOVA tabs are empty" → retired them entirely. NOVA is Strategy-to-Action only.
- "Dashboard tab is the weakest part of every demo" → removed.
- "Request for a kanban board" → built Insight Journey (5-lane board: Captured → Triaged → Validated/Prioritised → Action in Flight → Closed & Integrated). Cards map Dyne's 7 insights; top 3 signals populate the Captured lane.

## Known follow-ups

- **Vercel deployment**: Zee is hooking up Vercel; not yet live at time of notes
- **Legacy `src/data/` files** (pubmedData, clinicalTrialsData, strategicContent) still Alexion-flavored but referenced by `api/auriApi.js`. Low priority — Auri's canned Q&A path is what product is reviewing.
- **Capture app URL** in `config/customer.js` still points at master's demo capture. If Dyne-specific capture is needed, update.
