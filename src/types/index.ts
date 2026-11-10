export type PracticeAreaId = 
  | 'property_law'
  | 'title_verification'
  | 'legal_due_diligence'
  | 'conveyancing'
  | 'registration'
  | 'civil_matters'
  | 'legal_documentation';

export interface PracticeArea {
  id: PracticeAreaId;
  title: string;
  shortDesc: string;
  scopeItems: string[];
  statutes: string[];
}

export interface ChamberDetails {
  chamberName: string;
  founder: string;
  designation: string;
  qualifications: string;
  address: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  locationLandmark: string;
  cityPincode: string;
  hours: string;
  googleMapsQuery: string;
}
