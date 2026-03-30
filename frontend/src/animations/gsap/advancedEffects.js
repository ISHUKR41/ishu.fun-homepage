// animations/gsap/advancedEffects.js
// Advanced GSAP effects and animations for premium feel

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Magnetic cursor effect for interactive elements
 */
export function initMagneticElements() {
  const magneticElements = document.querySelectorAll('[data-magnetic]');

  magneticElements.forEach((element) => {
    const strength = parseFloat(element.dataset.magnetic) || 0.3;

    element.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}

/**
 * Smooth scroll-linked animations with parallax
 */
export function initParallaxElements() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.dataset.parallax) || 0.5;
    const direction = element.dataset.parallaxDirection || 'y';

    gsap.to(element, {
      [direction]: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });
}

/**
 * Text reveal with mask animation
 */
export function revealTextMask(element, delay = 0) {
  const tl = gsap.timeline({ delay });

  tl.from(element, {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    duration: 1.2,
    ease: 'power4.out',
  });

  return tl;
}

/**
 * Stagger reveal for card grids
 */
export function revealCards(container, options = {}) {
  const {
    selector = '.card',
    stagger = 0.1,
    delay = 0,
    from = 'bottom',
  } = options;

  const cards = container.querySelectorAll(selector);

  const direction = {
    top: { y: -50, opacity: 0 },
    bottom: { y: 50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };

  gsap.from(cards, {
    ...direction[from],
    duration: 0.8,
    stagger,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

/**
 * Smooth hover scale with spring animation
 */
export function addHoverScale(elements) {
  elements.forEach((element) => {
    const scale = parseFloat(element.dataset.hoverScale) || 1.05;

    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });
}

/**
 * Continuous floating animation
 */
export function addFloatingAnimation(element, options = {}) {
  const {
    distance = 15,
    duration = 3,
    delay = 0,
    ease = 'sine.inOut',
  } = options;

  gsap.to(element, {
    y: -distance,
    duration,
    delay,
    ease,
    yoyo: true,
    repeat: -1,
  });
}

/**
 * Text shimmer/shine effect
 */
export function addTextShimmer(element) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  tl.to(element, {
    backgroundPosition: '200% center',
    duration: 1.5,
    ease: 'power2.inOut',
  });

  return tl;
}

/**
 * Counter animation with easing
 */
export function animateCounter(element, target, options = {}) {
  const {
    duration = 2,
    delay = 0,
    ease = 'power2.out',
    decimals = 0,
  } = options;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration,
    delay,
    ease,
    onUpdate: () => {
      element.textContent = obj.value.toFixed(decimals);
    },
  });
}

/**
 * Ripple effect on click
 */
export function addRippleEffect(element) {
  element.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    element.appendChild(ripple);

    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => ripple.remove(),
    });
  });
}

/**
 * 3D tilt effect on mouse move
 */
export function add3DTilt(element, strength = 10) {
  element.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const percentX = (e.clientX - centerX) / (width / 2);
    const percentY = (e.clientY - centerY) / (height / 2);

    gsap.to(element, {
      rotationY: percentX * strength,
      rotationX: -percentY * strength,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    });
  });
}

/**
 * Scroll progress indicator
 */
export function initScrollProgress() {
  const progressBar = document.querySelector('[data-scroll-progress]');
  if (!progressBar) return;

  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

/**
 * Image reveal with scale and opacity
 */
export function revealImages() {
  const images = document.querySelectorAll('[data-reveal-image]');

  images.forEach((img) => {
    gsap.from(img, {
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: img,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

/**
 * Initialize all advanced effects
 */
export function initAdvancedEffects() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMagneticElements();
      initParallaxElements();
      initScrollProgress();
      revealImages();
    });
  } else {
    initMagneticElements();
    initParallaxElements();
    initScrollProgress();
    revealImages();
  }
}

export default {
  initMagneticElements,
  initParallaxElements,
  revealTextMask,
  revealCards,
  addHoverScale,
  addFloatingAnimation,
  addTextShimmer,
  animateCounter,
  addRippleEffect,
  add3DTilt,
  initScrollProgress,
  revealImages,
  initAdvancedEffects,
};
