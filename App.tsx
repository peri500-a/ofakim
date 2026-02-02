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
import NotFound from './components/NotFound';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'appraisal' | 'tel-aviv' | 'jerusalem' | 'villa' | 'warranty' | '404'>('home');

  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const pathname = window.location.pathname;
      
      // Determine if the URL points to a specific internal page route
      const isPageRoute = hash.startsWith('/') || (pathname !== '/' && pathname !== '/index.html');
      
      let rawPath = '';
      if (hash.startsWith('/')) {
        rawPath = hash;
      } else if (pathname !== '/' && pathname !== '/index.html') {
        rawPath = pathname;
      }

      let decodedPath = "/";
      try {
        decodedPath = decodeURIComponent(rawPath).toLowerCase();
      } catch (e) {
        decodedPath = rawPath.toLowerCase();
      }

      const cleanPath = decodedPath.trim().replace(/\/+$/, "") || "/";
      
      // Home page check
      if (cleanPath === "/" || cleanPath === "" || (!isPageRoute && (!hash || !hash.includes('/')))) {
        setCurrentPage('home');
        return;
      }

      // Route Matching for internal pages
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
      } else if (cleanPath.includes("וילה") || cleanPath.includes("villa")) {
        setCurrentPage('villa');
      } else if (cleanPath.includes("שנת-בדק") || cleanPath.includes("warranty")) {
        setCurrentPage('warranty');
      } else {
        // Known anchors on the home page should stay on home
        const homeSections = ['contact', 'faq', 'services', 'process', 'why-us', 'testimonials', 'cases', 'knowledge', 'privacy-policy', 'accessibility'];
        if (homeSections.includes(hash)) {
          setCurrentPage('home');
        } else {
          setCurrentPage('404');
        }
      }
      
      // Scroll to top on page change, but not for section anchors
      if (!homeSections.includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    const homeSections = ['contact', 'faq', 'services', 'process', 'why-us', 'testimonials', 'cases', 'knowledge', 'privacy-policy', 'accessibility'];

    handleRouting();
    
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);

    return () => {
      window.removeEventListener('popstate', handleRouting);
      window.removeEventListener('hashchange', handleRouting);
    };
  }, []);

  if (currentPage === '404') return <NotFound />;
  if (currentPage === 'pricing') return <PricingPage />;
  if (currentPage === 'contractor') return <ContractorInspectionPage />;
  if (currentPage === 'court') return <CourtExpertPage />;
  if (currentPage === 'leak') return <LeakDetectionPage />;
  if (currentPage === 'appraisal') return <AppraisalPage />;
  if (currentPage === 'tel-aviv') return <LocationPage city="תל אביב" />;
  if (currentPage === 'jerusalem') return <LocationPage city="ירושלים" />;
  if (currentPage === 'villa') return <VillaInspectionPage />;
  if (currentPage === 'warranty') return <WarrantyInspectionPage />;

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