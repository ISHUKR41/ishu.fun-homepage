// components/ui/Parallax/EnhancedParallax.jsx
// Advanced parallax component with react-spring physics
// Provides smooth, performant parallax scrolling effects

import { useRef, useEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import { useParallaxSpring } from '../../../animations/spring/physicsAnimations';

/**
 * EnhancedParallax - Physics-based parallax scrolling component
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child elements
 * @param {number} props.speed - Parallax speed multiplier (0-1 = slower, >1 = faster)
 * @param {number} props.depth - Z-depth for 3D effect
 * @param {string} props.direction - 'vertical' | 'horizontal' | 'both'
 * @param {boolean} props.disabled - Disable parallax on mobile
 * @param {string} props.className - Additional classes
 * @param {object} props.style - Inline styles
 */
export default function EnhancedParallax({
  children,
  speed = 0.5,
  depth = 0,
  direction = 'vertical',
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const elementRef = useRef(null);

  // Check if parallax should be disabled (mobile)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || disabled);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [disabled]);

  // Track scroll position
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress relative to element position
        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);

        if (direction === 'vertical' || direction === 'both') {
          setScrollY(scrollProgress * 100 * speed);
        }

        if (direction === 'horizontal' || direction === 'both') {
          setScrollX(scrollProgress * 100 * speed);
        }
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, isMobile]);

  // Apply spring physics to parallax movement
  const springStyle = useParallaxSpring(scrollY, {
    speed: speed,
    config: { tension: 120, friction: 14 },
  });

  if (isMobile) {
    return (
      <div ref={elementRef} className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const transform = direction === 'horizontal'
    ? `translate3d(${scrollX}px, 0, ${depth}px)`
    : direction === 'both'
      ? `translate3d(${scrollX}px, ${scrollY}px, ${depth}px)`
      : `translate3d(0, ${scrollY}px, ${depth}px)`;

  return (
    <animated.div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        transform,
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </animated.div>
  );
}
