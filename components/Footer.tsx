
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (href.startsWith('#') && !href.startsWith('#/') && (window.location.pathname === '/' || window.location.hash === '#/')) {
        return;
      }

      e.preventDefault();
      window.location.hash = href.replace(/^#/, '');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <a 
            href="#/" 
            onClick={(e) => handleLinkClick(e, '#/')}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <Logo />
            <span className="text-2xl font-black text-blue-400">אופקים הנדסה</span>
          </a>
          
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-gray-400 font-bold" aria-label="ניווט תחתון">
            <a href="#/services" onClick={(e) => handleLinkClick(e, '#/services')} className="hover:text-blue-400 transition-colors">שירותים</a>
            <a href="#/בדק-בית-מחיר" onClick={(e) => handleLinkClick(e, '#/בדק-בית-מחיר')} className="hover:text-blue-400 transition-colors">מחירון 2026</a>
            <a href="#/privacy-policy" onClick={(e) => handleLinkClick(e, '#/privacy-policy')} className="hover:text-blue-400 transition-colors">מדיניות פרטיות</a>
            <a 
              href="#/נגישות" 
              onClick={(e) => handleLinkClick(e, '#/נגישות')} 
              className="flex items-center gap-2 text-white bg-blue-600/10 border border-blue-500/30 px-5 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all underline decoration-blue-500/50 decoration-2 underline-offset-8 focus:ring-2 focus:ring-blue-500"
              aria-label="הצהרת נגישות"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              הצהרת נגישות
            </a>
            <a href="#/contact" onClick={(e) => handleLinkClick(e, '#/contact')} className="hover:text-blue-400 transition-colors">צור קשר</a>
          </nav>

          <div className="w-full max-w-2xl h-px bg-white/5"></div>

          <div className="text-gray-500 text-sm flex flex-col items-center gap-4 text-center">
            <span>&copy; {new Date().getFullYear()} אופקים הנדסה - שירותי בדק בית וביקורת מבנים. כל הזכויות שמורות.</span>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="עמוד הפייסבוק שלנו">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
