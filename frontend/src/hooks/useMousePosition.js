// hooks/useMousePosition.js
import { useState, useEffect, useRef } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      setPosition(posRef.current);
      rafRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return position;
}
