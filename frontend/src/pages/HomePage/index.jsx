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
const MarqueeSection = lazy(() => import('../../components/sections/MarqueeSection/MarqueeSection'));
const StatsSection = lazy(() => import('../../components/sections/StatsSection/StatsSection'));
const HowItWorksSection = lazy(() => import('../../components/sections/HowItWorksSection/HowItWorksSection'));
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
      alignItems: 'center',
      padding: '80px 0',
    }}>
      <div style={{
        width: 30,
        height: 30,
        border: '2px solid rgba(108,99,255,0.15)',
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
            {/* Hero — EAGER */}
            <HeroSection />

            {/* Trust Bar — EAGER */}
            <TrustBar />

            {/* All below-fold — LAZY */}
            <Suspense fallback={<SectionLoader />}>

              {/* Exam boards marquee */}
              <MarqueeSection />

              {/* Stats */}
              <StatsSection />

              {/* How it works — NEW */}
              <HowItWorksSection />

              {/* Features Bento Grid */}
              <FeaturesSection />

              {/* Results Preview */}
              <ResultsPreview />

              {/* PDF Tools */}
              <ToolsShowcase />

              {/* India Map with SVG */}
              <IndiaMapSection />

              {/* Exam Calendar */}
              <ExamCalendar />

              {/* Live Data */}
              <LiveDataSection />

              {/* News Preview */}
              <NewsPreview />

              {/* WhatsApp CTA */}
              <WhatsAppCTA />

              {/* Blog Preview */}
              <BlogPreview />

              {/* Testimonials */}
              <TestimonialsSection />

              {/* Trust Badges */}
              <TrustBadges />

              {/* FAQ */}
              <FAQSection />

              {/* Final CTA */}
              <FinalCTA />

              {/* Footer */}
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
