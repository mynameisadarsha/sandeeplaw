import React from 'react';
import { Award, MapPin, Phone, Mail, Clock, Scale, ShieldCheck, ExternalLink } from 'lucide-react';
import { CHAMBER_DETAILS } from '../data/legalData';

export const SeniorAdvocateProfile: React.FC = () => {
  return (
    <section id="chambers-profile" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl space-y-8">
          {/* Header */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Chambers & Counsel Profile
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              {CHAMBER_DETAILS.founder}
            </h2>
            <div className="text-sm font-semibold text-slate-700 mt-1">
              {CHAMBER_DETAILS.designation} · {CHAMBER_DETAILS.qualifications}
            </div>
          </div>

          <p className="text-base text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">{CHAMBER_DETAILS.chamberName}</strong> is an independent law practice based in Whitefield, Bengaluru. Led by Adv. Sandeep Kumar R, the chambers provide reliable, meticulous legal services in property law, comprehensive title verification, conveyancing, Sub-Registrar registration, civil court litigation, and legal documentation.
          </p>

          {/* Key Practice Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Direct Advocate Scrutiny</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All title deed chains, revenue extracts, and draft deeds are scrutinized directly under the personal supervision of Adv. Sandeep Kumar R.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                <Scale className="w-4 h-4 text-emerald-700" />
                <span>Comprehensive Documentation</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drafting bulletproof Sale Deeds, Agreements, Wills, Settlement Deeds, and Power of Attorney with unambiguous legal terms and protective indemnity clauses.
              </p>
            </div>
          </div>

          {/* Detailed Address & Contact Box (Anchor id: chambers-contact) */}
          <div id="chambers-contact" className="p-6 bg-slate-50 border border-slate-200 rounded-sm space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Chambers Office & Contact Details
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
              {/* Address */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Physical Address:</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {CHAMBER_DETAILS.address}
                </p>
                <div className="pl-6 pt-1">
                  <a
                    href={CHAMBER_DETAILS.googleMapsQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-amber-900 font-medium inline-flex items-center gap-1"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Communication */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phone Number:</span>
                    <a 
                      href={`tel:${CHAMBER_DETAILS.phone}`}
                      className="font-mono text-base font-bold text-slate-900 hover:text-amber-800 transition-colors tabular-nums"
                    >
                      {CHAMBER_DETAILS.phoneDisplay} ({CHAMBER_DETAILS.phone})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Email ID:</span>
                    <a 
                      href={`mailto:${CHAMBER_DETAILS.email}`}
                      className="text-slate-900 hover:text-amber-800 transition-colors font-medium"
                    >
                      {CHAMBER_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Office Hours:</span>
                    <span className="text-slate-800 font-medium">{CHAMBER_DETAILS.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
