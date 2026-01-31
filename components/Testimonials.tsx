
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; city: string; image: string }> = ({ quote, name, city, image }) => (
  <div className="bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center h-full border border-white/5 hover:border-blue-500/30 transition-all duration-500 group">
    <div className="relative mb-6">
      <div className="absolute -inset-2 bg-blue-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img src={image} alt={name} className="relative w-24 h-24 rounded-full object-cover border-2 border-blue-500/30 shadow-2xl" />
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-300 italic mb-6 flex-grow leading-relaxed text-lg">"{quote}"</p>
    <div className="pt-4 border-t border-white/5 w-full">
      <div className="font-black text-white text-xl">{name}</div>
      <div className="text-sm text-blue-400 font-bold uppercase tracking-widest mt-1">{city}</div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'הגענו דרך המלצה ולא התאכזבנו. הדוח המפורט חשף ליקויים שהקבלן "שכח" לציין. בזכותם, נכנסנו לדירה מושלמת וחסכנו עשרות אלפי שקלים. שירות מקצועי ואדיב.',
      name: 'משפחת אבידן',
      city: 'רעננה',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1769673065/%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA_%D7%9E%D7%9E%D7%9C%D7%99%D7%A6%D7%99%D7%9D1_mvppul.jpg',
    },
    {
      quote: 'חשבנו שהבית שמצאנו מושלם, אבל הבדיקה גילתה בעיות איטום רציניות בגג. המהנדס היה יסודי והסביר הכל בסבלנות. אין ספק שמנעתם מאיתנו אסון כלכלי!',
      name: 'תומר ושירי',
      city: 'באר שבע',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1769673170/%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA_%D7%9E%D7%9E%D7%9C%D7%99%D7%A6%D7%99%D7%9D2_wqzcpi.jpg',
    },
    {
      quote: 'שירות יוצא מן הכלל. מהשיחה הראשונה ועד קבלת הדוח הרגשנו שיש על מי לסמוך. הדוח היה ברור ומקצועי, ועזר לנו מאוד במשא ומתן מול המוכרים. ממליצים בחום!',
      name: 'סיגל כהן',
      city: 'ראשון לציון',
      image: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1769673343/%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA_%D7%9E%D7%9E%D7%9C%D7%99%D7%A6%D7%99%D7%9D3_qkdwau.jpg',
    },
    {
      quote: 'יוסי המהנדס הגיע לדירה החדשה שלנו בחולון וגילה ליקויי חשמל מסכני חיים שהקבלן פספס. המקצועיות שלו היא ברמה אחרת לגמרי מכל מה שהכרנו.',
      name: 'משפחת לוי',
      city: 'חולון',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: 'ביצענו בדק בית לפני קניית וילה. יוסי הציל אותנו מהשקעה גרועה ביותר בגלל בעיות שלד חמורות שרק עין מקצועית יכלה לראות. תודה רבה על היושרה והדיוק.',
      name: 'רונית ג.',
      city: 'קיסריה',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: 'דוח הנדסי מפורט שהגיע תוך פחות מ-24 שעות. בזכות הממצאים המדויקים, קיבלנו מהקבלן זיכוי כספי משמעותי על ליקויי ריצוף וחיפוי. מומלץ בחום!',
      name: 'ניר ומיכל',
      city: 'רמת גן',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">אלפי לקוחות מרוצים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מה אומרים <span className="text-blue-500">הלקוחות שלנו?</span></h3>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">השקט הנפשי שלכם הוא המשימה שלנו. הנה כמה סיפורים מהשטח.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Midrag Trust Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20"></div>
            <div className="relative bg-gray-900 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-x-16 -translate-y-16"></div>
              
              <div className="text-center md:text-right flex-grow">
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  מקום ראשון בדירוג
                </div>
                <h4 className="text-2xl sm:text-4xl font-black text-white mb-3">אנו מדורגים בראש <span className="text-blue-500">אתר מידרג</span></h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  ההמלצות שלנו מופיעות גם באתר מידרג, שם המהנדס יוסי מדורג בטופ של תחום בדק הבית עם ציון משוקלל של <span className="text-white font-bold">9.75/10</span>.
                </p>
              </div>

              <div className="shrink-0 bg-blue-600 text-white px-10 py-8 rounded-[2rem] text-center shadow-xl shadow-blue-900/40">
                <div className="text-5xl font-black mb-1">9.75</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80 italic">ציון מידרג</div>
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-white" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
