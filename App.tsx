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

        // 4. בדיקה האם אנחנו בסביבת תצוגה מקדימה או בשורש
        const isRoot = normalizedPath === "/" || normalizedPath === "/index.html" || normalizedPath === "";
        const isPreviewEnv = window.location.hostname.includes('webcontainer') || window.self !== window.top;

        if (isRoot || isPreviewEnv) {
          setIsNotFound(false);
          return;
        }

        // 5. בדיקה האם הכתובת נמצאת במפת הניתובים הישנה
        if (legacyMap[normalizedPath]) {
          window.location.replace('/' + legacyMap[normalizedPath]);
          setIsNotFound(false);
          return;
        }

        // 6. אם הכתובת מכילה כבר עוגן (#), היא תקינה
        if (window.location.hash) {
          setIsNotFound(false);
          return;
        }

        // 7. אם הגענו לכאן והכתובת לא בשורש ולא במפה - נציג 404
        setIsNotFound(true);
      } catch (err) {
        console.error("Routing error:", err);
        setIsNotFound(false);
      }
    };

    handleRouting();
    window.addEventListener('popstate', handleRouting);
    return () => window.removeEventListener('popstate', handleRouting);
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