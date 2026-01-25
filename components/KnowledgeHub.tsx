
import React, { useState, useEffect } from 'react';
import Modal from './Modal';

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
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'defects',
      keyword: 'ליקויי בנייה',
      title: '3 ליקויי הבנייה הנפוצים ביותר',
      excerpt: 'מרטיבות במסדי הבניין ועד בעיות קונסטרוקציה - הרשימה המלאה שתעזור לכם להגן על הבית.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">איך מזהים כשלים לפני שהם הופכים לנזק בלתי הפיך?</p>
          <div className="grid gap-4">
            <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <h5 className="font-bold text-blue-400 text-base sm:text-lg mb-1 sm:mb-2">1. כשלי איטום בחדרים רטובים</h5>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">שיפועים הפוכים במקלחות או איטום חסר מתחת לריצוף מובילים לרטיבות קפילארית שמטפסת בקירות וגורמת להתנפחות טיח.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <h5 className="font-bold text-blue-400 text-base sm:text-lg mb-1 sm:mb-2">2. סטייה במישוריות הריצוף</h5>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">אריחים בולטים (שיניים) או חללים מתחת לאריח ("צליל חלול") שיובילו לשבירתם בעתיד תחת עומס רהיטים או דריכה.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <h5 className="font-bold text-blue-400 text-base sm:text-lg mb-1 sm:mb-2">3. סדקים נימיים מול סדקים מבניים</h5>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">המהנדסים שלנו יודעים להבחין בין סדק נימי בטיח הנובע מהתייבשות, לבין סדק אלכסוני בקיר המעיד על שקיעת יסודות או כשל בשלד.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'price',
      keyword: 'בדק בית מחיר',
      title: 'כמה עולה בדק בית ב-2026?',
      excerpt: 'מחירון מעודכן לשנת 2026, הבדלים בין בית פרטי לדירה וגבולות השירות הגאוגרפיים.',
      image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">שקיפות מלאה במחיר - השקעה קטנה שחוסכת ענק.</p>
          <div className="bg-gray-800/80 rounded-2xl p-5 sm:p-6 border border-white/5 shadow-inner">
             <ul className="space-y-4 text-sm sm:text-base">
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300 ml-2">דירת 3 חדרים (עד 100 מ"ר)</span> 
                 <span className="text-blue-400 font-black whitespace-nowrap">1,450 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300 ml-2">דירת 4-5 חדרים</span> 
                 <span className="text-blue-400 font-black whitespace-nowrap">1,650-1,850 ₪</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/10 pb-3">
                 <span className="text-gray-300 ml-2">פנטהאוז / דירת גן</span> 
                 <span className="text-blue-400 font-black whitespace-nowrap">2,200 ₪</span>
               </li>
               <li className="flex justify-between items-center pt-1">
                 <span className="text-white font-black text-base sm:text-lg ml-2">בית פרטי צמוד קרקע</span> 
                 <span className="text-blue-400 font-black text-base sm:text-lg">החל מ-2,500 ₪</span>
               </li>
             </ul>
          </div>
          <p className="text-gray-400 italic text-xs sm:text-sm mt-4 bg-white/5 p-3 rounded-xl border border-white/5">
            * המחירים כוללים מע"מ, בדיקה תרמית מקיפה לאיתור נזילות ודוח הנדסי קביל בבית משפט.
          </p>
        </div>
      )
    },
    {
      id: 'legal',
      keyword: 'חוות דעת הנדסית',
      title: 'הכוח המשפטי של הדוח שלנו',
      excerpt: 'המדריך המלא לשימוש בחוות דעת הנדסית בבית המשפט ומה הופך אותה לסיפור הצלחה.',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">דוח המהנדס הוא הנשק שלכם מול הקבלן בבית המשפט.</p>
          <div className="p-5 sm:p-6 bg-blue-600/5 rounded-2xl sm:rounded-3xl border-2 border-blue-500/20">
            <h5 className="font-black mb-3 text-white text-base sm:text-lg underline underline-offset-4 decoration-blue-500/40">מה הופך דוח לקביל?</h5>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex gap-2"><span>•</span> חתימת מהנדס בניין רשום ומוסמך בלבד.</li>
              <li className="flex gap-2"><span>•</span> פירוט סעיפי חוק המכר הרלוונטיים לכל ליקוי.</li>
              <li className="flex gap-2"><span>•</span> הערכת עלות תיקון מנומקת המבוססת על מחירונים.</li>
              <li className="flex gap-2"><span>•</span> צילומים מתועדים עם תאריך ומיקום מדויק של כל כשל.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'engineer',
      keyword: 'מהנדס בדק בית',
      title: 'למה חובה להזמין מהנדס?',
      excerpt: 'ההבדל בין חוות דעת של הנדסאי למהנדס רשום, ואיך זה משפיע על הקבילות שלכם.',
      image: 'https://images.pexels.com/photos/8961391/pexels-photo-8961391.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">אל תתפשרו על פחות ממהנדס בניין (B.Sc).</p>
          <div className="grid grid-cols-1 gap-4 mt-4">
             <div className="p-5 bg-gray-800 rounded-2xl border border-blue-500/30 shadow-lg">
                <span className="text-blue-400 font-black block mb-1 text-base uppercase tracking-wider">מהנדס רשום:</span>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">מוסמך לאשר יציבות מבנית, מבין לעומק עומסים ותקני בטון, וחוות דעתו בעלת משקל משפטי מכריע בבית המשפט.</p>
             </div>
             <div className="p-5 bg-gray-900 rounded-2xl border border-white/5 opacity-80">
                <span className="text-red-400 font-black block mb-1 text-base uppercase tracking-wider">בודק "רגיל":</span>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">מסתכל על אסתטיקה וגמר בלבד, עלול לפספס כשלים קונסטרוקטיביים חמורים שיעלו ביוקר בעתיד.</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'leakage',
      keyword: 'איתור נזילות',
      title: 'איתור נזילות ללא הרס',
      excerpt: 'איך מצלמה תרמית חוסכת לכם שבירת קירות מיותרת? הכל על בדיקת רטיבות טכנולוגית.',
      image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a2 2 0 01-1.789 0l-.618-.309a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.5a2 2 0 001.022 1.547l2.387.477a6 6 0 003.86-.517l.618-.309a2 2 0 011.789 0l.618.309a6 6 0 003.86.517l2.387-.477a2 2 0 001.022-1.547V15.428z" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">טכנולוגיית אינפרא-אדום לשירות הבית שלכם.</p>
          <div className="p-5 sm:p-6 bg-blue-600/10 rounded-2xl sm:rounded-3xl border border-blue-500/20">
             <h5 className="font-black text-white mb-3 text-base sm:text-lg">מה אנחנו בודקים בבדיקה תרמית?</h5>
             <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
               <li className="flex gap-2"><span>•</span> מיפוי רטיבות סמויה בכל קירות הבית בעזרת FLIR.</li>
               <li className="flex gap-2"><span>•</span> איתור דליפות בצנרת מים ללא שום הרס.</li>
               <li className="flex gap-2"><span>•</span> זיהוי כשלי איטום סמויים במרפסות ומשקופי חלונות.</li>
               <li className="flex gap-2"><span>•</span> בדיקת רטיבות קפילארית הנובעת ממצע רטוב.</li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'protocol',
      keyword: 'פרוטוקול מסירה',
      title: 'מדריך למסירת דירה מקבלן',
      excerpt: 'אל תחתמו לפני שתבדקו. מהן הנקודות הקריטיות שאסור לפספס במעמד קבלת המפתח.',
      image: 'https://images.pexels.com/photos/8292813/pexels-photo-8292813.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      content: (
        <div className="space-y-6 text-right">
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">מסירת דירה היא אירוע משפטי מחייב - היו מוכנים.</p>
          <div className="p-5 sm:p-6 bg-gray-800 rounded-2xl sm:rounded-3xl border-r-4 border-blue-500 shadow-xl">
            <p className="text-gray-200 leading-relaxed mb-4 text-sm sm:text-base">
              הקבלן ילחץ עליכם לחתום על "פרוטוקול מסירה" נקי. זכרו: ברגע שחתמתם ללא הסתייגויות, יהיה לכם קשה מאוד להוכיח שהליקויים היו קיימים.
            </p>
            <p className="font-bold text-blue-400 text-sm sm:text-base">
              הפתרון: המהנדס שלנו ינסח עבורכם נספח הנדסי מחייב המפרט את כל התיקונים הנדרשים.
            </p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#article-', '');
      const article = articles.find(a => a.id === hash);
      setSelectedArticle(article || null);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [articles]);

  const openArticle = (article: Article) => {
    window.location.hash = `article-${article.id}`;
  };

  const closeArticle = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setSelectedArticle(null);
  };

  const renderFooter = () => (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <a 
        href="#contact" 
        onClick={closeArticle}
        className="w-full sm:flex-1 bg-blue-600 text-white font-black py-4 rounded-xl text-center hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 text-lg flex items-center justify-center"
      >
        דברו עם מהנדס
      </a>
      <button 
        onClick={closeArticle}
        className="w-full sm:w-auto px-8 py-4 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 border border-white/10 transition-all flex items-center justify-center gap-2 text-base"
      >
        סגור
      </button>
    </div>
  );

  return (
    <section id="knowledge" className="py-16 sm:py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">מרכז המידע המקצועי</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white mb-6">מדריכי מומחים לבדק בית</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {articles.map((article) => (
            <button 
              key={article.id}
              onClick={() => openArticle(article)}
              className="group text-right bg-gray-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500 transition-all shadow-2xl relative flex flex-col h-full"
            >
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-4 right-4 bg-blue-600 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-white shadow-xl transform group-hover:scale-110 transition-transform">
                    {article.icon}
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <span className="text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">{article.keyword}</span>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">{article.title}</h4>
                <p className="text-gray-400 line-clamp-2 text-sm sm:text-base leading-relaxed mb-6">{article.excerpt}</p>
                
                <div className="mt-auto flex items-center text-blue-400 font-bold gap-2 text-sm">
                    <span>קראו עוד</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedArticle} 
        onClose={closeArticle} 
        title={selectedArticle?.title}
        footer={renderFooter()}
      >
        {selectedArticle && (
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[2/1] sm:aspect-video border border-white/10">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex items-center gap-3 sm:gap-4">
                 <div className="bg-blue-600 p-2 sm:p-4 rounded-xl sm:rounded-3xl text-white shadow-2xl">
                    {selectedArticle.icon}
                 </div>
                 <span className="bg-white/10 backdrop-blur-xl px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-white/20 text-white font-black text-[10px] sm:text-sm uppercase tracking-wider">{selectedArticle.keyword}</span>
              </div>
            </div>
            
            <div className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {selectedArticle.content}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default KnowledgeHub;
