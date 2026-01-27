
import React from 'react';
import Logo from './Logo';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-12">
          <div className="transform scale-150">
            <Logo />
          </div>
        </div>
        
        <h1 className="text-8xl sm:text-9xl font-black text-white/10 mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
          הדף שחיפשתם <br/>
          <span className="text-blue-500">עבר שדרוג הנדסי</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          האתר של אופקים הנדסה התחדש. כל המידע המקצועי, המחירונים והמדריכים הועברו לעמוד הראשי החדש שלנו כדי להעניק לכם חוויה טובה יותר.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-xl px-12 py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20"
          >
            חזרה לעמוד הראשי
          </a>
          <a 
            href="/#contact" 
            className="w-full sm:w-auto px-12 py-5 text-xl font-bold border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
          >
            דברו עם מהנדס
          </a>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
          <a href="/#services" className="hover:text-blue-400">שירותי בדק</a>
          <a href="/#knowledge" className="hover:text-blue-400">מחירון 2026</a>
          <a href="/#faq" className="hover:text-blue-400">שאלות נפוצות</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
