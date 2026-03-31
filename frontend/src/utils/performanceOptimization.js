// utils/performanceOptimization.js
// Advanced performance optimization utilities

// Debounce function for scroll/resize handlers
export function debounce(func, wait = 100) {
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

// Throttle function for high-frequency events
export function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Request Idle Callback wrapper with fallback
export function requestIdleCallback(callback, options = {}) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  return setTimeout(callback, 1);
}

// Cancel Idle Callback wrapper
export function cancelIdleCallback(id) {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

// Lazy load images with Intersection Observer
export function lazyLoadImages(selector = 'img[data-src]') {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll(selector).forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  document.querySelectorAll(selector).forEach(img => imageObserver.observe(img));
}

// Preload critical resources
export function preloadResource(url, as = 'image') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = url;
  document.head.appendChild(link);
}

// Prefetch resources for next navigation
export function prefetchResource(url) {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}

// Optimize animations for low-end devices
export function optimizeAnimations() {
  const isLowEnd = navigator.hardwareConcurrency < 4 ||
                   navigator.deviceMemory < 4 ||
                   matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isLowEnd) {
    document.documentElement.classList.add('reduce-animations');
  }

  return isLowEnd;
}

// Measure and report performance metrics
export function measurePerformance() {
  if (!('performance' in window)) return;

  const perfData = {
    navigationStart: 0,
    domContentLoaded: 0,
    loadComplete: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  };

  // Navigation timing
  const navigationTiming = performance.getEntriesByType('navigation')[0];
  if (navigationTiming) {
    perfData.navigationStart = navigationTiming.startTime;
    perfData.domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;
    perfData.loadComplete = navigationTiming.loadEventEnd - navigationTiming.startTime;
  }

  // Paint timing
  const paintTiming = performance.getEntriesByType('paint');
  paintTiming.forEach(entry => {
    if (entry.name === 'first-paint') {
      perfData.firstPaint = entry.startTime;
    }
    if (entry.name === 'first-contentful-paint') {
      perfData.firstContentfulPaint = entry.startTime;
    }
  });

  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        perfData.largestContentfulPaint = lastEntry.renderTime || lastEntry.loadTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('[Performance] LCP observer not supported');
    }

    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          perfData.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('[Performance] FID observer not supported');
    }

    // CLS (Cumulative Layout Shift)
    try {
      let clsScore = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
            perfData.cumulativeLayoutShift = clsScore;
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('[Performance] CLS observer not supported');
    }
  }

  // Log performance after load
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('[Performance Metrics]', perfData);
    }, 1000);
  });

  return perfData;
}

// Optimize for Core Web Vitals
export function optimizeWebVitals() {
  // Optimize LCP
  lazyLoadImages();

  // Optimize FID
  const scripts = document.querySelectorAll('script[defer]');
  scripts.forEach(script => {
    if (!script.hasAttribute('async')) {
      script.setAttribute('async', '');
    }
  });

  // Optimize CLS
  document.fonts.ready.then(() => {
    document.body.classList.add('fonts-loaded');
  });

  return measurePerformance();
}

// Memory leak prevention
export function preventMemoryLeaks() {
  const observers = [];
  const timers = [];

  return {
    addObserver: (observer) => observers.push(observer),
    addTimer: (timer) => timers.push(timer),
    cleanup: () => {
      observers.forEach(obs => obs.disconnect());
      timers.forEach(timer => clearTimeout(timer));
      observers.length = 0;
      timers.length = 0;
    }
  };
}

// Adaptive loading based on connection speed
export function adaptiveLoading() {
  if (!('connection' in navigator)) return 'high';

  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;

  // 4g = high quality
  // 3g = medium quality
  // 2g = low quality
  // slow-2g = minimal quality

  const qualityMap = {
    'slow-2g': 'minimal',
    '2g': 'low',
    '3g': 'medium',
    '4g': 'high'
  };

  return qualityMap[effectiveType] || 'high';
}

// Enable/disable animations based on battery
export function batteryOptimization() {
  if (!('getBattery' in navigator)) return Promise.resolve(false);

  return navigator.getBattery().then(battery => {
    const lowBattery = battery.level < 0.2 && !battery.charging;

    if (lowBattery) {
      document.documentElement.classList.add('low-battery-mode');
    }

    battery.addEventListener('levelchange', () => {
      const isLow = battery.level < 0.2 && !battery.charging;
      document.documentElement.classList.toggle('low-battery-mode', isLow);
    });

    return lowBattery;
  });
}

// Initialize all optimizations
export function initPerformanceOptimizations() {
  console.log('[Performance] Initializing optimizations...');

  optimizeAnimations();
  optimizeWebVitals();
  lazyLoadImages();
  batteryOptimization();

  const quality = adaptiveLoading();
  console.log('[Performance] Quality level:', quality);

  return {
    quality,
    isOptimized: true
  };
}
