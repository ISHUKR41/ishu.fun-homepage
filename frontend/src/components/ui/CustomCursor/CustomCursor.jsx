// components/ui/CustomCursor/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't render on touch devices
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover], input, textarea, select');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // Dot follows exactly
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.9);
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.9);

      // Ring follows with lag
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.08);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Don't render on touch
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div ref={dotRef} className={`${styles.dot} ${isHovering ? styles.hovering : ''}`} />
      <div ref={ringRef} className={`${styles.ring} ${isHovering ? styles.hovering : ''}`} />
    </>
  );
}
