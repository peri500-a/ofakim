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

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">2</span>
                ליקויים במערכות חשמל והארקה
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103368/%D7%9C%D7%95%D7%97_%D7%97%D7%A9%D7%9E%D7%9C_%D7%9E%D7%A7%D7%95%D7%A6%D7%A8_hf3m2o.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover" alt="בדיקת מערכת חשמל" />
                <div className="order-2 md:order-1">
                  <p className="leading-relaxed mb-4">
                    כשלי חשמל הם מסכני חיים. ליקויים נפוצים כוללים היעדר הארקה תקנית, לוחות חשמל שאינם מותקנים לפי התקן, או שימוש באביזרים באיכות נמוכה. אנו בודקים את תקינות המוליכים והגנות המערכת.
                  </p>
                  <p className="text-sm text-red-400 font-bold">שימו לב: ליקוי חשמל בדירה חדשה מקבלן מחייב תיקון מיידי עקב סכנת התחשמלות.</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">3</span>
                בעיות אינסטלציה ונזילות סמויות
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="leading-relaxed mb-4">
                    פיצוצים סמויים בצנרת מתחת לריצוף או חיבורים רופפים מובילים להצטברות מים במצע החול או הסומסום. הדבר גורם לנזק בלתי הפיך לריצוף ולעלייה של רטיבות בקירות הפנים.
                  </p>
                  <p className="text-sm text-blue-400 font-bold">טיפ: בדקו את לחץ המים בברזים המרוחקים ביותר מהמרכזייה.</p>
                </div>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103367/%D7%A9%D7%A8%D7%91%D7%A8%D7%91_%D7%9E%D7%AA%D7%A7%D7%9F_%D7%A1%D7%AA%D7%99%D7%9E%D7%94_mwdqno.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover order-1 md:order-2" alt="איתור נזילות אינסטלציה" />
              </div>
            </section>

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">4</span>
                כשלי מערכת מיזוג אוויר (HVAC)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103366/%D7%9E%D7%96%D7%92%D7%9F_%D7%9E%D7%A7%D7%95%D7%9C%D7%A7%D7%9C_wozfq0.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover" alt="ליקויי מיזוג אוויר" />
                <div>
                  <p className="leading-relaxed">
                    התקנה לקויה של מערכות מיזוג, במיוחד מערכות מיני-מרכזיות או VRF, עלולה להוביל לחסימות ניקוז, דליפות גז או חוסר ביעילות אנרגטית. אנו מוודאים קיום פתחי שירות תקינים ושיפועים נכונים בצינורות הניקוז.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">5</span>
                נזקי מים ואיטום לקוי (גגות וקירות)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="leading-relaxed mb-4">
                    חדירת מי גשמים מהגג או מהקירות החיצוניים מעידה על כשל ביריעות הביטומניות או באיטום המעטפת. זהו ליקוי קריטי הפוגע באיכות החיים ויוצר נזקים מתמשכים לשלד.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103365/%D7%92%D7%92_%D7%91%D7%98%D7%95%D7%9F_%D7%A1%D7%AA%D7%95%D7%9D_xd6mea.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover order-1 md:order-2" alt="נזקי איטום בגג" />
              </div>
            </section>

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">6</span>
                ליקויים קונסטרוקטיביים וסדקים בשלד
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103364/%D7%A2%D7%9E%D7%95%D7%93_%D7%91%D7%98%D7%95%D7%9F_%D7%A1%D7%93%D7%95%D7%A7_b4bfp9.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover" alt="סדקים קונסטרוקטיביים" />
                <div>
                  <p className="leading-relaxed">
                    סדקים אלכסוניים רחבים עלולים להעיד על שקיעת יסודות או תזוזת קרקע. מהנדס בדק בית מנתח את סוג הסדק (נימי או מבני) וקובע האם קיימת סכנה ליציבות המבנה.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shrink-0">7</span>
                כשלי ניקוז ואיטום במרפסות
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="leading-relaxed mb-4">
                    שיפועים הפוכים במרפסות גורמים לצבירת מים וחדירתם לתוך הבית. אנו מוודאים קיום של "סף הפרדה" תקני ובדיקת הצפה לאימות תקינות האיטום מתחת לריצוף החוץ.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103363/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA_%D7%A9%D7%94%D7%95%D7%A6%D7%A4%D7%94_jar8k2.jpg" className="rounded-2xl shadow-xl border border-white/5 w-full h-64 object-cover order-1 md:order-2" alt="ליקויי ניקוז במרפסת" />
              </div>
            </section>
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
            <div className="bg-gray-800/50 p-6 rounded-2xl border-r-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-2">השפעת המליחות והים</h3>
              <p>הקרבה לים גורמת לקורוזיה מואצת בזיון הפלדה ופגיעה בחיפויים חיצוניים. אנו בודקים את עמידות המעטפת לנזקי המלח.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border-r-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-2">חניונים ומי תהום</h3>
              <p>בתל אביב מפלס מי התהום גבוה. אנו שמים דגש על איטום מרתפים וחניונים תת-קרקעיים המועדים לחדירת רטיבות קבועה.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'top-expensive',
      keyword: 'הליקויים היקרים ביותר',
      title: '10 הליקויים שעלות תיקונם היא הגבוהה ביותר',
      excerpt: 'הכשלים שעלות תיקונם נאמדת במאות אלפי שקלים. הכירו את רשימת עשרת הליקויים הקריטיים שהמהנדסים שלנו מאתרים.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1769635464/%D7%91%D7%93%D7%99%D7%A7%D7%AA_%D7%A7%D7%95%D7%A0%D7%A1%D7%98%D7%A8%D7%95%D7%A7%D7%A6%D7%99%D7%94_gjlb0o.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      content: (
        <div className="space-y-12 text-gray-300">
          <p className="text-lg leading-relaxed font-medium">ישנם ליקויים שהם מטרד ויזואלי, וישנם כאלו שמהווים <strong>בור כלכלי</strong>. המהנדס שלנו ריכז עבורכם את 10 הליקויים הקריטיים שעלות התיקון שלהם היא הגבוהה ביותר:</p>
          <div className="space-y-16">
            <section className="bg-gray-800/30 p-6 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3"><span className="text-blue-500">1.</span> ביסוס לקוי על קרקע חרסיתית</h3>
                  <p>בנייה על קרקע חרסיתית ללא הכנה הנדסית מתאימה גורמת לתזוזות מבנה, סדקים עמוקים ופגיעה קשה ביציבות. תיקון ביסוס דורש חיזוק יסודות מורכב ויקר להחריד.</p>
                </div>
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103368/%D7%99%D7%A1%D7%95%D7%93%D7%95%D7%AA_%D7%91%D7%A0%D7%99%D7%99%D7%9F_%D7%97%D7%A9%D7%95%D7%A4%D7%99%D7%9D_zaje2q.jpg" className="rounded-2xl w-full h-48 object-cover order-1 md:order-2" alt="ביסוס לקוי" />
              </div>
            </section>
            <section className="bg-gray-800/30 p-6 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103369/%D7%9E%D7%A8%D7%AA%D7%A3_%D7%9E%D7%95%D7%A6%D7%A3_%D7%9E%D7%99%D7%9D_bkdlym.jpg" className="rounded-2xl w-full h-48 object-cover" alt="כשל איטום מרתף" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3"><span className="text-blue-500">2.</span> כשל באיטום חניונים ומרתפים</h3>
                  <p>חדירת מים לקומות תת-קרקעיות. תיקון יסודי דורש חפירה היקפית מסביב לכל המבנה ואיטום מחדש - עלות שיכולה להגיע למאות אלפי שקלים.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    {
      id: 'legal-power',
      keyword: 'כוח הדוח בבית המשפט',
      title: 'כך הדוח ההנדסי הופך לכלי ניצחון בבית המשפט',
      excerpt: 'הדרך מביקורת מבנים ועד לפיצוי כספי עוברת דרך כתיבה משפטית נכונה ועדות מומחה מקצועית.',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103361/%D7%90%D7%95%D7%9C%D7%9D_%D7%91%D7%99%D7%AA_%D7%9E%D7%A9%D7%A4%D7%98_gk2rcb.jpg',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      content: (
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">דוח <strong>ביקורת מבנים</strong> של אופקים הנדסה ערוך כחוות דעת מומחה לבית משפט. הנה התהליך שבו הדוח מגן עליכם משפטית:</p>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20">
              <h4 className="font-black text-white mb-2">1. שלב הראיות</h4>
              <p>עורך הדין שלכם מגיש את הדוח כראיה מרכזית. הדוח מפרט כל ליקוי בגיבוי סעיפי חוק המכר ותקנים ישראליים, מה שיוצר תשתית עובדתית מוצקה.</p>
            </div>
            <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20">
              <h4 className="font-black text-white mb-2">2. חקירה נגדית</h4>
              <p>במידת הצורך, המהנדס מגיע לבית המשפט למתן עדות מקצועית המגנה על הממצאים ומפריכה את טענות הקבלן.</p>
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
               <li className="flex justify-between border-b border-white/5 pb-2"><span>דירת 5-6 חדרים</span><span className="text-white font-bold">1,900 - 2,400 ₪</span></li>
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