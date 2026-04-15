import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell,
} from 'recharts';
import {
  MOCK_TREND_SENTIMENT, MOCK_INGESTION, MOCK_COMPETITOR_VISIBILITY,
  MOCK_THEMES, MOCK_TRIALS, MOCK_SOCIAL,
} from '../data/congressData';
import { PRODUCT_OPTIONS } from '../config/clientConfig';
import { KOL_DATA } from '../data/demoData';

const COLORS = ['#4285f4', '#34a853', '#fbbc04', '#ea4335', '#7c3aed', '#f97316'];
const CHART_STYLE = { backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', color: '#111827', fontSize: '12px' };

const productNames = PRODUCT_OPTIONS.map(p => p.name);

// Trend chart data
const scientificData = MOCK_TREND_SENTIMENT.scientific;
const socialData = MOCK_TREND_SENTIMENT.social;
const trendKeys = scientificData.length > 0 ? Object.keys(scientificData[0]).filter(k => k !== 'period') : productNames;
const LINE_COLORS = ['#4285f4', '#34a853', '#7c3aed', '#9ca3af'];

// Themes as bar chart data
const themesData = MOCK_THEMES.map(t => ({
  theme: t.theme.length > 30 ? t.theme.slice(0, 30) + '...' : t.theme,
  mentions: t.mentions,
}));

// Competitor visibility
const competitorData = MOCK_COMPETITOR_VISIBILITY.map(c => ({
  product: c.product.length > 25 ? c.product.slice(0, 25) + '...' : c.product,
  share: c.share,
  mentions: c.mentions,
}));

// Top KOLs by influence
const kolData = KOL_DATA
  .sort((a, b) => b.influenceScore - a.influenceScore)
  .slice(0, 10)
  .map(k => ({ name: k.name.replace('Prof. ', '').replace('Dr. ', ''), score: k.influenceScore }));

// KOL regional distribution
const kolRegionalData = (() => {
  const regions = {};
  KOL_DATA.forEach(k => { regions[k.region] = (regions[k.region] || 0) + 1; });
  return Object.entries(regions).map(([name, value]) => ({ name, value }));
})();

// Congress ingestion pie
const ingestionPieData = [
  { name: 'Abstracts', value: MOCK_INGESTION.abstracts },
  { name: 'Posters', value: MOCK_INGESTION.posters },
  { name: 'Speakers', value: MOCK_INGESTION.speakers },
  { name: 'Pubs linked', value: MOCK_INGESTION.publicationsLinked },
  { name: 'Agendas', value: MOCK_INGESTION.agendas },
];

// Data modules scope
const dataModulesData = [
  { name: 'Congress', value: MOCK_INGESTION.abstracts },
  { name: 'Trials', value: MOCK_TRIALS.total },
  { name: 'Social', value: MOCK_SOCIAL.totalSignals },
];

function Dashboard({ selectedCongress }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Scientific sentiment over time</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={scientificData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="period" tick={{ fill: '#6b7280', fontSize: 11 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} domain={[0, 100]} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Legend />
              {trendKeys.map((key, i) => (
                <Line key={key} type="monotone" dataKey={key} stroke={LINE_COLORS[i % LINE_COLORS.length]} strokeWidth={2} dot={{ fill: LINE_COLORS[i % LINE_COLORS.length] }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Social sentiment over time</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={socialData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="period" tick={{ fill: '#6b7280', fontSize: 11 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} domain={[0, 100]} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Legend />
              {trendKeys.map((key, i) => (
                <Line key={key} type="monotone" dataKey={key} stroke={LINE_COLORS[i % LINE_COLORS.length]} strokeWidth={2} dot={{ fill: LINE_COLORS[i % LINE_COLORS.length] }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Competitor visibility at congress</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={competitorData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[0, 45]} tick={{ fill: '#6b7280' }} />
              <YAxis type="category" dataKey="product" tick={{ fill: '#6b7280', fontSize: 10 }} width={95} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Bar dataKey="share" fill="#4285f4" radius={[0, 4, 4, 0]} name="Share %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Scientific themes</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={themesData} margin={{ top: 5, right: 20, left: 0, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="theme" tick={{ fill: '#6b7280', fontSize: 9 }} angle={-35} textAnchor="end" height={90} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Bar dataKey="mentions" fill="#34a853" radius={[4, 4, 0, 0]} name="Mentions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Top KOLs by influence score</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={kolData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 9 }} angle={-35} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#6b7280' }} domain={[70, 100]} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Bar dataKey="score" fill="#7c3aed" radius={[4, 4, 0, 0]} name="Influence Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">KOL regional distribution</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={kolRegionalData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}
                label={({ name, value }) => `${name}: ${value}`}>
                {kolRegionalData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={CHART_STYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Congress ingestion</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={ingestionPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}
                label={({ name, value }) => `${name}: ${value}`}>
                {ingestionPieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={CHART_STYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-auri-card rounded-xl p-6 border border-auri-border">
          <h2 className="font-semibold mb-4 text-auri-blue">Data modules scope</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dataModulesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip contentStyle={CHART_STYLE} />
              <Bar dataKey="value" fill="#4285f4" radius={[4, 4, 0, 0]} name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
