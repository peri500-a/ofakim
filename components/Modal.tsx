
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
      // Prevent background scrolling on touch devices
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 w-full sm:max-w-2xl h-[94dvh] sm:h-auto sm:max-h-[90dvh] rounded-t-[2rem] sm:rounded-[2.5rem] border-x border-t sm:border border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all transform animate-slide-up sm:animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Handle Indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-3 mb-1"></div>

        {/* Modal Header - Optimized for Mobile */}
        <header className="flex-shrink-0 flex items-center justify-between p-4 sm:p-8 border-b border-white/5 bg-gray-900/90 backdrop-blur-xl z-20">
          <h2 className="text-xl sm:text-3xl font-black text-white leading-tight pr-1 line-clamp-1">{title || 'מידע מקצועי'}</h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all bg-white/5 flex items-center justify-center mr-2"
            aria-label="סגור"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Modal Content - Scrollable */}
        <main className="flex-grow overflow-y-auto p-4 sm:p-10 custom-scrollbar overscroll-contain bg-gray-900">
          <div className="relative max-w-full overflow-x-hidden">
            {children}
          </div>
          {/* Bottom spacing for smooth scroll end */}
          <div className="h-10"></div>
        </main>

        {/* Modal Footer - Stacked on Mobile */}
        {footer && (
          <footer className="flex-shrink-0 p-4 sm:p-8 bg-gray-950 border-t border-white/10 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] pb-[calc(env(safe-area-inset-bottom,10px)+12px)]">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
