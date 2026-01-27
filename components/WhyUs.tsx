import React from 'react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center bg-blue-600/20 text-blue-400 rounded-2xl shadow-xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="mr-6">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-2 text-gray-400 leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'ניסיון ומוניטין של עשור',
      description: 'מעל 15 שנות ניסיון בתחום בדק הבית וליווי אלפי לקוחות מרוצים. המומחיות שלנו היא השקט הנפשי שלכם ברגעים הקריטיים.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'דוח הנדסי קביל ומשפטי',
      description: 'בסיום הבדיקה תקבלו דוח מפורט הכולל צילומים תרמיים, הפניה לתקנים והערכת עלויות. הדוח משמש ככלי משפטי עוצמתי מול קבלנים.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'טכנולוגיה מתקדמת (Thermal)',
      description: 'אנו משתמשים במכשור המתקדם בעולם, כולל מצלמות תרמיות FLIR ומדי לחות אלקטרומגנטיים, לאיתור כשלים שאינם נראים לעין אנושית.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="mb-16 lg:mb-0 order-2 lg:order-1">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm mb-4">למה לבחור באופקים?</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">היתרון שלנו הוא <br/><span className="text-blue-500">הביטחון שלכם</span></h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              אנו מחויבים למקצועיות ללא פשרות, שקיפות מלאה ושירות אישי. המטרה שלנו היא לספק לכם את כל המידע המקצועי לקבלת החלטה מושכלת ברכישה הגדולה של חייכם.
            </p>
            <div className="space-y-12">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-6 bg-blue-600/20 rounded-[4rem] blur-3xl group-hover:bg-blue-600/30 transition-all duration-1000"></div>
            <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              <img 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1260&q=80" 
                alt="קולאז' עבודת מהנדס בדק בית בשטח: בדיקת לוח חשמל, גג וסדקים"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 left-6 md:bottom-10 md:right-10 md:left-10 p-6 md:p-10 bg-gray-900/70 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></span>
                    <p className="text-blue-400 font-black text-xs md:text-sm uppercase tracking-widest">זמינות מיידית</p>
                </div>
                <p className="text-white text-lg md:text-3xl font-black leading-tight">
                    אנו פועלים בתל אביב, ירושלים, רחובות, שוהם והמרכז ומתחייבים לדוח מהיר תוך 48 שעות.
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