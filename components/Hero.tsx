
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
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden py-20 md:py-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80')", backgroundAttachment: 'scroll' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-gray-950 z-0"></div>
      
      {/* Subtle Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-10 md:pt-16">
        {/* Trust Badges - Mobile Optimized */}
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-8 md:mb-12 animate-fade-in" aria-label="למה לבחור בנו?">
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500 text-xs sm:text-base" aria-hidden="true">✓</span>
              <span className="text-[10px] sm:text-sm font-bold text-gray-200">מהנדס בדק בית מוסמך</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500 text-xs sm:text-base" aria-hidden="true">✓</span>
              <span className="text-[10px] sm:text-sm font-bold text-gray-200">ביקורת מבנים מקיפה</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500 text-xs sm:text-base" aria-hidden="true">✓</span>
              <span className="text-[10px] sm:text-sm font-bold text-gray-200">איתור ליקויים תרמי</span>
           </li>
        </ul>

        {/* H1 for SEO - Critical Change */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-tight md:leading-[0.9] mb-6 md:mb-8 tracking-tighter filter drop-shadow-2xl">
          <span className="block text-white mb-1">בדק בית וביקורת מבנים.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 block">
            השקט הנפשי שלך.
          </span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8 md:mb-16">
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-medium leading-relaxed drop-shadow-lg px-4">
            אל תתפשרו על פחות ממהנדס בדק בית מוסמך. אנו מאתרים ליקויי בנייה נסתרים ומבטיחים שהנכס שלכם בטוח, תקין ומוכן למגורים.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <a 
            href="#contact" 
            onClick={handleScrollClick}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-black text-lg md:text-2xl px-10 py-4 md:px-16 md:py-7 rounded-2xl hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="הזמינו בדק בית עכשיו"
          >
            {isLoading ? "מתחבר..." : "הזמינו בדק בית"}
          </a>
          
          <a 
            href="tel:054-7515142" 
            className="w-full sm:w-auto px-10 py-4 md:px-16 md:py-7 font-black text-white text-lg md:text-2xl transition-all border-2 border-white/20 rounded-2xl hover:bg-white/10 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            054-7515142
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;