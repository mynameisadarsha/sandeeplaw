import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BENCH_CREDENTIALS } from '../data/legalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-serif-title text-xl md:text-2xl font-bold tracking-tight text-slate-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0"
        >
          Sandeep Law Bench
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Legal Services
          </a>
          <a href="#document-checklist" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Land Papers Guide
          </a>
          <a href="#chambers" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Advocate Profile
          </a>
          <a href="#verdicts" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Case Studies
          </a>
          <a href="#fees" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Consultation Fees
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          <a 
            href={`tel:${BENCH_CREDENTIALS.chamberPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            title="Chambers Direct Line"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-mono tabular-nums">{BENCH_CREDENTIALS.chamberPhone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm whitespace-nowrap shrink-0 shadow-sm"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Legal Services
            </a>
            <a 
              href="#document-checklist" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Land Papers Guide
            </a>
            <a 
              href="#chambers" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Advocate Profile
            </a>
            <a 
              href="#verdicts" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Case Studies
            </a>
            <a 
              href="#fees" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Consultation Fees
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <a 
              href={`tel:${BENCH_CREDENTIALS.chamberPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Chamber Line: {BENCH_CREDENTIALS.chamberPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shadow-sm"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
