import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // השהייה קלה להצגת הבאנר לאחר טעינת הדף לחוויית משתמש טובה יותר
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="alert" 
      aria-live="polite"
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-auto md:max-w-xl md:left-1/2 md:-translate-x-1/2 z-[60] animate-slide-up"
    >
      <div className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-6">
        <div className="flex-grow text-center md:text-right">
          <h4 className="text-white font-black text-lg mb-2">פרטיות ושימוש בעוגיות 🍪</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, להציג תוכן מותאם אישית ולנתח את התנועה באתר שלנו. למידע נוסף, עיין ב
            <a href="#privacy-policy" className="text-blue-400 hover:underline mr-1">מדיניות הפרטיות</a> שלנו.
          </p>
        </div>
        
        <div className="flex flex-row gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={() => handleConsent('declined')}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-bold hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            דחה
          </button>
          <button 
            onClick={() => handleConsent('accepted')}
            className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-blue-600 text-white text-sm font-black hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            אישור
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;