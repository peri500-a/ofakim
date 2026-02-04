
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const SecondHandInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "בדק בית לדירות יד שנייה | ביקורת מבנים לפני רכישה | אופקים הנדסה";
  }, []);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen selection:bg-blue-500/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-normal leading-none">
              בדק בית <br/>
              <span className="text-blue-500">לדירות יד שנייה</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12 font-medium">
              השלב האחרון בתהליך הקנייה שמבטיח שלא נפלנו עם בית שבור. זו ההזדמנות שלכם להיות בטוחים בקבלת ההחלטה הטובה, החכמה והנכונה לרכישת הנכס.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
               {['איתור נזילות', 'שינויי מבנה', 'תשתיות ישנות', 'ירידת ערך'].map(t => (
                 <div key={t} className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-xl text-center font-bold text-blue-400">{t}</div>
               ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו בדיקה לפני רכישה</a>
          </div>
        </div>
      </section>

      {/* Contract & Strategy Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-600/10 border-r-4 border-blue-600 p-8 rounded-l-3xl mb-10">
                <h2 className="text-3xl font-black text-white mb-4 italic">הצהרת הקונה בחוזה (סעיף 16)</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  כל חוזה סטנדרטי מכיל את הסעיף: <span className="text-white font-bold">"הרוכשים מצהירים כי בחנו את הדירה... ולא תהיה להם כל טענה בקשר עם מצבה הפיזי"</span>. הצהרה זו ללא ביצוע בדק בית בפועל חושפת אתכם למצב בו לא תוכלו ליהנות מזכויותיכם בחוזה עקב רשלנות בבדיקה.
                </p>
              </div>
              <h3 className="text-2xl font-black text-white mb-6">מדוע לא מספיק שחבר או מהנדס "יבחן" את הדירה?</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                לעיתים קשה לשכנע את המוכר בחשיבות הליקויים כשהם מוצגים על ידי מכר. בבדיקה הנדסית רשמית, אנו מצהירים על ממצאים אובייקטיביים ללא הטיה. כך המוכר יכול לסמוך על הנתונים ולקבל החלטות מושכלות במשא ומתן.
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white">המדריך המלא <br/><span className="text-blue-500">לרוכש הנבון</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                מוכרי דירות נוטים להסתיר ליקויים על ידי שיפוץ קל או צביעה. רק בדק בית מקצועי עם ציוד ייעודי חושף את האמת ההנדסית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white">מה אנחנו בודקים בדירת יד שנייה?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { t: 'מערכות חשמל ותקשורת', d: 'בדיקת הארקה, יציבות מתח, קוטר גידים, חום בלוחות ואיזון פאזות למניעת שריפות.' },
              { t: 'איכות הבנייה וחומרים', d: 'התאמה לתקן הישראלי, איכות חומרים ושימוש בתקני בנייה ירוקה.' },
              { t: 'מערכות אינסטלציה', d: 'בדיקת ביוב, צנרת מים, לחצי מים וספיקה במכשור אקוסטי.' },
              { t: 'בטיחות הנדסית', d: 'בדיקת מעקות, חלונות מילוט, מתזים וכל אלמנט בטיחותי בנכס.' },
              { t: 'שינויים מבניים', d: 'וידוא התאמה לתשריט המקורי למניעת רכישת נכס עם הריסות לא חוקיות.' },
              { t: 'איתור רטיבות סמויה', d: 'שימוש במצלמות FLIR לאיתור נזילות מתחת לריצוף או מאחורי צבע טרי.' }
            ].map((box, i) => (
              <div key={i} className="bg-gray-900/50 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl hover:border-blue-500/30 transition-all group">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{box.t}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      
      <button 
        onClick={handleGoHome}
        className="fixed bottom-10 left-10 z-50 bg-blue-600 text-white font-black px-6 py-3 rounded-full shadow-2xl hover:bg-blue-500 transition-all flex items-center gap-2"
      >
        <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        חזרה לדף הבית
      </button>
    </div>
  );
};

export default SecondHandInspectionPage;
