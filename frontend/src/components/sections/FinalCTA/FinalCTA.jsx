// components/sections/FinalCTA/FinalCTA.jsx
import { motion } from 'framer-motion';
import { Rocket, WhatsappLogo } from '@phosphor-icons/react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} id="final-cta">
      <div className={styles.bgGlow} />
      <div className={`container ${styles.content}`}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={styles.inner}>
          <span className={styles.overline}>✦ Ready to Level Up Your Exam Prep?</span>
          <h2 className={styles.headline}>Join <span className="gradient-text-static">50,00,000+</span> Students on India's Fastest Platform</h2>
          <p className={styles.quote}>"ishu.fun ne mera result sabse pehle dikhaya" — Rahul, JEE 2026 Topper</p>
          <div className={styles.buttons}>
            <a href="/results" className={styles.primaryBtn}>
              <Rocket size={20} weight="fill" /> Get Started — It's Free
            </a>
            <a href="#whatsapp-cta" className={styles.secondaryBtn}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp Alerts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
