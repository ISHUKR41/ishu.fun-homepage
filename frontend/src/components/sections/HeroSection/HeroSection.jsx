// components/sections/HeroSection/HeroSection.jsx
// Ultra-premium hero inspired by Apple, Vercel, Linear, Framer
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { MagnifyingGlass, ArrowRight, WhatsappLogo, CaretDown, Lightning, Users, FilePdf, Rocket } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import { useDevicePerformance } from '../../../hooks/useDevicePerformance';
import styles from './HeroSection.module.css';

const HeroCanvas3D = lazy(() => import('./HeroCanvas3D'));
const HeroCanvas = lazy(() => import('./HeroCanvas'));

const rotatingWords = [
  'Sarkari Results',
  'Govt Job Alerts',
  'Free PDF Tools',
  'Exam Calendars',
  'UPSC Prelims',
  'Railway NTPC',
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={styles.rotatingContainer} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={styles.rotatingWord}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const floatingStats = [
  { icon: Users, value: '50L+', label: 'Students', color: '#6C63FF', top: '12%', right: '8%' },
  { icon: Lightning, value: '5min', label: 'Result Speed', color: '#00D2FF', top: '42%', right: '2%' },
  { icon: FilePdf, value: '25+', label: 'PDF Tools', color: '#00C896', bottom: '22%', right: '14%' },
  { icon: Rocket, value: '99.9%', label: 'Uptime', color: '#FF6B35', top: '68%', right: '36%' },
];

function FloatCard({ stat, index }) {
  const Icon = stat.icon;
  const posStyle = {};
  if (stat.top) posStyle.top = stat.top;
  if (stat.bottom) posStyle.bottom = stat.bottom;
  if (stat.right) posStyle.right = stat.right;
  if (stat.left) posStyle.left = stat.left;

  return (
    <motion.div
      className={styles.floatCard}
      style={posStyle}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.15, duration: 0.6, type: 'spring', stiffness: 200 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
      >
        <div className={styles.floatCardInner} style={{ '--card-color': stat.color }}>
          <div className={styles.floatCardIcon} style={{ background: `${stat.color}18`, color: stat.color }}>
            <Icon size={16} weight="duotone" />
          </div>
          <div>
            <div className={styles.floatCardValue} style={{ color: stat.color }}>{stat.value}</div>
            <div className={styles.floatCardLabel}>{stat.label}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const searchSuggestions = ['JEE Mains Result 2026', 'SSC CGL 2026', 'UPSC Prelims', 'Railway NTPC', 'NEET Result'];

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  const { isLowEnd } = useDevicePerformance();
  const use3D = isDesktop && !isLowEnd; // Enable 3D for high-performance devices
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  // Typewriter for search placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex(prev => (prev + 1) % searchSuggestions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // GSAP headline reveal with word-level stagger
  useEffect(() => {
    if (!headlineRef.current) return;
    const ctx = gsap.context(() => {
      const words = headlineRef.current.querySelectorAll('.hero-word');
      if (words.length === 0) return;

      gsap.fromTo(words,
        { opacity: 0, y: 60, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.06,
          duration: 0.9,
          delay: 0.3,
          ease: 'back.out(1.4)',
          clearProps: 'transform,rotateX',
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Parallax on hero bg orbs — throttled for smooth performance
  useEffect(() => {
    if (!heroRef.current || !isDesktop) return;
    const orbs = heroRef.current.querySelectorAll('.' + styles.glowOrb);
    let rafId = null;
    let targetX = 0, targetY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 28;
      targetY = (e.clientY / window.innerHeight - 0.5) * 18;
    };

    // Smooth orb movement via RAF — not per-mousemove gsap.to call
    const animateOrbs = () => {
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.35;
        const cx = parseFloat(orb.dataset.cx || 0);
        const cy = parseFloat(orb.dataset.cy || 0);
        const nx = cx + (targetX * factor - cx) * 0.04;
        const ny = cy + (targetY * factor - cy) * 0.04;
        orb.dataset.cx = nx;
        orb.dataset.cy = ny;
        orb.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
      });
      rafId = requestAnimationFrame(animateOrbs);
    };

    rafId = requestAnimationFrame(animateOrbs);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  const headlineWords = ["India's", 'Fastest', 'Platform', 'for'];

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      {/* SVG grid background */}
      <div className={styles.gridBg} aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Animated mesh background */}
      <div className={styles.meshBg} />
      <div className={styles.grainOverlay} />

      {/* Glow orbs */}
      <div className={`${styles.glowOrb} ${styles.orbViolet}`} />
      <div className={`${styles.glowOrb} ${styles.orbCyan}`} />
      <div className={`${styles.glowOrb} ${styles.orbEmerald}`} />
      <div className={`${styles.glowOrb} ${styles.orbSaffron}`} />

      <div className={`container ${styles.content}`}>
        {/* Left Side */}
        <div className={styles.left}>
          {/* Badge pill */}
          <motion.div
            className={styles.badgePill}
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
          >
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>✦ India's #1 Student Platform</span>
            <span className={styles.badgeLive}>LIVE</span>
          </motion.div>

          {/* Headline — word-level animated */}
          <h1 className={styles.headline} ref={headlineRef}>
            {headlineWords.map((word, i) => (
              <span key={i} className={`hero-word ${styles.headlineWord}`}>
                {word}{' '}
              </span>
            ))}
            <RotatingWord />
          </h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Results · Jobs · Free PDF Tools · News — all in one place.
            <br />
            Built for India's <strong>50 lakh+</strong> competitive exam aspirants.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className={`${styles.searchWrap} ${searchFocused ? styles.searchFocused : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <MagnifyingGlass size={20} className={styles.searchIcon} weight="bold" />
            <input
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
              className={styles.searchInput}
              aria-label="Search exam results, jobs, tools"
            />
            {!searchValue && (
              <span className={styles.searchPlaceholder} aria-hidden="true">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={suggestionIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    Search "{searchSuggestions[suggestionIndex]}"
                  </motion.span>
                </AnimatePresence>
              </span>
            )}
            <button className={styles.searchBtn}>
              Search <ArrowRight size={16} weight="bold" />
            </button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="/results" className={styles.primaryBtn}>
              <Rocket size={18} weight="fill" />
              Explore Results
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#whatsapp-cta" className={styles.whatsappBtn}>
              <WhatsappLogo size={20} weight="fill" />
              Get WhatsApp Alerts
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className={styles.socialProof}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className={styles.avatarStack}>
              {['R', 'P', 'A', 'M', 'S'].map((char, i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{
                    background: ['#6C63FF','#00D2FF','#FF6B35','#00C896','#FFD700'][i],
                    zIndex: 5 - i,
                  }}
                >
                  {char}
                </div>
              ))}
            </div>
            <div className={styles.proofContent}>
              <span className={styles.proofMain}>
                <strong>50,00,000+</strong> students trust ishu.fun
              </span>
              <span className={styles.proofSub}>⭐ 4.9/5 Rating · 🇮🇳 All India</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side — 3D WebGL Canvas */}
        {isDesktop && (
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.heroVisualWrap}>
              {/* Floating stat cards around the visual */}
              {floatingStats.map((stat, i) => (
                <FloatCard key={i} stat={stat} index={i} />
              ))}

              {/* 3D Canvas */}
              <div className={styles.heroVisual}>
                <Suspense fallback={
                  <div className={styles.canvasLoader}>
                    <div className={styles.loaderSpinner} />
                    <span>Loading 3D Scene...</span>
                  </div>
                }>
                  {use3D ? <HeroCanvas3D /> : <HeroCanvas />}
                </Suspense>
              </div>

              {/* Live indicator */}
              <div className={styles.liveIndicator}>
                <span className={styles.liveDot} />
                Results Updated Live
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
