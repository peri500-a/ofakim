import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

interface LocationPageProps {
  city: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ city }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `בדק בית ב${city} | ביקורת מבנים ע״י מהנדס מומחה | אופקים הנדסה`;
  }, [city]);

  const cityContent: Record<string, any> = {
    'תל אביב': {
      desc: 'תל אביב מתאפיינת בבנייה רוויה, מגדלים יוקרתיים לצד מבני באוהאוס לשימור. בבדק בית בתל אביב אנו שמים דגש מיוחד על בדיקת איטום למרתפים ומערכות משותפות במגדלים.',
      points: ['בדיקת דירות במגדלי יוקרה', 'אבחון מבנים לשימור', 'איתור נזילות עקב לחות ימית', 'ליווי בפרויקטי תמ"א 38'],
      image: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=1200&q=80'
    },
    'ירושלים': {
      desc: 'בירושלים קיימים אתגרים הנדסיים ייחודיים כמו חיפויי אבן ירושלמית, בידוד תרמי לקור הירושלמי ותווי קרקע הרריים. המהנדס יוסי מכיר את התקנים הספציפיים לבירה.',
      points: ['בדיקת חיפויי אבן ותקינותם', 'אבחון בעיות בידוד ועיבוי', 'בדיקת קירות תמך בתוואי הררי', 'ביקורת לנכסים בעיר העתיקה'],
      image: 'https://images.unsplash.com/photo-1542668595-df665422894f?auto=format&fit=crop&w=1200&q=80'
    },
    'המרכז': {
      desc: 'אזור המרכז וגוש דן נמצאים בתנופת בנייה אדירה. אנו מספקים שירותי בדק בית בראשון לציון, פתח תקווה, רמת גן וחולון, עם התמחות בבדיקות מסירה מקבלן וביקורת מבנים ליד שניה.',
      points: ['בדיקות מסירה בפרויקטים חדשים', 'איתור נזילות במכשור טכנולוגי', 'ביקורת מבנים לפני רכישת דירת יד שניה', 'פיקוח הנדסי לשיפוצים ותוספות'],
      image: 'https://images.unsplash.com/photo-1503387762-592dea58ef22?auto=format&fit=crop&w=1200&q=80'
    }
  };

  const data = cityContent[city] || cityContent['המרכז'];

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.image} className="w-full h-full object-cover opacity-20" alt={`נוף העיר ${city}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              בדק בית ב<span className="text-blue-500">{city}</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12">
              {data.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               {data.points.map((p: string) => (
                 <div key={p} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="font-bold">{p}</span>
                 </div>
               ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 inline-block">הזמינו מהנדס ב{city}</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl font-black text-white mb-12 italic">למה לבחור באופקים הנדסה באזור {city}?</h2>
           <div className="max-w-3xl mx-auto space-y-8 text-xl leading-relaxed text-gray-400">
             <p>אנו פועלים באזור {city} מזה 15 שנה ומכירים כל שכונה וכל סגנון בנייה. הידע המקומי שלנו חוסך לכם זמן וכסף באיתור ליקויים הנפוצים באזור זה.</p>
             <p>המהנדס יוסי וצוותו זמינים לבדיקות דחופות ב{city} תוך 24-48 שעות, עם דוח מפורט וליווי אישי מול הקבלנים המקומיים.</p>
           </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default LocationPage;