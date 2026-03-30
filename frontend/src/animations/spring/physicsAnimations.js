// animations/spring/physicsAnimations.js
// Physics-based animations using react-spring
// Provides smooth, natural motion with spring physics

import { useSpring, useTrail, useChain, useSpringRef, config } from '@react-spring/web';

/**
 * Custom spring configurations for different animation feels
 */
export const springConfigs = {
  // Smooth and slow - for large elements
  gentle: { tension: 120, friction: 14 },

  // Quick and snappy - for UI interactions
  wobbly: { tension: 180, friction: 12 },

  // Very bouncy - for playful elements
  bouncy: { tension: 300, friction: 10 },

  // Slow and smooth - for hero sections
  slow: { tension: 280, friction: 120 },

  // Fast and responsive - for tooltips
  fast: { tension: 300, friction: 20 },

  // Stiff - minimal bounce
  stiff: { tension: 210, friction: 20 },

  // Molasses - very slow
  molasses: { tension: 280, friction: 120 },
};

/**
 * Fade In Spring Animation
 * @param {boolean} isVisible - Visibility state
 * @param {object} options - Spring configuration
 * @returns {object} Spring styles
 */
export const useFadeInSpring = (isVisible, options = {}) => {
  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    config: options.config || springConfigs.gentle,
    delay: options.delay || 0,
  });
};

/**
 * Scale Spring Animation
 * @param {boolean} isActive - Active state
 * @param {object} options - Spring configuration
 * @returns {object} Spring styles
 */
export const useScaleSpring = (isActive, options = {}) => {
  return useSpring({
    transform: isActive
      ? `scale(${options.activeScale || 1.05})`
      : 'scale(1)',
    config: options.config || springConfigs.wobbly,
  });
};

/**
 * Bounce In Spring Animation
 * @param {boolean} isVisible - Visibility state
 * @param {object} options - Spring configuration
 * @returns {object} Spring styles
 */
export const useBounceInSpring = (isVisible, options = {}) => {
  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.3)',
    config: options.config || springConfigs.bouncy,
    delay: options.delay || 0,
  });
};

/**
 * Slide In Spring Animation
 * @param {boolean} isVisible - Visibility state
 * @param {string} direction - 'left' | 'right' | 'top' | 'bottom'
 * @param {object} options - Spring configuration
 * @returns {object} Spring styles
 */
export const useSlideInSpring = (isVisible, direction = 'left', options = {}) => {
  const distance = options.distance || 100;

  const transforms = {
    left: isVisible ? 'translateX(0px)' : `translateX(-${distance}px)`,
    right: isVisible ? 'translateX(0px)' : `translateX(${distance}px)`,
    top: isVisible ? 'translateY(0px)' : `translateY(-${distance}px)`,
    bottom: isVisible ? 'translateY(0px)' : `translateY(${distance}px)`,
  };

  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: transforms[direction],
    config: options.config || springConfigs.gentle,
    delay: options.delay || 0,
  });
};

/**
 * Rotate Spring Animation
 * @param {boolean} isActive - Active state
 * @param {object} options - Spring configuration
 * @returns {object} Spring styles
 */
export const useRotateSpring = (isActive, options = {}) => {
  return useSpring({
    transform: isActive
      ? `rotate(${options.degrees || 180}deg)`
      : 'rotate(0deg)',
    config: options.config || springConfigs.wobbly,
  });
};

/**
 * Trail Animation for List Items
 * @param {boolean} isVisible - Visibility state
 * @param {number} itemCount - Number of items
 * @param {object} options - Spring configuration
 * @returns {array} Array of spring styles
 */
export const useTrailAnimation = (isVisible, itemCount, options = {}) => {
  return useTrail(itemCount, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(40px)',
    config: options.config || springConfigs.gentle,
    delay: options.delay || 0,
  });
};

/**
 * Parallax Spring Effect
 * @param {number} scrollY - Current scroll position
 * @param {object} options - Parallax configuration
 * @returns {object} Spring styles
 */
export const useParallaxSpring = (scrollY, options = {}) => {
  const speed = options.speed || 0.5;

  return useSpring({
    transform: `translateY(${scrollY * speed}px)`,
    config: options.config || springConfigs.slow,
  });
};

