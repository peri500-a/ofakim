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
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center text-white overflow-hidden py-24 md:py-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-gray-950"></div>
      
      <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-16">
        {/* Trust Badges - Accessibility optimized list */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 md:mb-12 animate-fade-in" aria-label="למה לבחור בנו?">
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-bold text-gray-200">100% מהנדסי בניין רשומים</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-bold text-gray-200">דוח הנדסי תוך 48 שעות</span>
           </li>
           <li className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="text-blue-500" aria-hidden="true">✓</span>
              <span className="text-xs sm:text-sm font-bold text-gray-200">ציוד תרמי מתקדם</span>
           </li>
        </ul>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter filter drop-shadow-2xl">
          <span className="block text-white mb-2">בדק בית מקצועי.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 block">
            השקט הנפשי שלך.
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-lg md:text-2xl text-gray-300 font-medium leading-relaxed drop-shadow-lg px-2">
            אל תתפשרו על פחות ממהנדס מוסמך. אנו מאתרים ליקויי בנייה נסתרים, חוסכים לכם עשרות אלפי שקלים ומבטיחים שהנכס שלכם בטוח.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
          <a 
            href="#contact" 
            onClick={handleScrollClick}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-black text-xl md:text-2xl px-12 py-5 md:px-16 md:py-7 rounded-2xl hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="הזמינו בדיקה הנדסית עכשיו"
          >
            {isLoading ? "מתחבר..." : "הזמינו בדיקה הנדסית"}
          </a>
          
          <a 
            href="tel:054-7515142" 
            className="w-full sm:w-auto px-12 py-5 md:px-16 md:py-7 font-black text-white text-xl md:text-2xl transition-all border-2 border-white/20 rounded-2xl hover:bg-white/10 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            054-7515142
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;