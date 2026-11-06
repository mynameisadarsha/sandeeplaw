import React from 'react';
import { ShieldCheck, FileSearch, ArrowRight, Gavel, Scale } from 'lucide-react';
import { LEGAL_ASSETS, BENCH_CREDENTIALS } from '../data/legalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Unboxed Header Editorial Kicker (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-4">
          <span>{BENCH_CREDENTIALS.barCouncilNumber}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>High Court & District Court Practice</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Judicial Chambers Complex</span>
        </div>

        {/* 2-Column Split: Headline + Narrative & Chamber Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Land Legal Papers Checking, Property Litigations & Criminal Defense
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Led by <strong className="text-slate-900 font-semibold">{BENCH_CREDENTIALS.leadCounsel}</strong>, 
              Sandeep Law Bench provides comprehensive legal scrutiny for land buyers, experienced civil representation in property disputes, and dedicated criminal defense advocacy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shadow-sm whitespace-nowrap"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#document-checklist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-colors rounded-sm whitespace-nowrap"
              >
                <FileSearch className="w-4 h-4 text-amber-700" />
                <span>View Land Papers Guide</span>
              </a>
            </div>

            {/* Clean unboxed trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Confidential Attorney-Client Privilege</span>
              </div>
              <div className="flex items-center gap-2">
                <Gavel className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Chamber & Video Consultation Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Certified Title Opinions for Property Purchases</span>
              </div>
            </div>
          </div>

          {/* Focal Image Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-lg bg-slate-100 group">
              <img
                src={LEGAL_ASSETS.heroChambers}
                alt="Sandeep Law Bench chambers interior"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-sm shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Advocate Chambers & Law Library
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Briefing rooms at Juris Chambers Arcade, Opp. High Court Annex Gate 3.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip (Quantitative Rigor with Tabular Figures) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-sm">
          <div className="space-y-1">
            <div className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tabular-nums">
              18+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Years at the Bar
            </div>
            <div className="text-xs text-slate-500">
              High Court & Civil Bench practice
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tabular-nums">
              2,800+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Land Titles Scrutinized
            </div>
            <div className="text-xs text-slate-500">
              30-year deed chains & revenue records
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tabular-nums">
              95%+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Successful Resolutions
            </div>
            <div className="text-xs text-slate-500">
              Litigations, injunctions & title verifications
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tabular-nums">
              1-on-1
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Senior Advocate Attention
            </div>
            <div className="text-xs text-slate-500">
              Direct consultation on your matter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
