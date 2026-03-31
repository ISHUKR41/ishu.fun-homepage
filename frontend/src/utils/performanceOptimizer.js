// utils/performanceOptimizer.js
// Performance optimization utilities for mobile and low-end devices

/**
 * Detect device performance tier
 * @returns {Object} Performance tier and capabilities
 */
export function detectPerformanceTier() {
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;

  // Check device memory (if available)
  const memory = navigator.deviceMemory || 4;

  // Check connection speed
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const effectiveType = connection?.effectiveType || '4g';

  // Determine performance tier
  let tier = 'high';

  if (cores < 4 || memory < 4 || effectiveType === '2g' || effectiveType === 'slow-2g') {
    tier = 'low';
  } else if (cores < 6 || memory < 6 || effectiveType === '3g') {
    tier = 'medium';
  }

  return {
    tier,
    cores,
    memory,
    effectiveType,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isLowEnd: tier === 'low',
    isMediumEnd: tier === 'medium',
    isHighEnd: tier === 'high',
  };
}

/**
 * Get optimized animation settings based on device performance
 * @param {Object} performance - Performance tier object
 * @returns {Object} Optimized settings
 */
export function getOptimizedSettings(performance) {
  const { tier, isMobile } = performance;

  const settings = {
    low: {
      enableParallax: false,
      enable3D: false,
      enableParticles: false,
      enableBloom: false,
      enableSmoothScroll: false,
      particleCount: 0,
      animationQuality: 'low',
      imageQuality: 'low',
      maxFPS: 30,
      enableLazyLoad: true,
      enableWebP: true,
      enableCompression: true,
      reduceMotion: true,
    },
    medium: {
      enableParallax: !isMobile,
      enable3D: false,
      enableParticles: true,
      enableBloom: false,
      enableSmoothScroll: !isMobile,
      particleCount: 500,
      animationQuality: 'medium',
      imageQuality: 'medium',
      maxFPS: 60,
      enableLazyLoad: true,
      enableWebP: true,
      enableCompression: true,
      reduceMotion: false,
    },
    high: {
      enableParallax: true,
      enable3D: !isMobile,
      enableParticles: true,
      enableBloom: true,
      enableSmoothScroll: true,
      particleCount: 1000,
      animationQuality: 'high',
      imageQuality: 'high',
      maxFPS: 120,
      enableLazyLoad: true,
      enableWebP: true,
      enableCompression: false,
      reduceMotion: false,
    },
  };

  return settings[tier] || settings.medium;
}

/**
 * Lazy load images with IntersectionObserver
 * @param {string} selector - Image selector
 * @param {Object} options - Observer options
 */
export function lazyLoadImages(selector = '[data-lazy]', options = {}) {
  const { rootMargin = '50px', threshold = 0.01 } = options;

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          const srcset = img.dataset.srcset;

          if (src) {
            img.src = src;
          }

          if (srcset) {
            img.srcset = srcset;
          }

          img.classList.add('loaded');
          img.removeAttribute('data-lazy');
          observer.unobserve(img);
        }
      });
    }, { rootMargin, threshold });

    const images = document.querySelectorAll(selector);
    images.forEach((img) => imageObserver.observe(img));

    return imageObserver;
  } else {
    // Fallback for browsers without IntersectionObserver
    const images = document.querySelectorAll(selector);
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.add('loaded');
    });
  }
}

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Request Idle Callback polyfill
 * @param {Function} callback - Callback function
 * @param {Object} options - Options
 * @returns {number} ID
 */
export function requestIdleCallbackPolyfill(callback, options = {}) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  } else {
    return setTimeout(() => {
      const start = Date.now();
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1);
  }
}

/**
 * Cancel Idle Callback polyfill
 * @param {number} id - Callback ID
 */
export function cancelIdleCallbackPolyfill(id) {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource URLs
 * @param {string} type - Resource type (image, script, style, font)
 */
export function preloadResources(resources, type = 'image') {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = type;

    if (type === 'font') {
      link.crossOrigin = 'anonymous';
    }

    document.head.appendChild(link);
  });
}

/**
 * Monitor FPS and performance
 * @param {Function} callback - Callback with FPS data
 * @returns {Function} Stop monitoring function
 */
export function monitorFPS(callback) {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  function measure() {
    frames++;
    const currentTime = performance.now();

    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));
      frames = 0;
      lastTime = currentTime;

      if (callback) {
        callback(fps);
      }
    }

    requestAnimationFrame(measure);
  }

  const rafId = requestAnimationFrame(measure);

  return () => {
    cancelAnimationFrame(rafId);
  };
}

/**
 * Check if device supports WebP
 * @returns {Promise<boolean>}
 */
export function supportsWebP() {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Optimize images for performance
 * @param {HTMLImageElement} img - Image element
 * @param {Object} options - Options
 */
export function optimizeImage(img, options = {}) {
  const { quality = 0.8, maxWidth = 1920, maxHeight = 1080 } = options;

  // Set loading attribute
  img.loading = 'lazy';

  // Set decoding attribute
  img.decoding = 'async';

  // Add will-change for animation
  if (options.willAnimate) {
    img.style.willChange = 'transform';
  }

  return img;
}

/**
 * Reduce bundle size by code splitting
 * @param {Function} importFn - Dynamic import function
 * @returns {Promise}
 */
export async function lazyLoadComponent(importFn) {
  try {
    const component = await importFn();
    return component;
  } catch (error) {
    console.error('Error loading component:', error);
    return null;
  }
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Adaptive loading based on network conditions
 * @returns {string} Network type
 */
export function getNetworkType() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (!connection) {
    return '4g'; // Default to 4g
  }

  return connection.effectiveType || '4g';
}

/**
 * Check if device is in battery saver mode
 * @returns {Promise<boolean>}
 */
export async function isBatterySaverMode() {
  if ('getBattery' in navigator) {
    const battery = await navigator.getBattery();
    return battery.level < 0.2 || !battery.charging;
  }
  return false;
}

/**
 * Initialize performance monitoring
 * @param {Object} options - Options
 */
export function initPerformanceMonitoring(options = {}) {
  const performance = detectPerformanceTier();
  const settings = getOptimizedSettings(performance);

  // Apply settings
  if (settings.reduceMotion || prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Monitor FPS in development
  if (process.env.NODE_ENV === 'development') {
    monitorFPS((fps) => {
      console.log(`FPS: ${fps}`);
    });
  }

  // Log performance metrics
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

      console.log(`Page Load Time: ${loadTime}ms`);
      console.log(`DOM Ready Time: ${domReady}ms`);
    });
  }

  return { performance, settings };
}

export default {
  detectPerformanceTier,
  getOptimizedSettings,
  lazyLoadImages,
  debounce,
  throttle,
  requestIdleCallbackPolyfill,
  cancelIdleCallbackPolyfill,
  preloadResources,
  monitorFPS,
  supportsWebP,
  optimizeImage,
  lazyLoadComponent,
  prefersReducedMotion,
  getNetworkType,
  isBatterySaverMode,
  initPerformanceMonitoring,
};
