// App.jsx — Root Application Component
import { lazy, Suspense, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useIsDesktop } from './hooks/useMediaQuery';
import { initAccessibility } from './utils/accessibility';
import { initPerformanceMonitoring } from './utils/performance';
import { initScrollAnimations } from './animations/gsap/scrollAnimations';
import { initAdvancedEffects } from './animations/gsap/advancedEffects';
import { initAdvancedScrollAnimations } from './animations/gsap/advancedScrollAnimations';

const CustomCursor = lazy(() => import('./components/ui/Cursor/EnhancedMagneticCursor'));

function App() {
  useSmoothScroll();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    // Initialize accessibility features
    const a11y = initAccessibility();

    // Initialize performance monitoring
    const perf = initPerformanceMonitoring();
    console.log('[App] Performance settings:', perf.adaptiveSettings);

    // Initialize all animations after component mount
    setTimeout(() => {
      initScrollAnimations();
      initAdvancedEffects();
      initAdvancedScrollAnimations();
      console.log('[App] All animations initialized');
    }, 100);

    // Cleanup
    return () => {
      // Clean up scroll animations if needed
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      <HomePage />
    </>
  );
}

export default App;
