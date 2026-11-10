import React from 'react';
import { 
  Building, 
  FileSearch, 
  CheckCircle2, 
  ScrollText, 
  Landmark, 
  Scale, 
  FileSignature 
} from 'lucide-react';
import { PRACTICE_AREAS, CHAMBER_DETAILS } from '../data/legalData';
import { PracticeAreaId } from '../types';

export const ServicesSection: React.FC = () => {
  const getAreaIcon = (id: PracticeAreaId) => {
    switch (id) {
      case 'property_law': return <Building className="w-5 h-5 text-amber-700" />;
      case 'title_verification': return <FileSearch className="w-5 h-5 text-amber-700" />;
      case 'legal_due_diligence': return <CheckCircle2 className="w-5 h-5 text-amber-700" />;
      case 'conveyancing': return <ScrollText className="w-5 h-5 text-amber-700" />;
      case 'registration': return <Landmark className="w-5 h-5 text-amber-700" />;
      case 'civil_matters': return <Scale className="w-5 h-5 text-amber-700" />;
      case 'legal_documentation': return <FileSignature className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section id="practice-areas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Practice Disciplines
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Areas of Practice
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Legal advisory, title scrutiny, conveyancing, civil court representation, and documentation services provided by {CHAMBER_DETAILS.founder}.
          </p>
        </div>

        {/* 7 Practice Areas Grid (Clean, readable, zero buttons, zero images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area, index) => (
            <div
              key={area.id}
              id={area.id}
              className="bg-white border border-slate-200 rounded-sm p-6 space-y-4 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-2.5 rounded-sm bg-amber-50 border border-amber-200/60">
                  {getAreaIcon(area.id)}
                </div>
                <span className="font-mono text-xs font-semibold text-amber-800">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif-title text-xl font-bold text-slate-900">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {area.shortDesc}
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                  Legal Scope & Services:
                </div>
                <ul className="space-y-1.5">
                  {area.scopeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <span className="text-amber-700 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Governing Statutes */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Statutory Reference:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.statutes.map((statute, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-sm border border-slate-200"
                    >
                      {statute}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
