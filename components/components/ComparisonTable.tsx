
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">למה דווקא אופקים הנדסה?</h2>
          <p className="text-gray-400 text-base sm:text-lg">ההבדל בין בדיקה שטחית לבדיקה הנדסית יסודית</p>
        </div>
        
        {/* Scroll Hint for Mobile */}
        <div className="flex justify-center mb-4 lg:hidden">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full">
            <svg className="w-4 h-4 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">החליקו לצדדים לצפייה מלאה</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-2xl bg-gray-900/50 overflow-hidden">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto custom-scrollbar touch-pan-x">
            <table className="w-full text-right border-collapse min-w-[600px] sm:min-w-full">
              <thead>
                <tr className="bg-gray-800/80">
                  <th className="p-4 sm:p-6 text-sm sm:text-xl font-bold text-gray-400">הקריטריון</th>
                  <th className="p-4 sm:p-6 text-sm sm:text-xl font-bold text-blue-400 border-r border-white/5">אופקים הנדסה</th>
                  <th className="p-4 sm:p-6 text-sm sm:text-xl font-bold text-gray-500 border-r border-white/5">בודק "זול" בשוק</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="bg-blue-500/5">
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-white font-semibold">הכשרה מקצועית</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-blue-300 border-r border-white/5 font-bold">מהנדסי בניין רשומים (B.Sc)</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-500 border-r border-white/5">הנדימן או קבלן ללא הסמכה</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-white font-semibold">ציוד טכנולוגי</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-blue-300 border-r border-white/5 font-bold">מצלמה תרמית FLIR, מדי לחות</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-500 border-r border-white/5">בדיקה ויזואלית בלבד</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-white font-semibold">תוקף משפטי</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-blue-300 border-r border-white/5 font-bold">חוות דעת קבילה בבית משפט</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-500 border-r border-white/5">דוח ללא תוקף משפטי</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-white font-semibold">זמינות הדוח</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-blue-300 border-r border-white/5 font-bold">דוח מפורט תוך 48 שעות</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-500 border-r border-white/5">שבוע ויותר</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-white font-semibold">ליווי לאחר בדיקה</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-blue-300 border-r border-white/5 font-bold">ייעוץ הנדסי מול הקבלן</td>
                  <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-500 border-r border-white/5">נעלמים לאחר התשלום</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
