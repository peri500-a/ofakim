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
import AccessibilitySection from './components/AccessibilitySection';
import FadeInSection from './components/FadeInSection';
import NotFound from './components/NotFound';
import CookieConsent from './components/CookieConsent';

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
        const rawPath = window.location.pathname;
        let decodedPath = rawPath;

        // פענוח תווים בעברית בכתובת ה-URL
        try {
          decodedPath = decodeURIComponent(rawPath);
        } catch (e) {
          console.warn("URI decoding failed", e);
        }

        // ניקוי סלאשים מיותרים בסוף הכתובת ונרמול לשורש
        const normalizedPath = decodedPath.length > 1 ? decodedPath.replace(/\/+$/, "") : decodedPath;

        // 1. בדיקה האם מדובר בכתובת ישנה שצריכה הפניה (Redirect)
        if (legacyMap[normalizedPath]) {
          const targetHash = legacyMap[normalizedPath];
          // מעבר לעמוד הראשי ועדכון ההיסטוריה ללא הנתיב הישן
          window.history.replaceState(null, '', '/');
          window.location.hash = targetHash;
          setIsNotFound(false);
          return;
        }

        // 2. בדיקה האם מדובר בעמוד הראשי או בנתיבי מערכת מוכרים
        const isRoot = normalizedPath === "/" || normalizedPath === "/index.html" || normalizedPath === "";
        const isPreviewEnv = window.location.hostname.includes('webcontainer') || window.self !== window.top;

        if (isRoot || isPreviewEnv) {
          setIsNotFound(false);
          return;
        }

        // 3. אם יש האש (anchor) בלבד ללא נתיב - זה תקין (SPA)
        if (normalizedPath === "/" && window.location.hash) {
          setIsNotFound(false);
          return;
        }

        // 4. לכל נתיב לא מוכר (כמו /trial) - הצגת דף 404
        setIsNotFound(true);
      } catch (err) {
        console.error("Routing error:", err);
        setIsNotFound(false);
      }
    };

    // הפעלת הניתוב בטעינה ראשונית
    handleRouting();
    
    // האזנה לשינויי ניווט (היסטוריה)
    window.addEventListener('popstate', handleRouting);
    return () => {
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-950 text-gray-300 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Header />
      <main id="main-content" role="main">
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

        <FadeInSection>
          <AccessibilitySection />
        </FadeInSection>
      </main>
      <Footer />
      <StickyQuoteButton />
      <CookieConsent />
    </div>
  );
};

export default App;