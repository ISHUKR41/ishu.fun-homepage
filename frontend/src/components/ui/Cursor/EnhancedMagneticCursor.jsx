// EnhancedMagneticCursor.jsx
// Zero-lag cursor: no React state changes, pure DOM + RAF
import { useEffect, useRef } from 'react';
import styles from './EnhancedMagneticCursor.module.css';

export default function EnhancedMagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    const hasMouseInput = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasMouseInput) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursor elements
    dot.style.opacity = '1';
    ring.style.opacity = '1';

    // Add class to body to hide native cursor
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId;

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      // Dot follows mouse instantly
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;

      // Ring follows with smooth lag
      ringX = lerp(ringX, mouseX - 16, 0.12);
      ringY = lerp(ringY, mouseY - 16, 0.12);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      dot.classList.add(styles.clicking);
      ring.classList.add(styles.clicking);
    };

    const onMouseUp = () => {
      dot.classList.remove(styles.clicking);
      ring.classList.remove(styles.clicking);
    };

    // Hover detection using CSS classes — no React state = no re-render
    const onMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label');
      if (el) {
        dot.classList.add(styles.hovering);
        ring.classList.add(styles.hovering);
      }
    };

    const onMouseOut = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label');
      if (el) {
        dot.classList.remove(styles.hovering);
        ring.classList.remove(styles.hovering);
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}

export function useMagneticEffect(ref, options = {}) {
  const { strength = 0.25, duration = 0.4 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const onLeave = () => {
      el.style.transition = `transform ${duration}s cubic-bezier(0.25,0.46,0.45,0.94)`;
      el.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => { el.style.transition = ''; }, duration * 1000);
    };

    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, strength, duration]);
}
