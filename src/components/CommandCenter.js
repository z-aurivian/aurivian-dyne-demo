import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Send, Sparkles,
  Activity, Microscope, Users as UsersIcon,
  MessageSquare, ExternalLink,
  Radar, ArrowUpRight, Target, FolderOpen, GitBranch,
} from 'lucide-react';
import {
  CLIENT, CAPTURE_APP_URL,
  SIGNALS, MEDICAL_OBJECTIVES, COVERAGE_TARGETS, GAP_RADAR, OUTCOME_VOLUME,
} from '../config';

const AGENTS = [
  { id: 'aria', name: 'ARIA', tagline: 'Attends. Records. Interprets. Advises.', role: 'Congress Intelligence', icon: Activity,   path: '/congress' },
  { id: 'luca', name: 'LUCA', tagline: 'Knows who matters. Knows what they think.', role: 'KOL Intelligence',    icon: UsersIcon, path: '/kol' },
  { id: 'nova', name: 'NOVA', tagline: 'Transforms fragmented science into decisions.', role: 'Medical Insights', icon: Microscope, path: '/insights' },
];

// Non-agent surfaces only. ARIA/LUCA/NOVA live in the agent grid below;
// duplicating them as pills was adding clutter without adding affordance.
const SURFACES = [
  { path: '/journey',   label: 'Insight Journey',  icon: GitBranch },
  { path: '/artifacts', label: 'Artifacts',        icon: FolderOpen },
  { path: '/auri',      label: 'Auri Chat',        icon: MessageSquare },
];

const COVERAGE_STYLE = {
  Sufficient: { bar: 'bg-emerald-500',  chip: 'bg-emerald-50 text-emerald-700 border-emerald-200', pct: 100 },
  Low:        { bar: 'bg-amber-500',    chip: 'bg-amber-50 text-amber-700 border-amber-200',        pct: 55 },
  Gap:        { bar: 'bg-rose-500',     chip: 'bg-rose-50 text-rose-700 border-rose-200',            pct: 20 },
};

