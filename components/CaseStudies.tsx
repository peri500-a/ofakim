
import React from 'react';

const CaseStudyCard: React.FC<{ 
  title: string; 
  defect: string; 
  finding: string; 
  savings: string; 
  imageUrl: string; 
}> = ({ title, defect, finding, savings, imageUrl }) => (
  <div className="bg-gray-900/50 rounded-3xl border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full">
    <div className="h-48 overflow-hidden relative bg-gray-800">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      ) : (
        <div className="w-full h-full flex items-center justify-center border-b border-white/5">
           <svg className="w-12 h-12 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
      )}
      <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
        Case Study
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-xl font-black text-white mb-2">{title}</h4>
      <div className="space-y-3 flex-grow">
        <div className="flex items-start gap-2">
          <span className="text-red-500 font-bold shrink-0 text-sm">הליקוי:</span>
          <p className="text-gray-400 text-sm">{defect}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-bold shrink-0 text-sm">הממצא:</span>
          <p className="text-gray-400 text-sm">{finding}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-gray-500 text-xs italic">חיסכון משוער:</span>
        <span className="text-green-400 font-black text-lg">{savings}</span>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const studies = [
    {
      title: 'דירת קבלן בראשל"צ',
      defect: 'רטיבות סמויה מתחת לריצוף במרפסת',
      finding: 'שימוש במצלמה תרמית גילה כשל באיטום שלא נראה לעין. הקבלן נדרש להחליף את כל התשתית.',
      savings: 'כ-45,000 ₪',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'בית פרטי בשוהם',
      defect: 'סדקים קונסטרוקטיביים בשלד',
      finding: 'זיהוי תזוזת קרקע שגרמה לסדקים מסוכנים. הוגשה חוות דעת מומחה לבית משפט.',
      savings: 'כ-120,000 ₪',
      imageUrl: 'https://images.unsplash.com/photo-1590069230005-db393739a731?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'פנטהאוז בתל אביב',
      defect: 'אי התאמה למפרט המכר',
      finding: 'בדיקת לייזר גילתה סטיות של 15% בשטחי החדרים וגובה התקרה בניגוד לחוזה.',
      savings: 'כ-85,000 ₪',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'דירת יד-שנייה בירושלים',
      defect: 'רטיבות קפילארית בקירות הפנים',
      finding: 'אבחון הנדסי חשף פיצוץ סמוי בצנרת המים הראשית מתחת לריצוף הסלון שלא אותר בשיפוץ הקודם.',
      savings: 'כ-30,000 ₪',
      imageUrl: ''
    },
    {
      title: 'וילה יוקרתית בהרצליה פיתוח',
      defect: 'כשלי איטום בבריכת השחייה ובמרתף',
      finding: 'בדיקת הצפה ומצלמה תרמית FLIR זיהו חדירת מי תהום לקומת המרתף עקב איטום שלילי לקוי.',
      savings: 'כ-150,000 ₪',
      imageUrl: ''
    },
    {
      title: 'דירת 5 חדרים בפתח תקווה',
      defect: 'ליקויי חשמל ואינסטלציה קריטיים',
      finding: 'בדיקת לוח החשמל גילתה היעדר הארקה תקנית וסכנת התחשמלות. הקבלן נדרש לחיווט מחדש של כל הדירה.',
      savings: 'כ-25,000 ₪',
      imageUrl: ''
    },
    {
      title: 'קוטג׳ חדש בנתניה (עיר ימים)',
      defect: 'קורוזיה מואצת בחיפויי אבן ושלד',
      finding: 'זיהוי חומרי בנייה שאינם עמידים לסביבה ימית. הדו"ח מנע מהלקוח רכישת נכס עם נזק מבני עתידי.',
      savings: 'כ-200,000 ₪',
      imageUrl: ''
    },
    {
      title: 'דירת גן בבאר שבע',
      defect: 'בעיות ניקוז ופיתוח שטח',
      finding: 'שיפועים הפוכים בחצר גרמו להצטברות מים ביסודות המבנה. ביצוע עבודות ניקוז דחופות על חשבון המוכר.',
      savings: 'כ-35,000 ₪',
      imageUrl: ''
    },
    {
      title: 'דירת בוטיק ברמת השרון',
      defect: 'ליקויי גימור וריצוף נרחבים',
      finding: 'בדיקת אקוסטיקה ומישוריות גילתה חללים ריקים מתחת ל-40% מהאריחים ורמת רעש חריגה מהשכנים.',
      savings: 'כ-55,000 ₪',
      imageUrl: ''
    }
  ];

  return (
    <section id="cases" className="py-24 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">הוכחות מהשטח</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">ממצאים שחסכו <span className="text-blue-500">הון</span> ללקוחותינו</h3>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            בדק בית הוא לא רק "סימון וי". זו השקעה הנדסית שמחזירה את עצמה פי כמה. <br className="hidden md:block" /> אנו מאתרים את מה שהעין לא רואה ומבטיחים את הביטחון הכלכלי שלכם.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-blue-600/5 p-6 sm:p-10 rounded-[2.5rem] border border-blue-500/10 max-w-4xl mx-auto">
            <div className="text-right">
              <h4 className="text-xl sm:text-2xl font-black text-white mb-2">זיהיתם את אחד הליקויים האלו בנכס שלכם?</h4>
              <p className="text-gray-400">אל תחכו שהנזק יחמיר. ייעוץ מוקדם עם מהנדס יכול לחסוך לכם עשרות אלפי שקלים.</p>
            </div>
            <a href="#contact" className="whitespace-nowrap bg-blue-600 text-white font-black px-10 py-5 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              דברו עם מהנדס עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
