// animations/gsap/horizontalScroll.js
// Horizontal scrolling sections with GSAP ScrollTrigger

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize horizontal scroll for a section
 * @param {string} sectionSelector - The section container selector
 * @param {string} scrollContainerSelector - The horizontal scroll container selector
 * @param {Object} options - Configuration options
 */
export function initHorizontalScroll(
  sectionSelector,
  scrollContainerSelector,
  options = {}
) {
  const {
    speed = 1,
    scrub = 1,
    pin = true,
    snap = false,
    markers = false,
    end = '+=3000',
  } = options;

  const section = document.querySelector(sectionSelector);
  const scrollContainer = document.querySelector(scrollContainerSelector);

  if (!section || !scrollContainer) {
    console.warn('Horizontal scroll: Section or container not found');
    return null;
  }

  // Calculate scroll distance based on container width
  const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollWidth}`,
      scrub: scrub,
      pin: pin,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: markers,
      snap: snap ? 1 / (scrollContainer.children.length - 1) : false,
    },
  });

  tl.to(scrollContainer, {
    x: () => `-${scrollWidth}px`,
    ease: 'none',
  });

  return tl;
}

/**
 * Create horizontal scroll with cards
 * @param {string} containerSelector - Container selector
 * @param {Object} options - Options
 */
export function initHorizontalCards(containerSelector, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return null;

  const cards = gsap.utils.toArray(`${containerSelector} .card`);
  const { parallax = true, scale = true } = options;

  // Create horizontal scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${container.scrollWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(container.querySelector('.cards-wrapper'), {
    x: () => `-${container.scrollWidth - window.innerWidth}px`,
    ease: 'none',
  });

  // Add parallax effect to cards if enabled
  if (parallax) {
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: () => (i % 2 === 0 ? -30 : 30),
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });
  }

  // Add scale effect on hover
  if (scale) {
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }

  return tl;
}

/**
 * Create scroll-jacking section with custom behavior
 * @param {string} sectionSelector - Section selector
 * @param {Function} onScroll - Callback function for scroll events
 */
export function initScrollJacking(sectionSelector, onScroll) {
  const section = document.querySelector(sectionSelector);
  if (!section) return null;

  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      if (typeof onScroll === 'function') {
        onScroll(self.progress, self.direction);
      }
    },
  });

  return st;
}

/**
 * Create multi-layer horizontal parallax
 * @param {string} containerSelector - Container selector
 * @param {Array} layers - Array of layer selectors with speed multipliers
 */
export function initHorizontalParallax(containerSelector, layers = []) {
  const container = document.querySelector(containerSelector);
  if (!container || layers.length === 0) return null;

  const timelines = layers.map((layer) => {
    const elements = document.querySelectorAll(layer.selector);
    const speed = layer.speed || 1;

    return gsap.to(elements, {
      x: () => `-${(container.scrollWidth - window.innerWidth) * speed}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  return timelines;
}

/**
 * Create perspective scroll effect
 * @param {string} sectionSelector - Section selector
 * @param {Object} options - Options
 */
export function initPerspectiveScroll(sectionSelector, options = {}) {
  const section = document.querySelector(sectionSelector);
  if (!section) return null;

  const {
    rotateX = 45,
    rotateY = 0,
    rotateZ = 0,
    scale = 0.8,
    translateZ = -100,
  } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });

  tl.fromTo(
    section,
    {
      rotateX: rotateX,
      rotateY: rotateY,
      rotateZ: rotateZ,
      scale: scale,
      z: translateZ,
    },
    {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      z: 0,
      ease: 'none',
    }
  );

  return tl;
}

/**
 * Clean up all horizontal scroll instances
 */
export function cleanupHorizontalScroll() {
  ScrollTrigger.getAll().forEach((st) => {
    if (st.vars.horizontal) {
      st.kill();
    }
  });
}

export default {
  initHorizontalScroll,
  initHorizontalCards,
  initScrollJacking,
  initHorizontalParallax,
  initPerspectiveScroll,
  cleanupHorizontalScroll,
};
