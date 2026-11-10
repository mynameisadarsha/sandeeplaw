import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { CHAMBER_DETAILS } from '../data/legalData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Brand Name */}
        <a 
          href="#" 
          className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0"
        >
          {CHAMBER_DETAILS.chamberName}
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#practice-areas" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Areas of Practice
          </a>
          <a href="#chambers-profile" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Chambers Profile
          </a>
          <a href="#chambers-contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Contact & Address
          </a>
        </nav>

        {/* Direct Contact Links (No Buttons) */}
        <div className="hidden sm:flex items-center gap-6 shrink-0 text-xs">
          <a 
            href={`tel:${CHAMBER_DETAILS.phone}`}
            className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0"
            title="Direct Chamber Phone"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-mono tabular-nums">{CHAMBER_DETAILS.phoneDisplay}</span>
          </a>

          <a 
            href={`mailto:${CHAMBER_DETAILS.email}`}
            className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            title="Chambers Email"
          >
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>{CHAMBER_DETAILS.email}</span>
          </a>
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
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-md">
          <div className="text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="font-semibold text-slate-900">{CHAMBER_DETAILS.founder}</span> · {CHAMBER_DETAILS.qualifications}
          </div>
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a 
              href="#practice-areas" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Areas of Practice
            </a>
            <a 
              href="#chambers-profile" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Chambers Profile
            </a>
            <a 
              href="#chambers-contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-slate-900 transition-colors py-1"
            >
              Contact & Address
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5 text-xs">
            <a 
              href={`tel:${CHAMBER_DETAILS.phone}`}
              className="flex items-center gap-2 font-semibold text-slate-900 py-1"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call: {CHAMBER_DETAILS.phoneDisplay}</span>
            </a>
            <a 
              href={`mailto:${CHAMBER_DETAILS.email}`}
              className="flex items-center gap-2 text-slate-600 py-1"
            >
              <Mail className="w-4 h-4 text-amber-700" />
              <span>{CHAMBER_DETAILS.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
