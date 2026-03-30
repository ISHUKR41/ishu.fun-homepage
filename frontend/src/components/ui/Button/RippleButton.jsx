// components/ui/Button/RippleButton.jsx
// Enhanced button component with ripple effect and micro-interactions
// Uses animejs for ripple animation

import { useRef } from 'react';
import { rippleEffect } from '../../../animations/animejs/advancedAnimations';
import styles from './Button.module.css';

/**
 * RippleButton - Button with Material Design ripple effect
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - 'primary' | 'secondary' | 'ghost' | 'outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {function} props.onClick - Click handler
 * @param {string} props.rippleColor - Ripple color (optional)
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional classes
 * @param {object} props.style - Inline styles
 */
export default function RippleButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  rippleColor,
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  const buttonRef = useRef(null);

  const handleClick = (event) => {
    if (disabled) return;

    // Create ripple effect
    rippleEffect(buttonRef.current, event, {
      color: rippleColor || 'rgba(255, 255, 255, 0.6)',
      scale: 3,
      duration: 600,
    });

    // Call original onClick handler
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
