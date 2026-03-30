// components/ui/Card/TiltCard.jsx
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './Card.module.css';

export default function TiltCard({ children, className = '', maxTilt = 12, glare = true, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on mobile
    if ('ontouchstart' in window) return;

    VanillaTilt.init(el, {
      max: maxTilt,
      speed: 400,
      glare: glare,
      'max-glare': 0.15,
      perspective: 1000,
    });

    return () => el.vanillaTilt?.destroy();
  }, [maxTilt, glare]);

  return (
    <div ref={ref} className={`${styles.tiltCard} ${className}`} {...props}>
      {children}
    </div>
  );
}
