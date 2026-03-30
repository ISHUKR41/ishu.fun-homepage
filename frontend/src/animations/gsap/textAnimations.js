// textAnimations.js — Advanced Text Reveal Animations with SplitType + GSAP
import { gsap } from 'gsap';
import SplitType from 'split-type';

// Text reveal with character stagger
export function animateTextReveal(element, options = {}) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.03,
    ease = 'power4.out',
    y = 100,
    opacity = 0,
    splitTypes = 'chars,words',
  } = options;

  const split = new SplitType(element, { types: splitTypes });

  const tl = gsap.timeline({ delay });

  tl.from(split.chars, {
    opacity,
    y,
    rotateX: -90,
    stagger,
    duration,
    ease,
  });

  return { timeline: tl, split };
}

// Gradient text wave animation
export function animateGradientWave(element) {
  const split = new SplitType(element, { types: 'chars' });

  split.chars.forEach((char) => {
    char.style.display = 'inline-block';
    char.style.background = 'linear-gradient(90deg, #6C63FF, #00D2FF, #00C896)';
    char.style.backgroundClip = 'text';
    char.style.webkitBackgroundClip = 'text';
    char.style.color = 'transparent';
    char.style.backgroundSize = '200% auto';
  });

  gsap.to(split.chars, {
    backgroundPosition: '200% center',
    duration: 3,
    ease: 'none',
    stagger: {
      each: 0.05,
      repeat: -1,
    },
  });

  return split;
}

// Scramble text effect
export function animateScramble(element, options = {}) {
  const { chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*', duration = 0.5 } = options;

  const originalText = element.textContent;
  const length = originalText.length;
  let iteration = 0;

  const interval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iteration >= length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, duration * 20);

  return interval;
}

// Typewriter effect with cursor
export function animateTypewriter(element, options = {}) {
  const { speed = 50, cursor = true, delay = 0 } = options;

  const text = element.textContent;
  element.textContent = '';

  if (cursor) {
    element.innerHTML = '<span class="typewriter-cursor">|</span>';
  }

  const tl = gsap.timeline({ delay });
  const chars = text.split('');

  chars.forEach((char, i) => {
    tl.call(
      () => {
        const cursorEl = element.querySelector('.typewriter-cursor');
        if (cursorEl) {
          cursorEl.before(char);
        } else {
          element.textContent += char;
        }
      },
      null,
      i * (speed / 1000)
    );
  });

  if (cursor) {
    tl.to('.typewriter-cursor', {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }

  return tl;
}

// Word rotation animation
export function animateWordRotation(element, words, options = {}) {
  const { duration = 2, delay = 1, ease = 'power3.inOut' } = options;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: delay });

  words.forEach((word, index) => {
    tl.to(element, {
      duration: 0.5,
      opacity: 0,
      y: -30,
      ease: ease,
      onComplete: () => {
        element.textContent = word;
      },
    }).to(element, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: ease,
    });

    if (index < words.length - 1) {
      tl.to({}, { duration: duration });
    }
  });

  return tl;
}

// Elastic reveal animation
export function animateElasticReveal(element) {
  const split = new SplitType(element, { types: 'words' });

  gsap.from(split.words, {
    opacity: 0,
    scale: 0,
    y: 80,
    stagger: 0.1,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)',
  });

  return split;
}

// Clip path text reveal
export function animateClipReveal(element, options = {}) {
  const { direction = 'left', duration = 1, ease = 'power4.inOut' } = options;

  const clipPaths = {
    left: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    right: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)'],
    top: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    bottom: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
  };

  return gsap.from(element, {
    clipPath: clipPaths[direction][0],
    duration,
    ease,
  });
}

// Glitch effect
export function animateGlitch(element, options = {}) {
  const { duration = 0.5, intensity = 10 } = options;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  for (let i = 0; i < 5; i++) {
    tl.to(element, {
      duration: duration / 10,
      x: `${(Math.random() - 0.5) * intensity}px`,
      y: `${(Math.random() - 0.5) * intensity}px`,
      skewX: `${(Math.random() - 0.5) * 5}deg`,
      ease: 'none',
    });
  }

  tl.to(element, {
    duration: 0,
    x: 0,
    y: 0,
    skewX: 0,
  });

  return tl;
}

// 3D flip reveal
export function animate3DFlip(element) {
  const split = new SplitType(element, { types: 'words' });

  split.words.forEach((word) => {
    word.style.display = 'inline-block';
    word.style.perspective = '1000px';
  });

  gsap.from(split.words, {
    opacity: 0,
    rotateX: -90,
    transformOrigin: 'bottom center',
    stagger: 0.1,
    duration: 1,
    ease: 'power4.out',
  });

  return split;
}

// Blur-in animation
export function animateBlurIn(element, options = {}) {
  const { duration = 1, blur = 20, delay = 0 } = options;

  return gsap.from(element, {
    opacity: 0,
    filter: `blur(${blur}px)`,
    duration,
    delay,
    ease: 'power3.out',
  });
}

// Slide split reveal
export function animateSlideSplit(element) {
  const split = new SplitType(element, { types: 'lines' });

  // Wrap each line in overflow container
  split.lines.forEach((line) => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  gsap.from(split.lines, {
    y: '100%',
    stagger: 0.1,
    duration: 1,
    ease: 'power4.out',
  });

  return split;
}

// Cleanup function to revert SplitType
export function cleanupSplitText(split) {
  if (split && split.revert) {
    split.revert();
  }
}
