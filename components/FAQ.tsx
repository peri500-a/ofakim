
import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-6 group">
      <button
        className="w-full flex justify-between items-center text-right focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-gray-100 group-hover:text-blue-300'}`}>{question}</h3>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 rotate-180' : 'border-gray-600'}`}>
          <svg
            className={`w-4 h-4 text-white transform transition-transform duration-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-400 leading-relaxed pr-2 text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'מדוע אנחנו צריכים בדק בית לדירות יד שנייה?',
      answer: 'מערכות הבית מרובות ולמרבית הקונים אין את הידע הנדרש לבודקן. חלק מהליקויים מתגלים רק עם ציוד יעודי משוכלל. בנוסף, קל להסתיר ליקויים על ידי שיפוץ קל או צביעה, ורק בדיקה הנדסית מאפשרת את גילויים.',
    },
    {
      question: 'האם לא מספיק שחבר או מהנדס מוכר יבחן את הדירה?',
      answer: 'אולי, אך אם ימצאו ממצאים בעייתיים יהיה קשה לשכנע את המוכר שהבדיקה נעשתה ללא הטייה. אנו מחויבים ליושרה מקצועית ומצהירים כי הממצאים הינם אובייקטיביים לחלוטין, מה שמאפשר למוכר לקבל החלטות מושכלות ללא חשד למשוא פנים.',
    },
    {
      question: 'מה ההבדל בין חברות בדק בית השונות?',
      answer: 'ישנן חברות המעסיקות פרילנסרים ללא מהנדסים אורגניים, וחלקן משתמשות בדוחות "העתק-הדבק". אצלנו כל דוח הוא ייחודי, נערך על בסיס הנכס הספציפי, והיחס האישי של המהנדס הוא ערך מרכזי לאורך כל התהליך.',
    },
    {
      question: 'כמה זמן אורכת בדיקה הנדסית בנכס?',
      answer: 'משך הבדיקה תלוי בגודל הנכס. בממוצע, בדיקת דירת 4 חדרים אורכת בין שעה לשלוש שעות.',
    },
    {
      question: 'האם דוח הבדיקה כולל הערכת מחיר לתיקונים?',
      answer: 'בהחלט. כל דוח שאנו מפיקים כולל פירוט הליקויים, צילומים, הפניה לתקן הישראלי הרלוונטי והערכת עלות לתיקון הליקוי לפי מחירי שוק מקובלים (מחירון דקל). זהו מסמך קביל ומשמעותי לניהול מו"מ.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-base mb-4">שאלות ותשובות</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">השאלות שכולם שואלים</h3>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900/30 p-8 md:p-12 rounded-[2rem] border border-white/5 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
