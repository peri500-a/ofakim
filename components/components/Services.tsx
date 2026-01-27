
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: React.ReactNode; imageSrc: string; imageAlt: string; }> = ({ icon, title, description, imageSrc, imageAlt }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-700 overflow-hidden">
    <img src={imageSrc} alt={imageAlt} className="w-full h-56 object-cover" />
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-gray-700 text-blue-400 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mr-4 text-gray-100">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed flex-grow">{description}</div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'ביקורת מבנים לפני רכישה',
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li><strong>מה נבדק:</strong> מערכות <strong className="font-semibold text-cyan-400">אינסטלציה</strong>, <strong className="font-semibold text-cyan-400">לוח חשמל</strong>, <strong className="font-semibold text-cyan-400">איטום</strong>, ושלד המבנה.</li>
          <li><strong>ליקויים נפוצים:</strong> <strong className="font-semibold text-cyan-400">נזילות סמויות</strong>, כשלים באיטום, <strong className="font-semibold text-cyan-400">סדקים קונסטרוקטיביים</strong>.</li>
          <li className="font-semibold text-blue-300 mt-2"><strong>חוות דעת הנדסית:</strong> דוח מפורט המעניק לכם כוח מיקוח אדיר מול המוכר.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'בית פרטי עם גינה מטופחת',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'בדק בית לדירה חדשה מקבלן',
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li><strong>מה נבדק:</strong> עמידה <strong className="font-semibold text-cyan-400">בתקנים הישראליים</strong>, איכות הגמר, והתאמה <strong className="font-semibold text-cyan-400">למפרט הטכני</strong>.</li>
          <li><strong>ליקויים נפוצים:</strong> <strong className="font-semibold text-cyan-400">ריצוף לא ישר</strong>, נקודות חשמל חסרות, חוסר התאמה לתוכניות המכר.</li>
          <li className="font-semibold text-blue-300 mt-2"><strong>היתרון שלנו:</strong> אנו מחייבים את הקבלן לבצע את התיקונים על חשבונו לפני הכניסה לדירה.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'פנים דירה מודרנית עם סלון ופינת אוכל',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'איתור ליקויי בנייה ורטיבות',
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li><strong>מה נבדק:</strong> איתור מקורות <strong className="font-semibold text-cyan-400">רטיבות ונזילות</strong> באמצעות <strong className="font-semibold text-cyan-400">מצלמה תרמית</strong> מתקדמת.</li>
          <li><strong>ליקויים נפוצים:</strong> צנרת פגומה בתוך קיר, <strong className="font-semibold text-cyan-400">איטום לקוי</strong> במרפסות, רטיבות קפילארית.</li>
          <li className="font-semibold text-blue-300 mt-2"><strong>היתרון שלנו:</strong> איתור ללא הרס ומניעת נזק ארוך טווח למבנה ולבריאות הדיירים.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260',
      imageAlt: 'מהנדס מומחה מאתר רטיבות וליקויי בנייה עם מכשור מתקדם',
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'חוות דעת הנדסית לבית משפט',
      description: (
         <ul className="list-disc list-inside space-y-2">
          <li><strong>מה נבדק:</strong> הערכה הנדסית מדויקת של נזקים, <strong className="font-semibold text-cyan-400">עלויות תיקון</strong>, וירידת ערך הנכס.</li>
          <li><strong>ליקויים נפוצים:</strong> רשלנות קבלנית, סטיות חמורות מהתקן, פגיעה ביציבות המבנה.</li>
          <li className="font-semibold text-blue-300 mt-2"><strong>היתרון שלנו:</strong> המהנדסים שלנו מוסמכים כעדים מומחים ומספקים דוחות קבילים ומוערכים ע"י שופטים.</li>
        </ul>
      ),
      imageSrc: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'מהנדסים מסתכלים על תוכניות בנייה באתר',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">שירותי בדק בית מקצועיים</h2>
          <p className="mt-4 text-xl font-semibold text-blue-300 max-w-3xl mx-auto">מומחיות הנדסית בכל שלבי הנכס – משלב הבנייה ועד למגורים</p>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">מביקורת מבנים מקיפה ועד לאיתור נזילות טכנולוגי, אנחנו כאן כדי להגן על ההשקעה שלכם.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
