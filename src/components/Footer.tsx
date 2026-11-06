import React from 'react';
import { Phone, Mail, MapPin, Scale } from 'lucide-react';
import { BENCH_CREDENTIALS } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif-title text-xl font-bold tracking-tight text-slate-900">
              Sandeep Law Bench
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Chambers of Advocate Sandeep Kumar. Professional legal practice in 30-year land title investigation, property litigations, civil disputes, and criminal defense before High Courts and Trial Benches.
            </p>
            <div className="flex items-center gap-2 text-amber-800 font-mono text-[11px]">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>Enrollment: {BENCH_CREDENTIALS.barCouncilNumber}</span>
            </div>
          </div>

          {/* Quick Practice Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Practice Disciplines
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Land Legal Papers Checking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Property Litigation & Injunctions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Criminal Defense & Bail
                </a>
              </li>
              <li>
                <a href="#document-checklist" className="hover:text-slate-900 transition-colors">
                  Land Document Checklist
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-slate-900 transition-colors">
                  Consultation Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Chambers Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Chambers Contact
            </div>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{BENCH_CREDENTIALS.chambersAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`tel:${BENCH_CREDENTIALS.chamberPhone.replace(/\s+/g, '')}`} className="font-mono text-slate-800 hover:text-amber-800 tabular-nums">
                  {BENCH_CREDENTIALS.chamberPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{BENCH_CREDENTIALS.chamberEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Council Compliance Notice */}
        <div className="pt-8 space-y-4">
          <div className="p-4 bg-white border border-slate-200 rounded-sm space-y-1.5 text-[11px] leading-relaxed text-slate-500 shadow-xs">
            <strong className="text-slate-700 uppercase tracking-wider block">
              Bar Council of India Disclaimer:
            </strong>
            <p>
              Under the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. This website is meant solely for informational and consultation scheduling purposes at the request of the user. Information provided does not constitute legal advice or create an advocate-client relationship until a formal vakalatnama or engagement is executed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              © {new Date().getFullYear()} Sandeep Law Bench. All legal rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>High Court Bar Association</span>
              <span>·</span>
              <span>Confidential Attorney Privilege</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
