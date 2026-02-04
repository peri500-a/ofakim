
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
              חוות דעת הנדסית <br/>
              <span className="text-blue-500">לבית משפט ובוררות</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              דוח הנדסי של "אופקים הנדסה" נכתב בהקפדה על ידי מומחה שזו אמנותו. המסמך נערך בשים לב לכל העובדות, החוקים והתקנות, בראייה משפטית המשמשת אסמכתא לצדקת הדרך.
            </p>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">קבלו ייעוץ משפטי-הנדסי</a>
          </div>
        </div>
      </section>

      {/* Legal Process Description */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">התנהלות הליך משפטי על רקע ליקויי בנייה</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600/20 -translate-y-1/2 hidden md:block"></div>
              {[
                { t: 'התובע', d: 'מיוצג ע״י עו״ד ונסמך על חוות דעת של מהנדס אזרחי מטעמו המפרט את הליקויים.' },
                { t: 'הנתבע', d: 'מתגונן באמצעות חוות דעת נגדית של מהנדס מטעמו, המציגה את הצד השני של הממצאים.' },
                { t: 'המומחה המכריע', d: 'השופט ממנה מהנדס שלישי כגורם מבדיל בין חוות הדעת. אנו משמשים בדרך כלל כגורם זה הממונה ע״י ביהמ״ש.' }
              ].map((step, i) => (
                <div key={i} className="relative bg-gray-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl z-10 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-black text-xl">{i+1}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{step.t}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-blue-600/10 border border-blue-500/20 p-10 rounded-[3rem] text-center">
              <h3 className="text-2xl font-black text-white mb-4">יושרה מקצועית מעל הכל</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                אנו נבדלים ממרבית המהנדסים בכך שאיננו מייצגים כל אחד. אם מכלול העובדות מלמד על הטעיה ורמייה - נסרב לטפל בתיק. אנו מחויבים לאובייקטיביות מלאה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">מתי נדרשת חוות דעת מומחה?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {[
               'הפרות חוזה מול קבלן שיפוצים',
               'ליקויי בנייה המתגלים לאורך זמן',
               'ייצוג קבלנים המתגוננים מפני עוול',
               'אי-תשלום בגין עבודות בנייה שבוצעו',
               'תביעות נזקי רטיבות מורכבות',
               'הליכי בוררות הנדסיים'
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
