
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      setIsLoading(true);
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center text-white overflow-hidden py-16 md:py-0" style={{ backgroundImage: "url('https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}>
      {/* Enhanced overlay for maximum text clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-gray-950"></div>
      
      {/* Radial spotlight effect behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.2)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
        {/* Main Header - Dramatic enhancement */}
        <h1 className="text-[3.25rem] sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1] md:leading-[0.9] mb-8 md:mb-10 tracking-tighter filter drop-shadow-[0_20px_30px_rgba(0,0,0,1)] animate-fade-in">
          <span className="block text-white mb-2 md:mb-4 opacity-100">בדק בית מקצועי.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 block">
            השקט הנפשי שלך.
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed drop-shadow-lg px-2">
            אל תבצעו את הרכישה הגדולה בחייכם בעיניים עצומות. 
            <span className="block md:inline mt-2 md:mt-0 text-gray-400"> אנו מאתרים ליקויי בנייה נסתרים וחוסכים לכם כסף, זמן ודאגות מיותרות.</span>
          </p>
        </div>

        {/* Quick Contact Widget - Modernized */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <a 
            href="tel:054-7515142" 
            className="flex items-center gap-5 md:gap-8 bg-white/5 backdrop-blur-3xl px-8 py-5 md:px-12 md:py-7 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group shadow-2xl shadow-black/80 transform hover:-translate-y-2 duration-500"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-600/50">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-[10px] md:text-xs text-blue-400 font-black uppercase tracking-[0.2em] mb-1">שיחת ייעוץ הנדסית</p>
              <p className="text-2xl md:text-5xl font-black text-white tracking-tighter leading-none">054-7515142</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
          <a 
            href="#contact" 
            onClick={handleScrollClick}
            className={`w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-black text-xl md:text-2xl px-12 py-5 md:px-16 md:py-7 rounded-2xl hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.5)] ${
              isLoading ? 'cursor-not-allowed opacity-75' : ''
            }`}
            aria-disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'הזמינו בדיקה עכשיו'
            )}
          </a>
          
          <a 
            href="#services" 
            className="w-full sm:w-auto px-12 py-5 md:px-16 md:py-7 font-black text-white text-xl md:text-2xl transition-all border-2 border-white/20 rounded-2xl hover:bg-white hover:text-gray-950 backdrop-blur-md shadow-2xl"
          >
            גלו את השירותים
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
