// components/sections/WhatsAppCTA/WhatsAppCTA.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo, CheckCircle, Check } from '@phosphor-icons/react';
import styles from './WhatsAppCTA.module.css';

const examOptions = ['JEE', 'NEET', 'UPSC', 'SSC', 'Railway', 'Banking', 'State PCS'];
const chatMessages = [
  { text: '✅ JEE Mains 2026 Result OUT!', time: '10:32 AM' },
  { text: '🔗 Check result: ishu.fun/results/jee-mains-2026', time: '10:32 AM' },
  { text: '📋 Your Score: Available Now', time: '10:33 AM' },
];

export default function WhatsAppCTA() {
  const [phone, setPhone] = useState('');
  const [selectedExams, setSelectedExams] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleExam = (exam) => {
    setSelectedExams(prev => prev.includes(exam) ? prev.filter(e => e !== exam) : [...prev, exam]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!/^[6-9]\d{9}$/.test(phone)) { setError('Please enter a valid 10-digit Indian mobile number'); return; }
    if (selectedExams.length === 0) { setError('Please select at least one exam'); return; }
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="whatsapp-cta">
      <div className={styles.glowBg} />
      <div className={`container ${styles.content}`}>
        <motion.div className={styles.left} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="overline">📲 FREE ALERTS</span>
          <h2 className="section-title">Get Exam Results Straight to Your WhatsApp</h2>
          <p className={styles.sub}>Join 10,00,000+ students. Zero spam. Cancel anytime. 100% Free.</p>

          <ul className={styles.benefits}>
            <li><Check size={18} weight="bold" style={{ color: 'var(--accent-emerald)' }} /> Instant result alerts (within seconds)</li>
            <li><Check size={18} weight="bold" style={{ color: 'var(--accent-emerald)' }} /> Upcoming exam reminders (7 days before)</li>
            <li><Check size={18} weight="bold" style={{ color: 'var(--accent-emerald)' }} /> Admit card and answer key notifications</li>
          </ul>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" className={styles.form} onSubmit={handleSubmit} exit={{ opacity: 0, y: -20 }}>
                <div className={styles.phoneRow}>
                  <span className={styles.prefix}>+91</span>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Enter WhatsApp number" className={styles.phoneInput} maxLength={10} />
                </div>

                <div className={styles.examChips}>
                  {examOptions.map(exam => (
                    <button key={exam} type="button" className={`${styles.chip} ${selectedExams.includes(exam) ? styles.chipActive : ''}`} onClick={() => toggleExam(exam)}>
                      {selectedExams.includes(exam) && <Check size={12} weight="bold" />} {exam}
                    </button>
                  ))}
                </div>

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.submitBtn}>
                  <WhatsappLogo size={20} weight="fill" /> Subscribe Free →
                </button>
              </motion.form>
            ) : (
              <motion.div key="success" className={styles.success} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle size={64} weight="fill" color="var(--accent-emerald)" />
                <h3>You're Subscribed! 🎉</h3>
                <p>You'll receive a confirmation on WhatsApp shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div className={styles.right} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.whatsappHeader}>
                <div className={styles.waAvatar}>i</div>
                <div><div className={styles.waName}>ishu.fun</div><div className={styles.waStatus}>online</div></div>
              </div>
              <div className={styles.chatArea}>
                {chatMessages.map((msg, i) => (
                  <motion.div key={i} className={styles.message} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.4 }}>
                    <span className={styles.msgText}>{msg.text}</span>
                    <span className={styles.msgTime}>{msg.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
