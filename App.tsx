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
    const updateMeta = (title: string, description: string) => {
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      // Update Canonical
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
      
      let cleanPath = "/";
      if (hash.startsWith('/')) {
        cleanPath = decodeURIComponent(hash).toLowerCase();
      } else if (pathname !== '/' && pathname !== '/index.html' && pathname !== '/index.tsx') {
        cleanPath = decodeURIComponent(pathname).toLowerCase();
      }

      if (cleanPath.includes("מחיר") || cleanPath.includes("pricing")) {
        setCurrentPage('pricing');
        updateMeta("מחירון בדק בית 2026 | אופקים הנדסה", "מחירון בדק בית שקוף ומעודכן לשנת 2026. בדקו כמה עולה בדק בית לדירה חדשה, יד שנייה או בית פרטי.");
      } else if (cleanPath.includes("מקבלן") || cleanPath.includes("contractor")) {
        setCurrentPage('contractor');
        updateMeta("בדק בית מקבלן | ביקורת דירה חדשה | אופקים הנדסה", "קיבלתם מפתח? אל תחתמו על פרוטוקול מסירה בלי בדיקת מהנדס. איתור ליקויי בנייה בדירות חדשות לפי חוק המכר.");
      } else if (cleanPath.includes("חוות-דעת") || cleanPath.includes("court")) {
        setCurrentPage('court');
        updateMeta("חוות דעת הנדסית לבית משפט | מהנדס מומחה | אופקים הנדסה", "דוחות הנדסיים קבילים בבתי משפט. ליווי משפטי מקצועי ועדות מומחה בתביעות ליקויי בנייה.");
      } else if (cleanPath.includes("נזילות") || cleanPath.includes("leak")) {
        setCurrentPage('leak');
        updateMeta("איתור נזילות ורטיבות ללא הרס | צילום תרמי | אופקים הנדסה", "איתור נזילות סמויות במצלמה תרמית FLIR מתקדמת. פתרון כשלי איטום ורטיבות ללא שבירת קירות.");
      } else if (cleanPath.includes("שמאות") || cleanPath.includes("appraisal")) {
        setCurrentPage('appraisal');
        updateMeta("שמאות רכוש והערכת נזקים | אופקים הנדסה", "הערכת שווי נזקי רכוש, ירידת ערך וליקויי בנייה ע״י שמאי ומהנדס מוסמך.");
      } else if (cleanPath.includes("תל-אביב") || cleanPath.includes("tel-aviv")) {
        setCurrentPage('tel-aviv');
        updateMeta("בדק בית בתל אביב | ביקורת מבנים במרכז | אופקים הנדסה", "שירותי בדק בית מקצועיים בתל אביב והמרכז. מהנדס מומחה למגדלי מגורים ומבנים לשימור.");
      } else if (cleanPath.includes("ירושלים") || cleanPath.includes("jerusalem")) {
        setCurrentPage('jerusalem');
        updateMeta("בדק בית בירושלים | ביקורת מבנים בבירה | אופקים הנדסה", "ביקורת מבנים מקצועית בירושלים. מומחיות בחיפויי אבן, בידוד תרמי וליקויי בנייה בבנייה ירושלמית.");
      } else if (cleanPath.includes("וילה") || cleanPath.includes("villa")) {
        setCurrentPage('villa');
        updateMeta("בדק בית לבית פרטי ווילה | אופקים הנדסה", "בדיקה הנדסית מקיפה לצמודי קרקע. בדיקת גגות, מעטפת המבנה ותשתיות חוץ.");
      } else if (cleanPath.includes("שנת-בדק") || cleanPath.includes("warranty")) {
        setCurrentPage('warranty');
        updateMeta("בדיקת סוף שנת בדק | מימוש אחריות קבלן | אופקים הנדסה", "הזדמנות אחרונה לתיקון ליקויים על חשבון הקבלן. בדיקה מקצועית לפני תום תקופת האחריות.");
      } else if (cleanPath === "/" || cleanPath === "" || !hash.includes('/')) {
        setCurrentPage('home');
        updateMeta("אופקים הנדסה | בדק בית וביקורת מבנים ע״י מהנדס מומחה", "החברה המובילה לבדק בית. איתור ליקויי בנייה בציוד תרמי, דוחות הנדסיים קבילים בבית משפט וחיסכון כספי משמעותי.");
      } else {
        setCurrentPage('404');
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