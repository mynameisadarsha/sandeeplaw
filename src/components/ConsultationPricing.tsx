import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { CONSULTATION_TIERS } from '../data/legalData';
import { ConsultationTier } from '../types';

interface ConsultationPricingProps {
  onSelectTier: (tier: ConsultationTier) => void;
}

export const ConsultationPricing: React.FC<ConsultationPricingProps> = ({ onSelectTier }) => {
  return (
    <section id="fees" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Transparent Pricing
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Consultation & Title Scrutiny Packages
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Clear, upfront consultation fees and fixed packages for property buyers and litigants.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CONSULTATION_TIERS.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`rounded-sm border flex flex-col justify-between transition-all duration-200 bg-white shadow-sm ${
                  tier.isPopular
                    ? 'border-amber-700 ring-1 ring-amber-700/30 shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Clean unboxed header label */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                      {tier.badge || 'Practice Service'}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {tier.mode}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-slate-900">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Fee Display (Tabular Numeral Discipline) */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="font-serif-title text-3xl font-bold text-slate-900 tabular-nums">
                      {tier.fee}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Timeline: {tier.timeline}</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                      Package Inclusions:
                    </div>
                    <div className="space-y-2.5">
                      {tier.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectTier(tier)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm ${
                      tier.isPopular
                        ? 'bg-slate-900 hover:bg-slate-800 text-white font-semibold'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Note */}
        <div className="mt-12 p-4 bg-white border border-slate-200 rounded-sm text-xs text-slate-500 leading-relaxed shadow-xs">
          <strong className="text-slate-700">Bar Council Note:</strong> Consultation schedules are provided for transparency for prospective clients seeking professional legal services. Contested litigation representation, regular court appearances, and High Court petitions are billed according to standard court practice and formal retainers.
        </div>
      </div>
    </section>
  );
};
