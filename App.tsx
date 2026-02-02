
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
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contractor' | 'court' | 'leak' | 'appraisal' | 'tel-aviv' | 'jerusalem' | 'merkaz' | 'villa' | 'warranty' | '404'>('home');

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
      
      let cleanPath = "/";
      if (hash.startsWith('/')) {
        cleanPath = decodeURIComponent(hash).toLowerCase();
      } else if (pathname !== '/' && pathname !== '/index.html' && pathname !== '/index.tsx') {
        cleanPath = decodeURIComponent(pathname).toLowerCase();
      }

      // Normalizing path for matching (replacing spaces with hyphens to match both)
      const normalizedPath = cleanPath.replace(/\s+/g, '-');

      if (normalizedPath.includes("מחיר") || normalizedPath.includes("pricing")) {
        setCurrentPage('pricing');
        updateMeta(
          "מחירון בדק בית 2026 | כמה עולה ביקורת מבנים? | אופקים הנדסה", 
          "מחירון בדק בית מעודכן 2026. מחיר בדיקת דירה מקבלן, איתור נזילות וביקורת מבנים הנדסית. מחירים שקופים ושירות מקצועי ע״י מהנדס מוסמך.",
          "מחירון בדק בית, מחיר ביקורת מבנים, עלות בדיקת דירה, בדק בית מחיר 2026, מחיר מהנדס בדק בית"
        );
      } else if (normalizedPath.includes("מקבלן") || normalizedPath.includes("contractor")) {
        setCurrentPage('contractor');
        updateMeta(
          "בדק בית מקבלן | ביקורת דירה חדשה וליקויי בנייה | אופקים הנדסה", 
          "בדק בית לדירה חדשה מקבלן לפני מסירה או בשנת הבדק. איתור ליקויי בנייה, אי התאמות למפרט ובדיקה הנדסית מקיפה להגנה על זכויותיכם.",
          "בדק בית מקבלן, ביקורת דירה חדשה, בדיקת מסירה, ליקויי בנייה בדירה חדשה, בדק בית לדירה חדשה"
        );
      } else if (normalizedPath.includes("חוות-דעת") || normalizedPath.includes("court")) {
        setCurrentPage('court');
        updateMeta(
          "חוות דעת הנדסית לבית משפט | מהנדס מומחה לליקויי בנייה | אופקים הנדסה", 
          "הפקת חוות דעת מומחה לבית משפט בתביעות ליקויי בנייה ורטיבות. מהנדס רשום ומנוסה במתן עדות מומחה. דוח קביל וליווי משפטי מקצועי.",
          "חוות דעת הנדסית, מהנדס מומחה לבית משפט, תביעת ליקויי בנייה, עדות מומחה, דוח הנדסי לבית משפט"
        );
      } else if (normalizedPath.includes("נזילות") || normalizedPath.includes("leak")) {
        setCurrentPage('leak');
        updateMeta(
          "איתור נזילות ורטיבות במצלמה תרמית | ביקורת מבנים | אופקים הנדסה", 
          "מומחים לאיתור נזילות סמויות ורטיבות כלואה בטכנולוגיה תרמית מתקדמת ללא הרס. בדיקה הנדסית מדויקת ע״י מהנדס מוסמך.",
          "איתור נזילות, מצלמה תרמית, בדיקת רטיבות, איתור נזילות ללא הרס, צילום תרמי לנזילה"
        );
      } else if (normalizedPath.includes("שמאות") || normalizedPath.includes("appraisal")) {
        setCurrentPage('appraisal');
        updateMeta(
          "שמאות רכוש והערכת נזקי בנייה | ירידת ערך הנדסית | אופקים הנדסה", 
          "הערכת שווי נזקי רכוש וירידת ערך עקב ליקויי בנייה. שילוב שמאות והנדסה למיקסום הפיצוי הכספי המגיע לכם מחברות ביטוח וקבלנים.",
          "שמאות רכוש, ירידת ערך, הערכת נזקי בנייה, שמאי מקרקעין הנדסי, אומדן נזקי רכוש"
        );
      } else if (normalizedPath.includes("תל-אביב") || normalizedPath.includes("tel-aviv")) {
        setCurrentPage('tel-aviv');
        updateMeta(
          "בדק בית בתל אביב | ביקורת מבנים וליקויי בנייה במרכז | אופקים הנדסה", 
          "שירותי בדק בית מקצועיים בתל אביב. התמחות במגדלי יוקרה, דירות קבלן ומבנים לשימור. מהנדס בדק בית זמין באזור המרכז למתן דוח הנדסי קביל.",
          "בדק בית בתל אביב, ביקורת מבנים תל אביב, מהנדס בדק בית תל אביב, ליקויי בנייה במרכז"
        );
      } else if (normalizedPath.includes("ירושלים") || normalizedPath.includes("jerusalem")) {
        setCurrentPage('jerusalem');
        updateMeta(
          "בדק בית בירושלים | ביקורת מבנים ואיתור ליקויי בנייה בבירה | אופקים הנדסה", 
          "בדיקת ליקויי בנייה בירושלים והסביבה. מומחיות בבנייה ירושלמית, חיפויי אבן ובידוד תרמי. ביקורת מבנים הנדסית מפורטת למימוש זכויותיכם מול הקבלן.",
          "בדק בית בירושלים, ביקורת מבנים ירושלים, מהנדס בדק בית ירושלים, בדיקת דירה בירושלים"
        );
      } else if (normalizedPath.includes("מרכז") || normalizedPath.includes("merkaz")) {
        setCurrentPage('merkaz');
        updateMeta(
          "בדק בית במרכז | ביקורת מבנים הנדסית בגוש דן והסביבה | אופקים הנדסה", 
          "שירותי ביקורת מבנים מקצועיים בכל אזור המרכז. איתור ליקויי בנייה בדירות קבלן ויד שניה ע״י מהנדס מומחה. דוח קביל לבית משפט תוך 48 שעות.",
          "בדק בית במרכז, ביקורת מבנים מרכז, מהנדס בדק בית במרכז, בדיקת דירה גוש דן"
        );
      } else if (normalizedPath.includes("וילה") || normalizedPath.includes("villa")) {
        setCurrentPage('villa');
        updateMeta(
          "בדק בית לבית פרטי ווילה | ביקורת מבנים לצמודי קרקע | אופקים הנדסה", 
          "בדיקה הנדסית מקיפה לבתים פרטיים, וילות וצמודי קרקע. אבחון תשתיות, גגות ושלד ע״י מהנדס בדק בית מומחה.",
          "בדק בית לבית פרטי, ביקורת וילה, בדק בית לצמוד קרקע, בדיקת גגות, בדיקת שלד וילה"
        );
      } else if (normalizedPath.includes("שנת-בדק") || normalizedPath.includes("warranty")) {
        setCurrentPage('warranty');
        updateMeta(
          "בדיקת סוף שנת בדק | איתור ליקויי בנייה לפני תום אחריות | אופקים הנדסה", 
          "הזדמנות אחרונה לתיקון ליקויי בנייה על חשבון הקבלן. ביצוע בדיקת סוף שנת בדק מקצועית לפני תום תקופת האחריות בחוק המכר.",
          "סוף שנת בדק, אחריות קבלן, ליקויי בנייה אחרי שנה, בדיקת שנת בדק, חוק המכר דירות"
        );
      } else if (cleanPath === "/" || cleanPath === "" || !hash.includes('/')) {
        setCurrentPage('home');
        updateMeta(
          "בדק בית וביקורת מבנים ע״י מהנדס מומחה | איתור ליקויי בנייה | אופקים הנדסה", 
          "אופקים הנדסה - החברה המובילה לבדק בית וביקורת מבנים בישראל. איתור ליקויי בנייה בציוד תרמי, דוחות הנדסיים קבילים בבית משפט וחיסכון כספי משמעותי.",
          "בדק בית, ביקורת מבנים, מהנדס בדק בית, ליקויי בנייה, איתור נזילות, בדק בית מחיר"
        );
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
  if (currentPage === 'merkaz') return <LocationPage city="המרכז" />;
  if (currentPage === 'villa') return <VillaInspectionPage />;
  if (currentPage === 'warranty') return <WarrantyInspectionPage />;

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
