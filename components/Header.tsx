import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: '#/', label: 'ראשי' },
    { 
      label: 'שירותים נבחרים', 
      isDropdown: true,
      items: [
        { href: '#/בדק-בית-מקבלן', label: 'דירה חדשה מקבלן' },
        { href: '#/בדק-בית-יד-שנייה', label: 'דירות יד שנייה' },
        { href: '#/בדיקת-סוף-שנת-בדק', label: 'סוף שנת בדק' },
        { href: '#/בדק-בית-לבית-פרטי-וילה', label: 'בתים פרטיים ווילות' },
        { href: '#/איתור-נזילות-ורטיבות', label: 'איתור נזילות ותרמי' },
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
    { href: '#/נגישות', label: 'הצהרת נגישות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation and Focus Trap for Mobile Menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const focusableElements = menuRef.current?.querySelectorAll('a, button');
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
        if (e.key === 'Tab') {
          const els = menuRef.current?.querySelectorAll('a, button');
          if (!els) return;
          const first = els[0] as HTMLElement;
          const last = els[els.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === first) {
            last.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        toggleButtonRef.current?.focus();
      };
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      setIsMenuOpen(false);
      const targetId = href.replace(/^#\//, '').replace(/^#/, '');
      if (targetId === '' || targetId === '/') {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        window.location.hash = '';
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href.startsWith('#/')) {
        e.preventDefault();
        window.location.hash = href.replace(/^#/, '');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const shareData = {
    title: document.title,
    text: 'בדק בית וביקורת מבנים מקצועית - אופקים הנדסה',
    url: window.location.href,
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed', err);
        setIsShareOpen(!isShareOpen);
      }
    } else {
      setIsShareOpen(!isShareOpen);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShareOpen(false);
    alert('הקישור הועתק ללוח!');
  };

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

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Share Button */}
              <div className="relative" ref={shareRef}>
                <button 
                  onClick={handleShareClick}
                  className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-label="שתף דף זה"
                  aria-expanded={isShareOpen}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>

                {isShareOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-2 z-[60] animate-slide-up origin-top-left">
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-green-600/20 rounded-xl transition-all"
                    >
                      <span className="text-green-500">WhatsApp</span>
                    </a>
                    <a 
                      href={`mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + '\n' + shareData.url)}`}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-blue-600/20 rounded-xl transition-all"
                    >
                      <span>אימייל</span>
                    </a>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                    >
                      <span>העתק קישור</span>
                    </button>
                  </div>
                )}
              </div>

              <a href="tel:054-7515142" className="hidden sm:flex items-center gap-2 text-white font-black bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="התקשרו אלינו: 054-7515142">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>054-7515142</span>
              </a>
              <button 
                ref={toggleButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
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

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-[60] bg-gray-950/98 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
      >
        <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 left-6 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="סגור תפריט"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <nav className="flex flex-col gap-6 text-right">
            {navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-white/5 pb-4">
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <span className="block text-gray-500 text-xs font-black uppercase tracking-widest">{link.label}</span>
                    <div className="flex flex-col gap-4 pr-4">
                      {link.items?.map((sub) => (
                        <a 
                          key={sub.href} 
                          href={sub.href} 
                          onClick={(e) => handleLinkClick(e, sub.href)}
                          className="text-xl font-bold text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 inline-block"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href!)}
                    className="text-2xl font-black text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 inline-block"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto pt-10 text-center flex flex-col gap-4">
            <button 
              onClick={handleShareClick}
              className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              שתפו עם חברים
            </button>
            <a href="tel:054-7515142" className="flex items-center justify-center gap-4 bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/40 text-xl focus:outline-none focus:ring-4 focus:ring-blue-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               054-7515142
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;