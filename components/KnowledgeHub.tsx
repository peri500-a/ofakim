
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
            <button key={article.id} onClick={() => handleSelect(article.id)} className={`text-right p-8 rounded-3xl border transition-all ${selectedId === article.id ? 'bg-blue-600 border-blue-500' : 'bg-gray-900 border-white/5'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'}`}>
                {article.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-2">{article.title}</h4>
              <p className="text-gray-400">{article.excerpt}</p>
            </button>
          ))}
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto bg-gray-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="h-64 relative">
            <img src={articles.find(a => a.id === selectedId)?.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="p-10">
            {articles.find(a => a.id === selectedId)?.content}
            <div className="mt-10 flex gap-4">
               <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black">ייעוץ חינם עם מהנדס</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
