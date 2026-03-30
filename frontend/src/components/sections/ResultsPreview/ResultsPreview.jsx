// components/sections/ResultsPreview/ResultsPreview.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Users, Link as LinkIcon, Circle } from '@phosphor-icons/react';
import { resultCalendar } from '../../../constants/examCalendar';
import { formatDate } from '../../../utils/formatNumber';
import CountdownTimer from '../../ui/Countdown/CountdownTimer';
import styles from './ResultsPreview.module.css';

const categories = ['All', 'JEE', 'NEET', 'UPSC', 'SSC', 'Railway', 'Banking'];

const statusColors = {
  live: { bg: 'rgba(0,200,150,0.1)', color: '#00C896', label: '🟢 LIVE' },
  new: { bg: 'rgba(255,107,53,0.1)', color: '#FF6B35', label: '🆕 NEW' },
  upcoming: { bg: 'rgba(108,99,255,0.1)', color: '#6C63FF', label: '⏳ UPCOMING' },
};

const categoryColors = {
  jee: 'var(--accent-violet)', neet: 'var(--accent-emerald)', upsc: 'var(--accent-saffron)',
  ssc: 'var(--accent-cyan)', railway: 'var(--accent-rose)', banking: 'var(--accent-gold)',
};

// Result Card Component with 3D tilt and countdown
function ResultCard({ result, status, catColor }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.innerWidth < 1024) return;

    let VanillaTilt;
    import('vanilla-tilt').then(mod => {
      VanillaTilt = mod.default;
      VanillaTilt.init(card, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.1,
        scale: 1.02,
      });
    });

    return () => {
      if (card?.vanillaTilt) card.vanillaTilt.destroy();
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.cardTop}>
        <span className={styles.statusBadge} style={{ background: status.bg, color: status.color }}>
          {result.status === 'live' && <Circle size={8} weight="fill" className={styles.pulseDot} />}
          {status.label}
        </span>
        <span className={styles.catBadge} style={{ background: `${catColor}15`, color: catColor }}>
          {result.category.toUpperCase()}
        </span>
      </div>
      <h3 className={styles.cardTitle}>{result.examName}</h3>

      {result.status === 'upcoming' && result.releaseDate && (
        <div className={styles.countdownWrap}>
          <CountdownTimer targetDate={result.releaseDate} />
        </div>
      )}

      <div className={styles.cardMeta}>
        <span><Calendar size={14} /> {result.status === 'upcoming' ? `Expected: ${formatDate(result.releaseDate)}` : `Released: ${formatDate(result.releaseDate)}`}</span>
        {result.totalAppeared && <span><Users size={14} /> {result.totalAppeared} Appeared</span>}
        {result.directLink && <span><LinkIcon size={14} /> Direct Link Available</span>}
      </div>
      <div className={styles.cardActions}>
        <a href={`/results/${result.category}`} className={styles.checkBtn} style={{ background: `${catColor}15`, color: catColor }}>
          Check Result <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function ResultsPreview() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? resultCalendar : resultCalendar.filter(r => r.category === active.toLowerCase());

  return (
    <section className={styles.section} id="results-preview">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="overline">LIVE RESULTS</span>
            <h2 className="section-title">Latest Sarkari Results</h2>
          </div>
          <a href="/results" className={styles.viewAll}>View All Results <ArrowRight size={16} /></a>
        </div>

        <div className={styles.tabs}>
          {categories.map(cat => (
            <button key={cat} className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((result) => {
              const status = statusColors[result.status];
              const catColor = categoryColors[result.category] || 'var(--accent-violet)';
              return (
                <ResultCard
                  key={result.id}
                  result={result}
                  status={status}
                  catColor={catColor}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
