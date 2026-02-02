
import React, { useState, useRef } from 'react';

interface Article {
  id: string;
  keyword: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  icon: React.ReactNode;
}

const KnowledgeHub: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('price');
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const cityData: Record<string, string> = {
    "תל אביב": "ביצוע בדק בית בתל אביב מחייב היכרות עם בנייה רוויה צפופה ומבנים לשימור. אנו בוחנים רטיבות במרתפים ומערכות משותפות.",
    "ירושלים": "בדק בית בירושלים מצריך בדיקת בידוד תרמי וחיפויי אבן ייחודיים העומדים בתקנים המחמירים של הבירה."
  };

  const areas = Object.keys(cityData);

  const articles: Article[] = [
    {
      id: 'price',
      keyword: 'בדק בית מחיר 2026',
      title: 'מחירון בדק בית מעודכן לשנת 2026',
      excerpt: 'כמה עולה בדק בית? הנה המחירון השקוף שלנו שיעזור לכם לתכנן את התקציב נכון.',
      image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">השקעה בבדק בית היא השקעה שמחזירה את עצמה. בממוצע, המהנדס מוצא ליקויים בשווי של פי 10 מעלות הבדיקה.</p>
          <div className="bg-blue-600/10 rounded-2xl p-6 border border-blue-500/20">
             <ul className="space-y-4">
               <li className="flex justify-between border-b border-white/5 pb-2"><span>דירת 3 חדרים (חדשה)</span><span className="text-white font-bold">1,400 - 1,800 ₪</span></li>
               <li className="flex justify-between border-b border-white/5 pb-2"><span>דירת 5 חדרים (יד שנייה)</span><span className="text-white font-bold">1,700 - 2,300 ₪</span></li>
               <li className="flex justify-between"><span>בית פרטי / וילה</span><span className="text-white font-bold">החל מ-2,500 ₪</span></li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'defects',
      keyword: 'ליקויי בנייה נפוצים',
      title: 'ליקויי בנייה נפוצים: מה מסתתר מאחורי הטיח?',
      excerpt: 'מרטיבות כלואה ועד סדקים בשלד - אלו הליקויים שחוזרים על עצמם ברוב הדירות החדשות בישראל.',
      image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a9a37?auto=format&fit=crop&w=1200&q=80',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      content: (
        <div className="space-y-4 text-gray-300">
          <p className="font-bold text-white text-lg">המציאות בשטח מראה שב-100% מהדירות החדשות ישנם ליקויים.</p>
          <p>הליקויים הנפוצים ביותר שאנו מאתרים כוללים:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li className="bg-white/5 p-4 rounded-xl border border-white/10"><span className="text-blue-400 font-bold block mb-1">רטיבות כלואה:</span> נגרמת עקב איטום לקוי או שימוש בחול רטוב מתחת לריצוף.</li>
            <li className="bg-white/5 p-4 rounded-xl border border-white/10"><span className="text-blue-400 font-bold block mb-1">סדקים נימיים:</span> סדקים המופיעים עקב "עבודה" של המבנה או יישום טיח לא תקין.</li>
            <li className="bg-white/5 p-4 rounded-xl border border-white/10"><span className="text-blue-400 font-bold block mb-1">ליקויי חשמל:</span> היעדר הארקה או חיווט לא תקני המסכן את דיירי הבית.</li>
            <li className="bg-white/5 p-4 rounded-xl border border-white/10"><span className="text-blue-400 font-bold block mb-1">כשלי ריצוף:</span> אריחים "חלולים" או חוסר בשיפועים במרפסות ובחדרי רחצה.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'legal',
      keyword: 'הכוח המשפטי של הדוח',
      title: 'הכוח המשפטי של הדוח ההנדסי בבית המשפט',
      excerpt: 'איך הופך דוח ביקורת המבנים של אופקים הנדסה לראיה מכרעת שמנצחת תביעות מול קבלנים?',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      content: (
        <div className="space-y-4 text-gray-300">
          <p>דוח הנדסי מקצועי הוא לא רק רשימת ליקויים, הוא מסמך משפטי ערוך כחוות דעת מומחה לבית משפט.</p>
          <div className="space-y-4 mt-6">
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-white">1</div>
               <p><strong className="text-white">ביסוס על תקנים ישראליים:</strong> כל ליקוי מפנה לסעיף המדויק בתקן הישראלי (ת"י) או בתקנות התכנון והבנייה.</p>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-white">2</div>
               <p><strong className="text-white">תיעוד טכנולוגי:</strong> צילומים תרמיים ומדידות לייזר משמשים כהוכחות חותכות שקשה להתווכח איתן בבית המשפט.</p>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-white">3</div>
               <p><strong className="text-white">אומדן עלויות:</strong> הדוח כולל הערכת עלות לתיקון הליקויים המבוססת על מחירוני "דקל", מה שמאפשר לשופט לפסוק פיצוי כספי מדויק.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why',
      keyword: 'למה בדק בית',
      title: '7 סיבות קריטיות לבצע בדק בית',
      excerpt: 'מביטחון אישי ועד כוח מיקוח במו"מ - הנה כל מה שאתם חייבים לדעת לפני חתימה על חוזה.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-4 text-gray-300">
          <p>בדיקה הנדסית מעניקה לכם שקט נפשי. הממצאים שלנו מהווים בסיס חוקי לדרישת תיקונים מהקבלן או להפחתת מחיר ממוכר הדירה.</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>איתור רטיבות סמויה בציוד תרמי.</li>
            <li>בדיקת עמידות המבנה ותקינות שלד.</li>
            <li>אימות התאמה לתקנים ישראליים (חוק המכר).</li>
          </ul>
        </div>
      )
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="knowledge" className="py-24 bg-gray-950/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">מומחיות בפריסה ארצית</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8">מרכז המידע <span className="text-blue-500">להנדסה</span></h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map(area => (
              <button key={area} onClick={() => setActiveCity(area)} className={`px-5 py-2 rounded-full border text-sm font-bold transition-all ${activeCity === area ? 'bg-blue-600 border-blue-600 text-white' : 'text-gray-400 border-white/10 hover:border-blue-500/30'}`}>
                {area}
              </button>
            ))}
          </div>

          {activeCity && (
            <div className="mb-12 p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl max-w-2xl mx-auto animate-fade-in text-right">
              <h4 className="text-xl font-bold text-blue-400 mb-2">בדק בית ב{activeCity}</h4>
              <p className="text-gray-300">{cityData[activeCity]}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {articles.map((article) => (
            <button key={article.id} onClick={() => handleSelect(article.id)} className={`text-right p-8 rounded-3xl border transition-all h-full flex flex-col items-start ${selectedId === article.id ? 'bg-blue-600 border-blue-500' : 'bg-gray-900 border-white/5 hover:border-blue-500/30'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 ${selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'}`}>
                {article.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-2xl font-black text-white mb-2 leading-tight">{article.title}</h4>
                <p className="text-gray-400 line-clamp-2">{article.excerpt}</p>
              </div>
            </button>
          ))}
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto bg-gray-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500">
          <div className="h-64 sm:h-80 relative">
            <img src={articles.find(a => a.id === selectedId)?.image} className="w-full h-full object-cover" alt={articles.find(a => a.id === selectedId)?.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
            <div className="absolute bottom-6 right-10">
               <h2 className="text-3xl sm:text-4xl font-black text-white">{articles.find(a => a.id === selectedId)?.title}</h2>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            {articles.find(a => a.id === selectedId)?.content}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-center justify-between">
               <div>
                 <p className="text-white font-bold mb-1">רוצים לדעת עוד על {articles.find(a => a.id === selectedId)?.keyword}?</p>
                 <p className="text-gray-400 text-sm">המומחים שלנו כאן לכל שאלה מקצועית.</p>
               </div>
               <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-900/40">התייעצו עם מהנדס</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
