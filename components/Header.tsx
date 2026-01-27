import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: '#services', label: 'שירותים' },
    { href: '#why-us', label: 'למה אנחנו?' },
    { href: '#process', label: 'התהליך' },
    { href: '#knowledge', label: 'מרכז ידע' },
    { href: '#contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content Link - Accessibility Essential */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 z-[100] bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
      >
        דלג לתוכן המרכזי
      </a>

      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-950/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/10' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 md:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1" aria-label="אופקים הנדסה - דף הבית">
              <Logo />
              <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-400">אופקים הנדסה</span>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-6 space-x-reverse" role="navigation" aria-label="תפריט ראשי">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300 text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href="tel:054-7515142" 
                className="hidden sm:flex items-center gap-2 text-white font-black bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-xl hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>054-7515142</span>
              </a>
              <a 
                href="#contact" 
                className="hidden md:inline-block bg-blue-600 text-white font-black px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                הזמינו בדק בית
              </a>

              <button 
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden text-gray-300 p-2 rounded-xl bg-gray-800/50 border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-950 border-t border-white/10 py-8 px-6 animate-in slide-in-from-top duration-300 shadow-2xl">
              <nav className="flex flex-col space-y-4 text-center" aria-label="תפריט נייד">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-gray-200 text-xl font-black py-2 focus:text-blue-400 focus:outline-none" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="tel:054-7515142" className="bg-white/5 text-blue-400 font-black text-xl py-4 rounded-2xl border border-white/10 focus:bg-blue-600 focus:text-white focus:outline-none">
                  התקשרו: 054-7515142
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;