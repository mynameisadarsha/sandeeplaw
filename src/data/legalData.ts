import { PracticeArea, ChamberDetails } from '../types';

export const CHAMBER_DETAILS: ChamberDetails = {
  chamberName: "ADV.SANDEEP'S LAW CHAMBERS",
  founder: "Adv. Sandeep Kumar R",
  designation: "Founder & Proprietor",
  qualifications: "BA, LL.B",
  address: "No 8/3, 2nd floor, Next to Bird nest Interior, Opp KEB office, Immadihalli Main road, Whitefield, Bengaluru-560066",
  email: "advsandeepslawchambers@gmail.com",
  phone: "8296843386",
  phoneDisplay: "+91 82968 43386",
  locationLandmark: "Next to Bird nest Interior, Opp KEB office, Immadihalli Main Road, Whitefield",
  cityPincode: "Bengaluru - 560066, Karnataka",
  hours: "Monday – Saturday: 10:00 AM – 8:00 PM",
  googleMapsQuery: "https://maps.google.com/?q=No+8/3+Immadihalli+Main+road+Whitefield+Bengaluru+560066"
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'property_law',
    title: 'Property Law',
    shortDesc: 'Comprehensive legal counsel on real estate ownership, boundary protection, possession rights, and property disputes.',
    scopeItems: [
      'Dispute resolution in ancestral and acquired properties',
      'Injunction suits to protect physical possession and boundaries',
      'Partition suits and declaration of ownership rights',
      'Landlord and tenant disputes, eviction proceedings, and lease claims',
      'RERA dispute representation and builder compliance scrutiny'
    ],
    statutes: [
      'Transfer of Property Act, 1882',
      'Specific Relief Act, 1963',
      'RERA Act, 2016'
    ]
  },
  {
    id: 'title_verification',
    title: 'Title Verification',
    shortDesc: 'Forensic 30-year backward deed chain examination to establish clear, marketable, and unencumbered ownership.',
    scopeItems: [
      '30-year continuous deed chain audit from root owner to current vendor',
      'Encumbrance Certificate (EC Form 15 & 16) examination with Sub-Registrar records',
      'Verification of legal heirship, succession entries, and family releases',
      'Checking for undisclosed mortgages, court attachments, or lis pendens',
      'Formal stamped Legal Title Opinion report for buyers and investors'
    ],
    statutes: [
      'Registration Act, 1908',
      'Indian Succession Act, 1925',
      'Limitation Act, 1963'
    ]
  },
  {
    id: 'legal_due_diligence',
    title: 'Legal Due Diligence',
    shortDesc: 'End-to-end statutory investigation of land parcels, layouts, conversion approvals, and builder permissions before financial commitments.',
    scopeItems: [
      'Scrutiny of revenue records (RTC / Pahani, Mutation Extract, Tippani, Akarband)',
      'Verification of Agricultural to Non-Agricultural (DC / NA) Conversion Orders',
      'Layout approval verification (BDA, BMRDA, DTCP, or Local Planning Authorities)',
      'Assessment of municipal Khata (A-Khata, e-Khata, and tax receipts)',
      'Government acquisition, Buffer zone, and Lake buffer clearance verification'
    ],
    statutes: [
      'Karnataka Land Revenue Act, 1964',
      'Karnataka Town & Country Planning Act',
      'Land Reforms Act'
    ]
  },
  {
    id: 'conveyancing',
    title: 'Conveyancing',
    shortDesc: 'Professional structuring and drafting of transfer instruments ensuring clear, unassailable legal vesting of rights.',
    scopeItems: [
      'Drafting and vetting of Agreements of Sale / Memorandum of Understanding (MOU)',
      'Absolute Sale Deeds with comprehensive vendor indemnity covenants',
      'Gift Deeds, Settlement Deeds, and Relinquishment / Release Deeds',
      'Exchange Deeds, Surrender of Tenancy, and Rectification Deeds',
      'Joint Development Agreements (JDA) and Supplementary Sharing Agreements'
    ],
    statutes: [
      'Indian Contract Act, 1872',
      'Transfer of Property Act, 1882'
    ]
  },
  {
    id: 'registration',
    title: 'Registration',
    shortDesc: 'Complete Sub-Registrar office procedural guidance, stamp duty assessment, and in-person registration accompaniment.',
    scopeItems: [
      'Sub-Registrar jurisdiction verification and online slot booking (Kaveri portal)',
      'Guidance and calculation of applicable stamp duty, registration fee, and cess',
      'Preparation of registration checklists, e-stamp papers, and identity annexures',
      'Personal presence and representation at the Sub-Registrar Office during execution',
      'Assistance in obtaining certified copies of registered documents and index entries'
    ],
    statutes: [
      'Registration Act, 1908 (Section 17 & 32)',
      'Karnataka Stamp Act, 1957'
    ]
  },
  {
    id: 'civil_matters',
    title: 'Civil Matters',
    shortDesc: 'Competent trial advocacy and representation across Civil Courts, Tribunals, and Appellate Benches.',
    scopeItems: [
      'Suits for Specific Performance of Contract regarding sale agreements',
      'Suits for Declaration of Title, Ownership, and Recovery of Possession',
      'Temporary and Permanent Injunctions against third-party interference',
      'Money recovery suits, summary suits, and execution petitions',
      'Civil miscellaneous appeals and revision petitions before Appellate Courts'
    ],
    statutes: [
      'Code of Civil Procedure, 1908 (CPC)',
      'Specific Relief Act, 1963',
      'Court Fees and Suits Valuation Act'
    ]
  },
  {
    id: 'legal_documentation',
    title: 'Legal Documentation',
    shortDesc: 'Precision drafting of binding personal, testamentary, commercial, and property documents.',
    scopeItems: [
      'Drafting and registration of Testamentary Wills and Codicils',
      'General Power of Attorney (GPA) and Special Power of Attorney (SPA)',
      'Family Settlement Deeds, Partition Deeds, and Affidavits',
      'Commercial Lease Agreements and Residential Rental Contracts',
      'Drafting formal Legal Notices and replies to statutory and private claims'
    ],
    statutes: [
      'Powers of Attorney Act, 1882',
      'Indian Succession Act, 1925',
      'Notaries Act, 1952'
    ]
  }
];
