import { 
  LegalService, 
  LandTransactionType, 
  CaseStudy, 
  FaqItem, 
  ConsultationTier 
} from '../types';

export const LEGAL_ASSETS = {
  heroChambers: '/src/assets/images/hero_law_chambers_1793887121363.jpg',
  advocatePortrait: '/src/assets/images/advocate_portrait_1793887123784.jpg',
  landRecords: '/src/assets/images/land_records_scrutiny_1793887122666.jpg',
  courtroomDefense: '/src/assets/images/courtroom_defense_1793887123796.jpg',
};

export const BENCH_CREDENTIALS = {
  brandName: 'Sandeep Law Bench',
  leadCounsel: 'Advocate Sandeep Kumar',
  qualifications: 'B.A. LL.B (Hons.), LL.M (Property Jurisprudence & Civil Law)',
  barCouncilNumber: 'BCI / 1492 / 2007',
  experienceYears: 18,
  titlesScrutinized: '2,800+',
  successfulMatters: '95%+',
  primaryJurisdictions: [
    'High Court of Judicature', 
    'District & Sessions Courts', 
    'Revenue Appellate Benches', 
    'Real Estate Regulatory Authority (RERA)'
  ],
  chamberPhone: '+91 98450 21789',
  chamberEmail: 'counsel@sandeeplawbench.com',
  chambersAddress: 'Suite 402-404, Juris Chambers Arcade, Court Road, Opp. High Court Annex Gate 3',
  hours: 'Monday – Saturday: 9:30 AM – 7:30 PM'
};

