import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: React.ReactNode; imageSrc: string; imageAlt: string; }> = ({ icon, title, description, imageSrc, imageAlt }) => (
  <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col border border-gray-700 group-hover:border-blue-500/50 overflow-hidden group relative">
    {/* Subtle Background Glow on Hover */}
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative overflow-hidden h-60 bg-gray-900 min-h-[240px]">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=800';
        }}
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
        <span className="text-blue-400 font-bold text-sm flex items-center gap-2">
          למידע נוסף
          <svg className="w-4 h-4 transform group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 12H5m0 0l7 7m-7-7l7-7" /></svg>
        </span>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'ביקורת מבנים לפני רכישה',
      description: (
        <ul className="space-y-2">
          <li><strong>מה בודקים:</strong> <span className="text-blue-400">מהנדס בדק בית</span> בוחן את מערכות האינסטלציה, החשמל, האיטום ושלד הנכס.</li>
          <li><strong>המטרה:</strong> איתור <span className="text-cyan-400">ליקויי בנייה</span> קריטיים שעלות תיקונם גבוהה.</li>
          <li className="text-sm text-gray-400 pt-2 italic">אל תקנו חתול בשק - קבלו דוח מקצועי שיחסוך לכם אלפים.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'ביקורת מבנים מקצועית בבית פרטי',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'בדק בית לדירה חדשה',
      description: (
        <ul className="space-y-2">
          <li><strong>בנייה חדשה:</strong> בדיקה מקיפה מול מפרט המכר והתקנים הישראליים העדכניים.</li>
          <li><strong>ליקויי בנייה:</strong> איתור סטיות בריצוף, חיפויי חוץ, ואיטום מרפסות.</li>
          <li className="text-sm text-gray-400 pt-2 italic">אל תחתמו על קבלת מפתח לפני שמהנדס אישר את תקינות הדירה.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'בדק בית לדירה חדשה מקבלן',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: 'בדיקת קונסטרוקציה ושלד',
      description: (
        <ul className="space-y-2">
          <li><strong>יציבות המבנה:</strong> אבחון <span className="text-blue-400">ביסוס ויסודות</span>, קירות נושאים ותקרות בטון.</li>
          <li><strong>איתור סדקים:</strong> הבחנה מקצועית בין סדק נימי אסתטי לסדק <span className="text-red-400">קונסטרוקטיבי</span> מסוכן.</li>
          <li className="text-sm text-gray-400 pt-2 italic">בדיקה קריטית במבנים ותיקים ובפרויקטים של התחדשות עירונית.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'בדיקת שלד ויציבות המבנה ע"י מהנדס קונסטרוקציה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'איתור נזילות ורטיבות',
      description: (
        <ul className="space-y-2">
          <li><strong>טכנולוגיה:</strong> שימוש במצלמה תרמית (FLIR) לאיתור נזילות סמויות בתוך קירות ותחת ריצוף.</li>
          <li><strong>דיוק:</strong> זיהוי כשלי איטום ובעיות ניקוז ללא הרס של תשתיות קיימות.</li>
          <li className="text-sm text-gray-400 pt-2 italic">מניעת נזק מצטבר למבנה ומפגעי עובש בריאותיים.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'איתור נזילות וליקויי רטיבות בטכנולוגיה תרמית',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
      title: 'פיקוח וליווי הנדסי',
      description: (
        <ul className="space-y-2">
          <li><strong>ליווי בבנייה:</strong> פיקוח צמוד על קבלנים באתר, וידוא ביצוע לפי התוכניות והתקנים.</li>
          <li><strong>בקרת איכות:</strong> אישור שלבי יציקות, איטום ומערכות קריטיות בזמן אמת.</li>
          <li className="text-sm text-gray-400 pt-2 italic">הגנה על האינטרסים שלכם מול כל אנשי המקצוע באתר.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'ליווי ופיקוח הנדסי באתר בנייה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'חוות דעת הנדסית למשפט',
      description: (
        <ul className="space-y-2">
          <li><strong>תוקף משפטי:</strong> הפקת דוחות הנדסיים מפורטים הקבילים כראיה בבתי המשפט בישראל.</li>
          <li><strong>הערכת נזקים:</strong> פירוט עלויות תיקון ריאליות וירידת ערך הנכס בעקבות ליקויים.</li>
          <li className="text-sm text-gray-400 pt-2 italic">ליווי מקצועי של מהנדס מומחה לאורך כל התהליך המשפטי.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'חוות דעת הנדסית של מהנדס בדק בית מוסמך',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: 'ייעוץ הנדסי ותכנוני',
      description: (
        <ul className="space-y-2">
          <li><strong>שיפוצים:</strong> ייעוץ לפני הורדת קירות, שינויים מבניים ובדיקת היתכנות הנדסית.</li>
          <li><strong>השבחה:</strong> ייעוץ לניצול זכויות בנייה ואופטימיזציה של חללי הבית.</li>
          <li className="text-sm text-gray-400 pt-2 italic">קבלו החלטות מושכלות לפני שמתחילים לשבור קירות.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'ייעוץ הנדסי מקצועי ותכנון שינויים מבניים',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'תכנון אדריכלי ועיצוב',
      description: (
        <ul className="space-y-2">
          <li><strong>תכנון:</strong> הכנת תוכניות אדריכליות למגורים, תוספות בנייה והיתרים מול הרשויות.</li>
          <li><strong>עיצוב פנים:</strong> התאמת חללי הבית לצרכים פונקציונליים תוך שמירה על אסתטיקה מודרנית.</li>
          <li className="text-sm text-gray-400 pt-2 italic">שילוב מושלם בין חוזק הנדסי ליופי אדריכלי.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'תכנון אדריכלי מודרני והכנת תוכניות בנייה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: 'כתב כמויות ואומדן עלויות',
      description: (
        <ul className="space-y-2">
          <li><strong>דיוק תקציבי:</strong> הכנת רשימת חומרים ועבודות מפורטת לצורך קבלת הצעות מחיר מקבלנים.</li>
          <li><strong>אומדן:</strong> הערכת עלויות ריאלית לפרויקט למניעת חריגות תקציביות במהלך הבנייה.</li>
          <li className="text-sm text-gray-400 pt-2 italic">הכלי החשוב ביותר לניהול תקציב הבנייה שלכם בחוכמה.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'הכנת כתב כמויות ואומדן עלויות לבנייה ושיפוץ',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4">המומחיות ההנדסית שלנו</h2>
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