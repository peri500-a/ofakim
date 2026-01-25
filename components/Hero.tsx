
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-gray-950"></div>
      
      {/* Radial spotlight effect behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
        {/* Main Header - Unified to prevent cutting and improved responsive font sizing */}
        <h1 className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 tracking-tight md:tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          <span className="block text-white opacity-95">בדק בית מקצועי.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 block mt-2 md:mt-4">
            השקט הנפשי שלך.
          </span>
        </h1>
        
        <p className="text-base md:text-2xl text-gray-300 max-w-3xl mb-10 md:mb-12 mx-auto font-medium leading-relaxed drop-shadow-md px-2">
          אל תבצעו את הרכישה הגדולה בחייכם בעיניים עצומות. 
          <span className="block md:inline"> אנו מאתרים ליקויי בנייה נסתרים וחוסכים לכם כסף, זמן ודאגות.</span>
        </p>

        {/* Quick Contact Widget - Responsive sizing */}
        <div className="flex items-center justify-center mb-10 md:mb-12">
          <a 
            href="tel:054-7515142" 
            className="flex items-center gap-4 md:gap-6 bg-gray-900/40 backdrop-blur-2xl px-6 py-4 md:px-10 md:py-5 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all group shadow-2xl shadow-black/60 transform hover:-translate-y-1"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-blue-600/40">
              <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-[10px] md:text-sm text-blue-400 font-bold uppercase tracking-widest mb-0.5 md:mb-1">מענה הנדסי מיידי</p>
              <p className="text-xl md:text-4xl font-black text-white tracking-tighter leading-none">054-7515142</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="#contact" 
            onClick={handleScrollClick}
            className={`w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-black text-xl md:text-2xl px-10 py-5 md:px-12 md:py-6 rounded-2xl hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] ${
              isLoading ? 'cursor-not-allowed opacity-75' : ''
            }`}
            aria-disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'הזמינו בדיקה עכשיו'
            )}
          </a>
          
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 font-black text-white text-xl md:text-2xl transition-all border-2 border-white/20 rounded-2xl hover:bg-white hover:text-gray-900 backdrop-blur-md"
          >
            גלו את השירותים
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
