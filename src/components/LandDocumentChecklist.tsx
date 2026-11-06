import React, { useState } from 'react';
import { CheckSquare, Square, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { LAND_TRANSACTION_TYPES } from '../data/legalData';

interface LandDocumentChecklistProps {
  onBookAuditWithDocuments: (typeTitle: string, checkedDocs: string[], missingDocs: string[]) => void;
}

export const LandDocumentChecklist: React.FC<LandDocumentChecklistProps> = ({ onBookAuditWithDocuments }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>(LAND_TRANSACTION_TYPES[0].id);
  const [checkedDocIds, setCheckedDocIds] = useState<Record<string, boolean>>({});

  const activeTransaction = LAND_TRANSACTION_TYPES.find(t => t.id === selectedTypeId) || LAND_TRANSACTION_TYPES[0];

  const toggleDoc = (docId: string) => {
    setCheckedDocIds(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const totalDocs = activeTransaction.documents.length;
  const checkedCount = activeTransaction.documents.filter(d => checkedDocIds[d.id]).length;

  const handleProceedToAudit = () => {
    const checked = activeTransaction.documents.filter(d => checkedDocIds[d.id]).map(d => d.name);
    const missing = activeTransaction.documents.filter(d => !checkedDocIds[d.id]).map(d => d.name);
    onBookAuditWithDocuments(activeTransaction.title, checked, missing);
  };

  return (
    <section id="document-checklist" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Buyer & Owner Due Diligence
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Land Papers & Documents Guide
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Select your property type below to review the standard legal documents required for verification before buying or registering land.
            </p>
          </div>

          {/* Simple Clean Progress Counter */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm shrink-0 flex items-center gap-6 shadow-sm">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Checked Papers
              </div>
              <div className="text-lg font-bold text-slate-900 tabular-nums">
                <span className="text-amber-800">{checkedCount}</span> of {totalDocs} Selected
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <button
              onClick={handleProceedToAudit}
              className="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-amber-800 transition-colors inline-flex items-center gap-1"
            >
              <span>Verify Papers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Transaction Type Selectors (Clean Light Segmented Tabs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {LAND_TRANSACTION_TYPES.map(trans => {
            const isSelected = trans.id === activeTransaction.id;
            return (
              <button
                key={trans.id}
                onClick={() => setSelectedTypeId(trans.id)}
                className={`text-left p-4 rounded-sm border transition-all ${
                  isSelected
                    ? 'bg-slate-50 border-amber-700 text-slate-900 shadow-sm ring-1 ring-amber-700/30'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                  Property Category
                </div>
                <div className="font-serif-title text-base font-bold text-slate-900 mb-1">
                  {trans.title}
                </div>
                <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {trans.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Checklist Items Table / Cards */}
        <div className="space-y-4 mb-10">
          {activeTransaction.documents.map((doc, index) => {
            const isChecked = !!checkedDocIds[doc.id];
            return (
              <div
                key={doc.id}
                className={`p-5 rounded-sm border transition-colors ${
                  isChecked
                    ? 'bg-emerald-50/40 border-emerald-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleDoc(doc.id)}
                      className="mt-1 text-slate-400 hover:text-amber-800 transition-colors focus:outline-none"
                      aria-label={isChecked ? `Uncheck ${doc.name}` : `Check ${doc.name}`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-700" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-mono text-amber-800 font-semibold">0{index + 1}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-500">{doc.issuingAuthority}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-700 font-medium">{doc.importance}</span>
                      </div>

                      <h3 className={`font-serif-title text-lg font-bold ${isChecked ? 'text-emerald-900 line-through decoration-emerald-700/40' : 'text-slate-900'}`}>
                        {doc.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        <strong className="text-slate-800 font-medium">Purpose:</strong> {doc.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Bench Verification Guidance (Clean, Reassuring) */}
                  <div className="md:max-w-xs shrink-0 p-3 bg-slate-50 border border-slate-200 rounded-sm">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-700" />
                      <span>Verification Check:</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.guidance}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Certified Title Opinion by Advocate Sandeep</span>
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
              Need Assistance Checking or Retrieving Land Papers?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our title team examines 30-year deed chains, inspects revenue records at the Taluk office, and issues a formal written title opinion report on Chamber letterhead.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={handleProceedToAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-sm shadow-sm whitespace-nowrap"
            >
              <span>Submit Papers for Title Check</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
