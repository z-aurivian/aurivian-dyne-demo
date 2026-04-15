import React from 'react';
import AgentSurfaceHeader from './AgentSurfaceHeader';
import StrategyToAction from './StrategyToAction';

// NOVA surface. A single view: the full Strategy-to-Action artifact
// (ISP → MOs → LPs → Insights → Actions → Gap Radar), preceded by the
// shared agent header.
//
// The legacy Alexion analytics tabs (KIT Performance, Field Intelligence,
// Competitive Intelligence, Predictive Signals, Insight ROI) were retired
// — they predate the agent-centric pitch and don't map onto what the
// Position Document says NOVA does ("transforms fragmented science into
// decisions"). Strategy-to-Action is the canonical NOVA output.

function MedicalInsights() {
  return (
    <>
      <AgentSurfaceHeader agentId="nova" />
      <StrategyToAction />
    </>
  );
}

export default MedicalInsights;
