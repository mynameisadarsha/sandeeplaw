export type LegalCategory = 
  | 'land_scrutiny' 
  | 'property_litigation' 
  | 'criminal_defense' 
  | 'registration_conveyance';

export interface LegalService {
  id: string;
  category: LegalCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  applicableStatutes: string[];
  featured?: boolean;
}

export type ConsultationMode = 'chambers' | 'video' | 'express_review';
export type ConsultationUrgency = 'standard' | 'priority';

export interface BookingSubmission {
  referenceCode: string;
  clientName: string;
  phone: string;
  email: string;
  city: string;
  serviceCategory: LegalCategory;
  serviceTitle: string;
  consultationMode: ConsultationMode;
  urgency: ConsultationUrgency;
  preferredDate: string;
  preferredTime: string;
  propertyOrCaseDetails: string;
  uploadedFileName?: string;
  submittedAt: string;
  status: 'Confirmed' | 'Scheduled';
}

export interface LandDocumentRequirement {
  id: string;
  name: string;
  issuingAuthority: string;
  importance: 'Required' | 'Essential' | 'Recommended';
  purpose: string;
  guidance: string;
}

export interface LandTransactionType {
  id: string;
  title: string;
  description: string;
  documents: LandDocumentRequirement[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Land Scrutiny' | 'Property Litigation' | 'Criminal Defense';
  court: string;
  propertyScaleOrCharge: string;
  matterSummary: string;
  legalApproach: string;
  finalOutcome: string;
  duration: string;
}

export interface FaqItem {
  id: string;
  category: 'Land Papers' | 'Property Litigation' | 'Criminal Defense' | 'Consultations';
  question: string;
  answer: string;
}

export interface ConsultationTier {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  fee: string;
  timeline: string;
  mode: string;
  deliverables: string[];
  ctaText: string;
  isPopular?: boolean;
}
