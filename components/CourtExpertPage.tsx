
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const CourtExpertPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "חוות דעת הנדסית לבית משפט | מהנדס מומחה מטעם ביהמ״ש | אופקים הנדסה";
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
              Legal Engineering Services
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              חוות דעת <br/>
              <span className="text-blue-500">הנדסית לבית משפט</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              דוח הנדסי של "אופקים הנדסה" אינו רק ביקורת מבנים - הוא כלי משפטי עוצמתי. אנו מספקים חוות דעת מומחה קבילות, מבוססות תקנים, ומלווים אתכם בעדות בבית המשפט.
            </p>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">קבלו ייעוץ משפטי-הנדסי</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { t: 'מומחיות בתי משפט', d: 'המהנדס יוסי רשום במאגר המומחים של בתי המשפט ובעל ניסיון במאות עדויות.' },
              { t: 'דיוק הנדסי-משפטי', d: 'כל ליקוי מגובה בסעיפי חוק המכר, תקנות התכנון והבנייה ותקנים ישראליים רלוונטיים.' },
              { t: 'ליווי בהליכי בוררות', d: 'ייצוג מקצועי מול מהנדסי הקבלן ומול מומחים מטעם בית המשפט.' }
            ].map((box, i) => (
              <div key={i} className="bg-gray-900 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-4">{box.t}</h3>
                <p className="text-gray-400 leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">מתי נדרשת חוות דעת מומחה?</h2>
          <div className="space-y-4">
             {[
               'תביעות נזקי רטיבות ואיטום בין שכנים',
               'ליקויי בנייה חמורים בדירות קבלן לאחר שנת הבדק',
               'ירידת ערך לנכס עקב ליקויים שאינם ניתנים לתיקון',
               'הליכי בוררות בפירוק שיתוף או סכסוכי בנייה',
               'תביעות נגד חברות ביטוח לאחר נזקים מבניים'
             ].map((text, idx) => (
               <div key={idx} className="flex items-center gap-4 bg-gray-900/50 p-6 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                 <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black shrink-0">{idx+1}</div>
                 <p className="text-xl font-bold text-gray-200">{text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default CourtExpertPage;
