import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LandDocumentChecklist } from './components/LandDocumentChecklist';
import { SeniorAdvocateProfile } from './components/SeniorAdvocateProfile';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ConsultationPricing } from './components/ConsultationPricing';
import { BookingForm } from './components/BookingForm';
import { BookingModal } from './components/BookingModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Calendar } from 'lucide-react';
import { 
  ConsultationTier, 
  ConsultationUrgency, 
  LegalCategory, 
  LegalService 
} from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<LegalCategory>('land_scrutiny');
  const [modalServiceTitle, setModalServiceTitle] = useState('Land Legal Papers Checking & Title Verification');
  const [modalUrgency, setModalUrgency] = useState<ConsultationUrgency>('standard');
  const [modalNotes, setModalNotes] = useState('');

  const handleOpenGeneralBooking = () => {
    setModalCategory('land_scrutiny');
    setModalServiceTitle('Land Legal Papers Checking & Title Verification');
    setModalUrgency('standard');
    setModalNotes('');
    setIsModalOpen(true);
  };

  const handleSelectService = (service: LegalService) => {
    setModalCategory(service.category);
    setModalServiceTitle(service.title);
    setModalUrgency('standard');
    setModalNotes(`Inquiring regarding ${service.title} (${service.categoryLabel}).`);
    setIsModalOpen(true);
  };

  const handleSelectPricingTier = (tier: ConsultationTier) => {
    let cat: LegalCategory = 'land_scrutiny';
    if (tier.id.includes('litigation')) cat = 'property_litigation';
    if (tier.id.includes('criminal')) cat = 'criminal_defense';

    setModalCategory(cat);
    setModalServiceTitle(tier.name);
    setModalUrgency('standard');
    setModalNotes(`Selected consultation package: "${tier.name}" (${tier.fee}).`);
    setIsModalOpen(true);
  };

  const handleChecklistAuditRequest = (typeTitle: string, checkedDocs: string[], missingDocs: string[]) => {
    setModalCategory('land_scrutiny');
    setModalServiceTitle('Land Legal Papers Checking & Title Verification');
    setModalUrgency('standard');
    setModalNotes(
      `Property Category: ${typeTitle}.\nSelected Papers: ${checkedDocs.join(', ') || 'None'}.\nPapers for Bench Scrutiny: ${missingDocs.join(', ') || 'All required'}.`
    );
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-850 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Navigation (3-zone Top Bar Contract) */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Practice Areas / Core Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectService} />

        {/* Land Papers Guide & Checklist */}
        <LandDocumentChecklist onBookAuditWithDocuments={handleChecklistAuditRequest} />

        {/* Senior Advocate Sandeep Kumar & Chambers Profile */}
        <SeniorAdvocateProfile onOpenBooking={handleOpenGeneralBooking} />

        {/* Case Studies / Representative Matters */}
        <CaseStudiesSection onOpenBooking={handleOpenGeneralBooking} />

        {/* Consultation Pricing & Retainers */}
        <ConsultationPricing onSelectTier={handleSelectPricingTier} />

        {/* Embedded Consultation Booking Intake Section */}
        <section id="book-consultation" className="py-20 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
                Consultation Intake
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                Book a Legal Consultation
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Select your preferred chamber visit or video consultation slot. Our legal team will review your matter details and confirm the appointment.
              </p>
            </div>

            <BookingForm isEmbedded={true} />
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialServiceCategory={modalCategory}
        initialServiceTitle={modalServiceTitle}
        initialUrgency={modalUrgency}
        initialNotes={modalNotes}
      />

      {/* Floating Action Quick Access Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleOpenGeneralBooking}
          className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
}
