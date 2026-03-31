// hooks/useSmoothScroll.js
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenisInstance = null;

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect device performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;
    const isLowEnd = cores <= 2 || memory < 4;

    // Optimized configuration based on device
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : (isLowEnd || isMobile ? 0.8 : 1.2),
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optimized easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile && !isLowEnd, // Disable on mobile and low-end for native performance
      wheelMultiplier: 1.0,
      smoothTouch: false, // Always false for native mobile performance
      touchMultiplier: 2.0,
      infinite: false,
      syncTouch: false,
      touchInertiaMultiplier: 35,
      lerp: isLowEnd ? 0.15 : 0.1, // Faster lerp on low-end devices
      autoResize: true,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Sync with GSAP ScrollTrigger for perfectly timed animations
    lenis.on('scroll', ScrollTrigger.update);

    // High-performance RAF loop with optimizations
    gsap.ticker.lagSmoothing(1000, 16); // Allow small lag spikes without correction
    gsap.ticker.fps(-1); // Use browser's native refresh rate

    const ticker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

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
