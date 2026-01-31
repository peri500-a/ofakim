
import React from 'react';
import Logo from './Logo';

const NotFound: React.FC = () => {
  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    // טריגר ידני לעדכון ה-State ב-App.tsx
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6 relative overflow-hidden">
      {/* Engineering Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-10">
          <div className="transform scale-150 animate-pulse-slow">
            <Logo />
          </div>
        </div>
        
        <div className="relative mb-8">
          <h1 className="text-[10rem] sm:text-[16rem] font-black text-white/5 leading-none tracking-tighter select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight drop-shadow-2xl">
              הדף עבר <br/>
              <span className="text-blue-500">שדרוג הנדסי</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl mb-12 transition-all duration-500 hover:border-blue-500/20">
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            נראה שהגעתם לכתובת ישנה או שגויה. <br/>
            האתר של <span className="text-white font-bold">אופקים הנדסה</span> התחדש במערכת אחת מתקדמת כדי להעניק לכם חוויה מקצועית ומדויקת יותר.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleGoHome}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-xl px-12 py-5 rounded-2xl transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95"
            >
              חזרה לעמוד הבית
            </button>
            <a 
              href="/#contact" 
              onClick={(e) => {
                handleGoHome(e);
                setTimeout(() => window.location.hash = '#contact', 50);
              }}
              className="w-full sm:w-auto px-12 py-5 text-xl font-bold border border-white/10 rounded-2xl hover:bg-white/5 transition-all focus:ring-2 focus:ring-blue-500"
            >
              ייעוץ עם מהנדס
            </a>
          </div>
        </div>
        
        <nav className="pt-10 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest" aria-label="קישורי עזר">
          <a href="/#services" className="hover:text-blue-400 transition-colors">שירותים</a>
          <a href="/#knowledge" className="hover:text-blue-400 transition-colors">מחירון</a>
          <a href="/#faq" className="hover:text-blue-400 transition-colors">שאלות נפוצות</a>
          <a href="/#process" className="hover:text-blue-400 transition-colors">התהליך</a>
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1.5); }
          50% { opacity: 0.8; transform: scale(1.48); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default NotFound;
