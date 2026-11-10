import React from 'react';
import { Phone, MapPin, Mail, Clock, Scale } from 'lucide-react';
import { CHAMBER_DETAILS, PRACTICE_AREAS } from '../data/legalData';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Founder & Qualifications Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-3">
          <span>{CHAMBER_DETAILS.founder}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{CHAMBER_DETAILS.designation}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{CHAMBER_DETAILS.qualifications}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Whitefield, Bengaluru</span>
        </div>

        {/* Main Headline & Narrative */}
        <div className="max-w-4xl space-y-5 mb-12">
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {CHAMBER_DETAILS.chamberName}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Advocacy and advisory practice led by <strong className="text-slate-900 font-semibold">{CHAMBER_DETAILS.founder} ({CHAMBER_DETAILS.qualifications})</strong>. 
            Providing comprehensive legal counsel across property law, 30-year title verification, legal due diligence, conveyancing, Sub-Registrar registration, civil court matters, and legal documentation.
          </p>

          {/* 7 Practice Area Tags */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Areas of Practice:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {PRACTICE_AREAS.map((area) => (
                <a
                  key={area.id}
                  href={`#${area.id}`}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm font-medium text-slate-800 transition-colors"
                >
                  {area.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Chamber Information Cards (No Buttons, No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Phone */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Direct Phone</span>
            </div>
            <div>
              <a 
                href={`tel:${CHAMBER_DETAILS.phone}`}
                className="font-mono text-xl font-bold text-slate-900 hover:text-amber-800 transition-colors tabular-nums block"
              >
                {CHAMBER_DETAILS.phoneDisplay}
              </a>
              <span className="text-xs text-slate-500">
                Direct Chamber Line / WhatsApp: {CHAMBER_DETAILS.phone}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Mail className="w-4 h-4 text-amber-700" />
              <span>Email Inquiries</span>
            </div>
            <div>
              <a 
                href={`mailto:${CHAMBER_DETAILS.email}`}
                className="text-base font-semibold text-slate-900 hover:text-amber-800 transition-colors break-all block"
              >
                {CHAMBER_DETAILS.email}
              </a>
              <span className="text-xs text-slate-500">
                Official Correspondence & Document Vetting
              </span>
            </div>
          </div>

          {/* Hours */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Chamber Hours</span>
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900">
                {CHAMBER_DETAILS.hours}
              </div>
              <span className="text-xs text-slate-500">
                Prior appointment recommended
              </span>
            </div>
          </div>
        </div>

        {/* Address Banner */}
        <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-sm flex items-start gap-3 text-xs text-slate-700">
          <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900">Chambers Address:</strong> {CHAMBER_DETAILS.address}
          </div>
        </div>
      </div>
    </section>
  );
};
