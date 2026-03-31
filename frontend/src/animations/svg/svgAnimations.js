// animations/svg/svgAnimations.js
// SVG Animation utilities using GSAP and native SVG features

import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Register plugins (if available)
try {
  gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
} catch (e) {
  console.warn('GSAP SVG plugins not available');
}

/**
 * Animate SVG path drawing
 * @param {string} pathSelector - SVG path selector
 * @param {Object} options - Animation options
 */
export function drawSVGPath(pathSelector, options = {}) {
  const {
    duration = 2,
    ease = 'power2.inOut',
    stagger = 0.1,
    delay = 0,
    drawSVG = '0% 100%',
    onComplete = null,
  } = options;

  const paths = gsap.utils.toArray(pathSelector);

  // Fallback if DrawSVGPlugin is not available
  if (typeof DrawSVGPlugin === 'undefined') {
    return gsap.fromTo(
      paths,
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      },
      {
        strokeDashoffset: 0,
        duration,
        ease,
        stagger,
        delay,
        onComplete,
      }
    );
  }

  return gsap.fromTo(
    paths,
    {
      drawSVG: '0%',
    },
    {
      drawSVG: drawSVG,
      duration,
      ease,
      stagger,
      delay,
      onComplete,
    }
  );
}

/**
 * Morph one SVG path to another
 * @param {string} fromSelector - Start path selector
 * @param {string} toSelector - End path selector
 * @param {Object} options - Animation options
 */
export function morphSVG(fromSelector, toSelector, options = {}) {
  const {
    duration = 1.5,
    ease = 'power2.inOut',
    repeat = 0,
    yoyo = false,
  } = options;

  const from = document.querySelector(fromSelector);
  const to = document.querySelector(toSelector);

  if (!from || !to) {
    console.warn('SVG morph: paths not found');
    return null;
  }

  // Fallback if MorphSVGPlugin is not available
  if (typeof MorphSVGPlugin === 'undefined') {
    console.warn('MorphSVGPlugin not available, using basic animation');
    return gsap.to(from, {
      scale: 1.1,
      duration,
      ease,
      repeat,
      yoyo,
    });
  }

  return gsap.to(from, {
    morphSVG: to,
    duration,
    ease,
    repeat,
    yoyo,
  });
}

/**
 * Create pulsing/breathing SVG animation
 * @param {string} selector - SVG element selector
 * @param {Object} options - Animation options
 */
export function pulseSVG(selector, options = {}) {
  const {
    scale = 1.1,
    duration = 1.5,
    ease = 'power1.inOut',
    opacity = 1,
  } = options;

  const elements = gsap.utils.toArray(selector);

  return gsap.to(elements, {
    scale,
    opacity,
    duration,
    ease,
    repeat: -1,
    yoyo: true,
  });
}

/**
 * Animate SVG filter effects
 * @param {string} filterSelector - Filter element selector
 * @param {Object} options - Animation options
 */
export function animateSVGFilter(filterSelector, options = {}) {
  const filter = document.querySelector(filterSelector);
  if (!filter) return null;

  const {
    blur = 10,
    duration = 2,
    ease = 'power2.inOut',
    repeat = -1,
    yoyo = true,
  } = options;

  const feGaussianBlur = filter.querySelector('feGaussianBlur');

  if (!feGaussianBlur) return null;

  return gsap.to(feGaussianBlur, {
    attr: { stdDeviation: blur },
    duration,
    ease,
    repeat,
    yoyo,
  });
}

/**
 * Create SVG path following animation
 * @param {string} elementSelector - Element to animate
 * @param {string} pathSelector - Path to follow
 * @param {Object} options - Animation options
 */
export function followPath(elementSelector, pathSelector, options = {}) {
  const element = document.querySelector(elementSelector);
  const path = document.querySelector(pathSelector);

  if (!element || !path) {
    console.warn('Path following: element or path not found');
    return null;
  }

  const {
    duration = 5,
    ease = 'none',
    repeat = -1,
    align = 'self',
    autoRotate = true,
  } = options;

  return gsap.to(element, {
    motionPath: {
      path,
      align,
      autoRotate,
      alignOrigin: [0.5, 0.5],
    },
    duration,
    ease,
    repeat,
  });
}

/**
 * Staggered reveal of SVG elements
 * @param {string} selector - SVG elements selector
 * @param {Object} options - Animation options
 */
