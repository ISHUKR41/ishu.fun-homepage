// pages/HomePage/index.jsx
import { lazy, Suspense, useState } from 'react';
import PageLoader from '../../components/sections/PageLoader/PageLoader';
import AnnouncementBar from '../../components/sections/AnnouncementBar/AnnouncementBar';
import Navbar from '../../components/layout/Navbar/Navbar';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import TrustBar from '../../components/sections/TrustBar/TrustBar';
import ScrollProgress from '../../components/ui/ScrollProgress/ScrollProgress';
import BackToTop from '../../components/ui/BackToTop/BackToTop';
import BottomNav from '../../components/ui/BottomNav/BottomNav';

// Lazy load all below-fold sections
const StatsSection = lazy(() => import('../../components/sections/StatsSection/StatsSection'));
const FeaturesSection = lazy(() => import('../../components/sections/FeaturesSection/FeaturesSection'));
const ResultsPreview = lazy(() => import('../../components/sections/ResultsPreview/ResultsPreview'));
const ToolsShowcase = lazy(() => import('../../components/sections/ToolsShowcase/ToolsShowcase'));
const IndiaMapSection = lazy(() => import('../../components/sections/IndiaMapSection/IndiaMapSection'));
const ExamCalendar = lazy(() => import('../../components/sections/ExamCalendar/ExamCalendar'));
const LiveDataSection = lazy(() => import('../../components/sections/LiveDataSection/LiveDataSection'));
const NewsPreview = lazy(() => import('../../components/sections/NewsPreview/NewsPreview'));
const WhatsAppCTA = lazy(() => import('../../components/sections/WhatsAppCTA/WhatsAppCTA'));
const BlogPreview = lazy(() => import('../../components/sections/BlogPreview/BlogPreview'));
const TestimonialsSection = lazy(() => import('../../components/sections/TestimonialsSection/TestimonialsSection'));
const TrustBadges = lazy(() => import('../../components/sections/TrustBadges/TrustBadges'));
const FAQSection = lazy(() => import('../../components/sections/FAQSection/FAQSection'));
const FinalCTA = lazy(() => import('../../components/sections/FinalCTA/FinalCTA'));
const Footer = lazy(() => import('../../components/layout/Footer/Footer'));

function SectionLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '80px 0',
    }}>
      <div style={{
        width: 32,
        height: 32,
        border: '3px solid var(--glass-border)',
        borderTopColor: 'var(--accent-violet)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ScrollProgress />
          <AnnouncementBar />
          <Navbar />

          <main id="main-content">
            {/* Section 04 — Hero (EAGER) */}
            <HeroSection />

            {/* Section 05 — Trust Bar (EAGER) */}
            <TrustBar />

            {/* All below-fold sections — LAZY */}
            <Suspense fallback={<SectionLoader />}>
              {/* Section 06 — Stats */}
              <StatsSection />

              {/* Section 07 — Features */}
              <FeaturesSection />

              {/* Section 08 — Results Preview */}
              <ResultsPreview />

              {/* Section 09 — PDF Tools */}
              <ToolsShowcase />

              {/* Section 10 — India Map */}
              <IndiaMapSection />

              {/* Section 11 — Exam Calendar */}
              <ExamCalendar />

              {/* Section 12 — Live Data */}
              <LiveDataSection />

              {/* Section 13 — News Preview */}
              <NewsPreview />

              {/* Section 14 — WhatsApp CTA */}
              <WhatsAppCTA />

              {/* Section 15 — Blog Preview */}
              <BlogPreview />

              {/* Section 16 — Testimonials */}
              <TestimonialsSection />

              {/* Section 17 — Trust Badges */}
              <TrustBadges />

              {/* Section 18 — FAQ */}
              <FAQSection />

              {/* Section 19 — Final CTA */}
              <FinalCTA />

              {/* Section 20 — Footer */}
              <Footer />
            </Suspense>
          </main>

          <BackToTop />
          <BottomNav />
        </>
      )}
    </>
  );
}
