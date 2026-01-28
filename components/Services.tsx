
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: React.ReactNode; imageSrc: string; imageAlt: string; }> = ({ icon, title, description, imageSrc, imageAlt }) => (
  <a 
    href="#contact"
    className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col border border-gray-700 group overflow-hidden group relative focus:outline-none focus:ring-2 focus:ring-blue-500 block"
    aria-label={`מידע נוסף על ${title}`}
  >
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative overflow-hidden h-60 bg-gray-900 min-h-[240px]">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow relative z-10">
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-black mr-4 text-gray-100 group-hover:text-blue-400 transition-colors duration-300 leading-tight">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed flex-grow text-base">{description}</div>
      
      <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:text-blue-300 transition-colors">
          <span>למידע נוסף והזמנה</span>
          <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-[-4px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
        </div>
      </div>
    </div>
  </a>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'ביקורת מבנים לפני רכישה',
      description: (
        <ul className="space-y-2">
          <li><strong>יד שנייה:</strong> בדיקת שלד, אינסטלציה וחשמל לפני קנייה.</li>
          <li><strong>המטרה:</strong> איתור ליקויים קריטיים וחיסכון בעלויות שיפוץ עתידיות.</li>
          <li className="text-sm text-gray-400 pt-2 italic">אל תקנו חתול בשק - קבלו שקט נפשי.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'ביקורת מבנים מקצועית לפני רכישה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'בדק בית לדירה חדשה',
      description: (
        <ul className="space-y-2">
          <li><strong>מול הקבלן:</strong> בדיקה מקיפה מול מפרט המכר והתקנים הישראליים.</li>
          <li><strong>תיקון ליקויים:</strong> הפקת דוח מחייב לקבלן לביצוע תיקונים בשנת הבדק.</li>
          <li className="text-sm text-gray-400 pt-2 italic">וידוא שהדירה נמסרת לכם באיכות הנדסית מושלמת.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'בדק בית לדירה חדשה מקבלן',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: 'בדיקת קונסטרוקציה ושלד',
      description: (
        <ul className="space-y-2">
          <li><strong>יציבות מבנית:</strong> אבחון ביסוס, קירות נושאים ותקרות בטון.</li>
          <li><strong>איתור סדקים:</strong> הבחנה בין סדק אסתטי לסדק קונסטרוקטיבי מסוכן.</li>
          <li className="text-sm text-gray-400 pt-2 italic">בדיקה קריטית במבנים ותיקים ובפרויקטי תמ"א.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'בדיקת יציבות קונסטרוקטיבית ושלד',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'איתור נזילות ורטיבות',
      description: (
        <ul className="space-y-2">
          <li><strong>טכנולוגיה תרמית:</strong> שימוש במצלמות FLIR לאיתור נזילות סמויות.</li>
          <li><strong>ללא הרס:</strong> זיהוי כשלי איטום ובעיות ניקוז בדיוק מקסימלי.</li>
          <li className="text-sm text-gray-400 pt-2 italic">מניעת נזק מצטבר למבנה ועובש בריאותי.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'איתור נזילות במצלמה תרמית',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: 'בדיקת רכוש משותף',
      description: (
        <ul className="space-y-2">
          <li><strong>לווועדי בית:</strong> בדיקת לובי, חדר מדרגות, חדר גנרטור וגגות.</li>
          <li><strong>מערכות בניין:</strong> וידוא תקינות מעליות, משאבות וכיבוי אש.</li>
          <li className="text-sm text-gray-400 pt-2 italic">הגנה על האינטרס של כלל הדיירים בבניין.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'בדיקת רכוש משותף - בניין מגורים רב קומות מודרני',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'חוות דעת הנדסית לבית משפט',
      description: (
        <ul className="space-y-2">
          <li><strong>קביל משפטית:</strong> דוח מפורט המשמש כראיה בבתי המשפט בישראל.</li>
          <li><strong>ליווי מומחה:</strong> עדות מהנדס וליווי מקצועי בתביעות ליקויי בנייה.</li>
          <li className="text-sm text-gray-400 pt-2 italic">מסמך עוצמתי לניהול תביעות מול קבלנים סרבנים.</li>
        </ul>
      ),
      imageSrc: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'חוות דעת הנדסית קבילה לבית משפט',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">המומחיות ההנדסית שלנו</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מעטפת פתרונות <br/><span className="text-blue-500">הנדסית ואדריכלית</span> מלאה</h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            אופקים הנדסה מספקת ליווי מקצועי מקצה לקצה – משלב התכנון האדריכלי והכנת כתב הכמויות, דרך פיקוח בבנייה ועד לבדק בית מפורט ואיתור ליקויים.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
