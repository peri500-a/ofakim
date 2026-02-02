
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: '#/', label: 'ראשי' },
    { 
      label: 'שירותים נבחרים', 
      isDropdown: true,
      items: [
        { href: '#/בדק-בית-מקבלן', label: 'דירה חדשה מקבלן' },
        { href: '#/בדיקת-סוף-שנת-בדק', label: 'סוף שנת בדק' },
        { href: '#/בדק-בית-לבית-פרטי-וילה', label: 'בתים פרטיים ווילות' },
        { href: '#/איתור-נזילות-ורטיבות', label: 'איתור נזילות ותרמי' },
        { href: '#/שמאות-רכוש-והערכת-נזקים', label: 'שמאות רכוש' },
        { href: '#/חוות-דעת-הנדסית-לבית-משפט', label: 'חוות דעת משפטית' }
      ]
    },
    { 
      label: 'אזורי שירות', 
      isDropdown: true,
      items: [
        { href: '#/בדק-בית-בתל-אביב', label: 'תל אביב' },
        { href: '#/בדק-בית-בירושלים', label: 'ירושלים' },
        { href: '#/בדק-בית-במרכז', label: 'כל אזור המרכז' }
      ]
    },
    { href: '#/בדק-בית-מחיר', label: 'מחירון 2026' },
    { href: '#contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Accessibility: Focus management and body scroll locking
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the close button when the menu opens
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
        if (e.key === 'Tab') {
          const focusableElements = menuRef.current?.querySelectorAll(
            'a[href], button, textarea, input, select'
          );
          if (focusableElements) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      // Return focus to the toggle button when the menu closes
      toggleButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (href.startsWith('#') && !href.startsWith('#/') && window.location.pathname === '/' && !window.location.hash.startsWith('#/')) {
        setIsMenuOpen(false);
        return;
      }

      e.preventDefault();
      window.location.hash = href.replace(/^#/, '');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#/" onClick={(e) => handleLinkClick(e, '#/')} className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1" aria-label="דף הבית - אופקים הנדסה">
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">אופקים הנדסה</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest -mt-1">Precise Engineering</span>
              </div>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-6 space-x-reverse h-full" aria-label="ניווט ראשי">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group flex items-center h-full">
                  {link.isDropdown ? (
                    <>
                      <button 
                        className="flex items-center gap-1 text-gray-300 hover:text-blue-400 font-bold py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-md px-2"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {link.label}
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <div className="absolute top-full right-0 w-64 pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-50">
                        <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-2 mt-1">
                          {link.items?.map((sub) => (
                            <a 
                              key={sub.href} 
                              href={sub.href} 
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-blue-600 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link.href!)}
                      className="text-gray-300 hover:text-blue-400 font-bold py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-md px-2"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:054-7515142" className="hidden sm:flex items-center gap-2 text-white font-black bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="התקשרו אלינו: 054-7515142">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>054-7515142</span>
              </a>
              <button 
                ref={toggleButtonRef}
                onClick={toggleMenu} 
                className="lg:hidden text-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-[60] bg-gray-950/98 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט נייד"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-6 overflow-y-auto">
          <button 
            ref={closeButtonRef}
            onClick={toggleMenu} 
            className="absolute top-6 left-6 text-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="סגור תפריט"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <div className="flex flex-col items-center gap-8 w-full">
            {navLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 w-full">
                {link.isDropdown ? (
                  <>
                    <span className="text-blue-500 font-black text-sm uppercase tracking-widest" aria-hidden="true">{link.label}</span>
                    <div className="flex flex-col items-center gap-3">
                      {link.items?.map((sub) => (
                        <a 
                          key={sub.href} 
                          href={sub.href} 
                          onClick={(e) => handleLinkClick(e, sub.href)} 
                          className="text-2xl font-black text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href!)} 
                    className="text-3xl font-black text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 w-full max-w-xs flex flex-col items-center">
            <a 
              href="tel:054-7515142" 
              className="flex items-center gap-3 bg-blue-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/40 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>054-7515142</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
