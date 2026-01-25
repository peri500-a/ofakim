
import React from 'react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-blue-500 text-white rounded-lg">
      {icon}
    </div>
    <div className="mr-4">
      <h3 className="text-lg font-bold text-gray-100">{title}</h3>
      <p className="mt-1 text-gray-400">{description}</p>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'ניסיון ומוניטין',
      description: 'מעל 15 שנות ניסיון בתחום בדק הבית וליווי אלפי לקוחות מרוצים. המומחיות שלנו היא השקט הנפשי שלכם.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'דוח הנדסי קביל בבית משפט',
      description: 'בסיום הבדיקה תקבלו דוח מפורט וברור, הכולל צילומים, התייחסות לתקנים הרלוונטיים והערכת עלויות תיקון. הדוח קביל ומשמש ככלי משפטי חזק.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'טכנולוגיה מתקדמת',
      description: 'אנו משתמשים במכשור הטכנולוגי החדשני ביותר, כולל מצלמות תרמיות ומדי לחות, לאיתור מדויק של ליקויים שאינם נראים לעין.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-white">היתרון שלנו הוא הביטחון שלכם</h2>
            <p className="mt-4 text-lg text-gray-400">אנו מחויבים למקצועיות ללא פשרות, שקיפות מלאה ושירות אישי. המטרה שלנו היא לספק לכם את כל המידע לקבלת החלטה מושכלת.</p>
            <div className="mt-10 space-y-10">
              {features.map((feature, index) => (
                <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
          <div className="relative h-96 lg:h-auto">
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl" 
              src="https://picsum.photos/600/800" 
              alt="מהנדס בודק תוכניות בנייה"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
