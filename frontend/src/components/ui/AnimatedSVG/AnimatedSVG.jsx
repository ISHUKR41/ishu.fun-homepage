// components/ui/AnimatedSVG/AnimatedSVG.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedSVG.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSVG({
  children,
  animationType = 'draw', // draw, fade, scale, morph
  duration = 1.5,
  delay = 0,
  triggerOnScroll = true,
  className = ''
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const paths = svg.querySelectorAll('path, circle, rect, line, polyline, polygon');

    const ctx = gsap.context(() => {
      if (animationType === 'draw') {
        // Path drawing animation
        paths.forEach((path) => {
          const length = path.getTotalLength ? path.getTotalLength() : 0;
          if (length) {
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length
            });
          }
        });

        const animation = gsap.to(paths, {
          strokeDashoffset: 0,
          duration: duration,
          delay: delay,
          ease: 'power2.inOut',
          stagger: 0.1
        });

        if (triggerOnScroll) {
          animation.scrollTrigger = {
            trigger: svg,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          };
        }
      } else if (animationType === 'fade') {
        // Fade in animation
        gsap.from(paths, {
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: triggerOnScroll ? {
            trigger: svg,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          } : undefined
        });
      } else if (animationType === 'scale') {
        // Scale animation
        gsap.from(paths, {
          scale: 0,
          transformOrigin: 'center',
          duration: duration,
          delay: delay,
          ease: 'elastic.out(1, 0.5)',
          stagger: 0.05,
          scrollTrigger: triggerOnScroll ? {
            trigger: svg,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          } : undefined
        });
      }
    });

    return () => ctx.revert();
  }, [animationType, duration, delay, triggerOnScroll]);

  return (
    <div ref={svgRef} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

// Predefined animated icons
export function CheckIcon({ size = 64, color = '#00D2FF', animated = true }) {
  return (
    <AnimatedSVG animationType="draw" duration={1}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="3" fill="none" />
        <path
          d="M20 32L28 40L44 24"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AnimatedSVG>
  );
}

export function RocketIcon({ size = 64, color = '#6C63FF', animated = true }) {
  return (
    <AnimatedSVG animationType="scale" duration={1.2}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path
          d="M32 8C32 8 20 16 20 32C20 32 20 40 24 44C24 44 28 48 32 48C36 48 40 44 40 44C44 40 44 32 44 32C44 16 32 8 32 8Z"
          fill={color}
          opacity="0.3"
        />
        <path
          d="M32 8V48M20 32C20 16 32 8 32 8C32 8 44 16 44 32"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="28" cy="28" r="2" fill={color} />
        <circle cx="36" cy="28" r="2" fill={color} />
        <path
          d="M16 44L20 40M48 44L44 40"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </AnimatedSVG>
  );
}

export function StarIcon({ size = 64, color = '#FFC107', animated = true }) {
  return (
    <AnimatedSVG animationType="scale" duration={0.8}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path
          d="M32 8L36 24H52L40 34L44 50L32 40L20 50L24 34L12 24H28L32 8Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </AnimatedSVG>
  );
}
