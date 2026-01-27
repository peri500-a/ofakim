
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
      '/prices': '#knowledge',
      '/pricing': '#knowledge',
      '/makhiron': '#knowledge',
      '/bedek-bait-price': '#knowledge',
      '/contact-us': '#contact',
      '/contact': '#contact',
      '/services': '#services',
      '/leak-detection': '#services',
      '/about': '#why-us',
      '/testimonials': '#testimonials',
      '/faq': '#faq',
      // Handling the specific Hebrew URL from the screenshot
      '/חוות-דעת-הנדסית-לבית-משפט': '#services',
      '/ביקורת-מבנים': '#services',
      '/בדק-בית': '#services'
    };

    // Decode URI to handle Hebrew characters correctly
    try {
      const currentPath = decodeURIComponent(window.location.pathname).toLowerCase().replace(/\/$/, "");
      
      // 1. Check if it's a known legacy path
      if (legacyMap[currentPath]) {
        window.location.replace('/' + legacyMap[currentPath]);
        return;
      }

      // 2. Check if it's a non-root path that isn't handled
      if (currentPath !== "" && currentPath !== "/" && !currentPath.startsWith('/#')) {
        setIsNotFound(true);
      }
    } catch (e) {
      console.error("Path decoding error", e);
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