export const CORE_SERVICES: LegalService[] = [
  {
    id: 'title-scrutiny',
    category: 'land_scrutiny',
    categoryLabel: 'Land Papers & Due Diligence',
    title: 'Land Legal Papers Checking & Title Verification',
    subtitle: 'Thorough 30-year backward deed examination and revenue record scrutiny for property buyers and owners.',
    description: 'We review the complete chain of title deeds from the original root owner to the current seller, checking encumbrances, revenue mutation records, court records, and layout sanctions so your purchase is fully protected.',
    keyDeliverables: [
      '30-year continuous title deed chain verification (Mother deed to current owner)',
      'Sub-Registrar Encumbrance Certificate (EC Form 15 & 16) examination',
      'Revenue records audit (Patta / Khata / Pahani / 7-12 / Mutation register)',
      'Verification of conversion orders and approved town planning layout sanctions',
      'Official stamped Legal Title Opinion report on Chamber letterhead'
    ],
    applicableStatutes: [
      'Transfer of Property Act, 1882',
      'Registration Act, 1908',
      'State Land Revenue Codes'
    ],
    featured: true,
  },
  {
    id: 'property-litigation',
    category: 'property_litigation',
    categoryLabel: 'Property Litigation',
    title: 'Property Litigation & Land Dispute Resolution',
    subtitle: 'Representation in title disputes, boundary encroachments, partition suits, and ownership claims.',
    description: 'Our civil litigation team represents clients in civil courts and tribunals for declaration of ownership title, permanent injunctions to safeguard possession, partition of ancestral properties, and eviction matters.',
    keyDeliverables: [
      'Civil suits for Declaration of Ownership & Confirmation of Possession',
      'Temporary Injunctions (Order 39 CPC) to protect boundaries and prevent unauthorized construction',
      'Partition suits for ancestral family land and joint property settlement',
      'Resolution of boundary disputes through court-appointed commissioner surveys',
      'Defense and challenge regarding disputed wills, agreements, and power of attorney'
    ],
    applicableStatutes: [
      'Code of Civil Procedure, 1908',
      'Specific Relief Act, 1963',
      'Limitation Act, 1963'
    ],
    featured: true,
  },
  {
    id: 'criminal-defense',
    category: 'criminal_defense',
    categoryLabel: 'Criminal Defense',
    title: 'Criminal Defense & Trial Representation',
    subtitle: 'Defense advocacy in trial courts and High Courts for bail petitions, property fraud matters, and criminal trials.',
    description: 'We handle regular bail and anticipatory bail petitions, trial defense in criminal courts, petitions for quashing of FIRs under Section 482 CrPC / BNSS, and legal defense in property fraud and cheating cases.',
    keyDeliverables: [
      'Anticipatory Bail & Regular Bail petitions before Sessions Court & High Court',
      'Petitions for quashing of unwarranted or disputed FIRs (Section 482)',
      'Defense in property-related cheating (Section 420), forgery, and contract allegations',
      'Representation during police inquiry and court hearings',
      'Criminal trial defense and appellate proceedings'
    ],
    applicableStatutes: [
      'Code of Criminal Procedure / BNSS',
      'Indian Penal Code / BNS',
      'State Land Grabbing (Prohibition) Acts'
    ],
    featured: true,
  },
  {
    id: 'revenue-conversion',
    category: 'registration_conveyance',
    categoryLabel: 'Revenue & Land Records',
    title: 'Revenue Records, Mutation & Land Conversion',
    subtitle: 'Assistance with Patta, Khata mutation, agricultural land conversion, and revenue office procedures.',
    description: 'Assisting landowners with formal name mutation in government revenue records, obtaining agricultural to non-agricultural (NA / DC) land conversion orders, and handling revenue appeals before the Tahsildar and Assistant Commissioner.',
    keyDeliverables: [
      'Agricultural to Non-Agricultural (NA / DC) conversion processing',
      'Name mutation in Khata, Patta, and Jamabandi records',
      'Revenue boundary demarcation and official survey applications',
      'Appeals against rejected or disputed revenue mutations',
      'Regularization of revenue documentation'
    ],
    applicableStatutes: [
      'State Land Revenue Act',
      'Survey & Boundaries Act'
    ],
    featured: false,
  },
  {
    id: 'deed-drafting-registration',
    category: 'registration_conveyance',
    categoryLabel: 'Conveyancing & Registration',
    title: 'Deed Drafting, Conveyancing & Sub-Registrar Registration',
    subtitle: 'Drafting of Sale Deeds, Gift Deeds, Family Settlements, and Sub-Registrar office assistance.',
    description: 'Drafting clear, balanced legal documents with standard covenants and indemnity clauses. We assist clients during the registration process at the Sub-Registrar office to ensure a smooth, compliant transfer of property.',
    keyDeliverables: [
      'Drafting of Absolute Sale Deeds, Agreements of Sale, and Construction Agreements',
      'Family Settlement Deeds, Partition Deeds, and Relinquishment Deeds',
      'Drafting of Special Power of Attorney (SPA) and General Power of Attorney (GPA)',
      'Stamp duty evaluation and registration checklist preparation',
      'In-person advocate guidance during Sub-Registrar office registration'
    ],
    applicableStatutes: [
      'Registration Act, 1908',
      'Indian Stamp Act',
      'Indian Contract Act, 1872'
    ],
    featured: false,
  }
];

