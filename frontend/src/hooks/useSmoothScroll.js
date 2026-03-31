// hooks/useSmoothScroll.js
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenisInstance = null;

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Enhanced smooth scroll settings for ultra-smooth, lag-free experience
    const lenis = new Lenis({
      duration: 1.2, // Slightly faster for more responsive feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // Increased for better wheel control
      smoothTouch: false, // Disabled for better mobile performance
      touchMultiplier: 2.0, // Improved touch sensitivity
      infinite: false,
      syncTouch: false,
      touchInertiaMultiplier: 35, // Enhanced touch inertia
      lerp: 0.1, // Lower value for smoother interpolation
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Connect Lenis to GSAP ScrollTrigger for synchronized animations
    lenis.on('scroll', ScrollTrigger.update);

    // Use RAF for smooth animation loop
    const ticker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing for consistent frame rate
    gsap.ticker.lagSmoothing(0);

    return () => {
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
