
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

/**
 * GenerativeImage Component
 * Uses Gemini 2.5 Flash Image to generate professional engineering visuals.
 * Optimized with SessionStorage caching and conservative staggering to avoid 429 errors.
 */
const GenerativeImage: React.FC<{ prompt: string; alt: string; index: number }> = ({ prompt, alt, index }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `ofakim_img_${index}`;

    const generateImage = async () => {
      // 1. Check Cache first to save API quota
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        if (isMounted) {
          setImageUrl(cached);
          setLoading(false);
        }
        return;
      }

      try {
        if (!isMounted) return;
        setLoading(true);
        setError(false);

        // 2. Conservative Staggering: 1.5s interval to prevent 429 Resource Exhausted
        await new Promise(resolve => setTimeout(resolve, index * 1500));

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ 
              text: `A high-quality professional architectural photograph of: ${prompt}. Cinematic lighting, 8k resolution, photorealistic engineering detail, sharp focus.` 
            }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        if (!isMounted) return;

        const candidate = response.candidates?.[0];
        const imagePart = candidate?.content?.parts?.find(part => part.inlineData?.data);
        
        if (imagePart?.inlineData?.data) {
          const url = `data:image/png;base64,${imagePart.inlineData.data}`;
          setImageUrl(url);
          sessionStorage.setItem(cacheKey, url); // Save to cache
        } else {
          setError(true);
        }
      } catch (err: any) {
        console.warn(`API Limit or Error for image ${index}:`, err?.message || err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [prompt, index]);

  if (loading && !imageUrl) {
    return (
      <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12 animate-[shimmer-move_2s_infinite]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <svg className="w-8 h-8 text-blue-500/20 animate-pulse mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[10px] font-black text-blue-400/20 uppercase tracking-[0.3em] animate-pulse">Engineering AI...</p>
        </div>
      </div>
    );
  }

  // Fallback images array for high-quality engineering visuals
  const fallbacks = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35682f94a1d8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531834361935-4309e6f369ed?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  ];

  if (error || (!loading && !imageUrl)) {
    return (
      <div className="w-full h-full bg-gray-800 flex items-center justify-center group overflow-hidden">
        <img 
          src={fallbacks[index % fallbacks.length]} 
          alt={alt}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent flex items-end p-4">
           <span className="bg-blue-600/20 backdrop-blur-md text-blue-400 text-[9px] px-2 py-0.5 rounded border border-blue-500/20 font-bold uppercase tracking-widest">Premium Inspection</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden bg-gray-950">
      <img 
        src={imageUrl!} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
    </div>
  );
};

const ServiceCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  genPrompt: string; 
  imageAlt: string;
  index: number;
}> = ({ icon, title, description, genPrompt, imageAlt, index }) => (
  <a 
    href="#contact"
    className="bg-gray-800 rounded-3xl md:rounded-[2.5rem] shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2 transition-all duration-500 flex flex-col border border-white/5 group overflow-hidden relative focus:outline-none focus:ring-4 focus:ring-blue-500/50 block"
    aria-label={`מידע על שירות ${title}`}
  >
    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative overflow-hidden h-60 sm:h-72 bg-gray-950 min-h-[240px]">
      <GenerativeImage prompt={genPrompt} alt={imageAlt} index={index} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
      
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 bg-blue-600 text-white rounded-2xl shadow-xl border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {icon}
        </div>
      </div>
    </div>
    
    <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-400 leading-relaxed flex-grow text-sm sm:text-base mb-6">{description}</p>
      
      <div className="flex items-center gap-3 text-blue-400 font-bold text-sm group-hover:translate-x-[-4px] transition-transform duration-300">
        <span>פרטים והצעת מחיר</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 12H5m0 0l7 7m-7-7l7-7" />
        </svg>
      </div>
    </div>
  </a>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'ביקורת מבנים לפני רכישה',
      description: 'בדיקה הנדסית יסודית לנכסי יד שנייה: איתור ליקויים קריטיים בשלד, במערכות האינסטלציה והחשמל לפני הרכישה.',
      genPrompt: "Civil engineer inspecting a high-end luxury villa facade with a digital tablet",
      imageAlt: 'ביקורת למבנה יוקרה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'בדק בית לדירה חדשה',
      description: 'בדיקה מפורטת מול מפרט המכר והתקנים הישראליים. הפקת דוח הנדסי מחייב לקבלן לביצוע תיקונים בשנת הבדק.',
      genPrompt: "Interior of modern empty luxury apartment being checked by building inspector",
      imageAlt: 'בדק בית לדירה חדשה',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'איתור נזילות ורטיבות',
      description: 'שימוש במצלמות תרמיות FLIR ומכשור מתקדם לאיתור נזילות סמויות וכשלי איטום ללא גרימת נזק למבנה.',
      genPrompt: "Professional thermal imaging camera checking a leak in a modern bathroom wall",
      imageAlt: 'איתור נזילות תרמי',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: 'בדיקת קונסטרוקציה ושלד',
      description: 'אבחון יציבות הנדסית, קירות נושאים ותקרות. זיהוי סדקים קונסטרוקטיביים מסוכנים במבנים ותיקים ובפרויקטי תמ\"א.',
      genPrompt: "Structural engineering detail of concrete and steel reinforcement in a modern building",
      imageAlt: 'בדיקת שלד הנדסי',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: 'ייעוץ וליווי הנדסי',
      description: 'ליווי אישי בשיפוצים ופרויקטי בנייה, ניתוח היתכנות הנדסית ומתן פתרונות טכניים לליקויי בנייה סבוכים.',
      genPrompt: "Civil engineer in a safety vest discussing technical plans in a bright office",
      imageAlt: 'ייעוץ הנדסי',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'חוות דעת לבית משפט',
      description: 'הפקת דוחות הנדסיים מפורטים הקבילים כראיה בבתי המשפט בישראל, כולל עדות מומחה וליווי בתביעות בנייה.',
      genPrompt: "Legal engineering documents with architectural blueprints and official stamps",
      imageAlt: 'חוות דעת משפטית',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m10 0a3 3 0 01-3 3 3 3 0 01-3-3m3-3a3 3 0 00-3 3m3-3a3 3 0 013 3" /></svg>,
      title: 'ביקורת רכוש משותף',
      description: 'בדיקת תשתיות הבניין המשותפות עבור ועד הבית: לובי, מעליות, מאגרי מים ומערכות בטיחות אש.',
      genPrompt: "Wide architectural shot of a modern luxury building lobby and common areas",
      imageAlt: 'ביקורת רכוש משותף',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      title: 'כתב כמויות ואומדן',
      description: 'הכנת מפרטים טכניים מדויקים וכתבי כמויות המאפשרים לכם לנהל מכרז הוגן מול קבלני שיפוץ ללא חריגות תקציב.',
      genPrompt: "Modern architectural plans and scale rulers on a clean wooden desk",
      imageAlt: 'כתב כמויות הנדסי',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 18h12l3-18H3zm12 7h-6v-2h6v2z" /></svg>,
      title: 'שמאות רכוש ונזקים',
      description: 'הערכת נזקים כספיים כתוצאה מליקויים, רטיבות או שריפה לצורך קבלת פיצוי הולם מחברות הביטוח.',
      genPrompt: "Building inspector assessing a structural defect in a concrete wall with tools",
      imageAlt: 'שמאות נזקי רכוש',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'תשתיות חשמל ואינסטלציה',
      description: 'בדיקת תקינות מערכות החשמל, הצנרת והניקוז. זיהוי כשלי ביצוע בתשתיות פנימיות ומוסתרות בנכס.',
      genPrompt: "Close up of high-tech engineering diagnostics of building plumbing systems",
      imageAlt: 'בדיקת תשתיות',
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 italic">שירותי הנדסה מתקדמים</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">מעטפת פתרונות <br/><span className="text-blue-500">הנדסית מלאה</span> לכל נכס</h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            אנו משלבים את הטכנולוגיה המתקדמת ביותר עם ניסיון הנדסי מהשורה הראשונה כדי לספק לכם חוות דעת מדויקת.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer-move {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}} />
    </section>
  );
};

export default Services;
