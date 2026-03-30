// animations/gsap/gsap.init.js
// GSAP Plugin Registration + Advanced Setup
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  TextPlugin,
  Flip,
  Observer,
  MotionPathPlugin
);

// Global GSAP defaults
gsap.defaults({
  ease: 'power2.out',
  duration: 0.8,
});

// Global ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 88%',
});

// Better performance on mobile
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
});

export { gsap, ScrollTrigger, Flip, Observer };
