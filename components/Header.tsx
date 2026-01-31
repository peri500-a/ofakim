
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { href: '/', label: 'ראשי' },
    { href: '#services', label: 'שירותים' },
    { href: '/בדק-בית-מחיר', label: 'מחירון 2024', isSpecial: true },
    { href: '#process', label: 'התהליך' },
    { href: '#contact', label: 'צור קשר' },
    { href: '#accessibility', label: 'נגישות', isAccessibility: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  // Fix for error on line 78: Cannot find name 'toggleMenu'
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 z-[100] bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
        דלג לתוכן המרכזי
      </a>

      <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="group flex items-center gap-3 md:gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1.5 transition-all" aria-label="אופקים הנדסה - דף הבית">
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">אופקים הנדסה</span>
                <span className="text-[10px] md:text-xs font-bold text-blue-500/80 uppercase tracking-[0.3em] -mt-1 group-hover:text-blue-400 transition-colors">Precise Engineering</span>
              </div>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-6 space-x-reverse" role="navigation" aria-label="תפריט ראשי">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-1.5 transition-all duration-300 text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 hover:scale-105 active:scale-95 ${
                    link.isSpecial 
                      ? 'text-yellow-500 font-black' 
                      : link.isAccessibility 
                      ? 'text-blue-400 font-extrabold border border-blue-500/20 bg-blue-500/5' 
                      : 'text-gray-300 hover:text-blue-400 font-bold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:054-7515142" className="hidden sm:flex items-center gap-2 text-white font-black bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-xl hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 group">
                <svg className="w-4 h-4 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>054-7515142</span>
              </a>
              <button onClick={toggleMenu} className="lg:hidden text-gray-300 p-2 rounded-xl bg-gray-800/50 border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט ניווט"} aria-expanded={isMenuOpen}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[60] bg-gray-950/98 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <button 
            onClick={toggleMenu} 
            className="absolute top-6 left-6 text-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="סגור תפריט"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div className="mb-8">
            <Logo />
          </div>

          <nav className="flex flex-col items-center space-y-6" role="navigation" aria-label="תפריט ניווט נייד">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-2xl font-black transition-colors ${
                  link.isSpecial 
                    ? 'text-yellow-500' 
                    : link.isAccessibility 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a 
            href="tel:054-7515142" 
            className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-xl shadow-blue-600/20 active:scale-95 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            054-7515142
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
