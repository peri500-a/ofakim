
import React from 'react';

const LegalPower: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative">
          
          {/* Background Image with Overlay */}
          <div className="h-64 sm:h-80 relative overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770103361/%D7%90%D7%95%D7%9C%D7%9D_%D7%91%D7%99%D7%AA_%D7%9E%D7%A9%D7%A4%D7%98_gk2rcb.jpg" 
              className="w-full h-full object-cover grayscale opacity-40 scale-110 blur-[2px]" 
              alt="פסל הצדק" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white text-center leading-tight drop-shadow-2xl">
                הכוח המשפטי של <br/>
                דוח ביקורת מבנים בבית המשפט
              </h2>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-12 md:p-16">
            <p className="text-gray-400 text-lg sm:text-xl text-center mb-12 leading-relaxed font-medium">
              דוח הנדסי מקצועי של <span className="text-white font-bold">ביקורת מבנים</span> הוא לא רק רשימת ליקויים, הוא מסמך משפטי ערוך כחוות דעת מומחה לבית משפט.
            </p>

            <div className="space-y-10">
              {[
                {
                  title: 'ביסוס על תקנים ישראליים',
                  desc: 'כל ליקוי מופנה לסעיף המדויק בתקן הישראלי (ת"י) או בתקנות התכנון והבנייה.'
                },
                {
                  title: 'תיעוד טכנולוגי',
                  desc: 'צילומים תרמיים ומדידות לייזר משמשים כהוכחות חותכות שקשה להתווכח איתן בבית המשפט.'
                },
                {
                  title: 'אומדן עלויות מקצועי',
                  desc: 'הדוח כולל הערכת עלות לתיקון הליקויים המבוססת על מחירוני "דקל", מה שמאפשר לשופט לפסוק פיצוי כספי מדויק.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-black shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-right">
                <h4 className="text-xl font-black text-white mb-2">רוצים לדעת עוד על הכוח המשפטי של הדוח?</h4>
                <p className="text-gray-500">המומחים שלנו כאן לכל שאלה מקצועית בנושא ליקויי בנייה.</p>
              </div>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-10 py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                התייעצו עם מהנדס
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPower;
