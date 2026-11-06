import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  FileText, 
  Upload, 
  ShieldCheck, 
  CheckCircle, 
  Printer, 
  MessageSquare,
  ArrowRight,
  X
} from 'lucide-react';
import { CORE_SERVICES, BENCH_CREDENTIALS } from '../data/legalData';
import { BookingSubmission, ConsultationMode, ConsultationUrgency, LegalCategory } from '../types';

interface BookingFormProps {
  initialServiceCategory?: LegalCategory;
  initialServiceTitle?: string;
  initialUrgency?: ConsultationUrgency;
  initialNotes?: string;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceCategory = 'land_scrutiny',
  initialServiceTitle = 'Land Legal Papers Checking & Title Verification',
  initialUrgency = 'standard',
  initialNotes = '',
  onClose,
  isEmbedded = false,
}) => {
  // Form State
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  
  const [serviceCategory, setServiceCategory] = useState<LegalCategory>(initialServiceCategory);
  const [serviceTitle, setServiceTitle] = useState(initialServiceTitle);
  const [consultationMode, setConsultationMode] = useState<ConsultationMode>('chambers');
  const [urgency, setUrgency] = useState<ConsultationUrgency>(initialUrgency);
  
  // Date & Time
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];
  const [preferredDate, setPreferredDate] = useState(defaultDateStr);
  const [preferredTime, setPreferredTime] = useState('11:30 AM - 12:30 PM');

  // Case description
  const [caseNotes, setCaseNotes] = useState(initialNotes);
  const [surveyNumber, setSurveyNumber] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<BookingSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCategoryChange = (cat: LegalCategory) => {
    setServiceCategory(cat);
    const firstMatching = CORE_SERVICES.find(s => s.category === cat);
    if (firstMatching) {
      setServiceTitle(firstMatching.title);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!clientName.trim()) {
      setErrorMsg('Please enter your full legal name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile phone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = `SLB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const result: BookingSubmission = {
        referenceCode: randomCode,
        clientName: clientName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        city: city.trim() || 'Not Specified',
        serviceCategory,
        serviceTitle,
        consultationMode,
        urgency,
        preferredDate,
        preferredTime,
        propertyOrCaseDetails: `${surveyNumber ? `Survey/Plot No: ${surveyNumber}. ` : ''}${caseNotes.trim() || 'Initial consultation requested.'}`,
        uploadedFileName: uploadedFile ? uploadedFile.name : undefined,
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        status: 'Scheduled'
      };

      setSubmission(result);
      setIsSubmitting(false);
    }, 450);
  };

  // WhatsApp quick text
  const getWhatsAppLink = () => {
    if (!submission) return '#';
    const text = encodeURIComponent(
      `Hello Sandeep Law Bench,\nI have booked a consultation.\nRef Code: ${submission.referenceCode}\nClient: ${submission.clientName}\nService: ${submission.serviceTitle}\nPreferred Date: ${submission.preferredDate} (${submission.preferredTime})\nMode: ${submission.consultationMode}`
    );
    return `https://wa.me/${BENCH_CREDENTIALS.chamberPhone.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  // Confirmation Slip (Clean light design)
  if (submission) {
    return (
      <div className={`bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 text-slate-900 shadow-md ${isEmbedded ? '' : 'max-h-[85vh] overflow-y-auto'}`}>
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-700">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Consultation Scheduled
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
                Booking Confirmation
              </h3>
            </div>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Reference Docket Box */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Reference Docket No.</div>
              <div className="font-mono text-xl font-bold text-slate-900 tabular-nums">
                {submission.referenceCode}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 uppercase tracking-wider">Status</div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Scheduled · Confirmed
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Client Name:</span>
              <strong className="text-slate-900">{submission.clientName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Phone Number:</span>
              <span className="text-slate-900 font-mono tabular-nums">{submission.phone}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Service:</span>
              <strong className="text-slate-900">{submission.serviceTitle}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Consultation Mode:</span>
              <span className="text-slate-800 capitalize">
                {submission.consultationMode === 'chambers' ? 'In-Person Chamber Visit' : submission.consultationMode === 'video' ? 'Video Conference (Google Meet)' : 'Document Review Desk'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Appointment Slot:</span>
              <span className="text-slate-900 font-medium">{submission.preferredDate} · {submission.preferredTime}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Attached Documents:</span>
              <span className="text-slate-800">{submission.uploadedFileName ? `Attached: ${submission.uploadedFileName}` : 'Bringing papers to consultation'}</span>
            </div>
          </div>

          {submission.propertyOrCaseDetails && (
            <div className="pt-3 border-t border-slate-200 text-xs">
              <span className="text-slate-500 block mb-0.5">Matter Details:</span>
              <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-sm border border-slate-200">
                {submission.propertyOrCaseDetails}
              </p>
            </div>
          )}
        </div>

        {/* Next Steps */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-700 space-y-1">
          <div className="font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Next Steps:</span>
          </div>
          <p>
            Our chamber coordinator will contact you at {submission.phone} to confirm the briefing schedule and provide parking directions or the video conference link.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors rounded-sm shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details via WhatsApp</span>
          </a>

          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-colors rounded-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Confirmation</span>
          </button>

          <button
            onClick={() => setSubmission(null)}
            className="w-full sm:w-auto text-xs text-slate-500 hover:text-slate-800 py-2 px-3 underline"
          >
            Book Another Slot
          </button>
        </div>
      </div>
    );
  }

  // Booking Intake Form
  return (
    <div className={`bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm ${isEmbedded ? '' : 'max-h-[85vh] overflow-y-auto'}`}>
      <div className="flex items-start justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Consultation Booking
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
            Schedule an Advocate Consultation
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Confidential appointment with Advocate Sandeep Kumar and bench associates.
          </p>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-sm text-xs text-red-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Service Category */}
        <div className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
            1. Select Practice Area
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'land_scrutiny', label: 'Land Papers Checking' },
              { id: 'property_litigation', label: 'Property Litigation' },
              { id: 'criminal_defense', label: 'Criminal Defense' },
              { id: 'registration_conveyance', label: 'Revenue & Conveyancing' },
            ].map(cat => (
              <button
                type="button"
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as LegalCategory)}
                className={`py-2 px-3 text-xs font-medium rounded-sm border text-left transition-colors whitespace-nowrap truncate ${
                  serviceCategory === cat.id
                    ? 'bg-slate-900 text-white font-semibold border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="pt-1">
            <select
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-800"
            >
              {CORE_SERVICES.filter(s => s.category === serviceCategory).map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              {CORE_SERVICES.filter(s => s.category !== serviceCategory).map(s => (
                <option key={s.id} value={s.title}>{s.categoryLabel}: {s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 2: Consultation Mode & Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              2. Consultation Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setConsultationMode('chambers')}
                className={`p-2.5 rounded-sm border text-center transition-colors flex flex-col items-center gap-1 ${
                  consultationMode === 'chambers'
                    ? 'bg-slate-50 border-amber-800 text-slate-900 ring-1 ring-amber-800/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <MapPin className="w-4 h-4 text-amber-800" />
                <span className="text-[11px] font-semibold whitespace-nowrap">Chambers</span>
              </button>
              <button
                type="button"
                onClick={() => setConsultationMode('video')}
                className={`p-2.5 rounded-sm border text-center transition-colors flex flex-col items-center gap-1 ${
                  consultationMode === 'video'
                    ? 'bg-slate-50 border-amber-800 text-slate-900 ring-1 ring-amber-800/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <Video className="w-4 h-4 text-amber-800" />
                <span className="text-[11px] font-semibold whitespace-nowrap">Video Call</span>
              </button>
              <button
                type="button"
                onClick={() => setConsultationMode('express_review')}
                className={`p-2.5 rounded-sm border text-center transition-colors flex flex-col items-center gap-1 ${
                  consultationMode === 'express_review'
                    ? 'bg-slate-50 border-amber-800 text-slate-900 ring-1 ring-amber-800/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <FileText className="w-4 h-4 text-amber-800" />
                <span className="text-[11px] font-semibold whitespace-nowrap">Document Review</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              3. Timing Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setUrgency('standard')}
                className={`p-2.5 rounded-sm border text-center transition-colors ${
                  urgency === 'standard'
                    ? 'bg-slate-50 border-amber-800 text-slate-900 ring-1 ring-amber-800/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="text-[11px] font-semibold whitespace-nowrap">Standard Slot</div>
                <div className="text-[10px] text-slate-500">Regular booking</div>
              </button>
              <button
                type="button"
                onClick={() => setUrgency('priority')}
                className={`p-2.5 rounded-sm border text-center transition-colors ${
                  urgency === 'priority'
                    ? 'bg-slate-50 border-amber-800 text-slate-900 ring-1 ring-amber-800/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="text-[11px] font-semibold whitespace-nowrap">Priority Review</div>
                <div className="text-[10px] text-slate-500">Next available window</div>
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Client Particulars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Verma"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              Mobile Phone *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="client@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-800"
            />
          </div>
        </div>

        {/* Step 4: Schedule Picker & Survey Number */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Preferred Date</span>
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>Preferred Time</span>
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-800"
            >
              <option value="10:30 AM - 11:30 AM">Morning Chamber (10:30 AM - 11:30 AM)</option>
              <option value="11:30 AM - 12:30 PM">Midday Chamber (11:30 AM - 12:30 PM)</option>
              <option value="02:30 PM - 03:30 PM">Afternoon (02:30 PM - 03:30 PM)</option>
              <option value="04:30 PM - 05:30 PM">Late Afternoon (04:30 PM - 05:30 PM)</option>
              <option value="06:00 PM - 07:00 PM">Evening Briefing (06:00 PM - 07:00 PM)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
              Survey / Plot No. (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Sy. No. 42/3 or Site #108"
              value={surveyNumber}
              onChange={(e) => setSurveyNumber(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-800"
            />
          </div>
        </div>

        {/* Step 5: Brief description */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
            Case Summary / Notes
          </label>
          <textarea
            rows={3}
            placeholder="Briefly state your requirement (e.g. pre-purchase title checking, partition advice, or deed drafting)."
            value={caseNotes}
            onChange={(e) => setCaseNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-sm p-3 text-xs sm:text-sm text-slate-900 leading-relaxed focus:bg-white focus:outline-none focus:border-slate-800"
          />
        </div>

        {/* File Attachment */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
            Attach Land Papers / Deed Scans (Optional PDF / Image)
          </label>
          <div className="border border-dashed border-slate-300 bg-slate-50 p-4 rounded-sm flex flex-col items-center justify-center text-center gap-2 hover:border-slate-400 transition-colors">
            <Upload className="w-5 h-5 text-amber-800" />
            <div className="text-xs text-slate-600">
              {uploadedFile ? (
                <span className="font-semibold text-emerald-800">Attached: {uploadedFile.name}</span>
              ) : (
                <span>Upload copy of Sale Deed, Agreement, or Khata extract</span>
              )}
            </div>
            <label className="cursor-pointer text-[11px] font-semibold uppercase tracking-wider text-slate-900 hover:text-amber-800 underline">
              Browse Files
              <input 
                type="file" 
                accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
            </label>
          </div>
        </div>

        {/* Assurance */}
        <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <span>
            <strong>Attorney-Client Privilege:</strong> All communications and uploaded documents are strictly confidential and reviewed only by the chamber legal team.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 transition-colors rounded-sm shadow-sm flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Scheduling Appointment...</span>
          ) : (
            <>
              <span>Confirm Consultation Slot</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
