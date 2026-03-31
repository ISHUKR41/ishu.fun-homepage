// components/ui/SpringAnimations/SpringAnimations.jsx
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Fade in animation with spring physics
export function FadeInSpring({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: config.gentle,
    delay: delay
  });

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  );
}

// Scale animation with bounce
export function ScaleInSpring({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const springs = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    config: config.wobbly,
    delay: delay
  });

  return (
    <animated.div
      ref={ref}
      style={{
        transform: springs.scale.to(s => `scale(${s})`),
        opacity: springs.opacity
      }}
      className={className}
    >
      {children}
    </animated.div>
  );
}

// Slide in from side
export function SlideInSpring({ children, direction = 'left', delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const xStart = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const yStart = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

  const springs = useSpring({
    x: inView ? 0 : xStart,
    y: inView ? 0 : yStart,
    opacity: inView ? 1 : 0,
    config: config.molasses,
    delay: delay
  });

  return (
    <animated.div
      ref={ref}
      style={{
        transform: springs.x.to((x) => `translate(${x}px, ${springs.y.get()}px)`),
        opacity: springs.opacity
      }}
      className={className}
    >
      {children}
    </animated.div>
  );
}

// Staggered children animation
export function StaggerSpring({ children, staggerDelay = 100, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => {
        const springs = useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(20px)',
          config: config.gentle,
          delay: index * staggerDelay
        });

        return (
          <animated.div key={index} style={springs}>
            {child}
          </animated.div>
        );
      })}
    </div>
  );
}

// Rotate in animation
export function RotateInSpring({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const springs = useSpring({
    rotate: inView ? 0 : -180,
    scale: inView ? 1 : 0.5,
    opacity: inView ? 1 : 0,
    config: config.wobbly,
    delay: delay
  });

  return (
    <animated.div
      ref={ref}
      style={{
        transform: springs.rotate.to(r => `rotate(${r}deg) scale(${springs.scale.get()})`),
        opacity: springs.opacity
      }}
      className={className}
    >
      {children}
    </animated.div>
  );
}

// Elastic bounce
export function BounceSpring({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const springs = useSpring({
    y: inView ? 0 : -50,
    opacity: inView ? 1 : 0,
    config: {
      tension: 300,
      friction: 10
    },
    delay: delay
  });

  return (
    <animated.div
      ref={ref}
      style={{
        transform: springs.y.to(y => `translateY(${y}px)`),
        opacity: springs.opacity
      }}
      className={className}
    >
      {children}
    </animated.div>
  );
}
