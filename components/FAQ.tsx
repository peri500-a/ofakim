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
      question: 'איך בוחרים חברת בדק בית עם המלצות טובות?',
      answer: 'חשוב לחפש המלצות מאומתות בגוגל וברשתות החברתיות. באופקים הנדסה, אנו גאים במאות לקוחות מרוצים שקיבלו שירות ממהנדסים רשומים. ההמלצה הטובה ביותר היא לבקש לראות דוגמה של דוח בדיקה קודם.',
    },
    {
      question: 'מה ההבדל בין בדק בית לבין ביקורת מבנים?',
      answer: 'ביקורת מבנים היא מונח רחב יותר המתייחס לבדיקה הנדסית של שלד המבנה, המערכות והגמר. בדק בית הוא המונח הנפוץ בתהליך רכישת דירה. שני התהליכים מבוצעים אצלנו ברמה ההנדסית הגבוהה ביותר על ידי מהנדס בדק בית מוסמך.',
    },
    {
      question: 'כמה זמן אורכת בדיקה הנדסית בנכס?',
      answer: 'משך הבדיקה תלוי בגודל הנכס. בממוצע, בדיקת דירת 4 חדרים אורכת בין שעתיים לשלוש שעות. אנו משתמשים במצלמה תרמית ובמכשור טכנולוגי כדי להבטיח איתור ליקויי בנייה נסתרים.',
    },
    {
      question: 'האם דוח הבדיקה כולל הערכת מחיר לתיקונים?',
      answer: 'בהחלט. כל דוח שאנו מפיקים כולל פירוט הליקויים, צילומים, הפניה לתקן הישראלי הרלוונטי והערכת עלות לתיקון הליקוי לפי מחירון דקל. זהו מסמך קביל ומשמעותי לניהול מו"מ מול קבלן או מוכר.',
    },
    {
      question: 'האם מהנדס בדק בית מגיע לכל חלקי הארץ?',
      answer: 'המהנדסים של אופקים הנדסה פרוסים בכל הארץ ומספקים שירותי בדק בית וביקורת מבנים מצפון ועד דרום. צרו קשר לתיאום בדיקה בקרבתכם.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-950">
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