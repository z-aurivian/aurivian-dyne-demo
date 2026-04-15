# Aurivian Master Demo Template

The shell of every Aurivian customer demo. The **code** is locked (the product surface: login, Command Center, ARIA / LUCA / NOVA, Strategy-to-Action, Artifact Library, Auri chat). The **data + branding** lives entirely in `src/config/`. One filled-out Demo Brief = one new customer demo.

---

## The loop

```
        Demo Brief                 src/config/*                  Deployed demo
 (DEMO_BRIEF_TEMPLATE.md)  ──▶  (customer-specific data)  ──▶  (Vercel + GitHub)
```

1. **Product writes a Demo Brief** in the format of [`DEMO_BRIEF_TEMPLATE.md`](./DEMO_BRIEF_TEMPLATE.md).
2. **Gaps are filled via research** per [`RESEARCH_PROTOCOL.md`](./RESEARCH_PROTOCOL.md) (public sources → semi-authoritative → plausibly synthesized, always labeled with `provenance`).
3. **Clone this repo** → rename → populate `src/config/*` → push → Vercel auto-deploys.

See [`AURI_RAG_SPEC.md`](./AURI_RAG_SPEC.md) for how the Auri chatbot grounds its answers on the populated config bundle.

---

## Repo layout

```
src/
├── App.js                       ← Router, auth gate, Shell (header + chips + Auri sidebar)
│
├── components/                  ← LOCKED. The Aurivian product surface.
│   ├── Login.js
│   ├── CommandCenter.js         ← Hub: directive input, agents, signals, coverage, Gap Radar
│   ├── AgentSurfaceHeader.js    ← Shared banner on ARIA / LUCA / NOVA
│   ├── CongressIngestion.js     ← ARIA (sky)
│   ├── KOLManagement.js         ← LUCA (violet)
│   ├── MedicalInsights.js       ← NOVA (emerald) — hosts Strategy-to-Action
│   ├── StrategyToAction.js      ← ISP → POA → LPs → Insights → Actions → Gap Radar
│   ├── ArtifactLibrary.js
│   ├── AuriChatPanel.js         ← Reusable chat surface
│   ├── AuriSidebar.js           ← Floating Auri on every screen
│   ├── AuriChat.js              ← /auri full-page route (uses the panel)
│   └── Dashboard.js
│
├── config/                      ← PER-DEMO. Everything customer-specific.
│   ├── index.js                 ← Canonical import surface (barrel)
│   ├── customer.js              ← Brief §1
│   ├── products.js              ← Brief §2 (+ optional PLATFORM_LENS)
│   ├── therapeutic-area.js      ← Brief §3
│   ├── congresses.js            ← Brief §3 / §8
│   ├── strategy.js              ← Brief §4 (ISP / MOs / LPs / KIQs / KITs)
│   ├── insights.js              ← Brief §5
│   ├── actions.js               ← Brief §6
│   ├── kols.js                  ← Brief §7
│   ├── gap-radar.js             ← Brief §9
│   ├── outcome-volume.js        ← Brief §10
│   ├── signals.js               ← Brief §11
│   ├── auri-prompts.js          ← Brief §12
│   ├── artifacts.js             ← Artifact Library seed
│   ├── agents.js                ← Named agents (ARIA / LUCA / NOVA) — usually unchanged
│   ├── system-prompt.js         ← Auri system prompt scaffolding
│   └── clientConfig.js          ← Back-compat shim (do not extend)
│
├── api/                         ← LOCKED. Claude → OpenAI → keyword fallback.
│   ├── claudeApi.js             ← Uses claude-sonnet-4-6
│   ├── openaiApi.js
│   ├── auriApi.js               ← Entry point: queryAuri(messages, productId)
│   ├── promptBuilder.js
│   └── rag.js
│
└── data/                        ← Legacy Alexion analytics data. Reshaped per demo
                                   when the relevant surface is built out.
```

---

## Building a new demo

```bash
# 1. Clone + rename
gh repo create z-aurivian/aurivian-<customer>-demo --template z-aurivian/aurivian-master-demo --private
cd aurivian-<customer>-demo

# 2. Fill out every file in src/config/ from the customer's Demo Brief
#    Reference: DEMO_BRIEF_TEMPLATE.md §1–§14

# 3. Point Vercel at the new repo; add env vars
#    REACT_APP_ANTHROPIC_API_KEY   (Claude Sonnet 4.6 by default)
#    REACT_APP_OPENAI_API_KEY      (optional fallback)

# 4. Commit + push; Vercel auto-deploys
```

---

## Local development

```bash
npm install
npm start       # http://localhost:3000
```

Build-time env:
- `REACT_APP_ANTHROPIC_API_KEY` — enables Auri live mode
- `REACT_APP_OPENAI_API_KEY` — optional fallback
- Without either, Auri still functions via the canned Q&A fast-path + keyword matching against the config bundle.

The `build` script sets `CI=false` so warnings don't fail the Vercel build.

---

## Conventions that matter

- **Id-reference discipline.** Objects carry ids (`MO1`, `LP2`, `AI3`, `A5`). Other objects reference them by id. A broken ref is visible everywhere and easy to spot during review.
- **Provenance is first-class.** Every synthesized record carries `provenance: 'synthesized'` (or `public:<source>`). Auri cites honestly.
- **Auri never hallucinates.** Exact prompt matches use canned responses from `config/auri-prompts.js`. Fall-through goes to the Claude/OpenAI chain with the config bundle in the system prompt. Unknown territory gets surfaced as a product moment, not a fabricated answer.
- **Aurivian is the brand, not the customer.** The customer's accent color + logo are optional overrides; the Aurivian wordmark, Michroma logo font, and Otsuka-baseline light palette stay.
- **No admin UI, no module tiers.** The Position Document's "What Aurivian Is Not" constraints are structural. Anything that looks like SaaS configuration undercuts the story.

---

## Companion docs

- [`DEMO_BRIEF_TEMPLATE.md`](./DEMO_BRIEF_TEMPLATE.md) — the input schema
- [`RESEARCH_PROTOCOL.md`](./RESEARCH_PROTOCOL.md) — how to fill gaps when a brief comes in thin
- [`AURI_RAG_SPEC.md`](./AURI_RAG_SPEC.md) — the Auri chatbot grounding spec
