
import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-right"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-100">{question}</h3>
        <svg
          className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-300 leading-relaxed pr-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'כמה זמן אורכת בדיקת בדק בית?',
      answer: 'משך הבדיקה תלוי בגודל הנכס ובמורכבותו. בממוצע, בדיקת דירת 4-5 חדרים אורכת בין שעתיים לשלוש שעות. אנו מקדישים את כל הזמן הנדרש כדי לא לפספס אף פרט.',
    },
    {
      question: 'מתי מקבלים את דוח הבדיקה?',
      answer: 'אנו מתחייבים לספק דוח הנדסי מפורט עד 5 ימי עסקים ממועד ביצוע הבדיקה. במקרים דחופים, ניתן לתאם קבלת דוח מהירה יותר.',
    },
    {
      question: 'האם הדוח שלכם קביל בבית משפט?',
      answer: 'בהחלט. כל הדוחות שלנו נכתבים על ידי מהנדסים מוסמכים, והם קבילים כחוות דעת מומחה בבתי משפט. הדוח מהווה כלי משפטי חזק שיכול לשמש אתכם בתביעות כנגד קבלנים או מוכרים.',
    },
    {
      question: 'האם אני חייב להיות נוכח במהלך הבדיקה?',
      answer: 'נוכחותכם מומלצת, במיוחד בחלק האחרון של הבדיקה, כדי שתוכלו לקבל מהמהנדס הסברים בזמן אמת על הממצאים. עם זאת, אין חובה להיות נוכחים לאורך כל הבדיקה.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">שאלות נפוצות</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">כל מה שרציתם לדעת על בדק בית במקום אחד.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
