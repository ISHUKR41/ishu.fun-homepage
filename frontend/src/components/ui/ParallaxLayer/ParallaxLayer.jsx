// components/ui/ParallaxLayer/ParallaxLayer.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ParallaxLayer.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxLayer({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  triggerElement = null
}) {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!layerRef.current) return;

    const element = layerRef.current;
    const multiplier = direction === 'down' ? -1 : 1;
    const movement = 100 * speed * multiplier;

    const ctx = gsap.context(() => {
      gsap.fromTo(element,
        { y: movement },
        {
          y: -movement,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerElement || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            invalidateOnRefresh: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, [speed, direction, triggerElement]);

  return (
    <div ref={layerRef} className={`${styles.layer} ${className}`}>
      {children}
    </div>
  );
}
