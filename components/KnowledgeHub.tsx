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

const ImagePlaceholder: React.FC<{ label: string; icon: React.ReactNode }> = ({ label, icon }) => (
  <div className="bg-gray-800/40 border-2 border-dashed border-white/10 rounded-3xl h-64 flex flex-col items-center justify-center gap-4 group hover:border-blue-500/30 transition-all">
    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 transition-colors">
      {icon}
    </div>
    <span className="text-gray-500 font-bold text-sm tracking-widest uppercase">{label}</span>
  </div>
);

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
      title: '7 ליקויי הבנייה הנפוצים ביותר שחובה להכיר',
      excerpt: 'מרטיבות קפילארית ועד כשלי קונסטרוקציה - המהנדס יוסי מפרט את הליקויים הקריטיים שמתגלים בכל בדק בית מקצועי.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103360/%D7%9E%D7%97%D7%99%D7%A8%D7%95%D7%9F_%D7%91%D7%93%D7%A7_%D7%91%D7%99%D7%AA_qac6nq.jpg?auto=format&fit=crop&w=1200&q=80',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      content: (
        <div className="space-y-16 text-gray-300">
          <p className="text-xl leading-relaxed font-medium border-r-4 border-blue-600 pr-6 py-2 bg-blue-600/5 rounded-l-2xl">
            במהלך אלפי בדיקות <strong>ביקורת מבנים</strong> שביצענו, ריכזנו עבורכם את 7 הכשלים ההנדסיים השכיחים ביותר. זיהוי מוקדם של ליקויים אלו עשוי לחסוך לכם עשרות אלפי שקלים ועגמת נפש רבה.
          </p>
          
          <div className="grid grid-cols-1 gap-20">
            {/* 1. רטיבות ביסודות */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">1</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">רטיבות ביסודות ורטיבות קפילארית</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <p className="leading-relaxed text-lg">
                  רטיבות קפילארית (עלייה נימית) מתרחשת כאשר יש כשל באיטום בין היסודות לקירות. המים "מטפסים" בתוך הבלוקים וגורמים לקילופי צבע, עובש ונזק מבני. זהו ליקוי הדורש טיפול שורשי ויקר אם לא מאותר בזמן.
                </p>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103368/%D7%99%D7%A1%D7%95%D7%93%D7%95%D7%AA_%D7%91%D7%A0%D7%99%D7%99%D7%9F_%D7%97%D7%A9%D7%95%D7%A4%D7%99%D7%9D_zaje2q.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="רטיבות ביסודות המבנה" />
              </div>
            </section>

            {/* 2. ליקויי חשמל */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">2</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">ליקויים במערכת החשמל והארקה</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-800/30 p-8 rounded-[2.5rem] border border-white/5">
                  <p className="leading-relaxed text-lg">
                    ליקויי חשמל הם "הרוצח השקט" בבית. אנו מוצאים לעיתים קרובות לוחות חשמל ללא הארקה תקינה, חיווט לא תקני או אביזרים שאינם מוגני מים באזורים רטובים. בביקורת מבנים אנו מוודאים שכל שקע וכל גיד עומדים בתקני הבטיחות המחמירים ביותר.
                  </p>
                </div>
                 <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103368/%D7%9C%D7%95%D7%97_%D7%97%D7%A9%D7%9E%D7%9C_%D7%9E%D7%A7%D7%95%D7%A6%D7%A8_hf3m2o.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="קצר בלוח חשמל" />
              </div>
            </section>

            {/* 3. כשלי אינסטלציה */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">3</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">כשלי אינסטלציה וצנרת</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="leading-relaxed text-lg">
                  שיפועים הפוכים בצנרת הביוב או חיבורים רופפים המובילים לסתימות חוזרות ולנזילות מתחת לריצוף. אנו משתמשים במכשור אקוסטי ומדי לחות כדי לאבחן כשלים אלו מבלי להרים מרצפת אחת.
                </p>
                 <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103367/%D7%A9%D7%A8%D7%91%D7%A8%D7%91_%D7%9E%D7%AA%D7%A7%D7%9F_%D7%A1%D7%AA%D7%99%D7%9E%D7%94_mwdqno.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="נזילות ממערכת האינסטלציה" />
              </div>
            </section>

            {/* 4. מיזוג אוויר */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">4</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">תקלות במערכות מיזוג אוויר (HVAC)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="leading-relaxed text-lg">
                  ליקויים נפוצים כוללים ניקוז לא תקין של המזגן הגורם לרטיבות בקירות, חוסר בבידוד תרמי של הצנרת, או תכנון לקוי שאינו מאפשר פיזור אוויר אופטימלי בחללי הבית.
                </p>
                 <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103366/%D7%9E%D7%96%D7%92%D7%9F_%D7%9E%D7%A7%D7%95%D7%9C%D7%A7%D7%9C_wozfq0.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="תקלות במערכת מיזוג אויר" />
              </div>
            </section>

            {/* 5. נזקי מים ואיטום מעטפת */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">5</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">נזקי מים ואיטום לקוי במעטפת</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="leading-relaxed text-lg">
                  חדירת מים דרך קירות חוץ או חלונות היא סימפטום של איטום לקוי. באמצעות <strong>מצלמה תרמית</strong>, אנו מזהים את נקודות התורפה במעטפת עוד לפני שהן הופכות לכתמי רטיבות גלויים לעין.
                </p>
                <div className="bg-gray-800 rounded-3xl p-4 border border-blue-500/20 shadow-xl">
                  <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635464/%D7%91%D7%93%D7%99%D7%A7%D7%AA_%D7%A7%D7%95%D7%A0%D7%A1%D7%98%D7%A8%D7%95%D7%A7%D7%A6%D7%99%D7%94_gjlb0o.jpg" className="rounded-2xl w-full h-48 object-cover" alt="צילום תרמי לאיתור נזקי מים" />
                  <p className="text-xs text-center text-gray-500 mt-2 font-bold">צילום תרמי לאיתור נזקי מים וליקויי איטום</p>
                </div>
              </div>
            </section>

            {/* 6. קונסטרוקציה וסדקים */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">6</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">בעיות קונסטרוקציה וסדקים בשלד</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="leading-relaxed text-lg">
                  לא כל סדק הוא מסוכן, אך סדקים ברוחב מעל 1.5 מ"מ או סדקים אלכסוניים מחייבים בדיקת קונסטרוקטור. אנו מאבחנים האם מדובר ב\"סדקי עבודה\" טבעיים או בכשל מבני שמסכן את יציבות הבית.
                </p>
                 <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103364/%D7%A2%D7%9E%D7%95%D7%93_%D7%91%D7%98%D7%95%D7%9F_%D7%A1%D7%93%D7%95%D7%A7_b4bfp9.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="סדקים בשלד הבניין" />
              </div>
            </section>

            {/* 7. ליקויים במרפסת */}
            <section className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">7</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">ליקויים ושיפועים במרפסת</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="leading-relaxed text-lg">
                  הצטברות מים במרפסת (שלוליות) עקב שיפועים לא תקינים כלפי הניקוז היא ליקוי קריטי. מים עומדים חודרים בסופו של דבר דרך האיטום וגורמים לנזקי רטיבות לתקרה של השכן מלמטה.
                </p>
                 <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103363/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA_%D7%A9%D7%94%D7%95%D7%A6%D7%A4%D7%94_jar8k2.jpg" className="rounded-3xl shadow-2xl border border-white/10 w-full h-64 object-cover" alt="שיפועים הפוכים במרפסות" />
              </div>
            </section>
          </div>
          
          <div className="bg-blue-600/10 p-10 rounded-[3rem] border border-blue-500/20 text-center mt-12">
            <p className="text-gray-200 text-xl italic font-bold">ליקויי בנייה קיימים בחלק ניכר מדירות המגורים בישראל. היעזרות במהנדס המתמחה בבדק בית מאפשרת איתור כשלים לפני הרכישה המשמעותית בחייכם.</p>
          </div>
        </div>
      )
    },
    {
      id: 'top-8-problems',
      keyword: 'בעיות בבדק בית',
      title: '8 הבעיות הנפוצות המתגלות בבדק בית',
      excerpt: 'מגגות רעפים דולפים ועד רטיבויות במסדי הבניין - אלו הנושאים הקריטיים שכל רוכש חייב לבדוק.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103357/%D7%A9%D7%A0%D7%AA_%D7%91%D7%93%D7%A7_a5klqo.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
      content: (
        <div className="space-y-10 text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'בעיות בגג רעפים', d: 'רעפים פגומים הגורמים לנזילות ארוכות טווח הפוגעות בשלד הגג מעץ ללא ידיעת הדיירים.' },
              { t: 'רטיבות במסדי הבניין', d: 'חדירת מים לקורות היסוד הגורמת לקורוזיה בברזל הזיון וסדקים קונסטרוקטיביים.' },
              { t: 'כשלי מערכת החשמל', d: 'גידים דקים, היעדר הארקה וחלוקת עומס לא תקינה המהווים סכנת שריפה.' },
              { t: 'ליקויי אינסטלציה וניקוז', d: 'אבנית, חלודה או חורים בצנרת הפלסטית הגורמים לרטיבות כלואה מתחת לריצוף.' },
              { t: 'מערכות מיזוג אוויר', d: 'מעבים חלודים, צנרת עיבוי מטפטפת ומסננים סתומים הגורמים לנזקי רטיבות.' },
              { t: 'נזקי מים וסימני עובש', d: 'כתמים על הקירות המעידים על חדירת מי גשם או כשל במערכת האינסטלציה של השכנים.' },
              { t: 'בעיות קונסטרוקציה', d: 'סדקים אלכסוניים המעידים על גזירת קירות כתוצאה משקיעת יסודות מסוכנת.' },
              { t: 'אי-התאמה לתשריט', d: 'הריסות קירות תומכים שבוצעו בעבר ללא היתר ומסכנות את יציבות הבניין.' }
            ].map((p, i) => (
              <div key={i} className="bg-gray-800/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold text-white mb-2">{i+1}. {p.t}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'diy-dampness',
      keyword: 'רטיבות בבניין',
      title: 'התמודדות עם רטיבות: מדריך עשה זאת בעצמך',
      excerpt: 'איך מנצחים את הרטיבות בבניין? סקירת סוגי הרטיבויות וההבדל בין מי גשם לעיבוי.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635727/%D7%AA%D7%A9%D7%AA%D7%99%D7%95%D7%AA_%D7%97%D7%A9%D7%9E%D7%9C_%D7%95%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%A6%D7%99%D7%94_yxouei.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      content: (
        <div className="space-y-12 text-gray-300">
          <p className="text-xl leading-relaxed">רטיבות היא בעיה ערמומית. הבנת המקור היא המפתח לפתרון:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-gray-800/30 p-8 rounded-3xl border border-blue-500/20">
              <h3 className="text-2xl font-black text-white mb-4">רטיבות מגשם</h3>
              <p className="leading-relaxed">חדירה דרך הגג או הקירות עקב כשל באיטום או רעף שזז. מומלץ לבקר בעליית הגג במהלך החורף כדי לזהות כשלים בזמן אמת.</p>
            </section>
            <section className="bg-gray-800/30 p-8 rounded-3xl border border-blue-500/20">
              <h3 className="text-2xl font-black text-white mb-4">רטיבות מעיבוי</h3>
              <p className="leading-relaxed">מתרחשת כשטמפרטורת המשטח יורדת מתחת לנקודת הטל. האוויר "מפריש" לחות על המשטח הקר, מה שמעיד על בידוד תרמי לקוי.</p>
            </section>
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
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">ידע הנדסי מציל חיים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8">מרכז המידע המקצועי <span className="text-blue-500">לביקורת מבנים</span></h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map(area => (
              <button key={area} onClick={() => setActiveCity(area)} className={`px-6 py-3 rounded-full border text-sm font-black transition-all ${activeCity === area ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'text-gray-400 border-white/10 hover:border-blue-500/30'}`}>
                בדק בית ב{area}
              </button>
            ))}
          </div>

          {activeCity && (
            <div className="mb-12 p-8 bg-blue-900/10 border border-blue-500/20 rounded-[2.5rem] max-w-2xl mx-auto animate-slide-up text-right">
              <h4 className="text-2xl font-black text-blue-400 mb-4">מומחיות בביקורת מבנים ב{activeCity}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{cityData[activeCity]}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          {articles.map((article) => (
            <button key={article.id} onClick={() => handleSelect(article.id)} className={`text-right p-8 rounded-[2.5rem] border transition-all h-full flex flex-col items-start group ${selectedId === article.id ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-900/40' : 'bg-gray-900 border-white/5 hover:border-blue-500/30'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-transform group-hover:scale-110 ${selectedId === article.id ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-400'}`}>
                {article.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-2xl font-black text-white mb-3 leading-tight">{article.title}</h4>
                <p className={`text-sm leading-relaxed line-clamp-2 ${selectedId === article.id ? 'text-blue-100' : 'text-gray-400'}`}>{article.excerpt}</p>
              </div>
            </button>
          ))}
        </div>

        <div ref={contentRef} className="max-w-5xl mx-auto bg-gray-900 border border-white/5 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all duration-700">
          <div className="h-64 sm:h-[450px] relative">
            <img src={articles.find(a => a.id === selectedId)?.image} className="w-full h-full object-cover transition-transform duration-1000" alt={articles.find(a => a.id === selectedId)?.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
            <div className="absolute bottom-10 right-10 left-10">
               <h2 className="text-3xl sm:text-5xl font-black text-white drop-shadow-2xl">{articles.find(a => a.id === selectedId)?.title}</h2>
            </div>
          </div>
          <div className="p-8 sm:p-16">
            <div className="max-w-4xl mx-auto">
               {articles.find(a => a.id === selectedId)?.content}
               
               <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-10 items-center justify-between">
                  <div className="text-center sm:text-right">
                    <p className="text-white font-black text-2xl mb-2">רוצים שמהנדס בדק בית יבדוק את הנכס?</p>
                    <p className="text-gray-400 text-lg">אל תתפשרו על פחות ממומחה מטעם בתי משפט לביקורת מבנים.</p>
                  </div>
                  <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-900/40 transform hover:-translate-y-1 active:scale-95 whitespace-nowrap">התייעצו עם מהנדס</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;