
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
  const contentRef = useRef<HTMLDivElement>(null);

  const articles: Article[] = [
    {
      id: 'defects',
      keyword: 'ליקויי בנייה',
      title: '3 ליקויי הבנייה הנפוצים ביותר',
      excerpt: 'מרטיבות במסדי הבניין ועד בעיות קונסטרוקציה - הרשימה המלאה.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">איך מזהים כשלים לפני שהם הופכים לנזק בלתי הפיך?</p>
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">1. כשלי איטום בחדרים רטובים</h5>
              <p className="text-gray-300 leading-relaxed">שיפועים הפוכים במקלחות או איטום חסר מתחת לריצוף מובילים לרטיבות קפילארית שמטפסת בקירות וגורמת להתנפחות טיח.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">2. סטייה במישוריות הריצוף</h5>
              <p className="text-gray-300 leading-relaxed">אריחים בולטים (שיניים) או חללים מתחת לאריח ("צליל חלול") שיובילו לשבירתם בעתיד תחת עומס רהיטים או דריכה.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 className="font-bold text-blue-400 text-lg mb-2">3. סדקים נימיים מול סדקים מבניים</h5>
              <p className="text-gray-300 leading-relaxed">המהנדסים שלנו יודעים להבחין בין סדק נימי בטיח הנובע מהתייבשות, לבין סדק אלכסוני בקיר המעיד על שקיעת יסודות.</p>
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
          <p className="text-xl font-bold text-white mb-4">שקיפות מלאה במחיר - השקעה קטנה שחוסכת ענק.</p>
          <div className="bg-gray-800/80 rounded-2xl p-6 border border-white/5 shadow-inner">
             <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">דירת 3 חדרים (עד 100 מ"ר)</span> 
                 <span className="text-blue-400 font-black">1,450 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">דירת 4-5 חדרים</span> 
                 <span className="text-blue-400 font-black">1,650-1,850 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300">פנטהאוז / דירת גן</span> 
                 <span className="text-blue-400 font-black">2,200 ₪</span>
               </li>
               <li className="flex justify-between items-center pt-1">
                 <span className="text-white font-black text-lg">בית פרטי צמוד קרקע</span> 
                 <span className="text-blue-400 font-black text-lg">החל מ-2,500 ₪</span>
               </li>
             </ul>
          </div>
          <p className="text-gray-400 italic text-sm mt-4 bg-white/5 p-4 rounded-xl border border-white/5">
            * המחירים כוללים מע"מ, בדיקה תרמית מקיפה לאיתור נזילות ודוח הנדסי קביל בבית משפט.
          </p>
        </div>
      )
    },
    {
      id: 'legal',
      keyword: 'חוות דעת הנדסית',
      title: 'הכוח המשפטי של הדוח שלנו',
      excerpt: 'המדריך המלא לשימוש בחוות דעת הנדסית בבית המשפט.',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">דוח המהנדס הוא הנשק שלכם מול הקבלן בבית המשפט.</p>
          <div className="p-6 bg-blue-600/5 rounded-3xl border-2 border-blue-500/20">
            <h5 className="font-black mb-4 text-white text-lg underline underline-offset-4 decoration-blue-500/40">מה הופך דוח לקביל?</h5>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>חתימת מהנדס בניין רשום ומוסמך בלבד.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>פירוט סעיפי חוק המכר הרלוונטיים לכל ליקוי.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>הערכת עלות תיקון מנומקת המבוססת על מחירונים מקצועיים.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'engineer',
      keyword: 'מהנדס בדק בית',
      title: 'למה חובה להזמין מהנדס?',
      excerpt: 'ההבדל בין חוות דעת של הנדסאי למהנדס רשום.',
      image: 'https://images.pexels.com/photos/8961391/pexels-photo-8961391.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">אל תתפשרו על פחות ממהנדס בניין (B.Sc).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 bg-gray-800 rounded-2xl border border-blue-500/30 shadow-lg">
                <span className="text-blue-400 font-black block mb-2 text-base">מהנדס רשום:</span>
                <p className="text-gray-200 leading-relaxed">מוסמך לאשר יציבות מבנית, מבין לעומק עומסים ותקני בטון, וחוות דעתו בעלת משקל משפטי מכריע.</p>
             </div>
             <div className="p-6 bg-gray-900 rounded-2xl border border-white/5 opacity-80">
                <span className="text-red-400 font-black block mb-2 text-base">בודק "רגיל":</span>
                <p className="text-gray-400 leading-relaxed">מסתכל על אסתטיקה וגמר בלבד, עלול לפספס כשלים קונסטרוקטיביים חמורים.</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'leakage',
      keyword: 'איתור נזילות',
      title: 'איתור נזילות ללא הרס',
      excerpt: 'איך מצלמה תרמית חוסכת לכם שבירת קירות מיותרת?',
      image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a2 2 0 01-1.789 0l-.618-.309a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.5a2 2 0 001.022 1.547l2.387.477a6 6 0 003.86-.517l.618-.309a2 2 0 011.789 0l.618.309a6 6 0 003.86.517l2.387-.477a2 2 0 001.022-1.547V15.428z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">טכנולוגיית אינפרא-אדום לשירות הבית שלכם.</p>
          <div className="p-6 bg-blue-600/10 rounded-3xl border border-blue-500/20">
             <h5 className="font-black text-white mb-4 text-lg">מה אנחנו בודקים בבדיקה תרמית?</h5>
             <ul className="space-y-3 text-gray-300">
               <li className="flex gap-3 items-center">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                 <span>מיפוי רטיבות סמויה בכל קירות הבית בעזרת מצלמת FLIR.</span>
               </li>
               <li className="flex gap-3 items-center">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                 <span>איתור דליפות בצנרת מים ללא שום הרס לקירות או לרצפה.</span>
               </li>
               <li className="flex gap-3 items-center">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                 <span>זיהוי כשלי איטום סמויים במרפסות ומשקופי חלונות.</span>
               </li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'protocol',
      keyword: 'פרוטוקול מסירה',
      title: 'מדריך למסירת דירה מקבלן',
      excerpt: 'אל תחתמו לפני שתבדקו. הנקודות הקריטיות שאסור לפספס.',
      image: 'https://images.pexels.com/photos/8292813/pexels-photo-8292813.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white mb-4">מסירת דירה היא אירוע משפטי מחייב - היו מוכנים.</p>
          <div className="p-8 bg-gray-800 rounded-3xl border-r-4 border-blue-500 shadow-xl">
            <p className="text-gray-200 leading-relaxed mb-6">
              הקבלן ילחץ עליכם לחתום על "פרוטוקול מסירה" נקי. זכרו: ברגע שחתמתם ללא הסתייגויות, יהיה לכם קשה מאוד להוכיח שהליקויים היו קיימים במעמד המסירה.
            </p>
            <div className="p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
               <p className="font-bold text-blue-400">הפתרון: המהנדס שלנו ינסח עבורכם נספח הנדסי מחייב המפרט את כל התיקונים הנדרשים.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const selectedArticle = articles.find(a => a.id === selectedId) || articles[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (contentRef.current) {
      const offset = 100; // Adjust based on header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contentRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="knowledge" className="py-20 sm:py-32 bg-gray-950/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">מרכז המידע והידע</h2>
          <h3 className="text-4xl sm:text-6xl font-black text-white mb-8">כל מה שצריך לדעת על <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ביטחון הנכס שלכם</span></h3>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            אנחנו מאמינים שלקוח מוצלח הוא לקוח שיודע. אספנו עבורכם את המדריכים המקצועיים ביותר שנכתבו על ידי המהנדסים שלנו.
          </p>
        </div>

        {/* Article Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 sm:mb-20">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => handleSelect(article.id)}
              className={`group relative text-right p-6 rounded-3xl border transition-all duration-500 flex flex-col h-full ${
                selectedId === article.id 
                  ? 'bg-blue-600 border-blue-500 shadow-[0_20px_40px_rgba(37,99,235,0.25)]' 
                  : 'bg-gray-900 border-white/5 hover:border-blue-500/30'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
              }`}>
                {article.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                selectedId === article.id ? 'text-blue-100' : 'text-blue-400'
              }`}>{article.keyword}</span>
              <h4 className={`text-xl font-black mb-2 leading-tight ${
                selectedId === article.id ? 'text-white' : 'text-gray-100'
              }`}>{article.title}</h4>
              <p className={`text-sm leading-relaxed line-clamp-2 ${
                selectedId === article.id ? 'text-blue-50/80' : 'text-gray-400'
              }`}>{article.excerpt}</p>
              
              {selectedId === article.id && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rotate-45 hidden sm:block"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content Display Area */}
        <div 
          ref={contentRef}
          className="relative max-w-6xl mx-auto animate-fade-in"
          key={selectedId} // Key ensures re-animation on selection change
        >
          <div className="bg-gray-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
            {/* Image Section */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-l"></div>
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-2xl inline-block mb-4">
                  {selectedArticle.icon}
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-white leading-none drop-shadow-2xl">{selectedArticle.title}</h4>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block bg-blue-600/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-500/20 mb-6">
                  {selectedArticle.keyword}
                </span>
                <div className="text-gray-300">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Internal CTA */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20 text-center"
                >
                  לייעוץ עם המהנדס
                </a>
                <p className="text-sm text-gray-400 font-medium">השאירו פרטים ונחזור אליכם עם תשובות מדויקות.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
