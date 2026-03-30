// components/sections/FinalCTA/FinalCTA.jsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, WhatsappLogo, Star, Lightning } from '@phosphor-icons/react';
import styles from './FinalCTA.module.css';

function SparkleEffect() {
  return (
    <div className={styles.sparkles}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={styles.sparkle}
          style={{
            '--x': `${10 + Math.random() * 80}%`,
            '--y': `${10 + Math.random() * 80}%`,
            '--delay': `${Math.random() * 4}s`,
            '--duration': `${2 + Math.random() * 3}s`,
            '--size': `${3 + Math.random() * 5}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const btnRef = useRef(null);

  // Magnetic button effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || window.innerWidth < 1024) return;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
    };

    const handleLeave = () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
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
      {/* Background effects */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <SparkleEffect />
      <div className={styles.gridPattern} />

      <div className={`container ${styles.contentWrap}`}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative icons */}
          <div className={styles.floatingIcons}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Star size={24} weight="fill" color="var(--accent-gold)" />
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
              <Lightning size={20} weight="fill" color="var(--accent-violet)" />
            </motion.div>
          </div>

          <span className={styles.overline}>✦ Ready to Level Up Your Exam Prep?</span>
          <h2 className={styles.headline}>
            Join <span className="gradient-text-animated">50,00,000+</span> Students on India's Fastest Platform
          </h2>
          <p className={styles.quote}>
            "ishu.fun ne mera result sabse pehle dikhaya" — Rahul, JEE 2026 Topper
          </p>

          <div className={styles.buttons}>
            <a ref={btnRef} href="/results" className={styles.primaryBtn}>
              <Rocket size={20} weight="fill" /> Get Started — It's Free
            </a>
            <a href="#whatsapp-cta" className={styles.secondaryBtn}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp Alerts
            </a>
          </div>

          {/* Trust strip */}
          <div className={styles.trustStrip}>
            <span>🔒 No Signup Required</span>
            <span>⚡ 100% Free Forever</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
