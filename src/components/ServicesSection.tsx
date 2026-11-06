import React, { useState } from 'react';
import { 
  FileCheck, 
  Gavel, 
  Shield, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Calendar
} from 'lucide-react';
import { CORE_SERVICES, LEGAL_ASSETS } from '../data/legalData';
import { LegalCategory, LegalService } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: LegalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CORE_SERVICES[0].id);

  const filteredServices = activeCategory === 'all' 
    ? CORE_SERVICES 
    : CORE_SERVICES.filter(s => s.category === activeCategory);

  const currentDetailedService = CORE_SERVICES.find(s => s.id === selectedServiceId) || CORE_SERVICES[0];

  const categoryIcon = (category: LegalCategory) => {
    switch(category) {
      case 'land_scrutiny': return <FileCheck className="w-5 h-5 text-amber-700" />;
      case 'property_litigation': return <Gavel className="w-5 h-5 text-amber-700" />;
      case 'criminal_defense': return <Shield className="w-5 h-5 text-amber-700" />;
      case 'registration_conveyance': return <Landmark className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Practice Disciplines
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Our Legal Practice Areas
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Specialized legal support across land paper verification, property disputes, criminal defense, and registration matters.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-white border border-slate-200 rounded-sm shadow-sm">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveCategory('land_scrutiny')}
            className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'land_scrutiny'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Land Papers Checking
          </button>
          <button
            onClick={() => setActiveCategory('property_litigation')}
            className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'property_litigation'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Property Litigation
          </button>
          <button
            onClick={() => setActiveCategory('criminal_defense')}
            className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'criminal_defense'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Criminal Defense
          </button>
          <button
            onClick={() => setActiveCategory('registration_conveyance')}
            className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'registration_conveyance'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Revenue & Conveyancing
          </button>
        </div>

        {/* 2-Column Presentation: Service Cards + Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Services List Cards */}
          <div className="lg:col-span-5 space-y-4">
            {filteredServices.map((service, index) => {
              const isSelected = service.id === currentDetailedService.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-amber-600 shadow-md ring-1 ring-amber-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-sm bg-amber-50 border border-amber-200/60">
                        {categoryIcon(service.category)}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-amber-800 tracking-wide">
                          0{index + 1}. {service.categoryLabel}
                        </div>
                        <h3 className="font-serif-title text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-amber-800 font-medium inline-flex items-center gap-1">
                      <span>View Service Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-slate-500 font-medium">
                      Direct Consultation
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Marquee Focus Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
                <span>{currentDetailedService.categoryLabel}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Active Practice</span>
              </div>
              <button
                onClick={() => onSelectServiceForBooking(currentDetailedService)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult on this Service</span>
              </button>
            </div>

            <div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                {currentDetailedService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-2 font-medium">
                {currentDetailedService.subtitle}
              </p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {currentDetailedService.description}
              </p>
            </div>

            {/* Key Deliverables Checkpoints */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                What We Provide:
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {currentDetailedService.keyDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applicable Statutes */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Governing Legal Framework:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentDetailedService.applicableStatutes.map((act, idx) => (
                  <span 
                    key={idx}
                    className="text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded-sm border border-slate-200"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Context Preview */}
            <div className="relative rounded-sm overflow-hidden border border-slate-200 mt-4">
              <img
                src={
                  currentDetailedService.category === 'land_scrutiny' || currentDetailedService.category === 'registration_conveyance'
                    ? LEGAL_ASSETS.landRecords
                    : LEGAL_ASSETS.courtroomDefense
                }
                alt="Advocate scrutiny and court practice"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium">
                {currentDetailedService.category === 'land_scrutiny'
                  ? 'Detailed physical and digital examination of title deeds and revenue registers'
                  : 'Experienced advocacy before High Court, Sessions Courts, and Revenue Benches'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