/**
 * Magnetic Spring Effect (follows cursor)
 * @param {object} mousePosition - { x, y }
 * @param {object} elementPosition - { x, y }
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useMagneticSpring = (mousePosition, elementPosition, options = {}) => {
  const { x: mouseX, y: mouseY } = mousePosition;
  const { x: elemX, y: elemY } = elementPosition;

  const distance = Math.sqrt(
    Math.pow(mouseX - elemX, 2) + Math.pow(mouseY - elemY, 2)
  );

  const magneticRadius = options.radius || 100;
  const strength = options.strength || 0.3;

  const isInRange = distance < magneticRadius;

  const offsetX = isInRange ? (mouseX - elemX) * strength : 0;
  const offsetY = isInRange ? (mouseY - elemY) * strength : 0;

  return useSpring({
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    config: springConfigs.fast,
  });
};

/**
 * Reveal on Scroll Spring
 * @param {boolean} isInView - IntersectionObserver state
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useRevealOnScroll = (isInView, options = {}) => {
  return useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView
      ? 'translateY(0px) scale(1)'
      : 'translateY(60px) scale(0.9)',
    config: options.config || springConfigs.gentle,
    delay: options.delay || 0,
  });
};

/**
 * Number Counter Spring
 * @param {number} value - Target number
 * @param {object} options - Configuration
 * @returns {object} Spring value
 */
export const useNumberSpring = (value, options = {}) => {
  return useSpring({
    number: value,
    from: { number: options.from || 0 },
    config: options.config || springConfigs.slow,
  });
};

/**
 * Morph Spring Animation (width/height changes)
 * @param {object} dimensions - { width, height }
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useMorphSpring = (dimensions, options = {}) => {
  return useSpring({
    width: dimensions.width,
    height: dimensions.height,
    config: options.config || springConfigs.gentle,
  });
};

/**
 * Chain Animation - Sequential spring animations
 * @param {array} animations - Array of animation configs
 * @returns {array} Array of spring refs
 */
export const useChainedSpring = (animations) => {
  const springs = animations.map(() => useSpringRef());

  const animatedStyles = animations.map((anim, index) => {
    return useSpring({
      ref: springs[index],
      ...anim.style,
      config: anim.config || springConfigs.gentle,
    });
  });

  useChain(springs, animations.map((anim) => anim.offset || 0));

  return animatedStyles;
};

/**
 * Wiggle Spring Animation
 * @param {boolean} isActive - Trigger state
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useWiggleSpring = (isActive, options = {}) => {
  return useSpring({
    transform: isActive
      ? 'rotate(0deg)'
      : 'rotate(-5deg) rotate(5deg) rotate(-5deg) rotate(0deg)',
    config: { tension: 300, friction: 10 },
    loop: isActive,
    ...options,
  });
};

/**
 * Blur Spring Animation (backdrop blur)
 * @param {boolean} isActive - Active state
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useBlurSpring = (isActive, options = {}) => {
  return useSpring({
    backdropFilter: isActive
      ? `blur(${options.blur || 10}px)`
      : 'blur(0px)',
    config: springConfigs.fast,
  });
};

/**
 * Glow Spring Animation
 * @param {boolean} isActive - Active state
 * @param {object} options - Configuration
 * @returns {object} Spring styles
 */
export const useGlowSpring = (isActive, options = {}) => {
  const color = options.color || '108, 99, 255';
  const intensity = options.intensity || 20;

  return useSpring({
    boxShadow: isActive
      ? `0 0 ${intensity}px rgba(${color}, 0.6)`
      : `0 0 0px rgba(${color}, 0)`,
    config: springConfigs.fast,
  });
};

export default {
  springConfigs,
  useFadeInSpring,
  useScaleSpring,
  useBounceInSpring,
  useSlideInSpring,
  useRotateSpring,
  useTrailAnimation,
  useParallaxSpring,
  useMagneticSpring,
  useRevealOnScroll,
  useNumberSpring,
  useMorphSpring,
  useChainedSpring,
  useWiggleSpring,
  useBlurSpring,
  useGlowSpring,
};
