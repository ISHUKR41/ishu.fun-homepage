// animations/gsap/advancedScrollAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Detect device performance
function getDevicePerformance() {
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 4;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || cores <= 2 || memory < 4) return 'low';
  if (cores <= 4 || memory < 8) return 'medium';
  return 'high';
}

// Performance-optimized scroll animations
export function initAdvancedScrollAnimations() {
  const perfMode = getDevicePerformance();

  // Skip animations on low-end devices with reduced motion preference
  if (perfMode === 'low' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('[GSAP] Animations disabled (reduced motion)');
    return;
  }

  // Configure based on performance
  const config = {
    high: { duration: 1.2, stagger: 0.1, scrub: 1, enableBlur: true },
    medium: { duration: 0.8, stagger: 0.05, scrub: 0.5, enableBlur: false },
    low: { duration: 0.4, stagger: 0, scrub: 0.3, enableBlur: false },
  };

  const settings = config[perfMode];

  // 1. Fade up (with optional blur on high-end)
  gsap.utils.toArray('[data-animate="fade-up-blur"]').forEach((element) => {
    const animProps = {
      y: 80,
      opacity: 0,
      duration: settings.duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    };

    if (settings.enableBlur) {
      animProps.filter = 'blur(10px)';
    }

    gsap.from(element, animProps);
  });

  // 2. Scale with rotation (skip rotation on low-end)
  if (perfMode !== 'low') {
    gsap.utils.toArray('[data-animate="scale-rotate"]').forEach((element) => {
      gsap.from(element, {
        scale: 0.8,
        rotation: perfMode === 'high' ? -10 : 0,
        opacity: 0,
        duration: settings.duration,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });
  }

  // 3. Parallax (only on high-performance devices)
  if (perfMode === 'high') {
    gsap.utils.toArray('[data-parallax]').forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxSpeed) || 0.3;
      gsap.to(element, {
        y: () => -window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }

  // 4. Simple counter animation
  gsap.utils.toArray('[data-counter]').forEach((element) => {
    const target = parseFloat(element.dataset.counterTarget) || 100;
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true
      },
      onUpdate: () => {
        element.textContent = Math.round(obj.value);
      }
    });
  });

  console.log(`[GSAP] Advanced scroll animations initialized (${perfMode} mode)`);
}

// Refresh all ScrollTriggers
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

// Kill all ScrollTriggers
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
