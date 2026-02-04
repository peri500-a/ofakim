
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
import CookieConsent from './components/CookieConsent';
import PricingPage from './components/PricingPage';
import ContractorInspectionPage from './components/ContractorInspectionPage';
import CourtExpertPage from './components/CourtExpertPage';
import LeakDetectionPage from './components/LeakDetectionPage';
import AppraisalPage from './components/AppraisalPage';
import LocationPage from './components/LocationPage';
import VillaInspectionPage from './components/VillaInspectionPage';
import WarrantyInspectionPage from './components/WarrantyInspectionPage';
import SecondHandInspectionPage from './components/SecondHandInspectionPage';
import AccessibilityStatement from './components/AccessibilityStatement';
import NotFound from './components/NotFound';
import LegalPower from './components/LegalPower';

type PageType = 'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'appraisal' | 'tel-aviv' | 'jerusalem' | 'merkaz' | 'villa' | 'warranty' | 'second-hand' | 'accessibility' | '404';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handleRouting = () => {
      let routePath = "/";
      try {
        const hash = window.location.hash.replace(/^#/, '');
        const pathname = window.location.pathname;
        
        if (hash && hash.startsWith('/')) {
          routePath = decodeURIComponent(hash).toLowerCase();
        } else if (pathname && pathname !== '/' && pathname !== '/index.html') {
          routePath = decodeURIComponent(pathname).toLowerCase();
        }
      } catch (e) {
        console.warn("Routing decode error, defaulting to home", e);
        routePath = "/";
      }

      const normalizedPath = routePath.replace(/\s+/g, '-').replace(/\/$/, '') || "/";

      // הוספת בדיקה אם מדובר ב-Hash של דף הבית
      const hashSection = window.location.hash.replace(/^#\/?/, ''); // תומך גם ב-#contact וגם ב-#/contact
      const homeSections = ['contact', 'faq', 'services', 'process', 'why-us', 'testimonials', 'cases', 'knowledge', 'privacy-policy', 'main-content'];

      if (normalizedPath === "" || normalizedPath === "/" || normalizedPath === "/index.html" || homeSections.includes(hashSection)) {
        setCurrentPage('home');
        // אם יש האש, גלול אליו
        if (hashSection && homeSections.includes(hashSection)) {
          setTimeout(() => {
            const el = document.getElementById(hashSection);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (normalizedPath.includes("מחיר") || normalizedPath.includes("pricing")) {
        setCurrentPage('pricing');
      } else if (normalizedPath.includes("מקבלן") || normalizedPath.includes("contractor")) {
        setCurrentPage('contractor');
      } else if (normalizedPath.includes("חוות-דעת") || normalizedPath.includes("court")) {
        setCurrentPage('court');
      } else if (normalizedPath.includes("נזילות") || normalizedPath.includes("leak")) {
        setCurrentPage('leak');
      } else if (normalizedPath.includes("שמאות") || normalizedPath.includes("appraisal")) {
        setCurrentPage('appraisal');
      } else if (normalizedPath.includes("תל-אביב") || normalizedPath.includes("tel-aviv")) {
        setCurrentPage('tel-aviv');
      } else if (normalizedPath.includes("ירושלים") || normalizedPath.includes("jerusalem")) {
        setCurrentPage('jerusalem');
      } else if (normalizedPath.includes("מרכז") || normalizedPath.includes("merkaz")) {
        setCurrentPage('merkaz');
      } else if (normalizedPath.includes("וילה") || normalizedPath.includes("villa")) {
        setCurrentPage('villa');
      } else if (normalizedPath.includes("שנת-בדק") || normalizedPath.includes("warranty")) {
        setCurrentPage('warranty');
      } else if (normalizedPath.includes("יד-שנייה") || normalizedPath.includes("second-hand")) {
        setCurrentPage('second-hand');
      } else if (normalizedPath.includes("נגישות") || normalizedPath.includes("accessibility")) {
        setCurrentPage('accessibility');
      } else {
        setCurrentPage('404');
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

  if (currentPage === 'home') {
    return (
      <div className="bg-gray-950 text-gray-300 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        <Header />
        <main id="main-content" role="main">
          <FadeInSection><Hero /></FadeInSection>
          <FadeInSection delay={150}><Services /></FadeInSection>
          <FadeInSection><WhyUs /></FadeInSection>
          <FadeInSection><LegalPower /></FadeInSection>
          <FadeInSection><CaseStudies /></FadeInSection>
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
  }

  switch (currentPage) {
    case 'pricing': return <PricingPage />;
    case 'contractor': return <ContractorInspectionPage />;
    case 'court': return <CourtExpertPage />;
    case 'leak': return <LeakDetectionPage />;
    case 'appraisal': return <AppraisalPage />;
    case 'tel-aviv': return <LocationPage city="תל אביב" />;
    case 'jerusalem': return <LocationPage city="ירושלים" />;
    case 'merkaz': return <LocationPage city="המרכז" />;
    case 'villa': return <VillaInspectionPage />;
    case 'warranty': return <WarrantyInspectionPage />;
    case 'second-hand': return <SecondHandInspectionPage />;
    case 'accessibility': return <AccessibilityStatement />;
    default: return <NotFound />;
  }
};

export default App;
