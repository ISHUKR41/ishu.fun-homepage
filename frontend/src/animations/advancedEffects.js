// animations/advancedEffects.js — Premium Animation Effects Library
// Inspired by Awwwards winners, Apple, Tesla, Vercel
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Magnetic cursor effect for buttons and interactive elements
 * @param {string|HTMLElement} element - Target element selector or DOM element
 * @param {Object} options - Configuration options
 */
export function createMagneticEffect(element, options = {}) {
  const {
    strength = 0.3,
    ease = 'power3.out',
    speed = 0.3,
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  let isHovering = false;
  let rafId = null;

  const onMouseMove = (e) => {
    if (!isHovering) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: speed,
      ease,
    });
  };

  const onMouseEnter = () => {
    isHovering = true;
    el.classList.add('magnetic-active');
  };

  const onMouseLeave = () => {
    isHovering = false;
    el.classList.remove('magnetic-active');
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: speed,
      ease,
    });
  };

  el.addEventListener('mouseenter', onMouseEnter);
  el.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('mousemove', onMouseMove);

  return {
    destroy: () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    },
  };
}

/**
 * Text reveal animation with split characters
 * @param {string|HTMLElement} element - Target element
 * @param {Object} options - Animation options
 */
export function createTextReveal(element, options = {}) {
  const {
    duration = 0.8,
    stagger = 0.03,
    ease = 'power4.out',
    y = 100,
    opacity = 0,
    scrollTrigger = null,
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const text = el.textContent;
  el.innerHTML = text
    .split('')
    .map((char) => `<span class="char" style="display:inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const chars = el.querySelectorAll('.char');

  const animation = gsap.from(chars, {
    y,
    opacity,
    duration,
    stagger,
    ease,
    scrollTrigger: scrollTrigger ? {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    } : null,
  });

  return animation;
}

/**
 * Stagger reveal animation for lists and grids
 * @param {string} selector - CSS selector for items
 * @param {Object} options - Animation options
 */
export function createStaggerReveal(selector, options = {}) {
  const {
    duration = 0.8,
    stagger = 0.1,
    y = 60,
    opacity = 0,
    scale = 0.95,
    ease = 'power3.out',
    scrollTrigger = true,
  } = options;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  return gsap.from(elements, {
    y,
    opacity,
    scale,
    duration,
    stagger,
    ease,
    scrollTrigger: scrollTrigger ? {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    } : null,
  });
}

/**
 * Parallax scroll effect for images and backgrounds
 * @param {string|HTMLElement} element - Target element
 * @param {Object} options - Parallax options
 */
export function createParallaxScroll(element, options = {}) {
  const {
    speed = 0.5,
    direction = 'vertical',
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const yPercent = direction === 'vertical' ? speed * 100 : 0;
  const xPercent = direction === 'horizontal' ? speed * 100 : 0;

  return gsap.to(el, {
    yPercent: -yPercent,
    xPercent: -xPercent,
    ease: 'none',
    scrollTrigger: {
      trigger: el.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Smooth scroll reveal for sections
 * @param {string} selector - Section selector
 * @param {Object} options - Animation options
 */
export function createScrollReveal(selector, options = {}) {
  const {
    y = 80,
    opacity = 0,
    duration = 1,
    ease = 'power3.out',
    start = 'top 80%',
    markers = false,
  } = options;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  return gsap.from(elements, {
    y,
    opacity,
    duration,
    ease,
    scrollTrigger: {
      trigger: selector,
      start,
      toggleActions: 'play none none reverse',
      markers,
    },
  });
}

/**
 * Clip path reveal animation
 * @param {string|HTMLElement} element - Target element
 * @param {Object} options - Animation options
 */
export function createClipReveal(element, options = {}) {
  const {
    duration = 1.2,
    ease = 'power4.inOut',
    direction = 'right',
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const clipPaths = {
    left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0)' },
    top: { from: 'inset(100% 0 0 0)', to: 'inset(0 0 0 0)' },
    bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0 0)' },
  };

  const paths = clipPaths[direction];

  return gsap.fromTo(
    el,
    { clipPath: paths.from },
    {
      clipPath: paths.to,
      duration,
      ease,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Scale pulse effect for attention-grabbing elements
 * @param {string|HTMLElement} element - Target element
 * @param {Object} options - Animation options
 */
export function createScalePulse(element, options = {}) {
  const {
    scale = 1.05,
    duration = 1.5,
    repeat = -1,
    yoyo = true,
    ease = 'sine.inOut',
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  return gsap.to(el, {
    scale,
    duration,
    repeat,
    yoyo,
    ease,
  });
}

/**
 * Floating animation for badges and icons
 * @param {string|HTMLElement} element - Target element
 * @param {Object} options - Animation options
 */
export function createFloatAnimation(element, options = {}) {
  const {
    y = 10,
    duration = 2,
    repeat = -1,
    yoyo = true,
    ease = 'sine.inOut',
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  return gsap.to(el, {
    y,
    duration,
    repeat,
    yoyo,
    ease,
  });
}

/**
 * SVG path drawing animation
 * @param {string|HTMLElement} element - SVG path element
 * @param {Object} options - Animation options
 */
export function createPathDraw(element, options = {}) {
  const {
    duration = 2,
    ease = 'power2.inOut',
    scrollTrigger = true,
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const length = el.getTotalLength();

  gsap.set(el, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  return gsap.to(el, {
    strokeDashoffset: 0,
    duration,
    ease,
    scrollTrigger: scrollTrigger ? {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    } : null,
  });
}

/**
 * Image reveal with scale effect
 * @param {string} selector - Image selector
 * @param {Object} options - Animation options
 */
export function createImageReveal(selector, options = {}) {
  const {
    scale = 1.2,
    duration = 1.5,
    ease = 'power3.out',
  } = options;

  const images = document.querySelectorAll(selector);
  if (!images.length) return;

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { scale, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease,
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}

/**
 * Initialize all scroll-triggered animations on page load
 */
export function initScrollAnimations() {
  // Auto-reveal sections
  createScrollReveal('.section-reveal', { y: 80, duration: 1 });

  // Stagger cards
  createStaggerReveal('.card-stagger', { stagger: 0.15, y: 60 });

  // Image reveals
  createImageReveal('.image-reveal', { scale: 1.15 });

  console.log('[Animations] Scroll animations initialized');
}

/**
 * Apply magnetic effect to all buttons
 */
export function initMagneticButtons() {
  const buttons = document.querySelectorAll('[data-magnetic], .magnetic-btn');
  const effects = [];

  buttons.forEach((btn) => {
    const effect = createMagneticEffect(btn);
    if (effect) effects.push(effect);
  });

  console.log(`[Animations] ${effects.length} magnetic buttons initialized`);

  return {
    destroy: () => effects.forEach((effect) => effect.destroy()),
  };
}

/**
 * Cleanup all GSAP ScrollTrigger instances
 */
export function cleanupScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  console.log('[Animations] Scroll animations cleaned up');
}

// Export all functions
export default {
  createMagneticEffect,
  createTextReveal,
  createStaggerReveal,
  createParallaxScroll,
  createScrollReveal,
  createClipReveal,
  createScalePulse,
  createFloatAnimation,
  createPathDraw,
  createImageReveal,
  initScrollAnimations,
  initMagneticButtons,
  cleanupScrollAnimations,
};
