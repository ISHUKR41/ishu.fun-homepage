// components/sections/IndiaMapSection/IndiaMapSection.jsx
// Real SVG India map with interactive state highlights
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Users, Trophy } from '@phosphor-icons/react';
import { indianStates } from '../../../constants/indianStates';
import styles from './IndiaMapSection.module.css';

const topStates = [...indianStates].sort((a, b) => b.vacancies - a.vacancies).slice(0, 10);

// Simplified India SVG paths (major states)
const indiaSvgData = {
  viewBox: '0 0 400 500',
  states: [
    { id: 'RJ', name: 'Rajasthan', d: 'M 80,100 L 160,90 L 180,140 L 170,190 L 100,200 L 70,160 Z', cx: 125, cy: 145 },
    { id: 'GJ', name: 'Gujarat', d: 'M 40,160 L 80,140 L 100,200 L 80,230 L 40,240 L 20,200 Z', cx: 60, cy: 195 },
    { id: 'MP', name: 'Madhya Pradesh', d: 'M 160,140 L 240,130 L 260,180 L 240,220 L 160,230 L 140,190 Z', cx: 200, cy: 180 },
    { id: 'MH', name: 'Maharashtra', d: 'M 100,200 L 180,195 L 200,240 L 190,290 L 130,300 L 80,270 L 70,230 Z', cx: 140, cy: 248 },
    { id: 'UP', name: 'Uttar Pradesh', d: 'M 170,100 L 260,90 L 280,140 L 270,175 L 180,180 L 160,140 Z', cx: 220, cy: 135 },
    { id: 'HR', name: 'Haryana', d: 'M 140,70 L 180,65 L 185,100 L 160,105 L 135,95 Z', cx: 160, cy: 85 },
    { id: 'PB', name: 'Punjab', d: 'M 120,50 L 155,45 L 160,75 L 140,80 L 115,70 Z', cx: 138, cy: 62 },
    { id: 'HP', name: 'Himachal Pradesh', d: 'M 155,30 L 195,25 L 200,60 L 175,70 L 150,60 Z', cx: 175, cy: 47 },
    { id: 'UK', name: 'Uttarakhand', d: 'M 195,50 L 235,45 L 240,85 L 210,90 L 190,80 Z', cx: 215, cy: 67 },
    { id: 'DL', name: 'Delhi', d: 'M 158,88 L 168,85 L 172,96 L 162,99 Z', cx: 165, cy: 92 },
    { id: 'BR', name: 'Bihar', d: 'M 260,110 L 310,105 L 315,145 L 295,160 L 255,155 L 245,130 Z', cx: 283, cy: 133 },
    { id: 'JH', name: 'Jharkhand', d: 'M 255,155 L 310,150 L 315,195 L 285,210 L 250,200 L 240,175 Z', cx: 278, cy: 180 },
    { id: 'WB', name: 'West Bengal', d: 'M 305,120 L 340,115 L 355,170 L 340,220 L 310,225 L 300,175 L 308,145 Z', cx: 325, cy: 170 },
    { id: 'OD', name: 'Odisha', d: 'M 270,200 L 325,195 L 340,245 L 315,280 L 270,270 L 250,235 Z', cx: 295, cy: 238 },
    { id: 'CG', name: 'Chhattisgarh', d: 'M 200,200 L 265,195 L 278,250 L 255,290 L 200,285 L 180,250 Z', cx: 230, cy: 245 },
    { id: 'TG', name: 'Telangana', d: 'M 170,280 L 230,275 L 245,320 L 220,355 L 175,350 L 155,315 Z', cx: 200, cy: 315 },
    { id: 'AP', name: 'Andhra Pradesh', d: 'M 175,340 L 235,335 L 260,385 L 235,420 L 185,425 L 155,390 Z', cx: 207, cy: 380 },
    { id: 'KA', name: 'Karnataka', d: 'M 110,300 L 175,295 L 185,355 L 160,395 L 115,400 L 85,365 L 90,325 Z', cx: 138, cy: 348 },
    { id: 'KL', name: 'Kerala', d: 'M 120,390 L 155,385 L 160,440 L 135,470 L 110,455 L 105,420 Z', cx: 133, cy: 428 },
    { id: 'TN', name: 'Tamil Nadu', d: 'M 155,385 L 220,378 L 230,435 L 200,465 L 160,465 L 140,435 Z', cx: 185, cy: 425 },
    { id: 'GA', name: 'Goa', d: 'M 95,315 L 115,310 L 118,332 L 100,338 Z', cx: 107, cy: 324 },
    { id: 'AS', name: 'Assam', d: 'M 340,115 L 380,108 L 385,140 L 365,155 L 335,148 Z', cx: 360, cy: 132 },
  ],
};

