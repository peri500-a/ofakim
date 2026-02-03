
import React from 'react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  imageUrl: string; 
  imageAlt: string;
  icon: React.ReactNode;
  href?: string;
}> = ({ title, description, imageUrl, imageAlt, icon, href = "#contact" }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#/')) {
      e.preventDefault();
      window.location.hash = href.replace(/^#/, '');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href}
      onClick={handleLinkClick}
      className="bg-gray-800 rounded-3xl md:rounded-[2.5rem] shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2 transition-all duration-500 flex flex-col border border-white/5 group overflow-hidden relative focus:outline-none focus:ring-4 focus:ring-blue-500/50 block h-full"
      aria-label={`מידע על שירות ${title}`}
    >
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative overflow-hidden h-64 sm:h-72 bg-gray-900 min-h-[256px]">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
        
        {/* Floating Icon Box */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-blue-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 z-20 border border-white/20">
          {icon}
        </div>
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow text-sm sm:text-base mb-6">{description}</p>
        
        <div className="flex items-center gap-3 text-blue-400 font-bold text-sm group-hover:translate-x-[-4px] transition-transform duration-300 mt-auto">
          <span>פרטים והצעת מחיר לבדק בית</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'בדק בית לדירה חדשה',
      description: 'וודאו שהקבלן מספק בדיוק מה שהובטח: בדיקה מדוקדקת מול מפרט המכר המאלצת את הקבלן לתקן ליקויים על חשבונו לפני תום שנת הבדק.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671282/%D7%93%D7%99%D7%A8%D7%94_%D7%97%D7%93%D7%A9%D7%94_lybsnf.jpg",
      imageAlt: 'מהנדס בניין מבצע בדק בית בדירה חדשה מקבלן לאימות מפרט המכר',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      href: '#/בדק-בית-מקבלן'
    },
    {
      title: 'בדק בית לבתים פרטיים',
      description: 'הגנה היקפית על צמודי קרקע: בדיקת מעטפת, גגות רעפים, מערכות ניקוז חוץ ושלד המבנה. מומחיות ייחודית לתקלות האופייניות לוילות.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%91%D7%99%D7%AA_%D7%A4%D7%A8%D7%98%D7%99_wlsjqc.jpg?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'ביקורת מבנים הנדסית לבית פרטי ווילה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      href: '#/בדק-בית-לבית-פרטי-וילה'
    },
    {
      title: 'בדק בית לדירות יד שנייה',
      description: 'אל תקנו חתול בשק: בדיקה הנדסית מקיפה לפני רכישת דירה משומשת לאיתור נזילות סמויות, סדקים בשלד וליקויים בתשתיות ישנות.',
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'בדק בית לדירת יד שנייה לפני רכישה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      href: '#/בדק-בית-יד-שנייה'
    },
    {
      title: 'בדיקת סוף שנת בדק',
      description: 'הזדמנות אחרונה לתיקונים על חשבון הקבלן: איתור ליקויים שהתפתחו בשנה הראשונה (סדקים, רטיבות) ודרישת תיקון רגע לפני פקיעת האחריות.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%A9%D7%A0%D7%AA_%D7%91%D7%93%D7%A7_a5klqo.jpg?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'בדיקת שנת בדק לדירה חדשה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      href: '#/בדיקת-סוף-שנת-בדק'
    },
    {
      title: 'איתור נזילות ורטיבות',
      description: 'איתור הבעיה בציוד תרמי מתקדם ללא שבירת קירות: גלו כשלי איטום ונזילות סמויות לפני שהן הופכות לעובש מסוכן ולנזק מבני בלתי הפיך.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור נזילות ורטיבות סמויה באמצעות מצלמה תרמית FLIR',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      href: '#/איתור-נזילות-ורטיבות'
    },
    {
      title: 'חוות דעת לבית משפט',
      description: 'ראיית זהב להליך המשפטי: דוח הנדסי קביל ועדות מומחה מקצועית מטעם בית המשפט, המבטיחים לכם את הסיכוי המקסימלי לזכייה בתביעות בנייה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671390/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%A9%D7%95%D7%A4%D7%98_txgcse.jpg",
      imageAlt: 'חוות דעת הנדסית לבית משפט בנושא ליקויי בנייה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      href: '#/חוות-דעת-הנדסית-לבית-משפט'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">שירותי הנדסה וביקורת מבנים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מעטפת פתרונות <br/><span className="text-blue-500">בדק בית</span> לכל נכס</h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            אנו משלבים את הטכנולוגיה המתקדמת ביותר לאיתור <strong>ליקויי בנייה</strong> עם ניסיון הנדסי מהשורה הראשונה כדי לספק לכם ביטחון מלא.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
