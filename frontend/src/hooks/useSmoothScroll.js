// hooks/useSmoothScroll.js
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenisInstance = null;

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Ultra-smooth, lag-free scroll configuration
    const lenis = new Lenis({
      duration: 1.0, // Faster for snappy, responsive feel
      easing: (t) => {
        // Custom easing for ultra-smooth experience
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Enhanced wheel responsiveness
      smoothTouch: false, // Disabled for native mobile scroll performance
      touchMultiplier: 2.5, // Improved touch sensitivity
      infinite: false,
      syncTouch: false,
      touchInertiaMultiplier: 40, // Enhanced momentum on mobile
      lerp: 0.08, // Very smooth interpolation (lower = smoother)
      autoResize: true,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Sync with GSAP ScrollTrigger for perfectly timed animations
    lenis.on('scroll', ScrollTrigger.update);

    // High-performance RAF loop
    const ticker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Optimize for consistent 60fps
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.fps(60);

    // Handle anchor links smoothly
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          lenis.scrollTo(element, {
            offset: -80,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisRef;
}

export function getLenis() {
  return lenisInstance;
}

// Helper function to scroll to element
export function scrollToElement(selector, options = {}) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(selector, {
      offset: -80,
      duration: 1.5,
      ...options
    });
  }
}
