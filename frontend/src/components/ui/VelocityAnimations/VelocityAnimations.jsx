// components/ui/VelocityAnimations/VelocityAnimations.jsx
import { useEffect, useRef } from 'react';
import Velocity from 'velocity-animate';
import { useInView } from 'react-intersection-observer';

// Velocity.js wrapper for React components
export function VelocityFade({ children, duration = 800, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      Velocity(elementRef.current,
        { opacity: [1, 0], translateY: [0, 30] },
        { duration: duration, delay: delay, easing: 'easeOutCubic' }
      );
    }
  }, [inView, duration, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0 }} className={className}>
        {children}
      </div>
    </div>
  );
}

// Bounce effect with Velocity
export function VelocityBounce({ children, duration = 600, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      Velocity(elementRef.current,
        {
          opacity: [1, 0],
          scale: [1, 0.3],
          translateY: [0, -20]
        },
        {
          duration: duration,
          delay: delay,
          easing: [250, 20] // Spring physics
        }
      );
    }
  }, [inView, duration, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0, transform: 'scale(0.3)' }} className={className}>
        {children}
      </div>
    </div>
  );
}

// Slide from side
export function VelocitySlide({ children, direction = 'left', duration = 800, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      const startX = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
      const startY = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

      Velocity(elementRef.current,
        {
          opacity: [1, 0],
          translateX: [0, startX],
          translateY: [0, startY]
        },
        {
          duration: duration,
          delay: delay,
          easing: 'easeOutExpo'
        }
      );
    }
  }, [inView, direction, duration, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0 }} className={className}>
        {children}
      </div>
    </div>
  );
}

// Shake/Wobble effect for attention
export function VelocityShake({ children, trigger = false, className = '' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (trigger && elementRef.current) {
      Velocity(elementRef.current,
        { translateX: [-10, 10] },
        { duration: 100, loop: 3, easing: 'easeInOutSine' }
      );
    }
  }, [trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Pulse effect for emphasis
export function VelocityPulse({ children, continuous = false, duration = 1000, className = '' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const animation = () => {
        Velocity(elementRef.current,
          { scale: [1.05, 1] },
          {
            duration: duration,
            easing: 'easeInOutSine',
            loop: continuous ? true : 1
          }
        );
      };
      animation();
    }
  }, [continuous, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Rotate and scale
export function VelocityRotate({ children, duration = 800, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      Velocity(elementRef.current,
        {
          opacity: [1, 0],
          rotateZ: [0, -180],
          scale: [1, 0.3]
        },
        {
          duration: duration,
          delay: delay,
          easing: [500, 20]
        }
      );
    }
  }, [inView, duration, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0, transform: 'scale(0.3) rotateZ(-180deg)' }} className={className}>
        {children}
      </div>
    </div>
  );
}
