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
    // Legacy URL Mapping - Includes Hebrew slugs from the old site
    const legacyMap: Record<string, string> = {
      // English Slugs
      '/prices': '#knowledge',
      '/pricing': '#knowledge',
      '/makhiron': '#knowledge',
      '/bedek-bait-price': '#knowledge',
      '/contact-us': '#contact',
      '/contact': '#contact',
      '/services': '#services',
      '/about': '#why-us',
      
      // Hebrew Slugs (Decoded strings as they appear in URL)
      '/בדק-בית-מחיר': '#knowledge',
      '/מחיר-בדק-בית': '#knowledge',
      '/חוות-דעת-הנדסית-לבית-משפט': '#services',
      '/ביקורת-מבנים': '#services',
      '/בדק-בית': '#services',
      '/איתור-נזילות': '#services'
    };

    try {
      // 1. Get and decode path (handles Hebrew characters correctly)
      let path = window.location.pathname;
      try {
        path = decodeURIComponent(path);
      } catch (e) {
        console.warn("Could not decode URI component", e);
      }

      // Normalize: remove trailing slash and convert to lower case
      const normalizedPath = path.toLowerCase().replace(/\/$/, "");

      // 2. If path is home, index or empty, stay on home
      if (normalizedPath === "" || normalizedPath === "/" || normalizedPath === "/index.html") {
        setIsNotFound(false);
        return;
      }

      // 3. Check if path is in our legacy mapping
      if (legacyMap[normalizedPath]) {
        // Use replace to redirect without adding to history stack
        window.location.replace('/' + legacyMap[normalizedPath]);
        return;
      }

      // 4. If the URL already has a hash (anchor), it's valid for our single page app
      if (window.location.hash || normalizedPath.includes('#')) {
        setIsNotFound(false);
        return;
      }

      // 5. If none of the above, show our custom 404 page
      setIsNotFound(true);
    } catch (err) {
      console.error("Routing error:", err);
      setIsNotFound(false); // Default to home on error
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