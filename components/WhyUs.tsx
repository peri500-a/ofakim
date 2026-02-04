
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'מהנדסים אורגניים בלבד',
      description: 'בניגוד לחברות המעסיקות פרילנסרים, אצלנו כל מהנדס הוא חלק בלתי נפרד מהצוות, מה שמבטיח אחריות אישית, אג׳נדה הנדסית אחידה וקשר ישיר מול הלקוח.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'דוחות ייחודיים (ללא העתק-הדבק)',
      description: 'כל חוות דעת נערכת באופן ספציפי לנכס הנבדק. אנו נמנעים מדו"חות סטנדרטיים ומבטיחים הצגת עובדות מדויקת וחדה לכל ליקוי.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'טכנולוגיה תרמית פורצת דרך',
      description: 'אנו משתמשים במצלמות תרמיות FLIR ומכשור אקוסטי דיגיטלי המאפשרים לגלות נזילות וליקויי איטום סמויים מבלי לשבור אף קיר.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      title: 'יחס אישי וזמינות מהנדס',
      description: 'הטיפול נעשה במערכת אינטימית של שאלות ותשובות מול המהנדס המבצע, לאורך כל הדרך ועד לסגירת העסקה מול המוכרים.',
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
              בחירה ב"אופקים הנדסה" היא בחירה בביטחון השקט שלכם. אנו משלבים ידע הנדסי עמוק עם הכלים הטכנולוגיים החדשניים ביותר ויושרה מקצועית ללא פשרות.
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
                    הדוח שלנו הוא הכוח שלכם בניהול המשא ומתן. אובייקטיביות מלאה ללא הטיית היכרות.
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
