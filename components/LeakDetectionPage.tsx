
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const LeakDetectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "איתור נזילות ורטיבות בטכנולוגיה תרמית | ללא הרס | אופקים הנדסה";
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80')] bg-cover">
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              איתור נזילות <br/>
              <span className="text-blue-500">ורטיבות במצלמה תרמית</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12 font-medium">
              רואים סימני רטיבות? אל תשברו את הקירות. אנו משתמשים במצלמות תרמיות FLIR ובמכשור אקוסטי מתקדם לאיתור מקור הנזילה וביקורת מבנים הנדסית בדיוק מירבי, מבלי לגרום נזק לנכס.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
               {['אינסטלציה', 'איטום', 'צנרת', 'מרתפים'].map(t => (
                 <div key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-center font-bold text-blue-400">{t}</div>
               ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו בדיקה תרמית</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black text-white">איתור נזילות - טכנולוגיה בשירות ההנדסה</h2>
               <p className="text-xl text-gray-400">אנו לא משתמשים רק בעיניים. הציוד שלנו מאפשר לראות דרך קירות וריצוף ולאתר ליקויי בנייה סמויים:</p>
               <ul className="space-y-6">
                 {[
                   { t: 'מצלמה תרמית FLIR', d: 'מזהה הפרשי טמפרטורה המעידים על הצטברות מים מאחורי חיפויים.' },
                   { t: 'מד לחות אלקטרומגנטי', d: 'בודק אחוזי לחות בעומק הקיר ללא צורך בקידוח או חציבה.' },
                   { t: 'מכשור אקוסטי', d: 'איתור דליפות בצינורות בלחץ גבוה באמצעות גלי קול.' }
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
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg" className="relative rounded-[3rem] shadow-2xl border border-white/10" alt="צילום תרמי לאיתור נזילה" />
             </div>
           </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default LeakDetectionPage;
