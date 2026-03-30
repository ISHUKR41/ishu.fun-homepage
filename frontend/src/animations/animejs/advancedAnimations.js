// animations/animejs/advancedAnimations.js
// Advanced animations using anime.js for sophisticated effects
// Provides keyframe animations, stagger effects, and complex timelines

import anime from 'animejs';

/**
 * Stagger Animation - Creates sequential element animations
 * @param {string|NodeList} targets - CSS selector or NodeList
 * @param {object} options - Animation configuration
 */
export const staggerAnimation = (targets, options = {}) => {
  return anime({
    targets,
    translateY: options.translateY || [40, 0],
    opacity: [0, 1],
    easing: options.easing || 'easeOutExpo',
    duration: options.duration || 1200,
    delay: anime.stagger(options.stagger || 100, { start: options.startDelay || 0 }),
    ...options,
  });
};

/**
 * Text Reveal Animation - Animates text characters individually
 * @param {string} target - CSS selector for text element
 * @param {object} options - Animation configuration
 */
export const textRevealAnimation = (target, options = {}) => {
  const element = document.querySelector(target);
  if (!element) return null;

  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map((char) => `<span class="char" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  return anime.timeline({ loop: false }).add({
    targets: `${target} .char`,
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: (el, i) => 50 + 30 * i,
  });
};

/**
 * Morphing Path Animation - Smooth SVG path transitions
 * @param {string} target - SVG path selector
 * @param {array} paths - Array of path data strings
 * @param {object} options - Animation configuration
 */
export const morphPathAnimation = (target, paths, options = {}) => {
  const timeline = anime.timeline({
    loop: options.loop || true,
    direction: options.direction || 'alternate',
    easing: options.easing || 'easeInOutQuad',
  });

  paths.forEach((path, index) => {
    timeline.add({
      targets: target,
      d: [{ value: path }],
      duration: options.duration || 3000,
      delay: index === 0 ? 0 : (options.delay || 1000),
    });
  });

  return timeline;
};

/**
 * Scale Pulse Animation - Rhythmic scaling effect
 * @param {string} targets - CSS selector
 * @param {object} options - Animation configuration
 */
export const scalePulseAnimation = (targets, options = {}) => {
  return anime({
    targets,
    scale: [1, options.scale || 1.05, 1],
    duration: options.duration || 2000,
    easing: 'easeInOutSine',
    loop: options.loop !== false,
  });
};

/**
 * Shimmer Effect Animation - Creates shimmering overlay
 * @param {string} targets - CSS selector
 * @param {object} options - Animation configuration
 */
export const shimmerAnimation = (targets, options = {}) => {
  return anime({
    targets,
    backgroundPosition: ['-200% 0', '200% 0'],
    easing: 'linear',
    duration: options.duration || 2000,
    loop: true,
  });
};

/**
 * Floating Animation - Creates smooth floating motion
 * @param {string} targets - CSS selector
 * @param {object} options - Animation configuration
 */
export const floatingAnimation = (targets, options = {}) => {
  return anime({
    targets,
    translateY: [
      { value: -20, duration: 1500, easing: 'easeInOutSine' },
      { value: 0, duration: 1500, easing: 'easeInOutSine' },
    ],
    translateX: [
      { value: -10, duration: 1800, easing: 'easeInOutSine' },
      { value: 10, duration: 1800, easing: 'easeInOutSine' },
      { value: 0, duration: 1800, easing: 'easeInOutSine' },
    ],
    rotate: [
      { value: -5, duration: 2000, easing: 'easeInOutSine' },
      { value: 5, duration: 2000, easing: 'easeInOutSine' },
      { value: 0, duration: 2000, easing: 'easeInOutSine' },
    ],
    loop: true,
    ...options,
  });
};

/**
 * Ripple Effect Animation - Creates ripple from center
 * @param {HTMLElement} element - Target element
 * @param {object} event - Mouse/touch event
 * @param {object} options - Animation configuration
 */
export const rippleEffect = (element, event, options = {}) => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: ${options.color || 'rgba(255, 255, 255, 0.6)'};
    width: 20px;
    height: 20px;
    left: ${x}px;
    top: ${y}px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  `;

  element.appendChild(ripple);

  anime({
    targets: ripple,
    scale: [0, options.scale || 3],
    opacity: [1, 0],
    duration: options.duration || 600,
    easing: 'easeOutExpo',
    complete: () => ripple.remove(),
  });
};

/**
 * Card Flip Animation - 3D card flip effect
 * @param {string} targets - CSS selector
 * @param {object} options - Animation configuration
 */
export const cardFlipAnimation = (targets, options = {}) => {
  return anime({
    targets,
    rotateY: ['0deg', '180deg'],
    duration: options.duration || 800,
    easing: 'easeInOutQuad',
    ...options,
  });
};

/**
 * Progress Bar Animation - Animated progress fill
 * @param {string} target - Progress bar selector
 * @param {number} value - Target percentage (0-100)
 * @param {object} options - Animation configuration
 */
export const progressBarAnimation = (target, value, options = {}) => {
  return anime({
    targets: target,
    width: `${value}%`,
    duration: options.duration || 1500,
    easing: options.easing || 'easeOutExpo',
    ...options,
  });
};

/**
 * Complex Timeline - Multi-step animation sequence
 * @param {array} steps - Array of animation step configurations
 * @param {object} options - Timeline configuration
 */
export const complexTimeline = (steps, options = {}) => {
  const timeline = anime.timeline({
    loop: options.loop || false,
    autoplay: options.autoplay !== false,
  });

  steps.forEach((step) => {
    timeline.add({
      targets: step.targets,
      ...step.properties,
      duration: step.duration || 1000,
      easing: step.easing || 'easeOutExpo',
      delay: step.delay || 0,
    }, step.offset || '+=0');
  });

  return timeline;
};

/**
 * Draw SVG Path Animation - Animates SVG path drawing
 * @param {string} targets - SVG path selector
 * @param {object} options - Animation configuration
 */
export const drawSVGPath = (targets, options = {}) => {
  const paths = document.querySelectorAll(targets);

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  return anime({
    targets,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: options.duration || 2000,
    delay: options.delay || 0,
    loop: options.loop || false,
  });
};

/**
 * Particle Explosion Animation - Creates particle burst effect
 * @param {HTMLElement} container - Container element
 * @param {object} options - Animation configuration
 */
export const particleExplosion = (container, options = {}) => {
  const particleCount = options.count || 30;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${options.size || 8}px;
      height: ${options.size || 8}px;
      background: ${options.color || '#6C63FF'};
      border-radius: 50%;
      left: 50%;
      top: 50%;
    `;
    container.appendChild(particle);
    particles.push(particle);
  }

  anime({
    targets: particles,
    translateX: () => anime.random(-200, 200),
    translateY: () => anime.random(-200, 200),
    scale: [1, 0],
    opacity: [1, 0],
    duration: options.duration || 1500,
    easing: 'easeOutExpo',
    delay: anime.stagger(20),
    complete: () => particles.forEach((p) => p.remove()),
  });
};

export default {
  staggerAnimation,
  textRevealAnimation,
  morphPathAnimation,
  scalePulseAnimation,
  shimmerAnimation,
  floatingAnimation,
  rippleEffect,
  cardFlipAnimation,
  progressBarAnimation,
  complexTimeline,
  drawSVGPath,
  particleExplosion,
};
