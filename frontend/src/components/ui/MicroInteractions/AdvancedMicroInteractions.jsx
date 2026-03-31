// components/ui/MicroInteractions/AdvancedMicroInteractions.jsx
// Advanced micro-interactions and hover effects library

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import styles from './AdvancedMicroInteractions.module.css';

/**
 * Hover Glow Effect Component
 * Adds animated glow on hover
 */
export function HoverGlow({ children, color = 'var(--accent-violet)', intensity = 20, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        boxShadow: `0 0 ${intensity}px ${intensity / 2}px ${color}`,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        boxShadow: '0 0 0px 0px transparent',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [color, intensity]);

  return (
    <div ref={ref} className={`${styles.hoverGlow} ${className}`}>
      {children}
    </div>
  );
}

HoverGlow.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  intensity: PropTypes.number,
  className: PropTypes.string,
};

/**
 * Magnetic Button Component
 * Button follows cursor on hover
 */
export function MagneticButton({ children, strength = 0.3, className = '', onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button ref={ref} className={`${styles.magneticButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
  strength: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * 3D Tilt Card Component
 * Card tilts based on mouse position
 */
export function TiltCard({ children, maxTilt = 15, perspective = 1000, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * -maxTilt;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={`${styles.tiltCard} ${className}`}
      style={{ perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

TiltCard.propTypes = {
  children: PropTypes.node.isRequired,
  maxTilt: PropTypes.number,
  perspective: PropTypes.number,
  className: PropTypes.string,
};

/**
 * Ripple Click Effect Component
 */
export function RippleClick({ children, color = 'rgba(108, 99, 255, 0.4)', className = '', onClick }) {
  const ref = useRef(null);

  const handleClick = (e) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = styles.ripple;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = color;

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <div ref={ref} className={`${styles.rippleContainer} ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
}

RippleClick.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Floating Animation Component
 */
export function FloatingAnimation({ children, duration = 3, distance = 10, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: `+=${distance}`,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, [duration, distance]);

  return (
    <div ref={ref} className={`${styles.floating} ${className}`}>
      {children}
    </div>
  );
}

FloatingAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  distance: PropTypes.number,
  className: PropTypes.string,
};

/**
 * Shake on Error Component
 */
export function ShakeOnError({ children, trigger = false, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (trigger && ref.current) {
      gsap.fromTo(
        ref.current,
        { x: -10 },
        {
          x: 10,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
          ease: 'power1.inOut',
          onComplete: () => {
            gsap.set(ref.current, { x: 0 });
          },
        }
      );
    }
  }, [trigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

ShakeOnError.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * Pulse Animation Component
 */
export function PulseAnimation({ children, scale = 1.05, duration = 1, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      scale,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, [scale, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

PulseAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  scale: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
};

/**
 * Smooth Scale on Hover Component
 */
export function ScaleOnHover({ children, scale = 1.05, duration = 0.3, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scale, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

ScaleOnHover.propTypes = {
  children: PropTypes.node.isRequired,
  scale: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
};

/**
 * Border Reveal on Hover Component
 */
export function BorderReveal({ children, color = 'var(--accent-violet)', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create animated border elements
    const borders = ['top', 'right', 'bottom', 'left'].map((side) => {
      const border = document.createElement('div');
      border.className = `${styles.borderReveal} ${styles[side]}`;
      border.style.background = color;
      element.appendChild(border);
      return border;
    });

    const handleMouseEnter = () => {
      borders.forEach((border, i) => {
        gsap.fromTo(
          border,
          { scaleX: border.classList.contains(styles.top) || border.classList.contains(styles.bottom) ? 0 : 1,
            scaleY: border.classList.contains(styles.left) || border.classList.contains(styles.right) ? 0 : 1,
          },
          {
            scaleX: 1,
            scaleY: 1,
            duration: 0.3,
            delay: i * 0.1,
            ease: 'power2.out',
          }
        );
      });
    };

    const handleMouseLeave = () => {
      borders.forEach((border, i) => {
        gsap.to(border, {
          scaleX: border.classList.contains(styles.top) || border.classList.contains(styles.bottom) ? 0 : 1,
          scaleY: border.classList.contains(styles.left) || border.classList.contains(styles.right) ? 0 : 1,
          duration: 0.3,
          delay: i * 0.05,
          ease: 'power2.in',
        });
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      borders.forEach((border) => border.remove());
    };
  }, [color]);

  return (
    <div ref={ref} className={`${styles.borderRevealContainer} ${className}`}>
      {children}
    </div>
  );
}

BorderReveal.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

/**
 * Text Reveal on Hover Component
 */
export function TextRevealOnHover({ children, revealText, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const original = element.querySelector(`.${styles.originalText}`);
    const reveal = element.querySelector(`.${styles.revealText}`);

    const handleMouseEnter = () => {
      gsap.to(original, { y: '-100%', duration: 0.3, ease: 'power2.out' });
      gsap.to(reveal, { y: '0%', duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(original, { y: '0%', duration: 0.3, ease: 'power2.out' });
      gsap.to(reveal, { y: '100%', duration: 0.3, ease: 'power2.out' });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.textRevealContainer} ${className}`}>
      <span className={styles.originalText}>{children}</span>
      <span className={styles.revealText}>{revealText}</span>
    </div>
  );
}

TextRevealOnHover.propTypes = {
  children: PropTypes.node.isRequired,
  revealText: PropTypes.node.isRequired,
  className: PropTypes.string,
};
