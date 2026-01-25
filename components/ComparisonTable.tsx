import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">למה דווקא מהנדס של אופקים הנדסה?</h2>
          <p className="text-gray-400 text-lg">ההבדל בין בדיקה שטחית לבדיקה הנדסית יסודית</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="p-6 text-xl font-bold text-gray-400">הקריטריון</th>
                <th className="p-6 text-xl font-bold text-blue-400 border-r border-white/5">אופקים הנדסה</th>
                <th className="p-6 text-xl font-bold text-gray-500 border-r border-white/5">בודק "זול" בשוק</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="bg-blue-500/5">
                <td className="p-5 text-white font-semibold">הכשרה מקצועית</td>
                <td className="p-5 text-blue-300 border-r border-white/5">מהנדסי בניין רשומים (B.Sc/M.Sc)</td>
                <td className="p-5 text-gray-500 border-r border-white/5">הנדימן או קבלן ללא הסמכה</td>
              </tr>
              <tr>
                <td className="p-5 text-white font-semibold">ציוד טכנולוגי</td>
                <td className="p-5 text-blue-300 border-r border-white/5">מצלמה תרמית FLIR, מדי לחות, לייזר</td>
                <td className="p-5 text-gray-500 border-r border-white/5">בדיקה ויזואלית בלבד</td>
              </tr>
              <tr className="bg-blue-500/5">
                <td className="p-5 text-white font-semibold">תוקף משפטי</td>
                <td className="p-5 text-blue-300 border-r border-white/5">חוות דעת הנדסית קבילה בבית משפט</td>
                <td className="p-5 text-gray-500 border-r border-white/5">דוח לא רשמי ללא תוקף משפטי</td>
              </tr>
              <tr>
                <td className="p-5 text-white font-semibold">זמינות הדוח</td>
                <td className="p-5 text-blue-300 border-r border-white/5">דוח מקיף תוך 48-72 שעות</td>
                <td className="p-5 text-gray-500 border-r border-white/5">שבוע ויותר</td>
              </tr>
              <tr className="bg-blue-500/5">
                <td className="p-5 text-white font-semibold">ליווי לאחר בדיקה</td>
                <td className="p-5 text-blue-300 border-r border-white/5">ייעוץ משפטי והנדסי מול הקבלן</td>
                <td className="p-5 text-gray-500 border-r border-white/5">נעלמים לאחר התשלום</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;