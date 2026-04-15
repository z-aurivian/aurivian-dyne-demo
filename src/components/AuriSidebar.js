import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import AuriChatPanel from './AuriChatPanel';

/**
 * Floating Auri chat surface available on every authenticated screen.
 * Closed by default; opens as a right-docked panel. Keyboard: Esc to close.
 */
export default function AuriSidebar({ selectedProduct }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-auri-blue text-white shadow-lg hover:bg-auri-blue/90 transition-all"
          aria-label="Open Auri chat"
        >
          <Sparkles size={18} />
          <span className="text-sm font-medium font-michroma tracking-wider">AURI</span>
        </button>
      )}

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white border-l border-auri-border shadow-xl transition-transform duration-200 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between px-4 py-3 border-b border-auri-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-auri-blue/10 flex items-center justify-center">
              <Sparkles size={14} className="text-auri-blue" />
            </div>
            <div>
              <div className="font-michroma text-auri-text text-sm tracking-wider">AURI</div>
              <div className="text-[11px] text-auri-muted leading-none">Grounded · auditable · always on</div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg text-auri-muted hover:text-auri-text hover:bg-auri-card transition-all"
            aria-label="Close Auri chat"
          >
            <X size={16} />
          </button>
        </header>

        <div className="h-[calc(100%-56px)] p-3">
          <AuriChatPanel selectedProduct={selectedProduct} compact showIntro />
        </div>
      </aside>
    </>
  );
}
