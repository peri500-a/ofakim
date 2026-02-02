
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const ContractorInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const warrantyItems = [
    { id: 1, title: 'ליקוי במוצרי מסגרות ונגרות', years: 'שנתיים', detail: 'לרבות אלומיניום ופלסטיק' },
    { id: 2, title: 'ליקוי בריצוף וחיפוי פנים', years: 'שנתיים', detail: 'לרבות שקיעות ושחיקה' },
    { id: 3, title: 'כשל בתפקוד מכונות ודוודים', years: 'שלוש שנים', detail: 'עמידות בתפקוד לאורך זמן' },
    { id: 4, title: 'ליקוי בפיתוח חצר', years: 'שלוש שנים', detail: 'שקיעות, דרכים, שבילים, גדרות, מערכות מים וחשמל' },
    { id: 5, title: 'כשל במרכיבי הבידוד התרמי', years: 'שלוש שנים', detail: 'תפקוד ועמידות המערכת' },
    { id: 6, title: 'כשל במערכות צנרת', years: 'ארבע שנים', detail: 'כולל הסקה, מרזבים, דלוחין וביוב (לרבות נזילות)' },
    { id: 7, title: 'כשל באיטום המבנה', years: 'ארבע שנים', detail: 'בחללים תת-קרקעיים, קירות, תקרות וגגות' },
    { id: 8, title: 'סדקים ברוחב מעל 1.5 מ"מ', years: 'חמש שנים', detail: 'ברכיבים שאינם נושאים' },
    { id: 9, title: 'התנתקות/קילוף חיפויי חוץ', years: 'שבע שנים', detail: 'התפרקות או נפילה של חיפויים' },
    { id: 10, title: 'אי-התאמה יסודית אחרת', years: 'שנה אחת', detail: 'כל אי-התאמה שאינה מפורטת לעיל' },
  ];

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1503387762-592dea58ef22?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-normal leading-none">
              בדק בית <br/>
              <span className="text-blue-500">לדירה חדשה מקבלן</span>
            </h1>
            <p className="text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-medium">
              קיבלתם מפתח? מזל טוב. עכשיו הזמן לוודא שהקבלן עמד בכל ההתחייבויות שלו. אל תחתמו על פרוטוקול המסירה ללא ביקורת מבנים הנדסית של מהנדס מוסמך.
            </p>
            <div className="flex gap-4">
               <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-xl shadow-blue-900/40">הזמינו בדיקת מסירה</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
             <div>
               <div className="text-5xl font-black mb-2">100%</div>
               <div className="text-blue-100 font-bold">דיוק לפי חוק המכר</div>
             </div>
             <div>
               <div className="text-5xl font-black mb-2">48h</div>
               <div className="text-blue-100 font-bold">מסירת דוח מהיר</div>
             </div>
             <div>
               <div className="text-5xl font-black mb-2">₪45k</div>
               <div className="text-blue-100 font-bold">חיסכון ממוצע לדירה</div>
             </div>
             <div>
               <div className="text-5xl font-black mb-2">15yr</div>
               <div className="text-blue-100 font-bold">ניסיון הנדסי מוכח</div>
             </div>
          </div>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-8">מה בודקים בבדק בית לדירה חדשה?</h2>
              <div className="space-y-6">
                {[
                  { t: 'איתור ליקויי רטיבות ואיטום', d: 'שימוש במצלמה תרמית לאיתור נזילות סמויות שיתגלו רק בחורף.' },
                  { t: 'בדיקת תשתיות חשמל ואינסטלציה', d: 'וידוא זרימה תקינה, הארקה והתאמה לתוכניות המקוריות.' },
                  { t: 'בדיקת מישוריות וריצוף', d: 'איתור חללים מתחת לאריחים וסטיות במישוריות הקירות.' },
                  { t: 'ביקורת מפרט המכר', d: 'השוואה מדוקדקת בין מה שהובטח לכם בחוזה לבין מה שבוצע בפועל.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 font-black group-hover:bg-blue-600 group-hover:text-white transition-all">{i+1}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.t}</h3>
                      <p className="text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full"></div>
               <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" className="relative rounded-[3rem] shadow-2xl border border-white/10" alt="מהנדס בודק דירה חדשה" />
            </div>
          </div>
        </div>
      </section>

      {/* Law Supplement Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm mb-4 italic">חוק המכר (דירות)</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">התוספת (סעיף 4): <span className="text-blue-500">תקופות הבדק</span></h3>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                לפי החוק, הקבלן אחראי לתיקון ליקויים שנתגלו בדירה בתקופות זמן קצובות. המהנדס שלנו יוודא שכל חריגה מהתקנים האלו תופיע בדוח ההנדסי שלכם.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warrantyItems.map((item) => (
                <div key={item.id} className="bg-gray-900 border border-white/5 p-6 rounded-2xl flex items-center justify-between hover:border-blue-500/30 transition-all group">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-blue-500 font-black text-xs uppercase tracking-widest">{item.id}.</span>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>
                  <div className="shrink-0 mr-4 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-xl text-blue-400 font-black text-sm whitespace-nowrap">
                    {item.years}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-950 p-8 rounded-[2rem] border border-white/5 space-y-4 text-sm text-gray-400">
               <h4 className="text-white font-bold text-lg mb-2 underline decoration-blue-500 underline-offset-8">הגדרות חשובות מהחוק:</h4>
               <p><strong className="text-blue-400">"כשל"</strong> – כישלון מלא או חלקי בתפקוד המוצר או המערכת.</p>
               <p><strong className="text-blue-400">"ליקוי"</strong> – ליקוי בתפקוד ובעמידות המוצר או המערכת, לרבות אי-שמירה על יציבות, שלמות, איכות ומראה, הן של כל מרכיב בנפרד והן של המכלול.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Summary Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-4xl font-black text-white mb-8">הגנה משפטית מלאה</h2>
             <p className="text-xl text-gray-400 leading-relaxed mb-12">
               הדוח ההנדסי של "אופקים הנדסה" משמש כמסמך משפטי מחייב המפרט את הליקויים מול הקבלן בהתאם לתקופות הבדק המצוינות לעיל. אל תתנו לקבלן להתחמק מהאחריות המוטלת עליו בחוק.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="bg-gray-950 p-8 rounded-3xl border border-white/5">
                  <h3 className="text-blue-400 font-bold mb-3">שנת הבדק</h3>
                  <p className="text-gray-500">תקופה שמתחילה עם מסירת הדירה, בה הקבלן חייב לתקן כל ליקוי אלא אם הוכיח שהנגרם ע"י הקונה.</p>
                </div>
                <div className="bg-gray-950 p-8 rounded-3xl border border-white/5">
                  <h3 className="text-blue-400 font-bold mb-3">תקופת האחריות</h3>
                  <p className="text-gray-500">תקופה של 3 שנים נוספות לאחר שנת הבדק, בה האחריות היא על הקונה להוכיח שהליקוי מקורו בבנייה.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <Contact />
      <Footer />
      
      {/* Back Button */}
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

export default ContractorInspectionPage;
