import React from 'react';
import { Award, MapPin, Phone, Clock, ShieldCheck, Scale } from 'lucide-react';
import { BENCH_CREDENTIALS, LEGAL_ASSETS } from '../data/legalData';

interface SeniorAdvocateProfileProps {
  onOpenBooking: () => void;
}

export const SeniorAdvocateProfile: React.FC<SeniorAdvocateProfileProps> = ({ onOpenBooking }) => {
  return (
    <section id="chambers" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-md bg-white group">
              <img
                src={LEGAL_ASSETS.advocatePortrait}
                alt="Advocate Sandeep Kumar - Senior Counsel"
                className="w-full h-[460px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-sm shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-amber-800">
                  <span>{BENCH_CREDENTIALS.barCouncilNumber}</span>
                  <span>18+ Years Bar Experience</span>
                </div>
                <div className="font-serif-title text-lg font-bold text-slate-900 mt-1">
                  {BENCH_CREDENTIALS.leadCounsel}
                </div>
                <div className="text-xs text-slate-600">
                  Principal Advocate & Founder, Sandeep Law Bench
                </div>
              </div>
            </div>
          </div>

          {/* Details & Bench Architecture */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
                Senior Counsel Profile & Practice
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                Dedicated Legal Practice Built on Thorough Title Forensics
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              With 18 years of continuous practice across the High Court of Judicature, Civil Benches, and Revenue Tribunals, <strong className="text-slate-900 font-semibold">{BENCH_CREDENTIALS.leadCounsel}</strong> has assisted thousands of property purchasers in securing clean ownership, represented families in complex partition and land disputes, and defended clients in criminal trials.
            </p>

            {/* Qualifications & Jurisdictions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>Academic Qualifications</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {BENCH_CREDENTIALS.qualifications}
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  <Scale className="w-4 h-4 text-amber-700" />
                  <span>Primary Courts</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High Court of Judicature, District & Sessions Courts, RERA Tribunal, and Divisional Revenue Courts.
                </p>
              </div>
            </div>

            {/* Chamber Standards */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Chamber Standards:
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Advocate Review:</strong> Title deeds and litigation briefs are reviewed directly under the supervision of Advocate Sandeep.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Physical Office Verifications:</strong> We examine manual register volumes at the Sub-Registrar and Taluk offices in addition to digital records.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Confidential Consultations:</strong> Absolute professional privilege maintained across all client communications and documents.</span>
                </div>
              </div>
            </div>

            {/* Chambers Contact & Address Strip */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Chambers Office:</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {BENCH_CREDENTIALS.chambersAddress}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Consultation Hours:</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {BENCH_CREDENTIALS.hours}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shadow-sm"
              >
                Schedule Chamber Briefing
              </button>
              <a
                href={`tel:${BENCH_CREDENTIALS.chamberPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-center text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-sm transition-colors"
              >
                Call: {BENCH_CREDENTIALS.chamberPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
