import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import KnowledgeHub from './components/KnowledgeHub';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyQuoteButton from './components/StickyQuoteButton';
import PrivacySection from './components/PrivacySection';
import FadeInSection from './components/FadeInSection';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // מפת ניתובים מכתובות האתר הישן למקטעים החדשים (עוגנים)
    const legacyMap: Record<string, string> = {
      '/prices': '#knowledge',
      '/pricing': '#knowledge',
      '/בדק-בית-מחיר': '#knowledge',
      '/מחיר-בדק-בית': '#knowledge',
      '/ביקורת-מבנים': '#services',
      '/בדק-בית': '#services',
      '/איתור-נזילות': '#services',
      '/צור-קשר': '#contact',
      '/contact': '#contact'
    };

    const handleRouting = () => {
      try {
        // 1. קבלת הנתיב הנוכחי
        let path = window.location.pathname;
        
        // 2. פענוח תווים בעברית (חשוב מאוד עבור כתובות כמו /בדק-בית-מחיר)
        try {
          path = decodeURIComponent(path);
        } catch (e) {
          console.warn("URI decoding failed, using raw path", e);
        }

        // 3. ניקוי הכתובת: הסרת לוכסן סופי (אם קיים)
        const normalizedPath = path.length > 1 ? path.replace(/\/+$/, "") : path;

        // 4. אם אנחנו בדף הבית, הכל תקין
        if (normalizedPath === "/" || normalizedPath === "/index.html") {
          setIsNotFound(false);
          return;
        }

        // 5. בדיקה האם הכתובת נמצאת במפת הניתובים הישנה
        if (legacyMap[normalizedPath]) {
          // ביצוע הפניה פנימית לעוגן המתאים
          window.location.replace('/' + legacyMap[normalizedPath]);
          setIsNotFound(false);
          return;
        }

        // 6. אם הכתובת מכילה כבר עוגן (#), היא תקינה
        if (window.location.hash) {
          setIsNotFound(false);
          return;
        }

        // 7. אם הגענו לכאן - הכתובת לא מזוהה
        setIsNotFound(true);
      } catch (err) {
        console.error("Routing error:", err);
        setIsNotFound(false);
      }
    };

    handleRouting();
    // האזנה לשינויים בכתובת
    window.addEventListener('popstate', handleRouting);
    return () => window.removeEventListener('popstate', handleRouting);
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-950 text-gray-300 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection delay={200}>
          <Services />
        </FadeInSection>

        <FadeInSection>
          <WhyUs />
        </FadeInSection>

        <FadeInSection>
          <ComparisonTable />
        </FadeInSection>

        <FadeInSection delay={100}>
          <Process />
        </FadeInSection>

        <FadeInSection>
          <KnowledgeHub />
        </FadeInSection>

        <FadeInSection>
          <Testimonials />
        </FadeInSection>

        <FadeInSection>
          <FAQ />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>

        <FadeInSection>
          <PrivacySection />
        </FadeInSection>
      </main>
      <Footer />
      <StickyQuoteButton />
    </div>
  );
};

export default App;