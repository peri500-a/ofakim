
import React from 'react';

const ServiceCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  imageUrl: string; 
  imageAlt: string;
}> = ({ icon, title, description, imageUrl, imageAlt }) => (
  <a 
    href="#contact"
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
          // תמונת גיבוי הנדסית יציבה במיוחד מה-Hero שמאומתת כעובדת אצל המשתמש
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
      
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 bg-blue-600 text-white rounded-2xl shadow-xl border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {icon}
        </div>
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

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'ביקורת מבנים לפני רכישה',
      description: 'בדיקה הנדסית יסודית לנכסי יד שנייה: איתור ליקויים קריטיים בשלד, במערכות האינסטלציה והחשמל לפני הרכישה.',
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'בית פרטי יוקרתי לבדיקה הנדסית',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'בדק בית לדירה חדשה',
      description: 'בדיקה מפורטת מול מפרט המכר והתקנים הישראליים. הפקת דוח הנדסי מחייב לקבלן לביצוע תיקונים בשנת הבדק.',
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'חלל דירה חדשה מודרנית',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'איתור נזילות ורטיבות',
      description: 'שימוש במצלמות תרמיות FLIR ומכשור מתקדם לאיתור נזילות סמויות וכשלי איטום ללא גרימת נזק למבנה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור רטיבות עם ברז מהודר',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: 'בדיקת קונסטרוקציה ושלד',
      description: 'אבחון יציבות הנדסית, קירות נושאים ותקרות. זיהוי סדקים קונסטרוקטיביים מסוכנים במבנים ותיקים ובפרויקטי תמ\"א.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635464/%D7%91%D7%93%D7%99%D7%A7%D7%AA_%D7%A7%D7%95%D7%A0%D7%A1%D7%98%D7%A8%D7%95%D7%A7%D7%A6%D7%99%D7%94_gjlb0o.jpg",
      imageAlt: 'שלד בטון של בניין רב קומות',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: 'ייעוץ וליווי הנדסי',
      description: 'ליווי אישי בשיפוצים ופרויקטי בנייה, ניתוח היתכנות הנדסית ומתן פתרונות טכניים לליקויי בנייה סבוכים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635165/%D7%A0%D7%97%D7%9C_%D7%A9%D7%99%D7%9C%D7%94_1_e2bafy.jpg",
      imageAlt: 'מהנדס בוחן תוכניות הנדסיות',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'חוות דעת לבית משפט',
      description: 'הפקת דוחות הנדסיים מפורטים הקבילים כראיה בבתי המשפט בישראל, כולל עדות מומחה וליווי בתביעות בנייה.',
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      imageAlt: 'סמלי משפט ומאזניים',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m10 0a3 3 0 01-3 3 3 3 0 01-3-3m3-3a3 3 0 00-3 3m3-3a3 3 0 013 3" /></svg>,
      title: 'ביקורת רכוש משותף',
      description: 'בדיקת תשתיות הבניין המשותפות עבור ועד הבית: לובי, מעליות, מאגרי מים ומערכות בטיחות אש.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769634668/%D7%91%D7%99%D7%AA_%D7%9E%D7%A9%D7%95%D7%AA%D7%A3_d5hk6a.jpg",
      imageAlt: 'שטח משותף בבניין יוקרה',
    },
        {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 18h12l3-18H3zm12 7h-6v-2h6v2z" /></svg>,
      title: 'שמאות רכוש ונזקים',
      description: 'הערכת נזקים כספיים כתוצאה מליקויים, רטיבות או שריפה לצורך קבלת פיצוי הולם מחברות הביטוח.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635899/%D7%A9%D7%9E%D7%90%D7%95%D7%AA_%D7%A8%D7%9B%D7%95%D7%A91_b5aa9w.jpg",
      imageAlt: 'בדיקת נזקים בנכס',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'תשתיות חשמל ואינסטלציה',
      description: 'בדיקת תקינות מערכות החשמל, הצנרת והניקוז. זיהוי כשלי ביצוע בתשתיות פנימיות ומוסתרות בנכס.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635727/%D7%AA%D7%A9%D7%AA%D7%99%D7%95%D7%AA_%D7%97%D7%A9%D7%9E%D7%9C_%D7%95%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%A6%D7%99%D7%94_yxouei.jpg",
      imageAlt: 'תשתיות וצנרת בבניין',
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">שירותי הנדסה מתקדמים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מעטפת פתרונות <br/><span className="text-blue-500">הנדסית מלאה</span> לכל נכס</h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            אנו משלבים את הטכנולוגיה המתקדמת ביותר עם ניסיון הנדסי מהשורה הראשונה כדי לספק לכם חוות דעת מדויקת.
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