const AGENT_ACCENT = {
  ARIA: 'bg-sky-50 text-sky-700 border-sky-200',
  LUCA: 'bg-violet-50 text-violet-700 border-violet-200',
  NOVA: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

function relativeTime(iso) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const mins = Math.max(0, Math.round((now - then) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}

export default function CommandCenter() {
  const [signalsExpanded, setSignalsExpanded] = useState(false);
  const [gapsExpanded, setGapsExpanded] = useState(false);

  const remaining = OUTCOME_VOLUME.committed - OUTCOME_VOLUME.consumed;
  const consumedPct = Math.round((OUTCOME_VOLUME.consumed / OUTCOME_VOLUME.committed) * 100);

  const visibleSignals = signalsExpanded ? SIGNALS : SIGNALS.slice(0, 3);
  const hiddenSignalsCount = Math.max(0, SIGNALS.length - 3);

  const visibleGaps = gapsExpanded ? GAP_RADAR : GAP_RADAR.slice(0, 1);
  const hiddenGapsCount = Math.max(0, GAP_RADAR.length - 1);

  return (
    <div className="space-y-6">
      {/* Directive input — hero. The welcome header was pulled out; the
          input's own framing carries the intent without extra copy. */}
      <div className="bg-white border border-auri-border rounded-xl p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-auri-blue" />
            <span className="text-sm font-medium text-auri-text">
              {CLIENT?.name ? `${CLIENT.name} — ` : ''}what would you like to direct?
            </span>
          </div>
        </div>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder='e.g. "Summarise the most important signals from the last congress cycle."'
            className="flex-1 px-4 py-3 rounded-lg border border-auri-border bg-auri-card text-sm text-auri-text focus:outline-none focus:border-auri-blue"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-auri-blue text-white text-sm font-medium hover:bg-auri-blue/90 transition-all"
          >
            <Send size={16} />
            Direct
          </button>
        </form>
      </div>

      {/* Your Agents */}
      <div>
        <h2 className="text-sm font-semibold text-auri-text mb-3 uppercase tracking-wider">Your Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AGENTS.map((a) => {
            const Icon = a.icon;
            const av = OUTCOME_VOLUME.byAgent?.[a.id];
            return (
              <NavLink
                key={a.id}
                to={a.path}
                className="bg-white border border-auri-border rounded-xl p-5 hover:border-auri-blue/50 hover:shadow-sm transition-all block"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-auri-blue/10 text-auri-blue flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-michroma text-auri-text text-base tracking-wider">{a.name}</div>
                      <div className="text-xs text-auri-muted">{a.role}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-auri-muted" />
                </div>
                <p className="text-sm text-auri-muted leading-relaxed mb-3">{a.tagline}</p>
                {av && (
                  <div className="flex items-center justify-between text-xs text-auri-muted pt-3 border-t border-auri-border">
                    <span>Results this period</span>
                    <span className="text-auri-text font-medium">{av.consumed} / {av.committed}</span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Secondary surfaces — non-agent only. Agents are in the grid above. */}
      <div className="flex flex-wrap items-center gap-2">
        {SURFACES.map((s) => {
          const Icon = s.icon;
          return (
            <NavLink
              key={s.path}
              to={s.path}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-blue/50 transition-all"
            >
              <Icon size={16} />
              <span>{s.label}</span>
            </NavLink>
          );
        })}
        <a
          href={CAPTURE_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-blue/50 transition-all"
        >
          <ExternalLink size={16} />
          <span>Congress Capture</span>
        </a>
      </div>

      {/* Two-column: Signals + Coverage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Signals — top 3 by default, expand to see the rest */}
        <div className="bg-white border border-auri-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-sm font-semibold text-auri-text">New Signals</h3>
              <span className="text-xs text-auri-muted">always listening</span>
            </div>
            <span className="text-xs text-auri-muted">{SIGNALS.length} new</span>
          </div>
          <div className="space-y-3">
            {visibleSignals.map((s, idx) => (
              <NavLink
                key={idx}
                to={s.suggestedAction?.path || '/'}
                className="block p-3 rounded-lg border border-auri-border hover:border-auri-blue/40 hover:bg-auri-card transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-michroma tracking-wider px-1.5 py-0.5 rounded border ${AGENT_ACCENT[s.agent] || 'bg-auri-card text-auri-muted border-auri-border'}`}>
                      {s.agent}
                    </span>
                    <span className="text-sm font-medium text-auri-text">{s.headline}</span>
                  </div>
                  <span className="text-[11px] text-auri-muted shrink-0">{relativeTime(s.timestamp)}</span>
                </div>
                <p className="text-xs text-auri-muted leading-relaxed">{s.context}</p>
              </NavLink>
            ))}
          </div>
          {hiddenSignalsCount > 0 && (
            <button
              onClick={() => setSignalsExpanded(!signalsExpanded)}
              className="mt-3 text-xs text-auri-blue hover:underline"
            >
              {signalsExpanded ? 'Show less' : `View all (${SIGNALS.length})`}
            </button>
          )}
        </div>

        {/* Strategic Coverage */}
        <div className="bg-white border border-auri-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target size={14} className="text-auri-blue" />
              <h3 className="text-sm font-semibold text-auri-text">Strategic Coverage</h3>
            </div>
            <NavLink to="/insights" className="text-xs text-auri-blue hover:underline">
              Open Strategy-to-Action →
            </NavLink>
          </div>

          {/* Outcome volume progress */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-auri-muted">Outcome Volume — {OUTCOME_VOLUME.period}</span>
              <span className="text-auri-text font-medium">{consumedPct}% consumed</span>
            </div>
            <div className="h-2 bg-auri-card rounded-full overflow-hidden">
              <div className="h-full bg-auri-blue" style={{ width: `${consumedPct}%` }} />
            </div>
            <div className="flex items-center justify-between text-[11px] text-auri-muted mt-1">
              <span>{OUTCOME_VOLUME.consumed.toLocaleString()} results delivered</span>
              <span>{remaining.toLocaleString()} remaining</span>
            </div>
          </div>

          {/* MO coverage */}
          <div className="space-y-2">
            {MEDICAL_OBJECTIVES.map((mo) => {
              const score = COVERAGE_TARGETS[mo.id] || 'Low';
              const s = COVERAGE_STYLE[score];
              return (
                <div key={mo.id} className="flex items-center gap-3">
                  <div className="w-16 shrink-0 text-xs font-medium text-auri-muted">{mo.id}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-auri-text truncate">{mo.name}</div>
                    <div className="h-1.5 bg-auri-card rounded-full overflow-hidden mt-1">
                      <div className={`h-full ${s.bar}`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border shrink-0 ${s.chip}`}>
                    {score}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gap Radar — featured single by default, expand for the rest */}
      {GAP_RADAR.length > 0 && (
        <div className="bg-white border border-auri-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Radar size={14} className="text-auri-blue" />
              <h3 className="text-sm font-semibold text-auri-text">Gap Radar</h3>
              <span className="text-xs text-auri-muted">agent-proposed</span>
            </div>
            {hiddenGapsCount > 0 && (
              <button
                onClick={() => setGapsExpanded(!gapsExpanded)}
                className="text-xs text-auri-blue hover:underline"
              >
                {gapsExpanded ? 'Show less' : `+${hiddenGapsCount} more`}
              </button>
            )}
          </div>
          <div className={`grid gap-3 ${gapsExpanded ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
            {visibleGaps.map((g, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-auri-border bg-auri-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-auri-blue">{g.type}</span>
                  <span className="text-[10px] text-auri-muted">{g.moRef}</span>
                </div>
                <div className="text-sm text-auri-text font-medium mb-1.5 leading-snug">{g.suggestion}</div>
                <p className="text-xs text-auri-muted leading-relaxed">{g.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
