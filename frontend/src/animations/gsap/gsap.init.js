// animations/gsap/gsap.init.js
// GSAP Plugin Registration + Lenis Smooth Scroll Bridge
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Global ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 85%',
});

export { gsap, ScrollTrigger };
