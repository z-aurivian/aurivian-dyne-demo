import React, { useState, useMemo, useRef, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Search, Filter, ChevronDown, ChevronUp, MapPin, BookOpen, Calendar, Star, Users, Globe, Network, TableIcon } from 'lucide-react';
import { KOL_DATA, PRODUCT_OPTIONS } from '../data/demoData';
import AgentSurfaceHeader from './AgentSurfaceHeader';

// Build KOL graph dynamically from filtered data
function buildKOLGraph(kolData, selectedProduct) {
  const nodes = kolData.map((k, i) => ({
    id: String(k.id),
    name: k.name,
    institution: k.institution,
    country: k.country,
    city: k.city,
    region: k.region,
    influenceScore: k.influenceScore,
    engagementTier: k.engagementTier,
    focusAreas: k.focusAreas,
    publications: k.publications,
    conferenceAppearances: k.conferenceAppearances,
    productAlignment: k.productAlignment,
  }));

  const links = [];
  const addLink = (sourceId, targetId, type) => {
    const exists = links.find(
      l => (l.source === sourceId && l.target === targetId) || (l.source === targetId && l.target === sourceId)
    );
    if (!exists && sourceId !== targetId) {
      links.push({ source: sourceId, target: targetId, type });
    }
  };

  for (let i = 0; i < kolData.length; i++) {
    for (let j = i + 1; j < kolData.length; j++) {
      const a = kolData[i], b = kolData[j];
      // Shared focus areas (2+ overlapping)
      const shared = a.focusAreas?.filter(f => b.focusAreas?.includes(f)) || [];
      if (shared.length >= 2) addLink(String(a.id), String(b.id), 'focus');
      // Same country
      if (a.country === b.country) addLink(String(a.id), String(b.id), 'region');
      // Same product alignment
      if (a.productAlignment.includes(selectedProduct) && b.productAlignment.includes(selectedProduct)) {
        addLink(String(a.id), String(b.id), 'product');
      }
    }
  }

  return { nodes, links };
}

