
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#/', label: 'ראשי' },
    { 
      label: 'שירותים נבחרים', 
      isDropdown: true,
      items: [
        { href: '#/בדק-בית-מקבלן', label: 'בדק בית מקבלן' },
        { href: '#/איתור-נזילות-ורטיבות', label: 'איתור נזילות' },
        { href: '#/שמאות-רכוש-והערכת-נזקים', label: 'שמאות והערכת נזקים' },
        { href: '#/חוות-דעת-הנדסית-לבית-משפט', label: 'חוות דעת משפטית' }
      ]
    },
    { 
      label: 'אזורי שירות', 
      isDropdown: true,
      items: [
        { href: '#/בדק-בית-בתל-אביב', label: 'תל אביב' },
        { href: '#/בדק-בית-בירושלים', label: 'ירושלים' }
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's an internal hash route or anchor
    if (href.startsWith('#')) {
      // If it's a section anchor on the home page
      if (href.startsWith('#') && !href.startsWith('#/') && window.location.pathname === '/' && !window.location.hash.startsWith('#/')) {
        // Normal scroll behavior
        setIsMenuOpen(false);
        return;
      }

      e.preventDefault();
      
      // Update hash and trigger popstate for App.tsx to catch it
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
            <a href="#/" onClick={(e) => handleLinkClick(e, '#/')} className="group flex items-center gap-3 focus:outline-none">
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">אופקים הנדסה</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest -mt-1">Precise Engineering</span>
              </div>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-6 space-x-reverse h-full">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group flex items-center h-full">
                  {link.isDropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-300 hover:text-blue-400 font-bold py-6 focus:outline-none">
                        {link.label}
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <div className="absolute top-full right-0 w-56 pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-50">
                        <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-2 mt-1">
                          {link.items?.map((sub) => (
                            <a 
                              key={sub.href} 
                              href={sub.href} 
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-blue-600 rounded-xl transition-all"
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
                      className="text-gray-300 hover:text-blue-400 font-bold py-6"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:054-7515142" className="hidden sm:flex items-center gap-2 text-white font-black bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>054-7515142</span>
              </a>
              <button onClick={toggleMenu} className="lg:hidden text-gray-300 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`lg:hidden fixed inset-0 z-[60] bg-gray-950/98 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-6 overflow-y-auto">
          <button onClick={toggleMenu} className="absolute top-6 left-6 text-gray-400 p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          {navLinks.map((link, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              {link.isDropdown ? (
                <>
                  <span className="text-blue-500 font-black text-sm uppercase tracking-widest">{link.label}</span>
                  {link.items?.map((sub) => (
                    <a key={sub.href} href={sub.href} onClick={(e) => handleLinkClick(e, sub.href)} className="text-2xl font-black text-white">{sub.label}</a>
                  ))}
                </>
              ) : (
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href!)} className="text-3xl font-black text-white">{link.label}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
