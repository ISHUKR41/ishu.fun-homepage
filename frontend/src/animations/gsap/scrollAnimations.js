// scrollAnimations.js — GSAP ScrollTrigger Animations for All Sections
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// Initialize all scroll animations
export function initScrollAnimations() {
  // Animate section headings with split text reveal
  const headings = document.querySelectorAll('[data-animate="heading"]');
  headings.forEach((heading) => {
    const split = new SplitType(heading, { types: 'chars,words' });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'power4.out',
    });
  });

  // Animate paragraphs with fade and slide up
  const paragraphs = document.querySelectorAll('[data-animate="paragraph"]');
  paragraphs.forEach((p) => {
    gsap.from(p, {
      scrollTrigger: {
        trigger: p,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Stagger animation for cards/items
  const cardGroups = document.querySelectorAll('[data-animate="cards"]');
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll('[data-animate-item]');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: group,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateY: 15,
      stagger: {
        amount: 0.6,
        from: 'start',
      },
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Parallax effect for backgrounds
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach((el) => {
    const speed = el.dataset.parallax || 0.5;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none',
    });
  });

  // Scale animation on scroll
  const scaleElements = document.querySelectorAll('[data-animate="scale"]');
  scaleElements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
      scale: 0.5,
      opacity: 0,
      ease: 'power2.out',
    });
  });

  // Pin sections for scroll-jacking effects
  const pinSections = document.querySelectorAll('[data-pin]');
  pinSections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
    });
  });

  // Horizontal scroll sections
  const horizontalSections = document.querySelectorAll('[data-horizontal-scroll]');
  horizontalSections.forEach((section) => {
    const scrollContent = section.querySelector('[data-horizontal-content]');
    if (!scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth;

    gsap.to(scrollContent, {
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
      x: () => -(scrollWidth - section.offsetWidth),
      ease: 'none',
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((counter) => {
    const endValue = parseInt(counter.dataset.counter);
    const obj = { value: 0 };

    gsap.to(obj, {
      scrollTrigger: {
        trigger: counter,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      value: endValue,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        counter.textContent = Math.round(obj.value).toLocaleString();
      },
    });
  });

  // Clip path reveal animation
  const clipElements = document.querySelectorAll('[data-animate="clip"]');
  clipElements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      clipPath: 'inset(0% 100% 0% 0%)',
      duration: 1.2,
      ease: 'power4.inOut',
    });
  });

  // Draw SVG paths
  const svgPaths = document.querySelectorAll('[data-animate="draw"]');
  svgPaths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      scrollTrigger: {
        trigger: path,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut',
    });
  });
}

// Section-specific animations
export const sectionAnimations = {
  // Hero section timeline
  hero: (heroElement) => {
    const tl = gsap.timeline();

    tl.from('[data-hero="badge"]', {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        '[data-hero="title"]',
        {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.4'
      )
      .from(
        '[data-hero="subtitle"]',
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '[data-hero="cta"]',
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.8,
          ease: 'back.out(1.4)',
        },
        '-=0.4'
      )
      .from(
        '[data-hero="social-proof"]',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        '-=0.4'
      );

    return tl;
  },

  // Stats section with stagger
  stats: (statsElement) => {
    const statCards = statsElement.querySelectorAll('[data-stat-card]');

    gsap.from(statCards, {
      scrollTrigger: {
        trigger: statsElement,
        start: 'top 70%',
      },
      opacity: 0,
      y: 100,
      scale: 0.8,
      stagger: 0.15,
      duration: 1,
      ease: 'power4.out',
    });
  },

  // Features with hover perspective
  features: (featuresElement) => {
    const featureCards = featuresElement.querySelectorAll('[data-feature-card]');

    featureCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          z: 50,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          z: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  },
};

// Cleanup function
export function cleanupScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
