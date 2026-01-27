
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
    // Legacy URL Mapping - Mapping old URLs to new anchors
    const legacyMap: Record<string, string> = {
      // English Slugs
      '/prices': '#knowledge',
      '/pricing': '#knowledge',
      '/makhiron': '#knowledge',
      '/bedek-bait-price': '#knowledge',
      '/contact-us': '#contact',
      '/services': '#services',
      '/about': '#why-us',
      
      // Hebrew Slugs (Decoded)
      '/בדק-בית-מחיר': '#knowledge',
      '/מחיר-בדק-בית': '#knowledge',
      '/חוות-דעת-הנדסית-לבית-משפט': '#services',
      '/ביקורת-מבנים': '#services',
      '/בדק-בית': '#services',
      '/איתור-נזילות': '#services',
      '/צור-קשר': '#contact'
    };

    try {
      // Decode current path and normalize it
      const currentPath = decodeURIComponent(window.location.pathname)
        .toLowerCase()
        .replace(/\/$/, ""); // Remove trailing slash

      // 1. If path is empty, we are at home
      if (currentPath === "" || currentPath === "/") {
        setIsNotFound(false);
        return;
      }

      // 2. If it's a known legacy path, redirect with replace to maintain history cleanliness
      if (legacyMap[currentPath]) {
        window.location.replace('/' + legacyMap[currentPath]);
        return;
      }

      // 3. If the path contains an anchor (starts with /#), it's a valid internal link
      if (window.location.hash || currentPath.includes('#')) {
        setIsNotFound(false);
        return;
      }

      // 4. Otherwise, it's a true 404
      setIsNotFound(true);
    } catch (e) {
      console.error("Error during path routing:", e);
      setIsNotFound(true);
    }
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
