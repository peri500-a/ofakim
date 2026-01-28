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

        try {
          decodedPath = decodeURIComponent(rawPath);
        } catch (e) {
          console.warn("URI decoding failed", e);
        }

        // נרמול הנתיב לבדיקה
        const normalizedPath = decodedPath.toLowerCase().replace(/\/+$/, "") || "/";

        // 1. בדיקה האם מדובר בכתובת ישנה שצריכה הפניה לעוגן בדף הבית
        if (legacyMap[normalizedPath]) {
          const targetHash = legacyMap[normalizedPath];
          window.history.replaceState(null, '', '/');
          window.location.hash = targetHash;
          setIsNotFound(false);
          return;
        }

        // 2. הבטחת הצגת דף הבית:
        // מאחר ומדובר באתר של דף נחיתה אחד (Landing Page), אנחנו נבטל את הצגת דף ה-404 
        // בכל מצב שבו המשתמש נמצא בנתיב כלשהו שאינו מוגדר במפורש כדף אחר.
        // זה פותר בעיות שבהן ה-URL בסביבות פיתוח כולל תתי-נתיבים (כמו ב-AI Studio).
        setIsNotFound(false);

      } catch (err) {
        console.error("Routing error:", err);
        setIsNotFound(false); // ברירת מחדל לדף הבית בכל מקרה של שגיאה
      }
    };

    handleRouting();
    
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);
    
    return () => {
      window.removeEventListener('popstate', handleRouting);
      window.removeEventListener('hashchange', handleRouting);
    };
  }, []);

  // הצגת דף 404 רק אם בעתיד נרצה להגדיר דפים פנימיים ומישהו ינסה להגיע אליהם
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

        <FadeInSection delay={150}>
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