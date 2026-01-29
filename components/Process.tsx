
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string; isLast?: boolean }> = ({ number, title, description, isLast = false }) => (
  <div className="relative flex items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold z-10">
      {number}
    </div>
    {!isLast && <div className="absolute top-12 right-6 w-0.5 h-full bg-gray-600"></div>}
    <div className="mr-6">
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">התהליך שלנו - פשוט ויעיל</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">ארבעה שלבים פשוטים לבדיקה מקיפה שתעניק לכם שקט נפשי.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            <Step 
              number="1"
              title="שיחת ייעוץ והצעת מחיר"
              description="בשיחה ראשונית נאפיין את צרכי הבדיקה, נבין את פרטי הנכס ונספק הצעת מחיר שקופה ומפורטת ללא התחייבות מצידכם"
            />
            <Step 
              number="2"
              title="בדיקה הנדסית בנכס"
              description="מהנדס מומחה מטעמנו יגיע לנכס במועד שנקבע ויבצע בדיקה יסודית של כל המערכות באמצעות ציוד טכנולוגי מתקדם."
            />
            <Step 
              number="3"
              title="הכנת דוח ממצאים מפורט"
              description="לאחר הבדיקה, אנו מנתחים את הממצאים ומפיקים דוח הנדסי מקיף הכולל תמונות, הסברים, והערכת עלויות לתיקון הליקויים."
            />
            <Step 
              number="4"
              title="מסירת הדוח וליווי אישי"
              description="הדוח המלא נשלח אליכם, ואנו זמינים לשיחת הסבר וייעוץ לגבי המשך ההתנהלות מול המוכר או הקבלן."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
