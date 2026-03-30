// App.jsx — Root Application Component
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useIsDesktop } from './hooks/useMediaQuery';

const CustomCursor = lazy(() => import('./components/ui/CustomCursor/CustomCursor'));

function App() {
  useSmoothScroll();
  const isDesktop = useIsDesktop();

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
