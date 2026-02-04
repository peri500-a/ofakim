
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import FAQ from './FAQ';
import Logo from './Logo';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "מחירון בדק בית וביקורת מבנים 2026 | אופקים הנדסה - מחיר שקוף";
  }, []);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '/';
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const priceTable = [
    { item: 'דירת 2 חדרים (חדשה/יד שנייה)', price: '1,200 - 1,500 ₪', notes: 'כולל בדיקה תרמית בסיסית ודו"ח מהנדס' },
    { item: 'דירת 3-4 חדרים', price: '1,500 - 1,900 ₪', notes: 'השירות המבוקש ביותר' },
    { item: 'דירת 5-6 חדרים / פנטהאוז', price: '1,900 - 2,500 ₪', notes: 'כולל בדיקת מערכות מורחבת וגגות' },
    { item: 'בית פרטי / צמוד קרקע (עד 200 מ"ר)', price: '2,500 - 3,500 ₪', notes: 'בדיקת מעטפת, חצר ותשתיות חוץ' },
    { item: 'איתור נזילות ותרמוגרפיה', price: '800 - 1,200 ₪', notes: 'איתור מקצועי ללא הרס' },
    { item: 'חוות דעת הנדסית משפטית', price: 'החל מ-3,500 ₪', notes: 'ערוכה ע"י מומחה מטעם בימ"ש' },
  ];

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen selection:bg-blue-500/30">
      <Header />
      
      {/* Hero Section for Pricing */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={handleGoHome}
              className="inline-flex items-center gap-2 text-blue-400 font-bold mb-8 hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              חזרה לאתר הראשי
            </button>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
              כמה עולה <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">בדק בית וביקורת מבנים?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              אנחנו מאמינים בשקיפות הנדסית מלאה. כאן תוכלו למצוא את מחירי בדק הבית והביקורת ההנדסית שלנו לשנת 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { t: 'מחיר פיקס', d: 'ללא אותיות קטנות או "הפתעות" בשטח' },
                { t: 'מהנדס רשום', d: 'כל הבדיקות מבוצעות ע"י מהנדס בדק בית מוסמך' },
                { t: 'דוח תוך 48 שעות', d: 'התחייבות למסירת דוח הנדסי קביל ומהיר' }
              ].map((box, i) => (
                <div key={i} className="bg-gray-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl mb-4 flex items-center justify-center text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{box.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{box.d}</p>
                </div>
              ))}
            </div>

            {/* Pricing Table */}
            <div className="bg-gray-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
              <div className="p-8 md:p-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="pb-6 text-gray-500 font-bold uppercase tracking-widest text-xs">סוג הנכס / השירות</th>
                        <th className="pb-6 text-gray-500 font-bold uppercase tracking-widest text-xs">עלות משוערת (כולל מע"מ)</th>
                        <th className="pb-6 text-gray-500 font-bold uppercase tracking-widest text-xs hidden sm:table-cell">מה כולל?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {priceTable.map((row, idx) => (
                        <tr key={idx} className="group hover:bg-blue-600/5 transition-colors">
                          <td className="py-8">
                            <span className="block text-xl font-black text-white group-hover:text-blue-400 transition-colors">{row.item}</span>
                          </td>
                          <td className="py-8">
                            <span className="text-2xl font-black text-blue-300">{row.price}</span>
                          </td>
                          <td className="py-8 hidden sm:table-cell">
                            <span className="text-gray-500 text-sm">{row.notes}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-12 p-6 bg-gray-950/50 rounded-2xl border border-white/5 text-center">
                  <p className="text-gray-400 text-sm italic">
                    * המחירים עשויים להשתנות בהתאם למורכבות הנכס ודרישות ביקורת המבנים הספציפיות. <br className="hidden md:block"/> אנו ממליצים תמיד להתקשר ולקבל הצעה מדויקת המותאמת עבורכם.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
      
      <button 
        onClick={handleGoHome}
        className="fixed bottom-10 left-10 z-50 bg-white text-gray-950 font-black px-6 py-3 rounded-full shadow-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 flex items-center gap-2"
      >
        <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        בית
      </button>
    </div>
  );
};

export default PricingPage;
