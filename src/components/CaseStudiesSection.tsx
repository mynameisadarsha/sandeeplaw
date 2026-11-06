import React, { useState } from 'react';
import { Clock, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';
import { CASE_STUDIES } from '../data/legalData';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredStudies = filter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === filter);

  return (
    <section id="verdicts" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Case Experience & Practice Precedents
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Representative Matters & Case Studies
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Examples of property dispute settlements, title examinations, and court representations handled by Sandeep Law Bench.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-sm shrink-0">
            {['All', 'Land Scrutiny', 'Property Litigation', 'Criminal Defense'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                  filter === item
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all rounded-sm p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-amber-800 font-semibold">{study.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.court}</span>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-slate-900 leading-snug">
                  {study.title}
                </h3>

                <div className="p-2.5 bg-white border border-slate-200 rounded-sm text-xs text-slate-800 font-medium">
                  <strong>Subject Matter:</strong> {study.propertyScaleOrCharge}
                </div>

                <div className="space-y-3 text-xs leading-relaxed text-slate-600">
                  <div>
                    <strong className="text-slate-800 uppercase tracking-wider text-[11px] block mb-0.5">
                      Case Background:
                    </strong>
                    {study.matterSummary}
                  </div>

                  <div>
                    <strong className="text-slate-800 uppercase tracking-wider text-[11px] block mb-0.5">
                      Bench Legal Strategy:
                    </strong>
                    {study.legalApproach}
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <strong className="text-slate-900 uppercase tracking-wider text-[11px] block text-emerald-800 mb-0.5 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-emerald-700" />
                      Legal Resolution:
                    </strong>
                    <span className="text-slate-800 font-medium">
                      {study.finalOutcome}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-mono tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  {study.duration}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-slate-900 hover:text-amber-800 font-semibold inline-flex items-center gap-1"
                >
                  <span>Consult Bench</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Callout */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white border border-slate-200 text-amber-800 rounded-sm shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-title text-base sm:text-lg font-bold text-slate-900">
                Have Questions About a Property Dispute or Land Paper?
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Schedule an initial review with Advocate Sandeep to understand your legal standing and clear procedural options.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shrink-0 shadow-sm"
          >
            Schedule Legal Review
          </button>
        </div>
      </div>
    </section>
  );
};
