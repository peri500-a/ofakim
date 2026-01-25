
import React, { useState } from 'react';
import Modal from './Modal';

interface Article {
  id: string;
  keyword: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  image: string;
}

const KnowledgeHub: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'price',
      keyword: 'בדק בית מחיר',
      title: 'כמה עולה בדק בית ב-2024?',
      excerpt: 'מחירון מעודכן, מה משפיע על העלות ואיך חוסכים אלפי שקלים בטווח הארוך.',
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-4 text-right">
          <p>עלות בדק בית נקבעת לרוב לפי גודל הנכס (מספר חדרים) וסוג הבדיקה. מחיר ממוצע לדירת 4 חדרים נע בין 1,200 ל-1,800 ש"ח + מע"מ.</p>
          <h5 className="font-bold text-white">מה משפיע על המחיר?</h5>
          <ul className="list-disc list-inside space-y-1">
            <li>גודל הדירה ומספר הקומות</li>
            <li>מורכבות המערכות (מערכות חכמות, מיזוג מרכזי)</li>
            <li>מרחק גאוגרפי של המהנדס</li>
          </ul>
          <p className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/30 text-blue-300">
            <strong>טיפ:</strong> אל תתפתו להצעה הכי זולה. דוח שאינו קביל בבית משפט עלול לעלות לכם הרבה יותר בעתיד.
          </p>
        </div>
      )
    },
    {
      id: 'leakage',
      keyword: 'איתור נזילות ורטיבות',
      title: 'איתור נזילות ללא הרס',
      excerpt: 'איך מצלמה תרמית חוסכת לכם שבירת קירות מיותרת? כל מה שצריך לדעת על בדיקת רטיבות.',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a2 2 0 01-1.789 0l-.618-.309a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.5a2 2 0 001.022 1.547l2.387.477a6 6 0 003.86-.517l.618-.309a2 2 0 011.789 0l.618.309a6 6 0 003.86.517l2.387-.477a2 2 0 001.022-1.547V15.428z" /></svg>,
      content: (
        <div className="space-y-4 text-right">
          <p>רטיבות היא "האויב השקט" של המבנה. שימוש במצלמה תרמית מאפשר לנו לראות הבדלי טמפרטורה מאחורי הקיר ולזהות נזילות סמויות.</p>
          <h5 className="font-bold text-white">יתרונות הבדיקה הטכנולוגית:</h5>
          <ul className="list-disc list-inside">
            <li>זיהוי מוקדם לפני הופעת עובש</li>
            <li>מיקוד מדויק של מקור הנזילה</li>
            <li>חיסכון אדיר בעלויות שיפוץ</li>
          </ul>
        </div>
      )
    },
    {
      id: 'protocol',
      keyword: 'פרוטוקול מסירה דירה',
      title: 'המדריך למסירת דירה מקבלן',
      excerpt: 'אל תחתמו לפני שתבדקו. מה זה פרוטוקול מסירה ומהן הנקודות הקריטיות שאסור לפספס.',
      image: 'https://images.pexels.com/photos/5414000/pexels-photo-5414000.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      content: (
        <div className="space-y-4 text-right">
          <p>פרוטוקול מסירה הוא ההזדמנות האחרונה שלכם לתעד ליקויים לפני קבלת המפתח. לאחר החתימה, חובת ההוכחה הופכת לקשה יותר.</p>
          <p>המהנדסים שלנו מלווים אתכם במעמד המסירה ומוודאים שכל שריטה, עקמומיות או ליקוי תפקודי נרשמים בצורה מחייבת.</p>
        </div>
      )
    }
  ];

  return (
    <section id="knowledge" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm mb-4">מרכז המידע שלנו</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">כל מה שצריך לדעת על בדק בית</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            אספנו עבורכם את המדריכים המקצועיים ביותר שיעזרו לכם לקבל החלטות חכמות ולחסוך כסף.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="group bg-gray-900 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 cursor-pointer shadow-xl shadow-black/40"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-blue-600 p-2 rounded-xl text-white shadow-lg">
                  {article.icon}
                </div>
              </div>
              <div className="p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{article.keyword}</span>
                <h4 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-blue-400 transition-colors">{article.title}</h4>
                <p className="text-gray-400 mb-6 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center text-blue-400 font-bold gap-2">
                  <span>קראו עוד</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
               <div className="bg-blue-600/20 p-3 rounded-2xl text-blue-500">
                {selectedArticle.icon}
               </div>
               <h2 className="text-3xl font-black text-white">{selectedArticle.title}</h2>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
               <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            <div className="prose prose-invert max-w-none">
              {selectedArticle.content}
            </div>
            <div className="pt-6 mt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <a href="#contact" onClick={() => setSelectedArticle(null)} className="flex-1 bg-blue-600 text-white font-black py-4 rounded-xl text-center hover:bg-blue-500 transition-all">קבלו הצעת מחיר בהתאם לכתבה</a>
              <button onClick={() => setSelectedArticle(null)} className="px-8 py-4 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all">סגירה</button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default KnowledgeHub;
