
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setIsLoading(true);
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsLoading(false), 800);
    }
  };

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden py-24 md:py-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80')", backgroundAttachment: 'scroll' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-gray-950 z-0"></div>
      
      {/* Subtle Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      <div className="relative container mx-auto px-6 text-center z-10 pt-12 md:pt-20">
        
        {/* H1 for SEO - Fluid Typography */}
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] md:leading-[0.9] mb-6 md:mb-10 tracking-tighter filter drop-shadow-2xl animate-slide-up max-w-5xl mx-auto">
          <span className="block text-white mb-2">בדק בית וביקורת מבנים.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 block">
            השקט הנפשי שלך.
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed drop-shadow-lg px-2">
            אל תתפשרו על פחות ממהנדס רשוי המשמש מומחה מטעם בתי משפט. איתור ליקויי בניה מצריך הכשרה וניסיון רב.
          </p>
        </div>

        {/* Trust Badges - Improved wrapping for small screens */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 md:mb-16 animate-fade-in" aria-label="למה לבחור בנו?">
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg hover:bg-white/10 transition-colors">
              <span className="text-blue-500 text-sm sm:text-base" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-black text-gray-200 uppercase tracking-wide">מהנדס מוסמך</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg hover:bg-white/10 transition-colors">
              <span className="text-blue-500 text-sm sm:text-base" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-black text-gray-200 uppercase tracking-wide">ביקורת מקיפה</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg hover:bg-white/10 transition-colors">
              <span className="text-blue-500 text-sm sm:text-base" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-black text-gray-200 uppercase tracking-wide">איתור תרמי</span>
           </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 max-w-lg sm:max-w-none mx-auto">
          <a 
            href="#contact" 
            onClick={handleScrollClick}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-black text-lg md:text-2xl px-10 py-5 md:px-16 md:py-7 rounded-2xl hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="הזמינו בדק בית עכשיו"
          >
            {isLoading ? "מתחבר..." : "הזמינו בדק בית"}
          </a>
          
          <a 
            href="tel:054-7515142" 
            className="w-full sm:w-auto px-10 py-5 md:px-16 md:py-7 font-black text-white text-lg md:text-2xl transition-all border-2 border-white/10 rounded-2xl hover:bg-white/10 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-blue-500 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            054-7515142
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
