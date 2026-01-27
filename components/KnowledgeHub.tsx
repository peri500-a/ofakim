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
    "תל אביב": "כמהנדס בדק בית בתל אביב, אנו מתמחים במבנים לשימור, מגדלי יוקרה ובדיקת תשתיות מורכבות בבנייה רוויה וצפופה.",
    "רחובות": "שירותי ביקורת מבנים ברחובות כוללים מומחיות בבדיקת צנרת ואינסטלציה במבנים צמודי קרקע ובתים פרטיים חדשים.",
    "שוהם": "בדק בית בשוהם מתמקד בבדיקת שלד, פיתוח שטח וניקוז, האופייניים לבנייה צמודת קרקע באזור.",
    "ירושלים": "מהנדס בדק בית בירושלים בוחן את איכות הבידוד התרמי, חיפויי אבן ועמידות המבנה לאקלים ההררי הייחודי.",
    "רמת השרון": "ביקורת מבנים ברמת השרון מתמקדת בווילות יוקרה ובנייני בוטיק, עם דגש על איכות גמר גבוהה ומערכות חכמות.",
    "הרצליה": "בהרצליה אנו מבצעים איתור כשלי איטום ורטיבות בקרבת קו החוף ובדיקת מערכות אלקטרו-מכניות במגדלים.",
    "רמת גן": "מהנדס בדק בית ברמת גן מתמחה בביקורת פרויקטים של התחדשות עירונית (תמ\"א 38) ובדיקת מגדלי מגורים מודרניים.",
    "גבעתיים": "בדק בית בגבעתיים כולל בדיקת תשתיות בבניינים ותיקים ופרויקטים של פינוי-בינוי במרקם עירוני צפוף."
  };

  const areas = Object.keys(cityData);

  const articles: Article[] = [
    {
      id: 'defects',
      keyword: 'ליקויי בנייה',
      title: 'מדריך: איתור ליקויי בנייה נפוצים',
      excerpt: 'מבעיות רטיבות סמויה ועד כשלי קונסטרוקציה - גלו איך מהנדס בדק בית מזהה כשלים.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-white mb-4 italic">זיהוי כשלי בנייה לפני שהם הופכים לנזק כלכלי</h4>
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">1. רטיבות קפילארית ואיטום</h5>
              <p className="text-gray-300 leading-relaxed">שימוש במצלמה תרמית מאפשר למהנדס לאתר רטיבות מתחת לריצוף שנובעת מאיטום לקוי בחדרים רטובים.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">2. סדקים ובעיות קונסטרוקציה</h5>
              <p className="text-gray-300 leading-relaxed">ביקורת מבנים מקצועית מבחינה בין סדקי נימיות לסדקים בבטון המעידים על בעיות ביסוס חמורות.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'price',
      keyword: 'בדק בית מחיר',
      title: 'מחירון בדק בית וביקורת מבנים 2026',
      excerpt: 'כמה באמת עולה להזמין מהנדס בדק בית מוסמך? מחירון שקוף לדירות ובתים פרטיים.',
      image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-white mb-4">השקעה קטנה שחוסכת עשרות אלפים בתיקונים.</h4>
          <div className="bg-gray-800 rounded-2xl p-6 border border-white/5 shadow-inner">
             <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">ביקורת מבנים לדירת 3 חדרים</span> 
                 <span className="text-blue-400 font-black">1,450 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">בדק בית לדירת 4-5 חדרים</span> 
                 <span className="text-blue-400 font-black">1,750 ₪</span>
               </li>
               <li className="flex justify-between items-center pt-1">
                 <span className="text-white font-black text-lg">בדיקת בית פרטי (וילה)</span> 
                 <span className="text-blue-400 font-black text-lg">החל מ-2,500 ₪</span>
               </li>
             </ul>
          </div>
          <p className="text-gray-400 italic text-sm mt-4 bg-white/5 p-4 rounded-xl border-r-2 border-blue-500">
            * המחיר כולל דוח הנדסי קביל בבית משפט ובדיקה תרמית מקיפה ע"י מהנדס מוסמך.
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
    <section id="knowledge" className="py-24 sm:py-32 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4">מומחיות בפריסה ארצית</h2>
          <h3 className="text-4xl sm:text-6xl font-black text-white mb-6">מדריכי <span className="text-blue-500">בדק בית</span> והנדסה</h3>
          
          <div className="mt-10">
            <p className="text-gray-400 text-base mb-6 font-medium">בחרו את אזור המגורים שלכם לצפייה בדגשי <span className="text-white">ביקורת מבנים</span> ספציפיים:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(area => (
                <button 
                  key={area} 
                  onClick={() => setActiveCity(area)}
                  className={`text-sm font-bold px-5 py-2.5 rounded-2xl border transition-all duration-300 ${
                    activeCity === area 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30 scale-105' 
                    : 'text-gray-400 bg-gray-900 border-white/5 hover:border-blue-500/40 hover:text-white'
                  }`}
                >
                  בדק בית ב{area}
                </button>
              ))}
            </div>
            
            {activeCity && (
              <div className="mt-10 animate-slide-up bg-blue-900/10 border border-blue-500/20 rounded-[2.5rem] p-8 max-w-2xl mx-auto relative group shadow-2xl">
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-600 rounded-r-full"></div>
                <h4 className="text-2xl font-black text-blue-400 mb-4">מהנדס בדק בית ב{activeCity}</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{cityData[activeCity]}</p>
                <button 
                  onClick={() => setActiveCity(null)}
                  className="mt-6 text-xs text-gray-500 hover:text-white transition-colors underline decoration-dotted"
                >
                  סגור מידע אזורי
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => handleSelect(article.id)}
              className={`group text-right p-8 rounded-[2rem] border transition-all duration-500 transform ${
                selectedId === article.id 
                  ? 'bg-blue-600 border-blue-500 shadow-2xl -translate-y-1' 
                  : 'bg-gray-900 border-white/5 hover:border-blue-500/30'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'
              }`}>
                {article.icon}
              </div>
              <h4 className={`text-2xl font-black mb-3 ${selectedId === article.id ? 'text-white' : 'text-gray-100'}`}>
                {article.title}
              </h4>
              <p className={`text-base leading-relaxed ${selectedId === article.id ? 'text-blue-100' : 'text-gray-400'}`}>
                {article.excerpt}
              </p>
            </button>
          ))}
        </div>

        <div ref={contentRef} className="max-w-6xl mx-auto animate-fade-in" key={selectedId}>
          <div className="bg-gray-900 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[550px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-12 right-12">
                <span className="inline-block bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">{selectedArticle.keyword}</span>
                <h4 className="text-4xl font-black text-white leading-tight">{selectedArticle.title}</h4>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 sm:p-20 flex flex-col justify-center bg-gray-900/80 backdrop-blur-xl">
              <div className="text-gray-300">
                {selectedArticle.content}
              </div>
              <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6">
                <a href="#contact" className="w-full sm:w-auto text-center bg-blue-600 text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-blue-500 transition-all transform hover:scale-105">
                  הזמינו בדק בית עכשיו
                </a>
                <p className="text-sm text-gray-500 font-bold">או חייגו: 054-7515142</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;