// components/ui/Text/ShimmerText.jsx
// Text component with shimmer animation effect
// Perfect for headings and special text elements

import { useEffect, useRef } from 'react';
import { shimmerAnimation } from '../../../animations/animejs/advancedAnimations';
import styles from './ShimmerText.module.css';

/**
 * ShimmerText - Text with animated shimmer effect
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Text content
 * @param {string} props.as - HTML element type ('h1', 'h2', 'p', 'span', etc.)
 * @param {string} props.shimmerColor - Shimmer gradient color
 * @param {number} props.duration - Animation duration in ms
 * @param {string} props.className - Additional classes
 * @param {object} props.style - Inline styles
 */
export default function ShimmerText({
  children,
  as = 'span',
  shimmerColor = 'rgba(255, 255, 255, 0.3)',
  duration = 2000,
  className = '',
  style = {},
  ...props
}) {
  const textRef = useRef(null);
  const Component = as;

  useEffect(() => {
    if (textRef.current) {
      shimmerAnimation(textRef.current, { duration });
    }
  }, [duration]);

  return (
    <Component
      ref={textRef}
      className={`${styles.shimmerText} ${className}`}
      style={{
        ...style,
        backgroundImage: `linear-gradient(
          90deg,
          currentColor 0%,
          ${shimmerColor} 50%,
          currentColor 100%
        )`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
