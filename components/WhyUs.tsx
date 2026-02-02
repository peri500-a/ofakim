
import React from 'react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-blue-600/10 text-blue-500 rounded-2xl shadow-xl border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
      {icon}
    </div>
    <div className="mr-6">
      <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">{title}</h3>
      <p className="mt-2 text-gray-400 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'מהנדסים מומחים ורשויים',
      description: 'צוות המהנדסים שלנו מורכב מאנשי מקצוע בעלי רישיון בתוקף וניסיון של מעל 15 שנים באיתור ליקויי בנייה מורכבים ומתן עדות מומחה בבתי משפט.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'טכנולוגיה תרמית פורצת דרך',
      description: 'אנו משתמשים במצלמות תרמיות FLIR מהמתקדמות בעולם ומכשור אקוסטי דיגיטלי המאפשרים לגלות נזילות וליקויי איטום סמויים מבלי לשבור אף קיר.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'דוח הנדסי תוך 48 שעות',
      description: 'אנחנו מבינים שזמן הוא כסף בעסקאות נדל"ן. לכן, אנו מתחייבים למסירת דוח מפורט, קריא וקביל משפטית במהירות שיא מרגע סיום הבדיקה.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
      title: 'שקיפות וליווי אישי',
      description: 'מעבר לדוח היבש, אנו מספקים ייעוץ אישי והסברים מפורטים על כל ליקוי, כולל אומדן עלויות תיקון וליווי מקצועי מול הקבלן או מוכר הנכס.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-950 scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="mb-16 lg:mb-0 order-2 lg:order-1">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-base mb-4 italic">היתרון ההנדסי שלנו</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-normal">למה לבחור <span className="text-blue-500">בנו?</span></h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
              בחירה ב"אופקים הנדסה" היא בחירה בביטחון השקט שלכם. אנו משלבים ידע הנדסי עמוק עם הכלים הטכנולוגיים החדשניים ביותר כדי להבטיח שלא תפספסו אף ליקוי.
            </p>
            <div className="space-y-10 sm:space-y-12">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-6 bg-blue-600/20 rounded-[3rem] md:rounded-[4rem] blur-3xl group-hover:bg-blue-600/30 transition-all duration-1000"></div>
            <div className="relative h-[400px] sm:h-[600px] lg:h-[750px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              <img 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80" 
                alt="מהנדס בדק בית מקצועי בבדיקת נכס"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 left-6 sm:bottom-12 sm:right-12 sm:left-12 p-6 sm:p-10 bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-3 w-3 bg-blue-500 rounded-full animate-ping"></span>
                    <p className="text-blue-400 font-black text-sm uppercase tracking-widest">הבטחת איכות</p>
                </div>
                <p className="text-white text-xl sm:text-3xl font-black leading-tight tracking-normal">
                    הדוח שלנו הוא הכוח שלכם בניהול המשא ומתן. אל תחתמו על החוזה ללא ביקורת מומחה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
