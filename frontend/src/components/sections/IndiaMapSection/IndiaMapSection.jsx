// components/sections/IndiaMapSection/IndiaMapSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from '@phosphor-icons/react';
import { indianStates } from '../../../constants/indianStates';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import styles from './IndiaMapSection.module.css';

const topStates = [...indianStates].sort((a, b) => b.vacancies - a.vacancies).slice(0, 8);

export default function IndiaMapSection() {
  const [hoveredState, setHoveredState] = useState(null);
  const isDesktop = useIsDesktop();

  return (
    <section className={styles.section} id="india-map">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">ALL INDIA COVERAGE</span>
          <h2 className="section-title">Serving Students Across Every State of India</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>From Jammu & Kashmir to Kanyakumari — we cover every state exam, PSC, and board.</p>
        </motion.div>

        <div className={styles.content}>
          {/* State Chips Grid */}
          <div className={styles.stateGrid}>
            {topStates.map((state, i) => (
              <motion.a
                key={state.code}
                href={`/results?state=${state.code}`}
                className={styles.stateChip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -3 }}
                onHoverStart={() => setHoveredState(state)}
                onHoverEnd={() => setHoveredState(null)}
              >
                <MapPin size={16} weight="fill" style={{ color: 'var(--accent-saffron)' }} />
                <div className={styles.chipContent}>
                  <span className={styles.chipName}>{state.name}</span>
                  <span className={styles.chipCount}>{state.vacancies.toLocaleString('en-IN')} Jobs</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Sidebar stats */}
          {isDesktop && (
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>🔥 Most Active States</h3>
              {topStates.slice(0, 5).map((state, i) => (
                <div key={state.code} className={styles.barRow}>
                  <span className={styles.barLabel}>{state.name}</span>
                  <div className={styles.barTrack}>
                    <motion.div
                      className={styles.barFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(state.vacancies / topStates[0].vacancies) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <span className={styles.barValue}>{state.vacancies.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* All states scroll */}
        <div className={styles.allStatesScroll}>
          {indianStates.map(state => (
            <a key={state.code} href={`/results?state=${state.code}`} className={styles.miniChip}>
              {state.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