function KOLManagement({ selectedProduct }) {
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'graph'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedKOL, setExpandedKOL] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [hoverNode, setHoverNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const graphRef = useRef(null);

  const productName = PRODUCT_OPTIONS.find(p => p.id === selectedProduct)?.name;

  const filteredKOLs = useMemo(() => {
    return KOL_DATA.filter(kol => {
      const matchesSearch = !searchTerm ||
        kol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kol.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kol.focusAreas.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSpecialty = selectedSpecialty === 'all' || kol.specialty === selectedSpecialty;
      const matchesTier = selectedTier === 'all' || kol.engagementTier === selectedTier;
      const matchesRegion = selectedRegion === 'all' || kol.region === selectedRegion;
      const matchesProduct = kol.productAlignment.includes(selectedProduct);
      return matchesSearch && matchesSpecialty && matchesTier && matchesRegion && matchesProduct;
    });
  }, [searchTerm, selectedSpecialty, selectedTier, selectedRegion, selectedProduct]);

  const specialties = useMemo(() => [...new Set(KOL_DATA.map(k => k.specialty))], []);
  const regions = useMemo(() => [...new Set(KOL_DATA.map(k => k.region))], []);

  const stats = useMemo(() => {
    const aligned = KOL_DATA.filter(k => k.productAlignment.includes(selectedProduct));
    return {
      total: aligned.length,
      tier1: aligned.filter(k => k.engagementTier === 'Tier 1').length,
      tier2: aligned.filter(k => k.engagementTier === 'Tier 2').length,
      tier3: aligned.filter(k => k.engagementTier === 'Tier 3').length,
      regionCounts: regions.reduce((acc, r) => {
        acc[r] = aligned.filter(k => k.region === r).length;
        return acc;
      }, {}),
    };
  }, [selectedProduct, regions]);

  const graphData = useMemo(() => buildKOLGraph(filteredKOLs, selectedProduct), [filteredKOLs, selectedProduct]);

  const handleNodeLabel = useCallback((node) => `${node.name} · ${node.institution}, ${node.country || ''} · Score ${node.influenceScore}`, []);
  const handleNodeHover = useCallback((node) => setHoverNode(node), []);
  const handleNodeClick = useCallback((node) => setSelectedNode((prev) => (prev?.id === node?.id ? null : node)), []);

  const tierColor = (tier) => {
    switch (tier) {
      case 'Tier 1': return 'bg-auri-blue/10 text-auri-blue';
      case 'Tier 2': return 'bg-emerald-50 text-emerald-600';
      case 'Tier 3': return 'bg-gray-100 text-auri-muted';
      default: return 'bg-gray-100 text-auri-muted';
    }
  };

  return (
    <>
      <AgentSurfaceHeader agentId="luca" />
    <div className="space-y-6 animate-fade-in">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-auri-card rounded-lg p-4 border border-auri-border">
          <div className="text-2xl font-bold text-auri-blue">{stats.total}</div>
          <div className="text-xs text-auri-muted mt-1">KOLs Tracked ({productName})</div>
        </div>
        <div className="bg-auri-card rounded-lg p-4 border border-auri-border">
          <div className="text-2xl font-bold text-auri-blue">{stats.tier1}</div>
          <div className="text-xs text-auri-muted mt-1">Tier 1 (Strategic)</div>
        </div>
        <div className="bg-auri-card rounded-lg p-4 border border-auri-border">
          <div className="text-2xl font-bold text-emerald-600">{stats.tier2}</div>
          <div className="text-xs text-auri-muted mt-1">Tier 2 (Engaged)</div>
        </div>
        <div className="bg-auri-card rounded-lg p-4 border border-auri-border">
          <div className="text-2xl font-bold text-auri-muted">{stats.tier3}</div>
          <div className="text-xs text-auri-muted mt-1">Tier 3 (Monitor)</div>
        </div>
        <div className="bg-auri-card rounded-lg p-4 border border-auri-border">
          <div className="text-2xl font-bold text-auri-text">{Object.keys(stats.regionCounts).length}</div>
          <div className="text-xs text-auri-muted mt-1">Regions</div>
        </div>
      </div>

      {/* Search & Filters + View Toggle */}
      <div className="bg-auri-card rounded-lg p-4 border border-auri-border space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-auri-muted" />
            <input
              type="text"
              placeholder="Search KOLs by name, institution, or focus area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-auri-bg border border-auri-border rounded-lg text-sm text-auri-text placeholder:text-gray-400 focus:outline-none focus:border-auri-blue/50"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${showFilters ? 'bg-auri-blue/10 border-auri-blue/50 text-auri-blue' : 'border-auri-border text-auri-muted hover:text-auri-text'}`}
          >
            <Filter size={16} /> Filters
          </button>
          {/* View toggle */}
          <div className="flex items-center border border-auri-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all ${
                viewMode === 'table' ? 'bg-auri-blue text-white' : 'bg-white text-auri-muted hover:text-auri-text'
              }`}
            >
              <TableIcon size={14} /> Table
            </button>
            <button
              onClick={() => setViewMode('graph')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all ${
                viewMode === 'graph' ? 'bg-auri-blue text-white' : 'bg-white text-auri-muted hover:text-auri-text'
              }`}
            >
              <Network size={14} /> Graph
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-4 pt-2 border-t border-auri-border">
            <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-3 py-2 bg-auri-bg border border-auri-border rounded-lg text-sm text-auri-text focus:outline-none focus:border-auri-blue/50">
              <option value="all">All Specialties</option>
              {specialties.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}
              className="px-3 py-2 bg-auri-bg border border-auri-border rounded-lg text-sm text-auri-text focus:outline-none focus:border-auri-blue/50">
              <option value="all">All Tiers</option>
              <option value="Tier 1">Tier 1</option>
              <option value="Tier 2">Tier 2</option>
              <option value="Tier 3">Tier 3</option>
            </select>
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 bg-auri-bg border border-auri-border rounded-lg text-sm text-auri-text focus:outline-none focus:border-auri-blue/50">
              <option value="all">All Regions</option>
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        )}
      </div>

      {/* Graph View */}
      {viewMode === 'graph' && (
        <div className="bg-auri-card rounded-lg border border-auri-border overflow-hidden">
          <div className="rounded-lg" style={{ height: 480 }}>
            <ForceGraph2D
              ref={graphRef}
              graphData={graphData}
              nodeLabel={handleNodeLabel}
              onNodeHover={handleNodeHover}
              onNodeClick={handleNodeClick}
              nodeColor={(node) => (
                selectedNode?.id === node.id ? '#16a34a' :
                hoverNode?.id === node.id ? '#4285f4' :
                node.engagementTier === 'Tier 1' ? '#4285f4' :
                node.engagementTier === 'Tier 2' ? '#34a853' : '#9ca3af'
              )}
              linkColor={(link) => {
                if (link.type === 'product') return 'rgba(66, 133, 244, 0.5)';
                if (link.type === 'region') return 'rgba(52, 168, 83, 0.4)';
                return 'rgba(124, 58, 237, 0.3)';
              }}
              linkWidth={(link) => link.type === 'product' ? 2 : 1}
              backgroundColor="#f9fafb"
            />
          </div>
          <div className="px-6 py-3 border-t border-auri-border flex gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded" style={{ backgroundColor: '#4285f4' }} />
              <span className="text-auri-muted">Product alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded" style={{ backgroundColor: '#34a853' }} />
              <span className="text-auri-muted">Regional (same country)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded" style={{ backgroundColor: '#7c3aed' }} />
              <span className="text-auri-muted">Shared focus areas</span>
            </div>
          </div>
          {selectedNode && (
            <div className="mx-6 mb-4 p-4 rounded-lg border border-auri-blue/30 bg-auri-blue/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-auri-text">{selectedNode.name}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${tierColor(selectedNode.engagementTier)}`}>
                    {selectedNode.engagementTier}
                  </span>
                </div>
                <button onClick={() => setSelectedNode(null)} className="text-xs text-auri-muted hover:text-auri-blue">Clear</button>
              </div>
              <div className="text-sm text-auri-muted mb-1">
                {selectedNode.institution}{selectedNode.city ? `, ${selectedNode.city}` : ''}, {selectedNode.country}
              </div>
              <div className="text-sm text-auri-muted mb-1">
                Score {selectedNode.influenceScore} · {selectedNode.conferenceAppearances} conferences · {selectedNode.publications} publications
              </div>
              {selectedNode.focusAreas && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedNode.focusAreas.map((f, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-xs bg-auri-blue/10 text-auri-blue">{f}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <>
          <div className="bg-auri-card rounded-lg border border-auri-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-auri-muted text-left">
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Institution</th>
                    <th className="px-4 py-3 font-medium">Country</th>
                    <th className="px-4 py-3 font-medium">Specialty</th>
                    <th className="px-4 py-3 font-medium text-center">Influence</th>
                    <th className="px-4 py-3 font-medium text-center">Tier</th>
                    <th className="px-4 py-3 font-medium text-center">Interactions</th>
                    <th className="px-4 py-3 font-medium text-center">Publications</th>
                    <th className="px-4 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKOLs.map(kol => (
                    <React.Fragment key={kol.id}>
                      <tr
                        className={`border-t border-auri-border hover:bg-gray-50 cursor-pointer transition ${expandedKOL === kol.id ? 'bg-gray-50' : ''}`}
                        onClick={() => setExpandedKOL(expandedKOL === kol.id ? null : kol.id)}
                      >
                        <td className="px-4 py-3 font-medium text-auri-text">{kol.name}</td>
                        <td className="px-4 py-3 text-auri-muted">{kol.institution}</td>
                        <td className="px-4 py-3 text-auri-muted">{kol.country}</td>
                        <td className="px-4 py-3 text-auri-muted">{kol.specialty}</td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star size={12} className="text-amber-500" />
                            <span className="text-auri-text">{kol.influenceScore}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${tierColor(kol.engagementTier)}`}>
                            {kol.engagementTier}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-auri-text">{kol.recentInteractions}</td>
                        <td className="px-4 py-3 text-center text-auri-text">{kol.publications}</td>
                        <td className="px-4 py-3 text-center">
                          {expandedKOL === kol.id ? <ChevronUp size={16} className="text-auri-muted" /> : <ChevronDown size={16} className="text-auri-muted" />}
                        </td>
                      </tr>

                      {expandedKOL === kol.id && (
                        <tr>
                          <td colSpan={9} className="px-4 py-4 bg-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                              <div className="space-y-3">
                                <h4 className="text-xs font-semibold text-auri-blue uppercase tracking-wider">Profile</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center gap-2 text-auri-muted"><MapPin size={14} /> {kol.city}, {kol.country}</div>
                                  <div className="flex items-center gap-2 text-auri-muted"><Globe size={14} /> {kol.region}</div>
                                  <div className="flex items-center gap-2 text-auri-muted"><Calendar size={14} /> {kol.conferenceAppearances} conference appearances</div>
                                  <div className="flex items-center gap-2 text-auri-muted"><Users size={14} /> Products: {kol.productAlignment.map(p => PRODUCT_OPTIONS.find(o => o.id === p)?.name).join(', ')}</div>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-xs font-semibold text-auri-blue uppercase tracking-wider">Focus Areas</h4>
                                <div className="flex flex-wrap gap-2">
                                  {kol.focusAreas.map((area, i) => (
                                    <span key={i} className="px-2 py-1 bg-auri-blue/10 text-auri-blue rounded text-xs">{area}</span>
                                  ))}
                                </div>
                                <h4 className="text-xs font-semibold text-auri-blue uppercase tracking-wider mt-4">Publications</h4>
                                <div className="flex items-center gap-2 text-sm text-auri-muted"><BookOpen size={14} /> {kol.publications} peer-reviewed publications</div>
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-xs font-semibold text-auri-blue uppercase tracking-wider">Engagement Strategy</h4>
                                <p className="text-sm text-auri-muted leading-relaxed">{kol.recommendedStrategy}</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredKOLs.length === 0 && (
              <div className="text-center py-12 text-auri-muted">
                <Users size={32} className="mx-auto mb-3 opacity-50" />
                <p>No KOLs match your filters</p>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-400 text-right">
            Showing {filteredKOLs.length} of {KOL_DATA.filter(k => k.productAlignment.includes(selectedProduct)).length} KOLs aligned with {productName}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default KOLManagement;
