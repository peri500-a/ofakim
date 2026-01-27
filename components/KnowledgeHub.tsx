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
  const [selectedId, setSelectedId] = useState<string>('defects');
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const cityData: Record<string, string> = {
    "תל אביב": "התמחות בבניינים לשימור, תמ\"א 38 ובדיקת תשתיות ישנות מול חדשות.",
    "ראשון לציון": "דגש על בדיקת איטום וחיפויים חיצוניים בשכונות החדשות במערב העיר.",
    "רחובות": "מומחיות בבדיקת צנרת ואינסטלציה במבנים צמודי קרקע ודירות יוקרה.",
    "נתניה": "איתור נזקי מליחות וקורוזיה בבניינים הקרובים לקו החוף.",
    "ירושלים": "בדיקת חיפוי אבן ירושלמית ובידוד תרמי המותאם לאקלים ההררי.",
    "פתח תקווה": "ביקורת מקיפה למגדלי מגורים רבי קומות ובדיקת מערכות כיבוי אש.",
    "אשדוד": "אבחון ליקויי בנייה בבנייה רוויה חדשה עם דגש על שיפועי מרפסות.",
    "חיפה": "התמחות בבדיקת יציבות וביסוס במבנים על צלע ההר."
  };

  const areas = Object.keys(cityData);

  const articles: Article[] = [
    {
      id: 'defects',
      keyword: 'ליקויי בנייה',
      title: '3 ליקויי הבנייה הנפוצים ביותר',
      excerpt: 'מרטיבות במסדי הבניין ועד בעיות קונסטרוקציה - המדריך המלא לרוכשי דירות.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">איך מזהים כשלים לפני שהם הופכים לנזק בלתי הפיך?</p>
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">1. כשלי איטום בחדרים רטובים</h5>
              <p className="text-gray-300 leading-relaxed">שיפועים הפוכים במקלחות או איטום חסר מובילים לרטיבות קפילארית שמטפסת בקירות.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">2. סטייה במישוריות הריצוף</h5>
              <p className="text-gray-300 leading-relaxed">אריחים בולטים או חללים מתחת לאריח ("צליל חלול") שיובילו לשבירתם בעתיד.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'price',
      keyword: 'בדק בית מחיר',
      title: 'כמה עולה בדק בית ב-2026?',
      excerpt: 'מחירון מעודכן, הבדלים בין בית פרטי לדירה וגבולות השירות.',
      image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">שקיפות מלאה במחירון בדק בית.</p>
          <div className="bg-gray-800 rounded-2xl p-6 border border-white/5">
             <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">דירת 3 חדרים</span> 
                 <span className="text-blue-400 font-black">1,450 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">דירת 4-5 חדרים</span> 
                 <span className="text-blue-400 font-black">1,750 ₪</span>
               </li>
               <li className="flex justify-between items-center pt-1">
                 <span className="text-white font-black text-lg">בית פרטי</span> 
                 <span className="text-blue-400 font-black text-lg">החל מ-2,500 ₪</span>
               </li>
             </ul>
          </div>
          <p className="text-gray-400 italic text-sm mt-4 bg-white/5 p-4 rounded-xl">
            * המחירים כוללים בדיקה תרמית ודוח הנדסי קביל בבית משפט.
          </p>
        </div>
      )
    }
  ];

  const selectedArticle = articles.find(a => a.id === selectedId) || articles[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (contentRef.current) {
      const offset = 100;
      window.scrollTo({
        top: contentRef.current.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="knowledge" className="py-20 sm:py-32 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4">מרכז המידע והידע</h2>
          <h3 className="text-4xl sm:text-6xl font-black text-white mb-6">מדריכי הנדסה וביקורת מבנים</h3>
          
          {/* SEO Locations Tag Cloud - Interactive Version */}
          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-4 font-bold">בחרו עיר לצפייה בדגשים הנדסיים מקומיים:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(area => (
                <button 
                  key={area} 
                  onClick={() => setActiveCity(area)}
                  className={`text-sm font-bold px-4 py-2 rounded-xl border transition-all duration-300 ${
                    activeCity === area 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20 scale-110' 
                    : 'text-blue-400/80 bg-blue-400/5 border-blue-400/10 hover:border-blue-400/40'
                  }`}
                >
                  בדק בית ב{area}
                </button>
              ))}
            </div>
            
            {activeCity && (
              <div className="mt-8 animate-fade-in bg-blue-600/5 border border-blue-500/20 rounded-3xl p-6 max-w-2xl mx-auto relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                <h4 className="text-xl font-black text-blue-400 mb-2">מומחיות הנדסית ב{activeCity}:</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{cityData[activeCity]}</p>
                <button 
                  onClick={() => setActiveCity(null)}
                  className="mt-4 text-xs text-gray-500 hover:text-white transition-colors"
                >
                  סגור מידע מקומי [X]
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => handleSelect(article.id)}
              className={`group text-right p-8 rounded-3xl border transition-all duration-500 ${
                selectedId === article.id 
                  ? 'bg-blue-600 border-blue-500 shadow-2xl' 
                  : 'bg-gray-900 border-white/5 hover:border-blue-500/30'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'
              }`}>
                {article.icon}
              </div>
              <h4 className={`text-2xl font-black mb-3 ${selectedId === article.id ? 'text-white' : 'text-gray-100'}`}>
                {article.title}
              </h4>
              <p className={`text-base line-clamp-2 ${selectedId === article.id ? 'text-blue-100' : 'text-gray-400'}`}>
                {article.excerpt}
              </p>
            </button>
          ))}
        </div>

        <div ref={contentRef} className="max-w-6xl mx-auto animate-fade-in" key={selectedId}>
          <div className="bg-gray-900 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl">
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 right-10">
                <h4 className="text-3xl font-black text-white">{selectedArticle.title}</h4>
              </div>
            </div>
            <div className="lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center bg-gray-900">
              <div className="text-gray-300">
                {selectedArticle.content}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <a href="#contact" className="inline-block bg-blue-600 text-white font-black px-10 py-4 rounded-2xl shadow-xl hover:bg-blue-500 transition-all">
                  דברו עם מהנדס עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;