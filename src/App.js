import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { ChevronDown, LogOut, Home } from 'lucide-react';
import CongressIngestion from './components/CongressIngestion';
import MedicalInsights from './components/MedicalInsights';
import KOLManagement from './components/KOLManagement';
import AuriChat from './components/AuriChat';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import CommandCenter from './components/CommandCenter';
import AuriSidebar from './components/AuriSidebar';
import ArtifactLibrary from './components/ArtifactLibrary';
import InsightJourney from './components/InsightJourney';
import { PRODUCT_OPTIONS, CONGRESS_OPTIONS, OUTCOME_VOLUME } from './config';
import './App.css';

function isAuthed() {
  return sessionStorage.getItem('aurivian.authed') === '1';
}

function RequireAuth({ children }) {
  const location = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function Shell() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_OPTIONS[0]?.id || 'soliris');
  const [selectedCongress, setSelectedCongress] = useState(
    CONGRESS_OPTIONS.find(c => c.available && !c.isTrend) || CONGRESS_OPTIONS[0]
  );
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const currentProduct = PRODUCT_OPTIONS.find(p => p.id === selectedProduct);

  // Primary nav: only Command Center lives in the header. Secondary surfaces
  // (ARIA, LUCA, NOVA, Dashboard, Auri) are exposed from inside Command Center.
  const primaryNav = [
    { path: '/', label: 'Command Center', icon: Home },
  ];

  const handleSignOut = () => {
    sessionStorage.removeItem('aurivian.authed');
    sessionStorage.removeItem('aurivian.user');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-auri-bg text-auri-text">
      {/* Header */}
      <header className="bg-white border-b border-auri-border px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          {/* Logo + primary nav */}
          <div className="flex items-center gap-6 min-w-0">
            <span className="font-michroma text-auri-text text-lg tracking-wider shrink-0">AURIVIAN</span>

            <nav className="flex items-center gap-1">
              {primaryNav.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                      isActive
                        ? 'bg-auri-blue/10 text-auri-blue'
                        : 'text-auri-muted hover:text-auri-text hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right cluster: chip + selectors + signout */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Outcome volume chip */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-auri-card border border-auri-border text-xs text-auri-muted">
              <span className="font-medium text-auri-text">Outcome Volume</span>
              <span>{OUTCOME_VOLUME.consumed.toLocaleString()} / {OUTCOME_VOLUME.committed.toLocaleString()}</span>
            </div>

            {/* Product Selector */}
            <div className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-auri-card border border-auri-border rounded-lg hover:border-auri-blue/50 transition-all"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold text-auri-text">{currentProduct?.name}</div>
                  <div className="text-xs text-auri-muted">{currentProduct?.generic}</div>
                </div>
                <ChevronDown size={16} className={`text-auri-muted transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-auri-border rounded-lg shadow-xl z-50 overflow-hidden">
                  {PRODUCT_OPTIONS.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product.id);
                        setProductDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-all ${
                        selectedProduct === product.id ? 'bg-auri-blue/5 border-l-2 border-auri-blue' : ''
                      }`}
                    >
                      <div className="font-semibold text-sm text-auri-text">{product.name}</div>
                      <div className="text-xs text-auri-muted">{product.generic} — {product.indications.join(', ')}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Congress Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-auri-muted hidden lg:inline">Congress:</span>
              <select
                value={selectedCongress.id}
                onChange={(e) => {
                  const c = CONGRESS_OPTIONS.find((x) => x.id === e.target.value);
                  if (c && (c.available || c.isTrend)) setSelectedCongress(c);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium bg-auri-card border border-auri-border text-auri-text focus:border-auri-blue focus:outline-none"
              >
                {CONGRESS_OPTIONS.map((c) => (
                  <option key={c.id} value={c.id} disabled={!c.available && !c.isTrend}>
                    {c.name} {c.comingSoon ? '(Coming soon)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSignOut}
              title="Sign out"
              className="p-2 rounded-lg text-auri-muted hover:text-auri-text hover:bg-gray-100 transition-all"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto p-6">
        <Routes>
          <Route path="/" element={<CommandCenter />} />
          <Route path="/congress" element={<CongressIngestion selectedCongress={selectedCongress} />} />
          <Route path="/insights" element={<MedicalInsights selectedProduct={selectedProduct} />} />
          <Route path="/kol" element={<KOLManagement selectedProduct={selectedProduct} />} />
          <Route path="/auri" element={<AuriChat selectedProduct={selectedProduct} />} />
          <Route path="/dashboard" element={<Dashboard selectedCongress={selectedCongress} />} />
          <Route path="/journey" element={<InsightJourney />} />
          <Route path="/artifacts" element={<ArtifactLibrary />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating Auri chat — always available across authenticated surfaces */}
      <AuriSidebar selectedProduct={selectedProduct} />
    </div>
  );
}

function App() {
  const [, setAuthTick] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onAuthenticated={() => setAuthTick(t => t + 1)} />} />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Shell />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