export const LAND_TRANSACTION_TYPES: LandTransactionType[] = [
  {
    id: 'agricultural',
    title: 'Agricultural Land / Farmland',
    description: 'Standard checklist for purchasing agricultural parcels, verifying farmer lineage, and revenue titles.',
    documents: [
      {
        id: 'ag-1',
        name: 'RTC / Pahani / 7-12 Extract (Last 30 Years)',
        issuingAuthority: 'Village Revenue Office / Tahsildar',
        importance: 'Required',
        purpose: 'Confirms recorded ownership, cultivation status, soil classification, and absence of bank hypothecation.',
        guidance: 'Our bench verifies whether current cultivation matches the revenue record and reviews past 30 years of entries.'
      },
      {
        id: 'ag-2',
        name: 'Mutation Register Extract',
        issuingAuthority: 'Taluk Revenue Office',
        importance: 'Essential',
        purpose: 'Documents how the property transitioned through inheritance, partition, or previous sales.',
        guidance: 'Ensures all legal predecessors and legal heirs consented to prior ownership transfers.'
      },
      {
        id: 'ag-3',
        name: 'Encumbrance Certificate (30-Year Form 15)',
        issuingAuthority: 'Sub-Registrar Office',
        importance: 'Required',
        purpose: 'Verifies that no registered mortgages, liens, or third-party attachments exist on the land.',
        guidance: 'We verify both online and physical records for complete 30-year continuity.'
      },
      {
        id: 'ag-4',
        name: 'Village Cadastral Map & Survey Tippani',
        issuingAuthority: 'Survey & Settlement Department',
        importance: 'Recommended',
        purpose: 'Confirms physical access paths, cart track easements, and exact survey boundary coordinates.',
        guidance: 'Helps prevent boundary overlaps with neighboring agricultural lands.'
      }
    ]
  },
  {
    id: 'residential_plot',
    title: 'Residential Layout Plot / Site',
    description: 'Key documents to verify for plotted developments, layout approvals, and conversion clearances.',
    documents: [
      {
        id: 'res-1',
        name: 'Official Conversion Order (NA / DC Conversion)',
        issuingAuthority: 'District Collector / Deputy Commissioner',
        importance: 'Required',
        purpose: 'Confirms the land has legal permission to be used for residential rather than agricultural purposes.',
        guidance: 'We verify the conversion challan, order number, and compliance with zoning conditions.'
      },
      {
        id: 'res-2',
        name: 'Approved Town Planning Layout Sanction',
        issuingAuthority: 'BDA / DTCP / HMDA / Local Planning Body',
        importance: 'Required',
        purpose: 'Validates that the specific plot number is legally approved and designated for private ownership.',
        guidance: 'Ensures the plot is not located in reserved civic amenity, park, or future road widening areas.'
      },
      {
        id: 'res-3',
        name: 'Mother Title Deed & Predecessor Deeds',
        issuingAuthority: 'Registered at Sub-Registrar Office',
        importance: 'Essential',
        purpose: 'Establishes the developer’s or seller’s root title and authorization to convey the plot.',
        guidance: 'Our team examines the chain of title leading up to the layout formation.'
      },
      {
        id: 'res-4',
        name: 'Latest Tax Paid Receipts & Khata Certificate',
        issuingAuthority: 'Municipal Corporation / Local Body',
        importance: 'Required',
        purpose: 'Demonstrates active municipal recognition and clear property tax status.',
        guidance: 'Verifies that all property dues are clear up to the current assessment year.'
      }
    ]
  },
  {
    id: 'apartment',
    title: 'Apartment / Builder Flat',
    description: 'Document requirements for purchasing flats in multi-unit complexes or high-rises.',
    documents: [
      {
        id: 'apt-1',
        name: 'Sanctioned Building Plan & Commencement Certificate',
        issuingAuthority: 'Municipal Corporation / Planning Authority',
        importance: 'Required',
        purpose: 'Confirms the building conforms to permissible Floor Area Ratio (FAR) and setback norms.',
        guidance: 'We cross-reference the flat floor plan against the approved municipal drawing.'
      },
      {
        id: 'apt-2',
        name: 'Occupancy Certificate (OC) / Completion Certificate',
        issuingAuthority: 'Municipal Town Planning Directorate',
        importance: 'Essential',
        purpose: 'Certifies that the construction is completed according to safety and building codes.',
        guidance: 'Essential for lawful habitation and securing permanent utility connections.'
      },
      {
        id: 'apt-3',
        name: 'RERA Project Registration Certificate',
        issuingAuthority: 'State Real Estate Regulatory Authority',
        importance: 'Required',
        purpose: 'Confirms the project is registered with RERA with declared delivery timelines.',
        guidance: 'We review project disclosures, title certificates, and quarterly updates on the RERA portal.'
      },
      {
        id: 'apt-4',
        name: 'Undivided Share (UDS) Calculation in Mother Deed',
        issuingAuthority: 'Developer & Sub-Registrar',
        importance: 'Required',
        purpose: 'Establishes the exact proportional ownership of the underlying land tied to the flat.',
        guidance: 'Ensures the total UDS across all flats does not exceed 100% of the land area.'
      }
    ]
  },
  {
    id: 'ancestral_partition',
    title: 'Inherited Ancestral Land',
    description: 'Essential papers for family properties, succession, and inherited estates.',
    documents: [
      {
        id: 'anc-1',
        name: 'Genealogical Tree Certificate (Family Lineage)',
        issuingAuthority: 'Tahsildar / Village Revenue Officer',
        importance: 'Required',
        purpose: 'Documents all living and deceased legal heirs entitled to a share in the family estate.',
        guidance: 'We ensure all legal heirs, including daughters and surviving spouses, are properly accounted for.'
      },
      {
        id: 'anc-2',
        name: 'Registered Partition Deed or Family Settlement',
        issuingAuthority: 'Sub-Registrar Office',
        importance: 'Essential',
        purpose: 'Provides formal registered proof of who received specific portions or survey numbers.',
        guidance: 'Replaces oral understandings with clear, legally binding title.'
      },
      {
        id: 'anc-3',
        name: 'Certified Death Certificates of Predecessors',
        issuingAuthority: 'Registrar of Births & Deaths',
        importance: 'Required',
        purpose: 'Formally establishes when inheritance rights opened for the succeeding generation.',
        guidance: 'Required by revenue and registration authorities to update mutation records.'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Restoration of Ancestral Farmland & Resolution of Unauthorized Sale',
    category: 'Property Litigation',
    court: 'Civil Court & High Court Appellate Bench',
    propertyScaleOrCharge: '6.2 Acres Agricultural Land',
    matterSummary: 'Client discovered an unauthorized conveyance of family land executed using a contested power of attorney.',
    legalApproach: 'Advocate Sandeep filed a suit for declaration of title and temporary injunction, presenting handwriting and revenue records to demonstrate title continuity.',
    finalOutcome: 'The court ruled in favor of our client, confirming their rightful ownership and restoring complete possession in revenue records.',
    duration: 'Civil Suit Resolution'
  },
  {
    id: 'case-2',
    title: 'Pre-Purchase Title Scrutiny Uncovering Undisclosed Prior Charge',
    category: 'Land Scrutiny',
    court: 'Sub-Registrar Title Audit & Bank Records',
    propertyScaleOrCharge: 'Commercial Corner Site',
    matterSummary: 'A prospective buyer was preparing to sign a sale agreement with a vendor presenting an incomplete 5-year online certificate.',
    legalApproach: 'Our title team conducted a full 30-year manual audit at the Sub-Registrar office, identifying an active prior charge recorded in historic manual volumes.',
    finalOutcome: 'Client was saved from paying advances on an encumbered parcel and successfully purchased a verified, unencumbered alternative property.',
    duration: '4 Days Title Audit'
  },
  {
    id: 'case-3',
    title: 'Regularization & Bail Relief in Property Agreement Dispute',
    category: 'Criminal Defense',
    court: 'Sessions Court & High Court',
    propertyScaleOrCharge: 'Commercial Agreement Dispute',
    matterSummary: 'A property developer faced a private criminal complaint arising from a civil contract disagreement over boundary demarcation.',
    legalApproach: 'Advocate Sandeep appeared before the court, established that the dispute was civil in nature with clear registered deeds, and secured immediate bail protection.',
    finalOutcome: 'Court granted anticipatory bail without custodial condition and directed parties toward civil settlement.',
    duration: 'Prompt Judicial Relief'
  }
];

export const CONSULTATION_TIERS: ConsultationTier[] = [
  {
    id: 'title-scrutiny-package',
    name: '30-Year Land Title Audit Package',
    badge: 'Popular for Property Buyers',
    subtitle: 'Complete legal verification of property documents before signing agreements or paying advances.',
    fee: '₹12,500',
    timeline: '3 to 5 Working Days',
    mode: 'Chambers or Digital Delivery',
    deliverables: [
      '30-year backward deed chain verification (Mother deed to current owner)',
      'Sub-Registrar Encumbrance Certificate (EC 15 & 16) examination',
      'Revenue records audit (Khata / Patta / Pahani / Mutation registers)',
      'Layout approval & conversion order validity check',
      'Official stamped Legal Title Opinion Report on Chamber letterhead',
      'One-on-one 45-minute consultation to walk through findings'
    ],
    ctaText: 'Book Title Audit',
    isPopular: true,
  },
  {
    id: 'litigation-strategy-call',
    name: 'Property Case Evaluation & Strategy',
    subtitle: 'For active property disputes, partition matters, or boundary issues.',
    fee: '₹4,500',
    timeline: 'Next Available Slot',
    mode: 'Chambers or Video Call',
    deliverables: [
      'Review of your court documents, plaint, notices, or title papers',
      'Direct consultation with Senior Counsel Sandeep Kumar',
      'Clear evaluation of legal standing and court remedies',
      'Litigation roadmap, expected timelines, and procedure steps',
      'Guidance on preliminary injunctions or legal notices'
    ],
    ctaText: 'Schedule Case Review',
    isPopular: false,
  },
  {
    id: 'general-consultation',
    name: 'Advocate Legal Consultation',
    subtitle: 'Direct legal guidance for criminal defense matters, deed drafting, or revenue questions.',
    fee: '₹3,000',
    timeline: 'Within 24 Hours',
    mode: 'In-Person Chambers or Video',
    deliverables: [
      '30-minute focused consultation with senior bench advocate',
      'Assessment of criminal, revenue, or registration questions',
      'Immediate advice on next procedural steps',
      'Review of essential notices or FIR briefs',
      'Direct contact with the chamber team'
    ],
    ctaText: 'Book Consultation',
    isPopular: false,
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Land Papers',
    question: 'Why is a 30-year title search recommended when buying property?',
    answer: 'A 30-year title search traces the history of ownership across generations. It confirms that the original mother deed was validly executed, that previous owners held legal rights to convey the property, and that there are no unrecorded family partition disputes, bank mortgages, or court attachments affecting the land.'
  },
  {
    id: 'faq-2',
    category: 'Land Papers',
    question: 'Can land be purchased using only a General Power of Attorney (GPA)?',
    answer: 'Under Indian law and the landmark Supreme Court ruling in Suraj Lamp & Industries, transfers through GPA, Sale Agreement, or Will do not confer legal ownership title. A valid transfer of immovable property must be completed through a registered Sale Deed executed at the Sub-Registrar office.'
  },
  {
    id: 'faq-3',
    category: 'Property Litigation',
    question: 'What is the role of an injunction order in a property dispute?',
    answer: 'An injunction order (under Order 39 of the Code of Civil Procedure) is issued by a civil court to preserve the status quo of a property. It prevents either party from altering the land, raising unauthorized constructions, or transferring possession to third parties while the main ownership suit is pending.'
  },
  {
    id: 'faq-4',
    category: 'Property Litigation',
    question: 'What is the difference between Sub-Registrar Registration and Revenue Mutation?',
    answer: 'Registration before the Sub-Registrar records the legal deed of transfer under the Registration Act. Revenue Mutation (updating the Patta, Khata, or RTC) is the subsequent administrative entry in government revenue records that recognizes the new owner for property tax and municipal identification. Both steps are necessary for clean title.'
  },
  {
    id: 'faq-5',
    category: 'Criminal Defense',
    question: 'What matters are covered under the Criminal Defense practice?',
    answer: 'Our bench represents clients in anticipatory bail petitions, regular bail hearings, trial defense in Sessions and Magistrate courts, quashing petitions in the High Court, and defense against property cheating (Section 420) or contractual fraud allegations.'
  },
  {
    id: 'faq-6',
    category: 'Consultations',
    question: 'Can I book a consultation online if I reside in another city or abroad?',
    answer: 'Yes. We regularly consult with outstation clients and NRI property owners. You can share scanned documents securely through our consultation form, and we conduct video conferences via Google Meet, followed by written legal opinions.'
  }
];
