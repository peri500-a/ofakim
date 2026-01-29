
import React from 'react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  imageUrl: string; 
  imageAlt: string;
}> = ({ title, description, imageUrl, imageAlt }) => (
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
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
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
      title: 'ביקורת מבנים לפני רכישה',
      description: 'בדיקה הנדסית יסודית לנכסי יד שנייה: איתור ליקויים קריטיים בשלד, במערכות האינסטלציה והחשמל לפני הרכישה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671156/%D7%91%D7%99%D7%AA_%D7%97%D7%93%D7%A9_fztewk.jpg",
      imageAlt: 'בדיקת בדק בית בבית פרטי יוקרתי לאיתור ליקויים הנדסיים וליקויי בנייה סמויים',
    },
    {
      title: 'בדק בית לדירה חדשה',
      description: 'בדיקה מפורטת מול מפרט המכר והתקנים הישראליים. הפקת דוח הנדסי מחייב לקבלן לביצוע תיקונים בשנת הבדק.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671282/%D7%93%D7%99%D7%A8%D7%94_%D7%97%D7%93%D7%A9%D7%94_lybsnf.jpg",
      imageAlt: 'מהנדס בניין מבצע בדק בית בדירה חדשה מקבלן לאימות מפרט המכר ותקינות הגימור',
    },
    {
      title: 'איתור נזילות ורטיבות',
      description: 'שימוש במצלמות תרמיות FLIR ומכשור מתקדם לאיתור נזילות סמויות וכשלי איטום ללא גרימת נזק למבנה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור נזילות ורטיבות סמויה באמצעות מצלמה תרמית FLIR מתקדמת בחדר רחצה מעוצב',
    },
    {
      title: 'בדיקת קונסטרוקציה ושלד',
      description: 'אבחון יציבות הנדסית, קירות נושאים ותקרות. זיהוי סדקים קונסטרוקטיביים מסוכנים במבנים ותיקים ובפרויקטי תמ\"א.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635464/%D7%91%D7%93%D7%99%D7%A7%D7%AA_%D7%A7%D7%95%D7%A0%D7%A1%D7%98%D7%A8%D7%95%D7%A7%D7%A6%D7%99%D7%94_gjlb0o.jpg",
      imageAlt: 'בדיקת יציבות הנדסית של שלד בטון בבניין מגורים רב קומות במהלך תהליך בנייה',
    },
    {
      title: 'ייעוץ וליווי הנדסי',
      description: 'ליווי אישי בשיפוצים ופרויקטי בנייה, ניתוח היתכנות הנדסית ומתן פתרונות טכניים לליקויי בנייה סבוכים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635165/%D7%A0%D7%97%D7%9C_%D7%A9%D7%99%D7%9C%D7%94_1_e2bafy.jpg",
      imageAlt: 'מהנדס בניין מוסמך מספק ייעוץ הנדסי ובוחן תוכניות עבודה לשיפוץ נכס',
    },
    {
      title: 'חוות דעת לבית משפט',
      description: 'הפקת דוחות הנדסיים מפורטים הקבילים כראיה בבתי המשפט בישראל, כולל עדות מומחה וליווי בתביעות בנייה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769671390/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%A9%D7%95%D7%A4%D7%98_txgcse.jpg",
      imageAlt: 'פטיש שופט ומאזני צדק המייצגים חוות דעת הנדסית קבילה בבתי משפט בישראל',
    },
    {
      title: 'ביקורת רכוש משותף',
      description: 'בדיקת תשתיות הבניין המשותפות עבור ועד הבית: לובי, מעליות, מאגרי מים ומערכות בטיחות אש.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769634668/%D7%91%D7%99%D7%AA_%D7%9E%D7%A9%D7%95%D7%AA%D7%A3_d5hk6a.jpg",
      imageAlt: 'בדיקת ביקורת מבנים לרכוש משותף בלובי מעוצב של בניין מגורים יוקרתי',
    },
    {
      title: 'שמאות רכוש ונזקים',
      description: 'הערכת נזקים כספיים כתוצאה מליקויים, רטיבות או שריפה לצורך קבלת פיצוי הולם מחברות הביטוח.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635899/%D7%A9%D7%9E%D7%90%D7%95%D7%AA_%D7%A8%D7%9B%D7%95%D7%A91_b5aa9w.jpg",
      imageAlt: 'שמאי רכוש מבצע הערכת נזקי מים וליקויי בנייה בתוך נכס מגורים עבור חברת ביטוח',
    },
    {
      title: 'תשתיות חשמל ואינסטלציה',
      description: 'בדיקת תקינות מערכות החשמל, הצנרת והניקוז. זיהוי כשלי ביצוע בתשתיות פנימיות ומוסתרות בנכס.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635727/%D7%AA%D7%A9%D7%AA%D7%99%D7%95%D7%AA_%D7%97%D7%A9%D7%9E%D7%9C_%D7%95%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%A6%D7%99%D7%94_yxouei.jpg",
      imageAlt: 'בדיקת תשתיות הנדסיות, צנרת אינסטלציה ומערכות חשמל גלויות בתקרת מבנה תעשייתי',
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 scroll-mt-24">
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
