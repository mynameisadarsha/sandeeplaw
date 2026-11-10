import React from 'react';
import { Phone, Mail, MapPin, Scale } from 'lucide-react';
import { CHAMBER_DETAILS, PRACTICE_AREAS } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Advocate Credentials */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-serif-title text-xl font-bold tracking-tight text-slate-900">
              {CHAMBER_DETAILS.chamberName}
            </div>
            <div className="text-slate-800 font-semibold">
              {CHAMBER_DETAILS.founder}
            </div>
            <div className="text-slate-500">
              {CHAMBER_DETAILS.designation} · {CHAMBER_DETAILS.qualifications}
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm pt-1">
              Dedicated legal practice specializing in Property Law, 30-Year Title Verification, Legal Due Diligence, Conveyancing, Sub-Registrar Registration, Civil Litigation, and Legal Documentation in Whitefield and across Bengaluru.
            </p>
          </div>

          {/* 7 Practice Areas */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Areas of Practice
            </div>
            <ul className="space-y-1.5">
              {PRACTICE_AREAS.map(area => (
                <li key={area.id}>
                  <a href="#practice-areas" className="hover:text-slate-900 transition-colors">
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chambers Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Chambers Location & Contact
            </div>
            <div className="space-y-2.5 text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CHAMBER_DETAILS.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <a 
                  href={`tel:${CHAMBER_DETAILS.phone}`} 
                  className="font-mono text-slate-800 hover:text-amber-800 font-bold tabular-nums"
                >
                  {CHAMBER_DETAILS.phoneDisplay} ({CHAMBER_DETAILS.phone})
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a 
                  href={`mailto:${CHAMBER_DETAILS.email}`}
                  className="text-slate-800 hover:text-amber-800"
                >
                  {CHAMBER_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Compliance Notice */}
        <div className="pt-8 space-y-4">
          <div className="p-4 bg-white border border-slate-200 rounded-sm space-y-1.5 text-[11px] leading-relaxed text-slate-500 shadow-xs">
            <strong className="text-slate-700 uppercase tracking-wider block">
              Bar Council of India Disclaimer:
            </strong>
            <p>
              As per the rules of the Bar Council of India, advocates are not permitted to advertise or solicit work. This website has been created solely for informational purposes and for scheduling consultations at the voluntary request of the user. Information provided does not constitute legal advice and does not establish an advocate-client relationship until a formal vakalatnama or engagement is executed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              © {new Date().getFullYear()} {CHAMBER_DETAILS.chamberName}. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <span>Whitefield, Bengaluru</span>
              <span>·</span>
              <span>Immadihalli Main Road</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
