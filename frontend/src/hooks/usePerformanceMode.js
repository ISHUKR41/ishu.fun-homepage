// hooks/usePerformanceMode.js
import { useState, useEffect } from 'react';

/**
 * Hook to detect device performance and return appropriate settings
 * @returns {Object} Performance mode settings
 */
export function usePerformanceMode() {
  const [performanceMode, setPerformanceMode] = useState({
    level: 'high', // high, medium, low
    enableAnimations: true,
    enableParallax: true,
    enableParticles: true,
    enableShadows: true,
    enableBlur: true,
    animationDuration: 1,
    particleCount: 150,
  });

  useEffect(() => {
    // Detect device capabilities
    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;
    const connection = navigator.connection?.effectiveType || '4g';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Calculate performance score
    let score = 0;
    if (cores >= 8) score += 3;
    else if (cores >= 4) score += 2;
    else score += 1;

    if (memory >= 8) score += 3;
    else if (memory >= 4) score += 2;
    else score += 1;

    if (connection === '4g') score += 2;
    else if (connection === '3g') score += 1;

    if (!isMobile) score += 1;

    // Determine performance level
    let level = 'high';
    let settings = {
      level: 'high',
      enableAnimations: true,
      enableParallax: true,
      enableParticles: true,
      enableShadows: true,
      enableBlur: true,
      animationDuration: 1,
      particleCount: 150,
      scrollScrub: 1,
    };

    if (prefersReducedMotion || score <= 3) {
      level = 'low';
      settings = {
        level: 'low',
        enableAnimations: false,
        enableParallax: false,
        enableParticles: false,
        enableShadows: false,
        enableBlur: false,
        animationDuration: 0.3,
        particleCount: 0,
        scrollScrub: 0.5,
      };
    } else if (score <= 6) {
      level = 'medium';
      settings = {
        level: 'medium',
        enableAnimations: true,
        enableParallax: false,
        enableParticles: true,
        enableShadows: false,
        enableBlur: false,
        animationDuration: 0.6,
        particleCount: 50,
        scrollScrub: 0.8,
      };
    }

    setPerformanceMode(settings);
    console.log('[Performance] Mode detected:', level, settings);
  }, []);

  return performanceMode;
}

/**
 * Get performance-optimized animation config
 */
export function getAnimationConfig(performanceMode) {
  const { level } = performanceMode;

  const configs = {
    high: {
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
      enableBlur: true,
      enableScale: true,
      enableRotate: true,
    },
    medium: {
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.05,
      enableBlur: false,
      enableScale: true,
      enableRotate: false,
    },
    low: {
      duration: 0.3,
      ease: 'linear',
      stagger: 0,
      enableBlur: false,
      enableScale: false,
      enableRotate: false,
    },
  };

  return configs[level] || configs.medium;
}

export default usePerformanceMode;
