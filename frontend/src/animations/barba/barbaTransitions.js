// animations/barba/barbaTransitions.js
// Barba.js page transitions for smooth page changes

import barba from '@barba/core';
import gsap from 'gsap';

// Initialize Barba.js with beautiful page transitions
export function initBarba() {
  barba.init({
    transitions: [
      {
        name: 'fade-transition',
        async leave(data) {
          await gsap.to(data.current.container, {
            opacity: 0,
            scale: 0.98,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
        async enter(data) {
          gsap.from(data.next.container, {
            opacity: 0,
            scale: 1.02,
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      },
      {
        name: 'slide-transition',
        async leave(data) {
          await gsap.to(data.current.container, {
            x: '-100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          });
        },
        async enter(data) {
          gsap.fromTo(
            data.next.container,
            {
              x: '100%',
              opacity: 0,
            },
            {
              x: '0%',
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
            }
          );
        },
      },
      {
        name: 'curtain-transition',
        async leave(data) {
          const curtain = document.createElement('div');
          curtain.className = 'barba-curtain';
          curtain.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #6C63FF 0%, #4F46E5 100%);
            z-index: 9999;
            transform: scaleY(0);
            transform-origin: top;
          `;
          document.body.appendChild(curtain);

          await gsap.to(curtain, {
            scaleY: 1,
            duration: 0.5,
            ease: 'power2.inOut',
          });

          await gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.3,
          });

          return curtain;
        },
        async enter(data) {
          const curtain = document.querySelector('.barba-curtain');

          gsap.fromTo(
            data.next.container,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
            }
          );

          await gsap.to(curtain, {
            scaleY: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            transformOrigin: 'bottom',
            delay: 0.2,
            onComplete: () => {
              curtain?.remove();
            },
          });
        },
      },
    ],

    views: [
      {
        namespace: 'home',
        beforeEnter() {
          // Reinitialize animations for home page
          if (typeof window.initScrollAnimations === 'function') {
            window.initScrollAnimations();
          }
        },
      },
    ],

    // Prevent default scroll restoration
    preventRunning: true,
    // Smooth scroll to top on page change
    scrollBehavior: () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  });

  // Add Barba hooks for additional effects
  barba.hooks.beforeEnter((data) => {
    // Scroll to top
    window.scrollTo(0, 0);
  });

  barba.hooks.afterEnter((data) => {
    // Reinit Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-XXXXXXXXXX', {
        page_path: data.next.url.path,
      });
    }
  });

  return barba;
}

// Clean up Barba on unmount
export function destroyBarba() {
  barba.destroy();
}

// Custom transition functions for specific use cases
export const customTransitions = {
  // Hero zoom transition
  heroZoom: {
    async leave(data) {
      await gsap.to(data.current.container, {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    },
    async enter(data) {
      gsap.fromTo(
        data.next.container,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    },
  },

  // Clip path reveal transition
  clipReveal: {
    async leave(data) {
      await gsap.to(data.current.container, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.6,
        ease: 'power3.inOut',
      });
    },
    async enter(data) {
      gsap.fromTo(
        data.next.container,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    },
  },

  // Overlay transition
  overlay: {
    async leave(data) {
      const overlay = document.createElement('div');
      overlay.className = 'barba-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #080810;
        z-index: 9998;
        opacity: 0;
      `;
      document.body.appendChild(overlay);

      await gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
      });

      return overlay;
    },
    async enter(data) {
      const overlay = document.querySelector('.barba-overlay');

      await gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        delay: 0.2,
        onComplete: () => {
          overlay?.remove();
        },
      });
    },
  },
};

export default { initBarba, destroyBarba, customTransitions };
