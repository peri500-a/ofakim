import React, { useState, useEffect, useCallback } from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; city: string; image: string; isActive: boolean }> = ({ quote, name, city, image, isActive }) => (
  <div className={`w-full shrink-0 px-4 transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}>
    <div className="bg-gray-800/50 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all"></div>
      
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={image} 
          alt={name} 
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500/20 shadow-2xl z-10" 
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg z-20">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3561 14 14.017 12.6609 14.017 11V7H20.017V14L20.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V14H7.017C5.35614 14 4.017 12.6609 4.017 11V7H10.017V14L10.017 21H4.017Z" /></svg>
        </div>
      </div>

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-200 italic mb-8 leading-relaxed text-xl sm:text-2xl max-w-2xl">"{quote}"</p>
      
      <div className="pt-6 border-t border-white/10 w-full max-w-xs">
        <div className="font-black text-white text-2xl">{name}</div>
        <div className="text-sm text-blue-400 font-bold uppercase tracking-widest mt-1">{city}</div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-gray-950 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">אלפי לקוחות מרוצים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">המלצות <span className="text-blue-500">לקוחות</span></h3>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">השקט הנפשי שלכם הוא המשימה שלנו. הנה כמה סיפורים מהשטח.</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[600px] sm:h-[500px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-20">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full bg-gray-900/80 border border-white/10 text-white hover:bg-blue-600 transition-all shadow-xl group"
              aria-label="הקודם"
            >
              <svg className="w-6 h-6 transform rotate-180 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-20">
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-gray-900/80 border border-white/10 text-white hover:bg-blue-600 transition-all shadow-xl group"
              aria-label="הבא"
            >
              <svg className="w-6 h-6 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 transition-all duration-500 rounded-full ${index === activeIndex ? 'w-12 bg-blue-600' : 'w-2 bg-gray-700 hover:bg-gray-600'}`}
                aria-label={`עבור לשקופית ${index + 1}`}
              />
            ))}
          </div>
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