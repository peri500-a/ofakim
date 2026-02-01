
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const WarrantyInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "בדיקת סוף שנת בדק | מימוש אחריות קבלן | אופקים הנדסה";
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
              Last Chance Warranty Check
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              בדיקת סוף <br/>
              <span className="text-blue-500">שנת בדק</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              גרים בבית שנה? זה הזמן הקריטי ביותר. לפני שתקופת הבדק מסתיימת, חובת ההוכחה היא על הקבלן. דוח מהנדס עכשיו יחסוך לכם עשרות אלפי שקלים בתיקונים עתידיים.
            </p>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו בדיקת שנת בדק</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12">למה דווקא עכשיו?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <p className="text-xl text-gray-400">בשנה הראשונה למגורים, הבית "מתיישב". זה השלב שבו מתגלים סדקים, כשלי איטום ובעיות תשתית שלא נראו במסירה הראשונית.</p>
                 <div className="bg-gray-900 p-8 rounded-3xl border border-blue-500/20">
                    <h4 className="text-white font-bold text-xl mb-4">חוק המכר לטובתכם</h4>
                    <p className="text-gray-400">בתקופת הבדק, הקבלן חייב לתקן כל ליקוי אלא אם הוכיח שהנזק נגרם באשמתכם. לאחר מכן, חובת ההוכחה עוברת אליכם.</p>
                 </div>
               </div>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    'איתור סדקים שהופיעו לאחר ההתיישבות',
                    'בדיקת מערכות מיזוג וניקוז לאחר שימוש',
                    'אבחון רטיבות שחדרה במהלך החורף הראשון',
                    'וידוא תקינות מערכות המים והביוב'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      <span className="font-bold">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default WarrantyInspectionPage;
