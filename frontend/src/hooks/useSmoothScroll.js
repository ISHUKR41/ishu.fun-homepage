// hooks/useSmoothScroll.js
// Properly tuned Lenis smooth scroll — butter smooth, zero lag
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // On mobile, let native scroll handle it — native is always smoother
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', () => ScrollTrigger.update());

    // Use GSAP ticker for the RAF loop — ensures perfect sync with GSAP animations
    gsap.ticker.lagSmoothing(0); // Disable lag smoothing — prevents jank
    gsap.ticker.fps(-1);         // Match browser refresh rate

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);

    // Smooth anchor scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisRef;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToElement(selector, options = {}) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(selector, { offset: -80, duration: 1.2, ...options });
  }
}
