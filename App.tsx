
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
import ContractorInspectionPage from './components/ContractorInspectionPage';
import CourtExpertPage from './components/CourtExpertPage';
import LeakDetectionPage from './components/LeakDetectionPage';
import AppraisalPage from './components/AppraisalPage';
import LocationPage from './components/LocationPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'appraisal' | 'tel-aviv' | 'jerusalem' | '404'>('home');

  useEffect(() => {
    const handleRouting = () => {
      // Prioritize Hash routing for reliability on refresh
      const hash = window.location.hash.replace(/^#/, '');
      const pathname = window.location.pathname;
      
      let rawPath = hash || pathname;
      let decodedPath = "/";
      
      try {
        decodedPath = decodeURIComponent(rawPath).toLowerCase();
      } catch (e) {
        decodedPath = rawPath.toLowerCase();
      }

      const cleanPath = decodedPath.trim().replace(/\/+$/, "") || "/";
      
      if (cleanPath.includes("מחיר") || cleanPath.includes("pricing")) {
        setCurrentPage('pricing');
      } else if (cleanPath.includes("מקבלן") || cleanPath.includes("contractor")) {
        setCurrentPage('contractor');
      } else if (cleanPath.includes("חוות-דעת") || cleanPath.includes("court")) {
        setCurrentPage('court');
      } else if (cleanPath.includes("נזילות") || cleanPath.includes("leak")) {
        setCurrentPage('leak');
      } else if (cleanPath.includes("שמאות") || cleanPath.includes("appraisal")) {
        setCurrentPage('appraisal');
      } else if (cleanPath.includes("תל-אביב") || cleanPath.includes("tel-aviv")) {
        setCurrentPage('tel-aviv');
      } else if (cleanPath.includes("ירושלים") || cleanPath.includes("jerusalem")) {
        setCurrentPage('jerusalem');
      } 
      else if (cleanPath === "/" || cleanPath === "" || cleanPath.includes("index")) {
        setCurrentPage('home');
      }
      else {
        setCurrentPage('home'); 
      }
      
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    handleRouting();
    
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);

    return () => {
      window.removeEventListener('popstate', handleRouting);
      window.removeEventListener('hashchange', handleRouting);
    };
  }, []);

  if (currentPage === 'pricing') return <PricingPage />;
  if (currentPage === 'contractor') return <ContractorInspectionPage />;
  if (currentPage === 'court') return <CourtExpertPage />;
  if (currentPage === 'leak') return <LeakDetectionPage />;
  if (currentPage === 'appraisal') return <AppraisalPage />;
  if (currentPage === 'tel-aviv') return <LocationPage city="תל אביב" />;
  if (currentPage === 'jerusalem') return <LocationPage city="ירושלים" />;

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
