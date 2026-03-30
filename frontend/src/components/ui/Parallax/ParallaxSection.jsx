// ParallaxSection.jsx — Smooth Parallax Scroll Effect
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ParallaxSection({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate transform values based on direction
  const getTransform = () => {
    const range = [-100 * speed, 100 * speed];

    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], range);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], range.reverse());
      case 'left':
        return useTransform(scrollYProgress, [0, 1], range);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], range.reverse());
      default:
        return useTransform(scrollYProgress, [0, 1], range);
    }
  };

  const transform = getTransform();
  const smoothTransform = useSpring(transform, {
    damping: 20,
    stiffness: 100,
  });

  const motionStyle = direction === 'left' || direction === 'right'
    ? { x: smoothTransform }
    : { y: smoothTransform };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, ...motionStyle }}
    >
      {children}
    </motion.div>
  );
}

// Parallax Image Component
export function ParallaxImage({ src, alt, speed = 0.3, className = '' }) {
  return (
    <div className={className} style={{ overflow: 'hidden', position: 'relative' }}>
      <ParallaxSection speed={speed} style={{ height: '120%', width: '100%' }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </ParallaxSection>
    </div>
  );
}

// Parallax Text Component
export function ParallaxText({ children, speed = 0.2, direction = 'up' }) {
  return (
    <ParallaxSection speed={speed} direction={direction}>
      {children}
    </ParallaxSection>
  );
}
