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
      aria-label={`מידע מפורט על שירות ${title}`}
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
        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 mb-4 leading-tight">{title}</h3>
        <div className="text-gray-400 leading-relaxed flex-grow text-sm sm:text-base space-y-4 mb-6">
          {description.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        
        <div className="flex items-center gap-3 text-blue-400 font-bold text-sm group-hover:translate-x-[-4px] transition-transform duration-300 mt-auto pt-4 border-t border-white/5">
          <span>קרא עוד והזמן מהנדס מומחה</span>
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
      title: 'בדק בית לדירה חדשה מקבלן',
      description: 'בדיקה הנדסית קריטית המבוצעת מול מפרט המכר ותקנות התכנון והבנייה. אנו בוחנים את שלמות הריצוף, מערכות הניקוז, אטימות החלונות ותקינות לוח החשמל.\n\nליקויים נפוצים: אריחים חלולים, סטיות במישוריות הקירות, חוסר בהארקה תקנית וכשלי איטום במרפסות.\n\nהיתרון שלנו: דוח המהנדס של אופקים הנדסה מאלץ את הקבלן לתקן את הליקויים על חשבונו לפני מסירת המפתח, וחוסך לכם עשרות אלפי שקלים בשיפוצים עתידיים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671282/%D7%93%D7%99%D7%A8%D7%94_%D7%97%D7%93%D7%A9%D7%94_lybsnf.jpg",
      imageAlt: 'מהנדס בניין מבצע ביקורת מבנים הנדסית בדירה חדשה לאימות מפרט המכר ותקני הבנייה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      href: '#/בדק-בית-מקבלן'
    },
    {
      title: 'בדק בית לבתים פרטיים ווילות',
      description: 'וילה היא מערכת מורכבת הדורשת התמחות במעטפת חוץ, גגות רעפים ותשתיות ניקוז עצמאיות. אנו סורקים את כל שטחי הנכס, כולל קירות תמך ובידוד תרמי.\n\nליקויים נפוצים: חדירת מי תהום למרתפים, כשלי איטום בגגות רעפים ושקיעות קרקע הגורמות לסדקים קונסטרוקטיביים.\n\nהיתרון שלנו: שימוש בטכנולוגיית אקוסטיקה ומצלמות תרמיות FLIR לאיתור נזילות במערכות מורכבות של צמודי קרקע.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%91%D7%99%D7%AA_%D7%A4%D7%A8%D7%98%D7%99_wlsjqc.jpg",
      imageAlt: 'ביקורת מבנים מקצועית לבית פרטי הכוללת בדיקת גג ואיטום מעטפת',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      href: '#/בדק-בית-לבית-פרטי-וילה'
    },
    {
      title: 'בדק בית לדירות יד שנייה',
      description: 'בדיקה קריטית לפני רכישה שמטרתה לחשוף מה המוכרים מסתירים מאחורי צבע טרי. אנו בודקים את תקינות הצנרת הישנה, יציבות השלד והתאמה לתשריט.\n\nליקויים נפוצים: רטיבות כלואה מתחת לריצוף, לוחות חשמל לא תקניים, ושינויי מבנה שבוצעו ללא היתר בנייה.\n\nהיתרון שלנו: דוח שמאות הנדסי שנותן לכם כוח אדיר במשא ומתן על המחיר ומגן עליכם מפני רכישת "חתול בשק".',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018186/%D7%93%D7%99%D7%A8%D7%94_%D7%91%D7%A4%D7%AA%D7%97_%D7%AA%D7%A7%D7%95%D7%95%D7%94_ybjt5v.jpg",
      imageAlt: 'ביקורת הנדסית מקיפה לדירת יד שנייה לפני קנייה לאיתור נזילות סמויות',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      href: '#/בדק-בית-יד-שנייה'
    },
    {
      title: 'חוות דעת הנדסית לבית משפט',
      description: 'הפקה של חוות דעת מומחה קבילה משפטית, ערוכה על ידי מהנדס מוסמך מטעם בתי המשפט. אנו מנתחים כשלים טכניים מורכבים ומגבים אותם בתקנים.\n\nליקויים נפוצים: ליקויי בנייה רשלניים, אי-התאמות חמורות לתקן הישראלי ונזקי רכוש כבדים כתוצאה מעבודה לקויה.\n\nהיתרון שלנו: ניסיון רב שנים בעדות בבית משפט ואחוז הצלחה גבוה במיוחד בביסוס טענות התובעים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671390/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%A9%D7%95%D7%A4%D7%98_txgcse.jpg",
      imageAlt: 'כתיבת חוות דעת הנדסית לבית משפט ע״י מהנדס מומחה לליקויי בנייה',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      href: '#/חוות-דעת-הנדסית-לבית-משפט'
    },
    {
      title: 'איתור נזילות ורטיבות',
      description: 'איתור מדויק של מקור הנזילה ללא שבירת קירות. אנו משתמשים במצלמה תרמית מתקדמת לזיהוי הפרשי טמפרטורה ומדי לחות אלקטרוניים.\n\nליקויים נפוצים: פיצוצים זעירים בצנרת, איטום לקוי בחדרי רחצה וחדירת מי גשם דרך המעטפת החיצונית.\n\nהיתרון שלנו: אבחון הנדסי שורשי שמונע תיקונים קוסמטיים חסרי תועלת ומביא לפתרון סופי של בעיית הרטיבות.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור נזילות מים סמויות וביצוע בדיקת רטיבות באמצעות מצלמה תרמית ללא הרס',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      href: '#/איתור-נזילות-ורטיבות'
    },
    {
      title: 'בדיקת סוף שנת בדק',
      description: 'הזדמנות אחרונה לאלץ את הקבלן לתקן ליקויים שהתפתחו מאז הכניסה לדירה. בדיקה זו מתבצעת כ-11 חודשים לאחר המסירה.\n\nליקויים נפוצים: סדקים נימיים ודינמיים, כשלים במערכת המיזוג שלא אותרו בקיץ וליקויי ריצוף שהחמירו.\n\nהיתרון שלנו: אנו מוודאים שהקבלן יעמוד באחריותו החוקית (חוק המכר) לפני שתקופת הבדק פוקעת.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%A9%D7%A0%D7%AA_%D7%91%D7%93%D7%A7_a5klqo.jpg",
      imageAlt: 'מהנדס מומחה מבצע בדיקת שנת בדק לדירה חדשה למימוש אחריות הקבלן',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      href: '#/בדיקת-סוף-שנת-בדק'
    },
    {
      title: 'שמאות רכוש וירידת ערך',
      description: 'אומדן כספי מדויק לנזקים בנכס וירידת ערך הנדסית לצרכי תביעות וביטוח. אנו בוחנים את ההשפעה הכלכלית של ליקויי בנייה ונזקי צנרת.\n\nליקויים נפוצים: ירידת ערך עקב רטיבות קבועה, הערכת חסר של חברות הביטוח ופיצוי לא הולם על נזקי צד ג\'.\n\nהיתרון שלנו: חוות דעת משולבת (הנדסית ושמאית) המעניקה לכם בסיס חזק במיוחד מול חברות ביטוח ובתי משפט.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635899/%D7%A9%D7%9E%D7%90%D7%95%D7%AA_%D7%A8%D7%9B%D7%95%D7%A91_b5aa9w.jpg",
      imageAlt: 'שמאי רכוש ומהנדס מבצעים הערכת נזקים וירידת ערך לנכס מקרקעין',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      href: '#/שמאות-וירידת-ערך'
    },
    {
      title: 'פיקוח וליווי הנדסי לשיפוצים',
      description: 'ליווי צמוד של מהנדס במהלך שיפוץ נרחב או בנייה עצמית. אנו מוודאים שהקבלן משתמש בחומרים הנכונים ועומד בלוחות הזמנים ובאיכות העבודה.\n\nליקויים נפוצים: שימוש בחומרי בנייה זולים שאינם עומדים בתקן, אי-עמידה בתוכניות אדריכליות וקיצורי דרך בבטיחות.\n\nהיתרון שלנו: "עיניים מקצועיות" בשטח שמונעות טעויות יקרות עוד לפני שהן קורות, ומבטיחות שההשקעה שלכם מוגנת.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635165/%D7%A0%D7%97%D7%9C_%D7%A9%D7%99%D7%9C%D7%94_1_e2bafy.jpg",
      imageAlt: 'פיקוח הנדסי באתר בנייה על ידי מהנדס מוסמך להבטחת איכות הביצוע',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      href: '#contact'
    },
    {
      title: 'בדק בית למבני מסחר ומשרדים',
      description: 'ביקורת מבנים הנדסית לנכסים עסקיים, חנויות ומבני תעשייה. בדיקת עומסים, מערכות כיבוי אש, נגישות לעסקים ומערכות מיזוג תעשייתיות.\n\nליקויים נפוצים: אי-עמידה בתקני בטיחות אש, כשלי נגישות העלולים לגרור תביעות, ובעיות איטום במבנים גדולים.\n\nהיתרון שלנו: הבנה מעמיקה של תקני הבנייה המסחריים והגנה על הנכס המניב שלכם מפני ירידת ערך וסיכונים בטיחותיים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%9C%D7%95%D7%91%D7%99_%D7%A9%D7%9C_%D7%91%D7%A0%D7%99%D7%99%D7%9F_qr7teu.jpg",
      imageAlt: 'בדק בית וביקורת מבנים למשרדים ומבני מסחר רחבי היקף',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      href: '#contact'
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