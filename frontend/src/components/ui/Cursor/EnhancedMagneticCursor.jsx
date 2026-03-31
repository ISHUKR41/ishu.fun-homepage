// components/ui/Cursor/EnhancedMagneticCursor.jsx
// Enhanced magnetic cursor with multiple interaction modes

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './EnhancedMagneticCursor.module.css';

/**
 * Enhanced Magnetic Cursor Component
 * Features:
 * - Magnetic effect on interactive elements
 * - Click ripple animation
 * - Hover state changes
 * - Cursor trail effect
 * - Custom cursor modes
 */
export default function EnhancedMagneticCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const trailRef = useRef([]);
  const [cursorMode, setCursorMode] = useState('default'); // default, hover, click, drag
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports mouse input
    const hasMouseInput = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasMouseInput) return;

    setIsVisible(true);

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Smooth cursor following using GSAP
    const updateCursor = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      gsap.set(dot, {
        x: currentX,
        y: currentY,
      });

      gsap.set(ring, {
        x: currentX,
        y: currentY,
      });

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add trail effect
      createTrail(e.clientX, e.clientY);
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setCursorMode('click');
      gsap.to(ring, {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setCursorMode('default');
      gsap.to(ring, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });

      // Create ripple effect
      createRipple(mouseX, mouseY);
    };

    // Hover handlers for interactive elements
    const handleHoverEnter = (e) => {
      const target = e.target;

      // Check if element is interactive
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[data-cursor-hover]') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setCursorMode('hover');

        gsap.to(ring, {
          scale: 2,
          borderColor: 'var(--accent-violet, #6C63FF)',
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(dot, {
          scale: 0,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Magnetic effect
        const rect = target.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;

        gsap.to(ring, {
          x: targetX,
          y: targetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleHoverLeave = () => {
      setCursorMode('default');

      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(108, 99, 255, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Create ripple effect on click
    const createRipple = (x, y) => {
      const ripple = document.createElement('div');
      ripple.className = styles.ripple;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 2,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            ripple.remove();
          },
        }
      );
    };

    // Create trail particles
    const createTrail = (x, y) => {
      // Only create trail occasionally to avoid performance issues
      if (Math.random() > 0.3) return;

      const trail = document.createElement('div');
      trail.className = styles.trail;
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);

      gsap.to(trail, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          trail.remove();
        },
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleHoverEnter, true);
    document.addEventListener('mouseleave', handleHoverLeave, true);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleHoverEnter, true);
      document.removeEventListener('mouseleave', handleHoverLeave, true);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`${styles.cursorDot} ${styles[cursorMode]}`}
        data-cursor-mode={cursorMode}
      />
      <div
        ref={cursorRingRef}
        className={`${styles.cursorRing} ${styles[cursorMode]}`}
        data-cursor-mode={cursorMode}
      />
    </>
  );
}

/**
 * Magnetic Effect Utility
 * Can be used to make any element magnetic to cursor
 */
export function useMagneticEffect(ref, options = {}) {
  const {
    strength = 0.3,
    scale = 1.05,
    duration = 0.3,
    ease = 'power2.out',
  } = options;

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
        scale,
        duration,
        ease,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration,
        ease,
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength, scale, duration, ease]);
}
