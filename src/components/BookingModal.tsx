import React, { useEffect } from 'react';
import { BookingForm } from './BookingForm';
import { ConsultationUrgency, LegalCategory } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceCategory?: LegalCategory;
  initialServiceTitle?: string;
  initialUrgency?: ConsultationUrgency;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceCategory,
  initialServiceTitle,
  initialUrgency,
  initialNotes,
}) => {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl my-auto z-10 shadow-2xl">
        <BookingForm
          initialServiceCategory={initialServiceCategory}
          initialServiceTitle={initialServiceTitle}
          initialUrgency={initialUrgency}
          initialNotes={initialNotes}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
