
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 w-full max-w-2xl rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all transform scale-100"
        style={{ 
          maxHeight: '92dvh',
          marginBottom: 'env(safe-area-inset-bottom, 0px)' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="flex-shrink-0 flex items-center justify-between p-4 md:p-8 border-b border-white/5 bg-gray-900/80 backdrop-blur-xl z-20">
          <h2 className="text-lg md:text-3xl font-black text-white leading-tight pr-1 line-clamp-1">{title || 'מידע מקצועי'}</h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 md:p-3 rounded-xl md:rounded-2xl text-gray-400 hover:bg-white/10 hover:text-white transition-all bg-white/5 shadow-inner mr-2"
            aria-label="סגור"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Modal Content - Scrollable */}
        <main className="flex-grow overflow-y-auto p-4 md:p-10 custom-scrollbar bg-gray-900 scroll-smooth">
          <div className="relative">
            {children}
          </div>
          <div className="h-8"></div>
        </main>

        {/* Modal Footer - Static & Always Visible */}
        {footer && (
          <footer className="flex-shrink-0 p-4 md:p-8 bg-gray-950 border-t border-white/10 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] pb-[calc(env(safe-area-inset-bottom,10px)+16px)] md:pb-8">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
