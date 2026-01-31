
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
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
import PricingPage from './components/PricingPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | '404'>('home');

  useEffect(() => {
    const handleRouting = () => {
      // פענוח הכתובת כדי לזהות תווים בעברית נכונה (למשל במקום %D7%91...)
      let path = "";
      try {
        path = decodeURIComponent(window.location.pathname).toLowerCase().replace(/\/+$/, "") || "/";
      } catch (e) {
        path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
      }
      
      if (path === "/" || path === "") {
        setCurrentPage('home');
      } else if (path === "/בדק-בית-מחיר" || path === "/prices") {
        setCurrentPage('pricing');
      } else {
        // רשימת הפניות למסמכים ישנים או סקשנים בתוך דף הבית
        const legacyMap: Record<string, string> = {
          '/ביקורת-מבנים': '#services',
          '/צור-קשר': '#contact',
          '/בדק-בית-המלצות': '#testimonials'
        };

        if (legacyMap[path]) {
          window.history.replaceState(null, '', '/');
          window.location.hash = legacyMap[path];
          setCurrentPage('home');
        } else {
          setCurrentPage('404');
        }
      }
    };

    // הפעלה ראשונית
    handleRouting();
    
    // האזנה לשינויים ב-URL (כפתור אחורה/קדימה או pushState)
    window.addEventListener('popstate', handleRouting);
    return () => window.removeEventListener('popstate', handleRouting);
  }, []);

  // ניהול תצוגה
  if (currentPage === '404') {
    return <NotFound />;
  }

  if (currentPage === 'pricing') {
    return <PricingPage />;
  }

  return (
    <div className="bg-gray-950 text-gray-300 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Header />
      <main id="main-content" role="main">
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection delay={150}><Services /></FadeInSection>
        <FadeInSection><CaseStudies /></FadeInSection>
        <FadeInSection><WhyUs /></FadeInSection>
        <FadeInSection><ComparisonTable /></FadeInSection>
        <FadeInSection delay={100}><Process /></FadeInSection>
        <FadeInSection><KnowledgeHub /></FadeInSection>
        <FadeInSection><Testimonials /></FadeInSection>
        <FadeInSection><FAQ /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
        <FadeInSection><PrivacySection /></FadeInSection>
        <FadeInSection><AccessibilitySection /></FadeInSection>
      </main>
      <Footer />
      <StickyQuoteButton />
      <CookieConsent />
    </div>
  );
};

export default App;
