// components/sections/HeroSection/HeroCanvas.jsx
// Rich CSS-based animated India-themed visual with orbiting data nodes
// No Three.js dependency — works on all devices, pure CSS/SVG animations

import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroCanvas.module.css';

const cities = [
  { name: 'Delhi', angle: 0, delay: 0 },
  { name: 'Mumbai', angle: 72, delay: 0.5 },
  { name: 'Bengaluru', angle: 144, delay: 1.0 },
  { name: 'Kolkata', angle: 216, delay: 1.5 },
  { name: 'Chennai', angle: 288, delay: 2.0 },
];

const stats = [
  { label: '50L+', sub: 'Students', color: '#6C63FF' },
  { label: '2L+', sub: 'Results', color: '#00D2FF' },
  { label: '99.9%', sub: 'Uptime', color: '#00C896' },
];

const HeroCanvas = memo(function HeroCanvas() {
  return (
    <div className={styles.canvas}>
      {/* Animated glow orbs */}
      <div className={`${styles.glowOrb} ${styles.glow1}`} />
      <div className={`${styles.glowOrb} ${styles.glow2}`} />
      <div className={`${styles.glowOrb} ${styles.glow3}`} />

      {/* Orbit rings */}
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring3}`} />

      {/* Connection lines (SVG) */}
      <svg className={styles.connections} viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGradHero" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00C896" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Animated connection lines */}
        <line x1="250" y1="250" x2="120" y2="100" stroke="url(#lineGradHero)" strokeWidth="0.5" className={styles.connectionLine} />
        <line x1="250" y1="250" x2="380" y2="120" stroke="url(#lineGradHero)" strokeWidth="0.5" className={styles.connectionLine} style={{ animationDelay: '0.5s' }} />
        <line x1="250" y1="250" x2="400" y2="350" stroke="url(#lineGradHero)" strokeWidth="0.5" className={styles.connectionLine} style={{ animationDelay: '1s' }} />
        <line x1="250" y1="250" x2="100" y2="380" stroke="url(#lineGradHero)" strokeWidth="0.5" className={styles.connectionLine} style={{ animationDelay: '1.5s' }} />
        <line x1="250" y1="250" x2="250" y2="80" stroke="url(#lineGradHero)" strokeWidth="0.5" className={styles.connectionLine} style={{ animationDelay: '2s' }} />
      </svg>

      {/* Central globe */}
      <motion.div
        className={styles.globe}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className={styles.globeInner}>
          <span className={styles.globeEmoji}>🇮🇳</span>
        </div>
        <div className={styles.globePulse} />
        <div className={styles.globePulse2} />
      </motion.div>

      {/* Orbiting city nodes */}
      {cities.map((city, i) => (
        <motion.div
          key={city.name}
          className={styles.cityNode}
          style={{
            '--angle': `${city.angle}deg`,
            '--delay': `${i * 3}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + city.delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className={styles.nodeDot} />
          <span className={styles.nodeLabel}>{city.name}</span>
        </motion.div>
      ))}

      {/* Floating stat cards */}
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={styles.floatCard}
          style={{
            '--card-top': `${20 + i * 30}%`,
            '--card-side': i % 2 === 0 ? '5%' : '75%',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 + i * 0.3, duration: 0.5 }}
        >
          <span className={styles.floatCardValue} style={{ color: stat.color }}>{stat.label}</span>
          <span className={styles.floatCardLabel}>{stat.sub}</span>
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${2 + Math.random() * 4}px`,
            '--duration': `${3 + Math.random() * 4}s`,
            '--delay': `${Math.random() * 3}s`,
            '--opacity': `${0.15 + Math.random() * 0.35}`,
          }}
        />
      ))}
    </div>
  );
});

export default HeroCanvas;
