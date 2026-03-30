// components/sections/HeroSection/HeroSection.jsx
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlass, ArrowRight, WhatsappLogo, CaretDown } from '@phosphor-icons/react';
import GradientText from '../../ui/GradientText/GradientText';
import MagneticButton from '../../ui/Button/MagneticButton';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import { useDevicePerformance } from '../../../hooks/useDevicePerformance';
import styles from './HeroSection.module.css';

// Dynamic import based on device capability
const HeroCanvas3D = lazy(() => import('./HeroCanvas3D'));
const HeroCanvas = lazy(() => import('./HeroCanvas'));

const typewriterWords = ['JEE Mains Result', 'NEET 2026', 'SSC CGL', 'Railway Vacancy', 'UPSC Prelims', 'Free PDF Tools'];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[index];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className={styles.typewriter}>
      Looking for → <span className={styles.typewriterText}>{text}</span>
      <span className={styles.cursor}>|</span>
    </span>
  );
}

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  const devicePerformance = useDevicePerformance();
  const use3D = isDesktop && devicePerformance === 'high';
  const words = "India's Fastest Platform for Sarkari Results & Government Job Alerts".split(' ');

  return (
    <section className={styles.hero} id="hero">
      {/* tsParticles Background */}
      <ParticlesBackground density="low" />

      {/* Background mesh */}
      <div className={styles.meshBg} />
      <div className={styles.grainOverlay} />

      {/* Glow orbs */}
      <div className={`${styles.glowOrb} ${styles.orbViolet}`} />
      <div className={`${styles.glowOrb} ${styles.orbCyan}`} />
      <div className={`${styles.glowOrb} ${styles.orbEmerald}`} />

      <div className={`container ${styles.content}`}>
        {/* Left Side */}
        <div className={styles.left}>
          {/* Overline */}
          <motion.div
            className={styles.overline}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <span className={styles.overlineDot} />
            ✦ India's #1 Student Platform
          </motion.div>

          {/* Headline */}
          <h1 className={styles.headline}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                className={styles.word}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.0 + i * 0.06,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {(word === 'Sarkari' || word === 'Results' || word === 'Government' || word === 'Job') ? (
                  <GradientText animate={false}>{word}</GradientText>
                ) : word}{' '}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            Results · Jobs · Free PDF Tools · News — all in one place.
            <br />Built for India's 50 lakh+ competitive exam aspirants.
          </motion.p>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.5 }}
          >
            <Typewriter />
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className={styles.searchBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            <MagnifyingGlass size={22} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search results, jobs, tools..."
              className={styles.searchInput}
              aria-label="Search results, jobs, tools"
            />
            <button className={styles.searchBtn}>Search</button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.4 }}
          >
            <MagneticButton className={styles.primaryBtn}>
              <a href="/results" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
                Explore Results <ArrowRight size={18} weight="bold" />
              </a>
            </MagneticButton>
            <a href="#whatsapp-cta" className={styles.whatsappBtn}>
              <WhatsappLogo size={20} weight="fill" /> Get WhatsApp Alerts
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className={styles.socialProof}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.4 }}
          >
            <div className={styles.avatarStack}>
              {[1,2,3,4].map(i => (
                <div key={i} className={styles.avatar} style={{
                  background: ['var(--accent-violet)','var(--accent-cyan)','var(--accent-saffron)','var(--accent-emerald)'][i-1]
                }}>
                  {['R','P','A','M'][i-1]}
                </div>
              ))}
            </div>
            <span className={styles.proofText}>
              <strong>50L+ Students</strong> · ⭐ 4.9/5 Rating · 🇮🇳 All India
            </span>
          </motion.div>
        </div>

        {/* Right Side — 3D WebGL Canvas or CSS Fallback */}
        {isDesktop && (
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
          >
            <div className={styles.heroVisual}>
              <Suspense fallback={
                <div className={styles.canvasLoader}>
                  <div className={styles.loaderSpinner} />
                </div>
              }>
                {use3D ? <HeroCanvas3D /> : <HeroCanvas />}
              </Suspense>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <CaretDown size={20} className={styles.scrollArrow} />
      </motion.div>
    </section>
  );
}
