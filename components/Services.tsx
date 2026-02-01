
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
      className="bg-gray-800 rounded-3xl md:rounded-[2.5rem] shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2 transition-all duration-500 flex flex-col border border-white/5 group overflow-hidden relative focus:outline-none focus:ring-4 focus:ring-blue-500/50 block"
      aria-label={`מידע על שירות ${title}`}
    >
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative overflow-hidden h-64 sm:h-72 bg-gray-900 min-h-[256px]">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80";
          }}
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
        
        <div className="flex items-center gap-3 text-blue-400 font-bold text-sm group-hover:translate-x-[-4px] transition-transform duration-300">
          <span>פרטים והצעת מחיר</span>
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
      title: 'ביקורת מבנים לפני רכישה',
      description: 'בדיקה הנדסית יסודית לנכסי יד שנייה: איתור ליקויים קריטיים בשלד, במערכות האינסטלציה והחשמל לפני הרכישה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671156/%D7%91%D7%99%D7%AA_%D7%97%D7%93%D7%A9_fztewk.jpg",
      imageAlt: 'בדיקת בדק בית בבית פרטי יוקרתי לאיתור ליקויים הנדסיים וליקויי בנייה סמויים',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
    },
    {
      title: 'בדק בית לדירה חדשה',
      description: 'בדיקה מפורטת מול מפרט המכר והתקנים הישראליים. הפקת דוח הנדסי מחייב לקבלן לביצוע תיקונים בשנת הבדק.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671282/%D7%93%D7%99%D7%A8%D7%94_%D7%97%D7%93%D7%A9%D7%94_lybsnf.jpg",
      imageAlt: 'מהנדס בניין מבצע בדק בית בדירה חדשה מקבלן לאימות מפרט המכר ותקינות הגימור',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      href: '#/בדק-בית-מקבלן'
    },
    {
      title: 'איתור נזילות ורטיבות',
      description: 'שימוש במצלמות תרמיות FLIR ומכשור מתקדם לאיתור נזילות סמויות וכשלי איטום ללא גרימת נזק למבנה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור נזילות ורטיבות סמויה באמצעות מצלמה תרמית FLIR מתקדמת בחדר רחצה מעוצב',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      href: '#/איתור-נזילות-ורטיבות'
    },
    {
      title: 'שמאות רכוש והערכת נזקים',
      description: 'הערכת שווי מקצועית לצרכי ביטוח, ירידת ערך ותביעות נזיקין. אנו מספקים אומדן כספי מדויק המגובה בחוות דעת הנדסית לצורך קבלת פיצוי הולם מחברות הביטוח.',
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'שמאי רכוש מבצע הערכת שווי ונזקים בנכס',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      href: '#/שמאות-רכוש-והערכת-נזקים'
    },
    {
      title: 'בדיקת קונסטרוקציה ושלד',
      description: 'אבחון יציבות הנדסית, קירות נושאים ותקרות. זיהוי סדקים קונסטרוקטיביים מסוכנים במבנים ותיקים ובפרויקטי תמ\"א.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635464/%D7%91%D7%93%D7%99%D7%A7%D7%AA_%D7%A7%D7%95%D7%A0%D7%A1%D7%98%D7%A8%D7%95%D7%A7%D7%A6%D7%99%D7%94_gjlb0o.jpg",
      imageAlt: 'בדיקת יציבות הנדסית של שלד בטון בבניין מגורים רב קומות במהלך תהליך בנייה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    },
    {
      title: 'חוות דעת לבית משפט',
      description: 'הפקת דוחות הנדסיים מפורטים הקבילים כראיה בבתי המשפט בישראל, כולל עדות מומחה וליווי בתביעות בנייה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671390/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%A9%D7%95%D7%A4%D7%98_txgcse.jpg",
      imageAlt: 'פטיש שופט ומאזני צדק המייצגים חוות דעת הנדסית קבילה בבתי משפט בישראל',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      href: '#/חוות-דעת-הנדסית-לבית-משפט'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">שירותי הנדסה מתקדמים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מעטפת פתרונות <br/><span className="text-blue-500">הנדסית מלאה</span> לכל נכס</h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            אנו משלבים את הטכנולוגיה המתקדמת ביותר עם ניסיון הנדסי מהשורה הראשונה כדי לספק לכם חוות דעת מדויקת וביטחון מלא.
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
