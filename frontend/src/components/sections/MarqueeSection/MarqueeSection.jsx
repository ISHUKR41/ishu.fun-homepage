// components/sections/MarqueeSection/MarqueeSection.jsx
// Animated exam boards / partners marquee
import styles from './MarqueeSection.module.css';

const examBoards = [
  { name: 'NTA', full: 'National Testing Agency', color: '#6C63FF' },
  { name: 'UPSC', full: 'Civil Services', color: '#00D2FF' },
  { name: 'SSC', full: 'Staff Selection Commission', color: '#00C896' },
  { name: 'IBPS', full: 'Banking Exams', color: '#FF6B35' },
  { name: 'Railways', full: 'RRB / NTPC / Group D', color: '#FFD700' },
  { name: 'CBSE', full: 'Central Board', color: '#6C63FF' },
  { name: 'NEET', full: 'Medical Entrance', color: '#00D2FF' },
  { name: 'JEE', full: 'Engineering Entrance', color: '#00C896' },
  { name: 'NTA UGC', full: 'UGC NET / JRF', color: '#FF6B35' },
  { name: 'SBI / IBPS', full: 'Bank PO / Clerk', color: '#FFD700' },
  { name: 'GATE', full: 'Engineering PG', color: '#6C63FF' },
  { name: 'CAT', full: 'MBA Entrance', color: '#00D2FF' },
  { name: 'State PSC', full: 'All State PSCs', color: '#00C896' },
  { name: 'Defence', full: 'NDA / CDS / AFCAT', color: '#FF6B35' },
  { name: 'Police', full: 'State Police Exams', color: '#FFD700' },
];

const row2 = [
  { name: 'UP Board', full: 'Uttar Pradesh Board', color: '#6C63FF' },
  { name: 'Bihar Board', full: 'BSEB', color: '#00D2FF' },
  { name: 'MP Board', full: 'MPBSE', color: '#00C896' },
  { name: 'Rajasthan RPSC', full: 'State PSC', color: '#FF6B35' },
  { name: 'MPPSC', full: 'Madhya Pradesh PSC', color: '#FFD700' },
  { name: 'UPPSC', full: 'Uttar Pradesh PSC', color: '#6C63FF' },
  { name: 'BPSC', full: 'Bihar PSC', color: '#00D2FF' },
  { name: 'WBPSC', full: 'West Bengal PSC', color: '#00C896' },
  { name: 'TNPSC', full: 'Tamil Nadu PSC', color: '#FF6B35' },
  { name: 'KPSC', full: 'Karnataka PSC', color: '#FFD700' },
  { name: 'OPSC', full: 'Odisha PSC', color: '#6C63FF' },
  { name: 'UKPSC', full: 'Uttarakhand PSC', color: '#00D2FF' },
];

function MarqueeTrack({ items, reverse = false, speed = 30 }) {
  const repeated = [...items, ...items];
  return (
    <div className={styles.trackWrap}>
      <div
        className={`${styles.track} ${reverse ? styles.trackReverse : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((item, i) => (
          <div key={i} className={styles.chip} style={{ '--chip-color': item.color }}>
            <div className={styles.chipDot} style={{ background: item.color }} />
            <div className={styles.chipContent}>
              <span className={styles.chipName}>{item.name}</span>
              <span className={styles.chipFull}>{item.full}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className={styles.section} aria-label="Supported exam boards">
      <div className={styles.fade} />
      <div className={styles.fadeRight} />

      <div className="container">
        <p className={styles.label}>Covering results from 200+ official exam bodies</p>
      </div>

      <div className={styles.marquees}>
        <MarqueeTrack items={examBoards} speed={40} />
        <MarqueeTrack items={row2} reverse speed={35} />
      </div>
    </section>
  );
}
