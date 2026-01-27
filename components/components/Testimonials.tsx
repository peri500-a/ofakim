
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; city: string; image: string }> = ({ quote, name, city, image }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full border border-gray-700">
    <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover" />
    <p className="text-gray-300 italic mb-4 flex-grow">"{quote}"</p>
    <div>
      <div className="font-bold text-gray-100">{name}</div>
      <div className="text-sm text-gray-400">{city}</div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'הגענו דרך המלצה ולא התאכזבנו. הדוח המפורט חשף ליקויים שהקבלן "שכח" לציין. בזכותם, נכנסנו לדירה מושלמת וחסכנו עשרות אלפי שקלים. שירות מקצועי ואדיב.',
      name: 'משפחת אבידן',
      city: 'רעננה',
      image: 'https://picsum.photos/200/200?random=1',
    },
    {
      quote: 'חשבנו שהבית שמצאנו מושלם, אבל הבדיקה גילתה בעיות איטום רציניות בגג. המהנדס היה יסודי והסביר הכל בסבלנות. אין ספק שמנעתם מאיתנו אסון כלכלי!',
      name: 'תומר ושירי',
      city: 'באר שבע',
      image: 'https://picsum.photos/200/200?random=2',
    },
    {
      quote: 'שירות יוצא מן הכלל. מהשיחה הראשונה ועד קבלת הדוח הרגשנו שיש על מי לסמוך. הדוח היה ברור ומקצועי, ועזר לנו מאוד במשא ומתן מול המוכרים. ממליצים בחום!',
      name: 'סיגל כהן',
      city: 'ראשון לציון',
      image: 'https://picsum.photos/200/200?random=3',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">לקוחות ממליצים</h2>
          <p className="mt-4 text-lg text-gray-400">השקט הנפשי של הלקוחות שלנו הוא ההצלחה שלנו.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
