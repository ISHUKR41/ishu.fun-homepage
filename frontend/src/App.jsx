// App.jsx — Root Application Component
import { lazy, Suspense, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useIsDesktop } from './hooks/useMediaQuery';
import { initAccessibility } from './utils/accessibility';
import { initPerformanceMonitoring } from './utils/performance';

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

    // Cleanup
    return () => {
      // Clean up on unmount
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