function IndiaSVGMap({ hoveredState, setHoveredState }) {
  const getStateColor = (stateId) => {
    const found = topStates.find(s => s.code === stateId);
    if (!found) return 'rgba(108, 99, 255, 0.08)';
    const rank = topStates.indexOf(found);
    const opacity = 0.35 - (rank * 0.025);
    return `rgba(108, 99, 255, ${Math.max(0.08, opacity)})`;
  };

  return (
    <div className={styles.svgMapWrap}>
      <svg
        viewBox={indiaSvgData.viewBox}
        className={styles.indiaSvg}
        aria-label="India map showing active states"
      >
        {indiaSvgData.states.map(state => {
          const isTop = topStates.some(s => s.code === state.id);
          const isHovered = hoveredState?.code === state.id;
          return (
            <g key={state.id}>
              <path
                d={state.d}
                fill={isHovered ? 'rgba(108, 99, 255, 0.5)' : getStateColor(state.id)}
                stroke="rgba(108, 99, 255, 0.3)"
                strokeWidth="1"
                style={{ cursor: 'pointer', transition: 'fill 0.2s ease' }}
                onMouseEnter={() => setHoveredState(topStates.find(s => s.code === state.id) || null)}
                onMouseLeave={() => setHoveredState(null)}
              />
              {isTop && (
                <circle
                  cx={state.cx}
                  cy={state.cy}
                  r="3"
                  fill={isHovered ? '#6C63FF' : 'rgba(108, 99, 255, 0.6)'}
                  style={{ transition: 'fill 0.2s ease' }}
                />
              )}
            </g>
          );
        })}
        {/* India outline decorative border */}
        <rect x="2" y="2" width="396" height="496" fill="none" stroke="rgba(108,99,255,0.05)" strokeWidth="2" rx="8" />
      </svg>

      {/* Tooltip */}
      {hoveredState && (
        <div className={styles.mapTooltip}>
          <div className={styles.tooltipName}>{hoveredState.name}</div>
          <div className={styles.tooltipStats}>
            <span>{hoveredState.vacancies?.toLocaleString('en-IN')} Jobs</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function IndiaMapSection() {
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <section className={styles.section} id="india-map">
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="overline">ALL INDIA COVERAGE</span>
          <h2 className="section-title">Serving Every Corner of India</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '520px' }}>
            From J&K to Kanyakumari — 28 states, 8 UTs, 200+ exam bodies covered.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* SVG India Map */}
          <motion.div
            className={styles.mapSide}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <IndiaSVGMap hoveredState={hoveredState} setHoveredState={setHoveredState} />
          </motion.div>

          {/* Right side: states list */}
          <div className={styles.rightSide}>
            {/* Summary stats */}
            <div className={styles.statRow}>
              <div className={styles.statBox}>
                <Users size={20} color="var(--accent-violet)" weight="duotone" />
                <span className={styles.statNum}>28+</span>
                <span className={styles.statLabel}>States Covered</span>
              </div>
              <div className={styles.statBox}>
                <Trophy size={20} color="var(--accent-saffron)" weight="duotone" />
                <span className={styles.statNum}>200+</span>
                <span className={styles.statLabel}>Exam Bodies</span>
              </div>
              <div className={styles.statBox}>
                <MapPin size={20} color="var(--accent-emerald)" weight="duotone" />
                <span className={styles.statNum}>2L+</span>
                <span className={styles.statLabel}>Active Jobs</span>
              </div>
            </div>

            {/* Top states */}
            <h3 className={styles.topStatesTitle}>🔥 Top States by Job Vacancies</h3>
            <div className={styles.statesList}>
              {topStates.slice(0, 8).map((state, i) => (
                <motion.a
                  key={state.code}
                  href={`/results?state=${state.code}`}
                  className={`${styles.stateRow} ${hoveredState?.code === state.code ? styles.stateRowActive : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <span className={styles.stateRank}>#{i + 1}</span>
                  <div className={styles.stateInfo}>
                    <span className={styles.stateName}>{state.name}</span>
                    <div className={styles.stateBar}>
                      <motion.div
                        className={styles.stateBarFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(state.vacancies / topStates[0].vacancies) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                  <span className={styles.stateCount}>
                    {state.vacancies?.toLocaleString('en-IN')}
                  </span>
                  <ArrowRight size={14} className={styles.stateArrow} />
                </motion.a>
              ))}
            </div>

            <a href="/results" className={styles.viewAllBtn}>
              View All States <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        {/* All states marquee */}
        <div className={styles.statesMarquee}>
          <div className={styles.statesTrack}>
            {[...indianStates, ...indianStates].map((state, i) => (
              <a key={`${state.code}-${i}`} href={`/results?state=${state.code}`} className={styles.miniChip}>
                <MapPin size={11} weight="fill" />
                {state.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
