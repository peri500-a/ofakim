
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
    "תל אביב": "ביצוע בדק בית בתל אביב מחייב היכרות עם בנייה רוויה צפופה ומבנים לשימור. אנו בוחנים רטיבות במרתפים ומערכות משותפות.",
    "ירושלים": "בדק בית בירושלים מצריך בדיקת בידוד תרמי וחיפויי אבן ייחודיים העומדים בתקנים המחמירים של הבירה."
  };

  const areas = Object.keys(cityData);

  const articles: Article[] = [
    {
      id: 'defects',
      keyword: 'ליקויי בנייה נפוצים',
      title: 'ליקויי בנייה נפוצים: המדריך המלא לזיהוי כשלים הנדסיים',
      excerpt: 'מרטיבות קפילארית ביסודות ועד כשלי חשמל מסכני חיים - הכירו את 7 ליקויי הבנייה הנפוצים ביותר שמהנדס בדק בית מאתר בביקורת מבנים.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-12 text-gray-300">
          <p className="text-lg leading-relaxed font-medium">
            רכישת נכס היא ההשקעה הגדולה בחייכם. ביצוע <strong>בדק בית</strong> מקצועי חושף ליקויים סמויים שעלולים לעלות לכם מאות אלפי שקלים בעתיד. להלן פירוט של 7 ליקויי הבנייה הנפוצים ביותר שמהנדס מוסמך מאתר במהלך <strong>ביקורת מבנים</strong>:
          </p>
          
          <div className="space-y-16">
            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">1</span>
                רטיבות ביסודות ורטיבות קפילארית
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="leading-relaxed mb-4">
                    רטיבות קפילארית (עלייה נימית) היא כשל חמור באיטום בין היסודות לקירות המבנה. המים מטפסים מעלה דרך הבטון והבלוקים, מה שגורם לקילופי צבע, עובש ונזק מבני מתמשך.
                  </p>
                  <p className="text-sm text-blue-400 font-bold">הפתרון ההנדסי: שימוש במצלמה תרמית לאבחון מוקדם של מוקדי הלחות.</p>
                </div>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103368/%D7%99%D7%A1%D7%95%D7%93%D7%95%D7%AA_%D7%91%D7%A0%D7%99%D7%99%D7%9F_%D7%97%D7%A9%D7%95%D7%A4%D7%99%D7%9D_zaje2q.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover order-1 md:order-2" alt="רטיבות ביסודות המבנה" />
              </div>
            </section>
          </div>
        </div>
      )
    },
    {
      id: 'second-hand-article',
      keyword: 'בדק בית לדירות יד שנייה',
      title: 'בדק בית לדירות יד שנייה: המדריך המלא לרוכש הנבון',
      excerpt: 'אל תקנו חתול בשק: הכירו את הסכנות הסמויות בדירות משומשות - משינויי מבנה לא חוקיים ועד מערכות צנרת רקובות מתחת לריצוף.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      content: (
        <div className="space-y-12 text-gray-300">
          <p className="text-lg leading-relaxed font-medium">
            רכישת דירת יד שנייה טומנת בחובה סיכונים רבים שהעין אינה מסוגלת לראות. מוכרי דירות נוטים "להחליק" בעיות באמצעות צבע טרי או ריהוט כבד. <strong>בדק בית לדירות יד שנייה</strong> חושף את האמת ההנדסית של הנכס.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-white/5">
              <h4 className="text-xl font-black text-white mb-4">שינויים מבניים לא חוקיים</h4>
              <p className="leading-relaxed">בדירות רבות בוצעו הריסות של קירות תומכים או סגירת מרפסות ללא היתר. המהנדס שלנו בודק את התאמת הנכס לתשריט המקורי ומוודא שאין פגיעה ביציבות המבנה.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-white/5">
              <h4 className="text-xl font-black text-white mb-4">מערכות תשתיות מיושנות</h4>
              <p className="leading-relaxed">בדיקת צנרת מים וביוב ולוחות חשמל ישנים. לעיתים הצנרת רקובה מבפנים אך לא נראית נזילה חיצונית - בדיקת המהנדס תגלה את הכשל לפני הפיצוץ.</p>
            </div>
          </div>

          <div className="bg-blue-600/10 p-10 rounded-[2.5rem] border border-blue-500/20">
            <h4 className="text-2xl font-black text-white mb-4">למה לבצע בדק בית לפני החתימה?</h4>
            <p className="mb-6">הדוח ההנדסי מהווה קלף מיקוח חזק במשא ומתן. גילוי ליקויים בשווי 50,000 ש"ח מאפשר לכם לדרוש הורדת מחיר או תיקון לפני הקנייה.</p>
            <a href="#contact" className="inline-block bg-blue-600 text-white font-black px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all">הזמינו בדיקה עכשיו</a>
          </div>
        </div>
      )
    },
    {
      id: 'tel-aviv-hub',
      keyword: 'בדק בית בתל אביב',
      title: 'בדק בית בתל אביב: האתגרים הייחודיים של העיר',
      excerpt: 'מבני באוהאוס לשימור, בנייה צפופה והשפעות הקרבה לים - אלו הדברים שמהנדס בדק בית חייב לבחון בתל אביב.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103363/%D7%94%D7%A2%D7%99%D7%A8_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_qtxtuk.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      content: (
        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">ביצוע <strong>בדק בית בתל אביב</strong> הוא משימה הנדסית המצריכה התמחות ספציפית במאפייני העיר. הנה האתגרים המרכזיים שאנו בוחנים:</p>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-2xl border-r-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-2">מבני באוהאוס ושימור</h3>
              <p>בדיקת עמידות השלד בבניינים ישנים, איתור סדקי עייפות וליקויי איטום בשיפוצים מורכבים של מבנים היסטוריים.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'price-hub',
      keyword: 'מחירון בדק בית',
      title: 'כמה עולה בדק בית? מחירון שקוף לשנת 2026',
      excerpt: 'השקעה קטנה שחוסכת הון. הכירו את מחירי הבדיקות ההנדסיות שלנו לדירות קבלן, יד שנייה וצמודי קרקע.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103360/%D7%9E%D7%97%D7%99%D7%A8%D7%95%D7%9F_%D7%91%D7%93%D7%A7_%D7%91%D7%99%D7%AA_qac6nq.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">השקעה בביצוע <strong>בדק בית</strong> היא השקעה שמחזירה את עצמה. המחירון שלנו שקוף וקבוע:</p>
          <div className="bg-blue-600/10 rounded-2xl p-6 border border-blue-500/20">
             <ul className="space-y-4">
               <li className="flex justify-between border-b border-white/5 pb-2"><span>דירת 3-4 חדרים</span><span className="text-white font-bold">1,500 - 1,900 ₪</span></li>
               <li className="flex justify-between"><span>בית פרטי / וילה</span><span className="text-white font-bold">החל מ-2,500 ₪</span></li>
             </ul>
          </div>
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
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8">מרכז המידע <span className="text-blue-500">להנדסת מבנים</span></h3>
          
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {articles.map((article) => (
            <button key={article.id} onClick={() => handleSelect(article.id)} className={`text-right p-8 rounded-3xl border transition-all h-full flex flex-col items-start ${selectedId === article.id ? 'bg-blue-600 border-blue-500' : 'bg-gray-900 border-white/5 hover:border-blue-500/30'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 ${selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'}`}>
                {article.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-black text-white mb-2 leading-tight">{article.title}</h4>
                <p className={`text-sm line-clamp-2 ${selectedId === article.id ? 'text-blue-100' : 'text-gray-400'}`}>{article.excerpt}</p>
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
                 <p className="text-gray-400 text-sm">המומחים שלנו כאן לכל שאלה מקצועית בנושא ליקויי בנייה.</p>
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
