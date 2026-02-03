
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
import NotFound from './components/NotFound';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'appraisal' | 'tel-aviv' | 'jerusalem' | 'merkaz' | 'villa' | 'warranty' | 'second-hand' | '404'>('home');

  useEffect(() => {
    const updateMeta = (title: string, description: string, keywords: string) => {
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', keywords);
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href.split('#')[0] + window.location.hash);
    };

    const handleRouting = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const pathname = window.location.pathname;
      
      let routePath = "/";
      
      if (hash.startsWith('/')) {
        routePath = decodeURIComponent(hash).toLowerCase();
      } else if (pathname !== '/' && pathname !== '/index.html') {
        routePath = decodeURIComponent(pathname).toLowerCase();
      }

      const normalizedPath = routePath.replace(/\s+/g, '-').replace(/\/$/, '');

      if (normalizedPath === "" || normalizedPath === "/" || normalizedPath === "/index.html") {
        setCurrentPage('home');
        updateMeta(
          "בדק בית וביקורת מבנים ע״י מהנדס מומחה | איתור ליקויי בנייה | אופקים הנדסה", 
          "אופקים הנדסה - החברה המובילה לבדק בית וביקורת מבנים בישראל. איתור ליקויי בנייה בציוד תרמי, דוחות הנדסיים קבילים בבית משפט וחיסכון כספי משמעותי.",
          "בדק בית, ביקורת מבנים, מהנדס בדק בית, ליקויי בנייה, איתור נזילות, בדק בית מחיר"
        );
      } else if (normalizedPath.includes("מחיר") || normalizedPath.includes("pricing")) {
        setCurrentPage('pricing');
        updateMeta("מחירון בדק בית 2026", "מחירון בדק בית מעודכן 2026", "מחירון");
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
      } else {
        const homeSections = ['contact', 'faq', 'services', 'process', 'why-us', 'testimonials', 'cases', 'knowledge', 'privacy-policy', 'accessibility'];
        if (homeSections.includes(hash)) {
          setCurrentPage('home');
        } else {
          setCurrentPage('404');
        }
      }
      
      const homeSections = ['contact', 'faq', 'services', 'process', 'why-us', 'testimonials', 'cases', 'knowledge', 'privacy-policy', 'accessibility'];
      if (!homeSections.includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'instant' });
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

  if (currentPage === '404') return <NotFound />;
  if (currentPage === 'pricing') return <PricingPage />;
  if (currentPage === 'contractor') return <ContractorInspectionPage />;
  if (currentPage === 'court') return <CourtExpertPage />;
  if (currentPage === 'leak') return <LeakDetectionPage />;
  if (currentPage === 'appraisal') return <AppraisalPage />;
  if (currentPage === 'tel-aviv') return <LocationPage city="תל אביב" />;
  if (currentPage === 'jerusalem') return <LocationPage city="ירושלים" />;
  if (currentPage === 'merkaz') return <LocationPage city="המרכז" />;
  if (currentPage === 'villa') return <VillaInspectionPage />;
  if (currentPage === 'warranty') return <WarrantyInspectionPage />;
  if (currentPage === 'second-hand') return <SecondHandInspectionPage />;

  return (
    <div className="bg-gray-950 text-gray-300 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Header />
      <main id="main-content" role="main">
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection delay={150}><Services /></FadeInSection>
        <FadeInSection><WhyUs /></FadeInSection>
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
};

export default App;
