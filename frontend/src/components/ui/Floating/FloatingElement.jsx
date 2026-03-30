// components/ui/Floating/FloatingElement.jsx
// Element with smooth floating animation
// Uses animejs for natural motion

import { useEffect, useRef } from 'react';
import { floatingAnimation } from '../../../animations/animejs/advancedAnimations';

/**
 * FloatingElement - Wrapper that adds floating animation to children
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child elements
 * @param {number} props.floatDistance - Distance to float (px)
 * @param {number} props.duration - Animation duration (ms)
 * @param {string} props.className - Additional classes
 * @param {object} props.style - Inline styles
 */
export default function FloatingElement({
  children,
  floatDistance = 20,
  duration = 3000,
  className = '',
  style = {},
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      floatingAnimation(elementRef.current, {
        translateY: [-floatDistance, 0],
        duration,
      });
    }
  }, [floatDistance, duration]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
