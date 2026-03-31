// animations/gsap/advancedScrollAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Enhanced scroll-triggered animations for modern, smooth effects
export function initAdvancedScrollAnimations() {
  // 1. Fade up with blur effect
  gsap.utils.toArray('[data-animate="fade-up-blur"]').forEach((element) => {
    gsap.from(element, {
      y: 100,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 65%',
        scrub: 1,
        once: true
      }
    });
  });

  // 2. Scale with rotation
  gsap.utils.toArray('[data-animate="scale-rotate"]').forEach((element) => {
    gsap.from(element, {
      scale: 0.5,
      rotation: -15,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 3. Stagger children with clip-path
  gsap.utils.toArray('[data-animate-children="clip-reveal"]').forEach((parent) => {
    const children = parent.children;
    gsap.from(children, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.1,
      scrollTrigger: {
        trigger: parent,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 4. Parallax image layers
  gsap.utils.toArray('[data-parallax]').forEach((element) => {
    const speed = element.dataset.parallaxSpeed || 0.5;
    gsap.to(element, {
      y: () => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  // 5. Text reveal with mask
  gsap.utils.toArray('[data-animate="text-reveal"]').forEach((element) => {
    gsap.from(element, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 6. Counter animation with scroll
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

  // 7. Horizontal scroll section
  const horizontalSections = gsap.utils.toArray('[data-horizontal-scroll]');
  horizontalSections.forEach((section) => {
    const slides = section.querySelector('[data-slides]');
    if (slides) {
      gsap.to(slides, {
        x: () => -(slides.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${slides.scrollWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }
  });

  // 8. Pin and fade sections
  gsap.utils.toArray('[data-pin-fade]').forEach((section) => {
    const content = section.querySelector('[data-pin-content]');
    if (content) {
      gsap.to(content, {
        opacity: 0,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: true,
          start: 'top top',
          end: 'bottom top'
        }
      });
    }
  });

  // 9. Image reveal with scale
  gsap.utils.toArray('[data-animate="image-reveal"]').forEach((container) => {
    const img = container.querySelector('img');
    if (img) {
      gsap.from(img, {
        scale: 1.3,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      gsap.from(container, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  });

  // 10. Morphing shapes
  gsap.utils.toArray('[data-animate="morph"]').forEach((element) => {
    gsap.to(element, {
      morphSVG: element.dataset.morphTarget,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 11. Gradient animation
  gsap.utils.toArray('[data-animate="gradient"]').forEach((element) => {
    gsap.to(element, {
      backgroundPosition: '200% center',
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // 12. Split text animation
  gsap.utils.toArray('[data-animate="split-text"]').forEach((element) => {
    const text = element.textContent;
    const chars = text.split('').map(char => `<span class="char">${char}</span>`).join('');
    element.innerHTML = chars;

    gsap.from(element.querySelectorAll('.char'), {
      opacity: 0,
      y: 50,
      rotationX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 13. Magnetic hover effect
  gsap.utils.toArray('[data-magnetic]').forEach((element) => {
    element.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;

      gsap.to(element, {
        x: x * 20,
        y: y * 20,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });

  // 14. 3D card flip on scroll
  gsap.utils.toArray('[data-animate="flip-3d"]').forEach((element) => {
    gsap.from(element, {
      rotationY: 90,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 15. Smooth mask reveal
  gsap.utils.toArray('[data-animate="mask-reveal"]').forEach((element) => {
    gsap.from(element, {
      maskPosition: '0% 0%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  console.log('[Advanced GSAP] 15 advanced scroll animations initialized');
}

// Refresh all ScrollTriggers
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

// Kill all ScrollTriggers
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
