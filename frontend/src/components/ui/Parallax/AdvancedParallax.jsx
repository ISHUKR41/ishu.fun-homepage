// components/ui/Parallax/AdvancedParallax.jsx
// Advanced multi-layer parallax scrolling component

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './AdvancedParallax.module.css';

/**
 * Advanced Parallax Component with multiple layers
 * Supports depth-based parallax, mouse parallax, and scroll parallax
 */
export default function AdvancedParallax({
  children,
  speed = 0.5,
  direction = 'vertical', // vertical, horizontal, both
  depth = 0, // 0-10, higher = more parallax
  enableMouse = false,
  smooth = true,
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax amount based on speed and depth
  const parallaxAmount = (speed + depth * 0.1) * 100;

  // Transform based on scroll
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' || direction === 'both'
      ? [-parallaxAmount, parallaxAmount]
      : [0, 0]
  );

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'horizontal' || direction === 'both'
      ? [-parallaxAmount, parallaxAmount]
      : [0, 0]
  );

  // Apply spring physics for smooth motion
  const y = smooth ? useSpring(yRaw, { stiffness: 100, damping: 30 }) : yRaw;
  const x = smooth ? useSpring(xRaw, { stiffness: 100, damping: 30 }) : xRaw;

  // Mouse parallax effect
  useEffect(() => {
    if (!enableMouse) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize mouse position to -1 to 1
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouse]);

  // Combine scroll and mouse parallax
  const mouseX = enableMouse ? mousePosition.x * depth * 20 : 0;
  const mouseY = enableMouse ? mousePosition.y * depth * 20 : 0;

  return (
    <motion.div
      ref={ref}
      className={`${styles.parallaxContainer} ${className}`}
      style={{
        ...style,
        x: useTransform(() => x.get() + mouseX),
        y: useTransform(() => y.get() + mouseY),
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}

AdvancedParallax.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizontal', 'both']),
  depth: PropTypes.number,
  enableMouse: PropTypes.bool,
  smooth: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Parallax Layer Component
 * Use multiple layers to create depth effect
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  zIndex = 0,
  className = '',
  style = {},
}) {
  return (
    <AdvancedParallax
      speed={speed}
      className={className}
      style={{
        position: 'relative',
        zIndex,
        ...style,
      }}
    >
      {children}
    </AdvancedParallax>
  );
}

ParallaxLayer.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Tilt on Scroll Component
 * Creates 3D tilt effect based on scroll position
 */
export function TiltOnScroll({
  children,
  maxTilt = 15,
  perspective = 1000,
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [maxTilt, 0, -maxTilt]),
    { stiffness: 100, damping: 30 }
  );

  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-maxTilt / 2, 0, maxTilt / 2]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

TiltOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  maxTilt: PropTypes.number,
  perspective: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Zoom on Scroll Component
 * Scales element based on scroll position
 */
export function ZoomOnScroll({
  children,
  minScale = 0.8,
  maxScale = 1.2,
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [minScale, maxScale, minScale]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        scale,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

ZoomOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Fade on Scroll Component
 * Fades element in/out based on scroll position
 */
export function FadeOnScroll({
  children,
  fadeIn = true,
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 1],
      fadeIn ? [0, 1, 1, 0] : [1, 0, 0, 1]
    ),
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

FadeOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  fadeIn: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Sticky Reveal Component
 * Pins element and reveals content on scroll
 */
export function StickyReveal({
  children,
  revealContent,
  height = '200vh',
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
  );

  return (
    <div ref={ref} style={{ height }} className={className}>
      <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
        {children}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath,
          }}
        >
          {revealContent}
        </motion.div>
      </div>
    </div>
  );
}

StickyReveal.propTypes = {
  children: PropTypes.node.isRequired,
  revealContent: PropTypes.node.isRequired,
  height: PropTypes.string,
  className: PropTypes.string,
};
