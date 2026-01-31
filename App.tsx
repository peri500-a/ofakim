
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
import LocationPage from './components/LocationPage';

const App: React.FC = () => {
  // הגדרת דף הבית כברירת המחדל הראשונית
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'tel-aviv' | 'jerusalem' | '404'>('home');

  useEffect(() => {
    const handleRouting = () => {
      const rawPath = window.location.pathname;
      let path = "/";
      
      try {
        path = decodeURIComponent(rawPath).toLowerCase();
      } catch (e) {
        path = rawPath.toLowerCase();
      }

      // ניקוי סלאשים וסיומות נפוצות
      const cleanPath = path.replace(/\/+$/, "") || "/";
      
      // בדיקה ספציפית של נתיבים מזוהים
      if (cleanPath.includes("/בדק-בית-מחיר") || cleanPath.includes("/prices")) {
        setCurrentPage('pricing');
      } else if (cleanPath.includes("/בדק-בית-מקבלן") || cleanPath.includes("/new-apartment")) {
        setCurrentPage('contractor');
      } else if (cleanPath.includes("/חוות-דעת-הנדסית-לבית-משפט")) {
        setCurrentPage('court');
      } else if (cleanPath.includes("/איתור-נזילות-ורטיבות")) {
        setCurrentPage('leak');
      } else if (cleanPath.includes("/בדק-בית-בתל-אביב")) {
        setCurrentPage('tel-aviv');
      } else if (cleanPath.includes("/בדק-בית-בירושלים")) {
        setCurrentPage('jerusalem');
      } 
      // אם הנתיב הוא שורש, אינדקס, או נתיב קצר שאינו אחד מהדפים הנ"ל - דף הבית
      else if (cleanPath === "/" || cleanPath === "" || cleanPath.includes("index.html") || cleanPath.split('/').filter(Boolean).length <= 1) {
        setCurrentPage('home');
      }
      // במקום 404 גורף, נחזיר לדף הבית אם אנחנו לא בטוחים בנתיב בסביבת הפיתוח
      else {
        setCurrentPage('home'); 
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

  // ניווט מותנה - החזרת הרכיב המתאים לפי ה-State
  if (currentPage === 'pricing') return <PricingPage />;
  if (currentPage === 'contractor') return <ContractorInspectionPage />;
  if (currentPage === 'court') return <CourtExpertPage />;
  if (currentPage === 'leak') return <LeakDetectionPage />;
  if (currentPage === 'tel-aviv') return <LocationPage city="תל אביב" />;
  if (currentPage === 'jerusalem') return <LocationPage city="ירושלים" />;
  // דף 404 יופעל רק אם הוגדר מפורשות (כרגע הוסר מה-else כדי למנוע טעויות בתצוגה)
  if (currentPage === '404') return <NotFound />;

  // ברירת מחדל סופית: רינדור דף הבית המלא
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
