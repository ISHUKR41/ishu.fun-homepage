// components/sections/FinalCTA/FinalCTA.jsx
// Ultra-premium final conversion section — Apple/Framer inspired
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, WhatsappLogo, Star, Lightning, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import styles from './FinalCTA.module.css';

const perks = [
  '100% Free — No credit card',
  'No signup required',
  'Works on all devices',
  'Made for India 🇮🇳',
];

function FloatingOrbs() {
  return (
    <div className={styles.orbs} aria-hidden="true">
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb3}`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
    </div>
  );
}

function SparkleField() {
  return (
    <div className={styles.sparkles} aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={styles.sparkle}
          style={{
            '--x': `${5 + Math.random() * 90}%`,
            '--y': `${5 + Math.random() * 90}%`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${2 + Math.random() * 4}s`,
            '--size': `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const primaryRef = useRef(null);

  useEffect(() => {
    const btn = primaryRef.current;
    if (!btn || window.innerWidth < 1024) return;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.02)`;
    };

    const handleLeave = () => {
      btn.style.transform = '';
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className={styles.section} id="final-cta">
      <FloatingOrbs />
      <SparkleField />

      {/* SVG grid overlay */}
      <div className={styles.gridOverlay} aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated border */}
          <div className={styles.cardBorder} />

          {/* Top badge */}
          <motion.div
            className={styles.topBadge}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star size={14} weight="fill" color="var(--accent-gold)" />
            <span>Trusted by 50,00,000+ Students</span>
            <Star size={14} weight="fill" color="var(--accent-gold)" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Ready to Get Your{' '}
            <span className={styles.headlineHighlight}>Results First?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className={styles.subline}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join millions of Indians who get JEE, NEET, SSC, UPSC results{' '}
            <strong>5 minutes before anyone else</strong>. Zero cost. Zero signup.
          </motion.p>

          {/* Quote */}
          <motion.div
            className={styles.quote}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Lightning size={16} color="var(--accent-violet)" weight="fill" />
            "ishu.fun ne mera result sabse pehle dikhaya" — Rahul, JEE 2026 Topper
          </motion.div>

          {/* CTAs */}
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            <a ref={primaryRef} href="/results" className={styles.primaryBtn}>
              <Rocket size={20} weight="fill" />
              Get Started — It's Free
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#whatsapp-cta" className={styles.secondaryBtn}>
              <WhatsappLogo size={20} weight="fill" />
              Get WhatsApp Alerts
            </a>
          </motion.div>

          {/* Perks */}
          <motion.div
            className={styles.perks}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
          >
            {perks.map((perk, i) => (
              <span key={i} className={styles.perk}>
                <CheckCircle size={13} weight="fill" color="var(--accent-emerald)" />
                {perk}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
