
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, footer }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 w-full max-w-2xl rounded-[2.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all transform scale-100"
        style={{ 
          maxHeight: 'calc(90dvh - 20px)',
          marginBottom: 'env(safe-area-inset-bottom, 20px)' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-gray-900 z-20">
          <h2 className="text-xl md:text-3xl font-black text-white leading-tight">{title || 'מידע מקצועי'}</h2>
          <button
            onClick={onClose}
            className="p-3 rounded-2xl text-gray-400 hover:bg-white/10 hover:text-white transition-all bg-white/5 shadow-inner"
            aria-label="סגור"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Modal Content - Scrollable */}
        <main className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar bg-gray-900 scroll-smooth">
          {children}
          {/* Bottom spacing for content safety */}
          <div className="h-10"></div>
        </main>

        {/* Modal Footer - Static & Always Visible */}
        {footer && (
          <footer className="flex-shrink-0 p-6 md:p-8 bg-gray-950 border-t border-white/10 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] pb-[calc(env(safe-area-inset-bottom,20px)+24px)] md:pb-8">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
