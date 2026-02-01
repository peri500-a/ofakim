
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const VillaInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "בדק בית לבתים פרטיים וצמודי קרקע | ביקורת וילה | אופקים הנדסה";
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover">
        <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              בדק בית <br/>
              <span className="text-blue-500">לבתים פרטיים</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12 font-medium">
              בית פרטי הוא מורכב פי כמה מדירה בבניין. אנו בודקים את המעטפת, הגג, החצר, תשתיות הניקוז והאיטום לעומק כדי להגן על ההשקעה הגדולה בחייכם.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
               {['בדיקת גגות רעפים', 'איטום מרתפים', 'תשתיות חוץ', 'קירות תמך'].map(t => (
                 <div key={t} className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-xl text-center font-bold text-blue-400">{t}</div>
               ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו בדיקה לוילה</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black text-white">מדוע בדיקת וילה שונה מדירה?</h2>
               <p className="text-xl text-gray-400 italic">בבית צמוד קרקע, אתם האחראים הבלעדיים על כל המערכות. אין ועד בית שיטפל בנזילות מהגג או בפיצוצי צנרת בחצר.</p>
               <ul className="space-y-6">
                 {[
                   { t: 'בדיקת מעטפת וחיפויים', d: 'וידוא תקינות האבן, השליכט והבידוד התרמי למניעת עיבוי ורטיבות.' },
                   { t: 'תשתיות ניקוז וביוב', d: 'בדיקת שיפועים בחצר ומערכות ניקוז למניעת הצפות בחורף.' },
                   { t: 'גגות ואיטום עליון', d: 'בדיקת רעפים, מרזבים ואיטום יריעות ביטומניות בגגות שטוחים.' }
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
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" className="relative rounded-[3rem] shadow-2xl border border-white/10" alt="בדק בית לבית פרטי" />
             </div>
           </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default VillaInspectionPage;
