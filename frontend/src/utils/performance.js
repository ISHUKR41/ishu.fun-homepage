// performance.js — Performance Monitoring and Optimization Utilities

// Web Vitals Monitoring
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  const reportWebVitals = (metric) => {
    console.log(`[Performance] ${metric.name}:`, metric.value, metric.rating);

    // Send to analytics (Google Analytics 4, Mixpanel, etc.)
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  };

  // Dynamically import web-vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getFCP(reportWebVitals);
    getLCP(reportWebVitals);
    getTTFB(reportWebVitals);
  });
}

// Performance Observer for Long Tasks
export function observeLongTasks() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.warn('[Performance] Long Task detected:', {
          duration: `${entry.duration.toFixed(2)}ms`,
          startTime: `${entry.startTime.toFixed(2)}ms`,
        });
      }
    }
  });

  observer.observe({ entryTypes: ['longtask'] });
}

// FPS Monitor
export function createFPSMonitor() {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 60;

  function calculateFPS() {
    const currentTime = performance.now();
    frames++;

    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));
      frames = 0;
      lastTime = currentTime;

      if (fps < 30) {
        console.warn('[Performance] Low FPS detected:', fps);
      }
    }

    requestAnimationFrame(calculateFPS);
  }

  calculateFPS();

  return {
    getFPS: () => fps,
  };
}

// Memory Usage Monitor
export function monitorMemory() {
  if (!performance.memory) {
    console.warn('[Performance] Memory API not available');
    return null;
  }

  const formatBytes = (bytes) => {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  setInterval(() => {
    const memory = performance.memory;
    const usage = {
      used: formatBytes(memory.usedJSHeapSize),
      total: formatBytes(memory.totalJSHeapSize),
      limit: formatBytes(memory.jsHeapSizeLimit),
      percentage: ((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100).toFixed(2),
    };

    console.log('[Performance] Memory Usage:', usage);

    if (usage.percentage > 90) {
      console.error('[Performance] Memory usage critically high!', usage);
    }
  }, 30000); // Check every 30 seconds
}

// Resource Timing Analysis
export function analyzeResourceTiming() {
  if (!performance.getEntriesByType) return;

  const resources = performance.getEntriesByType('resource');
  const analysis = {
    total: resources.length,
    byType: {},
    slowest: [],
    totalSize: 0,
  };

  resources.forEach((resource) => {
    const type = resource.initiatorType;
    if (!analysis.byType[type]) {
      analysis.byType[type] = { count: 0, totalDuration: 0 };
    }
    analysis.byType[type].count++;
    analysis.byType[type].totalDuration += resource.duration;

    if (resource.transferSize) {
      analysis.totalSize += resource.transferSize;
    }
  });

  // Find slowest resources
  analysis.slowest = resources
    .sort((a, b) => b.duration - a.duration)
    .slice(0, 10)
    .map((r) => ({
      name: r.name,
      duration: `${r.duration.toFixed(2)}ms`,
      size: r.transferSize ? `${(r.transferSize / 1024).toFixed(2)} KB` : 'N/A',
      type: r.initiatorType,
    }));

  console.log('[Performance] Resource Timing Analysis:', analysis);
  return analysis;
}

// Device Performance Classification
export function classifyDevicePerformance() {
  const tests = {
    cores: navigator.hardwareConcurrency || 1,
    memory: navigator.deviceMemory || 4,
    connection: navigator.connection?.effectiveType || '4g',
  };

  let score = 0;

  // CPU cores
  if (tests.cores >= 8) score += 3;
  else if (tests.cores >= 4) score += 2;
  else score += 1;

  // RAM
  if (tests.memory >= 8) score += 3;
  else if (tests.memory >= 4) score += 2;
  else score += 1;

  // Connection
  if (tests.connection === '4g') score += 2;
  else if (tests.connection === '3g') score += 1;

  const classification = score >= 7 ? 'high' : score >= 4 ? 'medium' : 'low';

  console.log('[Performance] Device Classification:', {
    ...tests,
    score,
    classification,
  });

  return classification;
}

// Adaptive Quality Settings
export function getAdaptiveQualitySettings() {
  const devicePerf = classifyDevicePerformance();

  const settings = {
    high: {
      particles: 150,
      shadows: true,
      antialiasing: true,
      animations: 'full',
      imageQuality: 'high',
    },
    medium: {
      particles: 80,
      shadows: true,
      antialiasing: false,
      animations: 'reduced',
      imageQuality: 'medium',
    },
    low: {
      particles: 30,
      shadows: false,
      antialiasing: false,
      animations: 'minimal',
      imageQuality: 'low',
    },
  };

  return settings[devicePerf];
}

// Preload Critical Resources
export function preloadCriticalResources(resources) {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = resource.as === 'script' ? 'modulepreload' : 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
    document.head.appendChild(link);
  });
}

// Image Lazy Loading Observer
export function createLazyLoadObserver(callback) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  return observer;
}

// Prefetch on Hover
export function prefetchOnHover(selector) {
  document.querySelectorAll(selector).forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#')) {
        const linkEl = document.createElement('link');
        linkEl.rel = 'prefetch';
        linkEl.href = href;
        document.head.appendChild(linkEl);
      }
    }, { once: true });
  });
}

// Initialize all performance monitoring
export function initPerformanceMonitoring() {
  initWebVitals();
  observeLongTasks();
  createFPSMonitor();

  if (process.env.NODE_ENV === 'development') {
    monitorMemory();
    setTimeout(analyzeResourceTiming, 5000);
  }

  return {
    devicePerformance: classifyDevicePerformance(),
    adaptiveSettings: getAdaptiveQualitySettings(),
  };
}

export default {
  initWebVitals,
  observeLongTasks,
  createFPSMonitor,
  monitorMemory,
  analyzeResourceTiming,
  classifyDevicePerformance,
  getAdaptiveQualitySettings,
  preloadCriticalResources,
  createLazyLoadObserver,
  prefetchOnHover,
  initPerformanceMonitoring,
};
