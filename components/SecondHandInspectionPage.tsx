
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const SecondHandInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "בדק בית לדירות יד שנייה | ביקורת הנדסית לפני רכישה | אופקים הנדסה";
  }, []);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      
      <section className="relative pt-40 pb-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              בדק בית <br/>
              <span className="text-blue-500">לדירות יד שנייה</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12 font-medium">
              אל תקנו חתול בשק. בדיקה הנדסית מקצועית חושפת ליקויים סמויים, רטיבות מתחת לריצוף ושינויים מבניים לא חוקיים בנכס משומש. הגנה מלאה על ההשקעה שלכם.
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

      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black text-white">מדוע חייבים בדק בית בדירת יד שנייה?</h2>
               <p className="text-xl text-gray-400 italic">בניגוד לדירה חדשה, בדירת יד שנייה אין קבלן שאחראי עליכם. מה שקניתם זה מה שיש - אלא אם תגלו את הליקויים מראש.</p>
               <ul className="space-y-6">
                 {[
                   { t: 'אבחון רטיבות סמויה', d: 'אנחנו משתמשים במצלמות תרמיות כדי לראות מה מסתתר מאחורי "קיר שצבעו אותו מחדש" כדי להסתיר עובש.' },
                   { t: 'בדיקת קונסטרוקציה', d: 'וידוא שאין סדקים מבניים בשלד ושהריסות קירות פנים שבוצעו בעבר לא פגעו ביציבות הבניין.' },
                   { t: 'בדיקת צנרת וביוב', d: 'הערכת מצב הצנרת הישנה למניעת פיצוצי מים ימים ספורים לאחר הכניסה לדירה.' }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-4">
                     <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0 font-black">
                       {idx + 1}
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-white">{item.t}</h4>
                       <p className="text-gray-400">{item.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" className="relative rounded-[3rem] shadow-2xl border border-white/10" alt="בדק בית לדירה יד שנייה" />
             </div>
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
        בית
      </button>
    </div>
  );
};

export default SecondHandInspectionPage;
