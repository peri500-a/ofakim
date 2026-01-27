
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '#services', label: 'שירותים' },
    { href: '#why-us', label: 'למה אנחנו?' },
    { href: '#process', label: 'התהליך' },
    { href: '#knowledge', label: 'מרכז ידע' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  // Handle scroll state for styling - Sticky behavior is defined by 'fixed top-0'
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-950/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/10' 
        : 'bg-transparent py-5 md:py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3 transition-transform duration-300 hover:scale-105">
            <Logo />
            <span className="text-lg md:text-2xl font-black tracking-tighter text-blue-400">אופקים הנדסה</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-blue-400 font-bold transition-colors duration-300 text-sm lg:text-base">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white font-black px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/20">
            הצעת מחיר חינם
          </a>

          <div className="md:hidden">
            <button 
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-300 p-2 rounded-xl bg-gray-800/50 border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-950/98 backdrop-blur-2xl border-t border-white/10 py-8 px-6 shadow-2xl animate-in slide-in-from-top duration-300"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-200 text-xl font-black hover:text-blue-400 px-4 py-4 rounded-2xl bg-white/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-blue-600 text-white font-black text-center text-xl py-5 rounded-2xl shadow-xl shadow-blue-600/20"
                onClick={() => setIsMenuOpen(false)}
              >
                הצעת מחיר חינם
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
