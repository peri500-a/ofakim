
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const AppraisalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "שמאות רכוש והערכת נזקים | חוות דעת מומחה | אופקים הנדסה";
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80')] bg-cover">
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              שמאות <br/>
              <span className="text-blue-500">רכוש</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12 font-medium">
              הערכת שווי מקצועית ויסודית לצרכי ביטוח, ירידת ערך ותביעות נזיקין. אנו מספקים אומדן כספי מדויק המגובה בחוות דעת הנדסית לצורך קבלת פיצוי הולם.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
               {['הערכת נזקים', 'ירידת ערך', 'שמאות לביטוח', 'חוות דעת מומחה'].map(t => (
                 <div key={t} className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-xl text-center font-bold text-blue-400">{t}</div>
               ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו שמאות עכשיו</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black text-white">מתי נדרשת שמאות הנדסית?</h2>
               <p className="text-xl text-gray-400 italic">לא כל שמאי הוא מהנדס, ולא כל מהנדס הוא שמאי. אצלנו תקבלו את השילוב המנצח.</p>
               <ul className="space-y-6">
                 {[
                   { t: 'תביעות נגד חברות ביטוח', d: 'הוכחת הנזק הממשי והערכת עלויות התיקון האמיתיות מול אומדני החברה.' },
                   { t: 'ירידת ערך לנכס', d: 'הערכת הפגיעה בשווי הנכס כתוצאה מליקויי בנייה קבועים או נזקי צנרת נרחבים.' },
                   { t: 'סכסוכי שכנים', d: 'אומדן נזקים כתוצאה מהצפות או עבודות בנייה של השכן, קביל בבית משפט.' }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-4">
                     <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                <img src="https://images.unsplash.com/photo-1554469384-e58fb162295a?auto=format&fit=crop&w=800&q=80" className="relative rounded-[3rem] shadow-2xl border border-white/10" alt="שמאי רכוש בעבודה" />
             </div>
           </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AppraisalPage;