export function staggerRevealSVG(selector, options = {}) {
  const {
    duration = 1,
    ease = 'power2.out',
    stagger = 0.1,
    from = { opacity: 0, scale: 0, transformOrigin: 'center' },
    to = { opacity: 1, scale: 1 },
  } = options;

  const elements = gsap.utils.toArray(selector);

  return gsap.fromTo(
    elements,
    from,
    {
      ...to,
      duration,
      ease,
      stagger,
    }
  );
}

/**
 * Create SVG glow effect animation
 * @param {string} selector - SVG element selector
 * @param {Object} options - Options
 */
export function glowSVG(selector, options = {}) {
  const {
    color = '#6C63FF',
    intensity = 20,
    duration = 2,
    ease = 'power1.inOut',
  } = options;

  const elements = gsap.utils.toArray(selector);

  // Create filter for glow effect
  elements.forEach((el) => {
    const svg = el.closest('svg');
    if (!svg) return;

    const filterId = `glow-${Math.random().toString(36).substr(2, 9)}`;
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', filterId);
    filter.innerHTML = `
      <feGaussianBlur stdDeviation="${intensity}" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    `;

    svg.appendChild(filter);
    el.style.filter = `url(#${filterId})`;

    gsap.to(filter.querySelector('feGaussianBlur'), {
      attr: { stdDeviation: intensity * 1.5 },
      duration,
      ease,
      repeat: -1,
      yoyo: true,
    });
  });
}

/**
 * Animate SVG gradient
 * @param {string} gradientSelector - Gradient element selector
 * @param {Object} options - Animation options
 */
export function animateGradient(gradientSelector, options = {}) {
  const gradient = document.querySelector(gradientSelector);
  if (!gradient) return null;

  const {
    x1 = '0%',
    y1 = '0%',
    x2 = '100%',
    y2 = '100%',
    duration = 3,
    ease = 'none',
    repeat = -1,
  } = options;

  return gsap.to(gradient, {
    attr: { x1, y1, x2, y2 },
    duration,
    ease,
    repeat,
    yoyo: true,
  });
}

/**
 * Create particle burst from SVG element
 * @param {string} selector - SVG element selector
 * @param {number} particleCount - Number of particles
 * @param {Object} options - Options
 */
export function particleBurst(selector, particleCount = 20, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return null;

  const svg = element.closest('svg');
  if (!svg) return null;

  const {
    duration = 1.5,
    ease = 'power2.out',
    spread = 100,
  } = options;

  const bbox = element.getBBox();
  const cx = bbox.x + bbox.width / 2;
  const cy = bbox.y + bbox.height / 2;

  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = element.cloneNode(true);
    svg.appendChild(particle);
    particles.push(particle);

    const angle = (Math.PI * 2 * i) / particleCount;
    const distance = spread;

    gsap.fromTo(
      particle,
      {
        x: cx,
        y: cy,
        opacity: 1,
        scale: 1,
      },
      {
        x: cx + Math.cos(angle) * distance,
        y: cy + Math.sin(angle) * distance,
        opacity: 0,
        scale: 0,
        duration,
        ease,
        onComplete: () => {
          particle.remove();
        },
      }
    );
  }

  return particles;
}

/**
 * Clip path reveal animation
 * @param {string} selector - Element selector
 * @param {Object} options - Options
 */
export function clipPathReveal(selector, options = {}) {
  const {
    duration = 1.2,
    ease = 'power3.out',
    direction = 'left-to-right', // left-to-right, top-to-bottom, center
    stagger = 0,
  } = options;

  const elements = gsap.utils.toArray(selector);

  const clipPaths = {
    'left-to-right': {
      from: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      to: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    'top-to-bottom': {
      from: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      to: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    center: {
      from: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      to: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
  };

  const paths = clipPaths[direction] || clipPaths['left-to-right'];

  return gsap.fromTo(
    elements,
    {
      clipPath: paths.from,
    },
    {
      clipPath: paths.to,
      duration,
      ease,
      stagger,
    }
  );
}

export default {
  drawSVGPath,
  morphSVG,
  pulseSVG,
  animateSVGFilter,
  followPath,
  staggerRevealSVG,
  glowSVG,
  animateGradient,
  particleBurst,
  clipPathReveal,
};
