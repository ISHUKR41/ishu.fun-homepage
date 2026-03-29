// components/sections/LiveDataSection/LiveDataSection.jsx
import { motion } from 'framer-motion';
import { useCountUp } from '../../../hooks/useCountUp';
import { formatIndian } from '../../../utils/formatNumber';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import styles from './LiveDataSection.module.css';

const growthData = [
  { month: 'Apr', users: 210000 }, { month: 'May', users: 280000 }, { month: 'Jun', users: 320000 },
  { month: 'Jul', users: 400000 }, { month: 'Aug', users: 450000 }, { month: 'Sep', users: 500000 },
  { month: 'Oct', users: 580000 }, { month: 'Nov', users: 620000 }, { month: 'Dec', users: 650000 },
  { month: 'Jan', users: 700000 }, { month: 'Feb', users: 780000 }, { month: 'Mar', users: 850000 },
];

const deviceData = [
  { name: 'Android', value: 78, color: '#6C63FF' },
  { name: 'iOS', value: 12, color: '#00D2FF' },
  { name: 'Desktop', value: 10, color: '#FF6B35' },
];

const topResults = [
  { name: 'JEE Mains', searches: 34000 }, { name: 'NEET 2026', searches: 28000 },
  { name: 'SSC CGL', searches: 22000 }, { name: 'Railway NTPC', searches: 18000 },
  { name: 'UPSC CSE', searches: 14000 },
];

export default function LiveDataSection() {
  const { count: onlineCount, ref } = useCountUp(34821, 2000);

  return (
    <section className={styles.section} id="live-data" ref={ref}>
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">PLATFORM INSIGHTS</span>
          <h2 className="section-title">Real-Time Platform Analytics</h2>
        </motion.div>

        <div className={styles.dashboard}>
          {/* Growth Chart */}
          <motion.div className={styles.panel} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className={styles.panelTitle}>Student Registrations (12 Months)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={growthData}>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={11} />
                <YAxis stroke="var(--text-muted)" fontSize={11} tickFormatter={v => `${(v/100000).toFixed(0)}L`} />
                <Tooltip contentStyle={{ background: 'var(--bg-overlay)', border: '1px solid var(--glass-border)', borderRadius: 12, color: 'var(--text-primary)' }} formatter={v => formatIndian(v)} />
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6C63FF" /><stop offset="100%" stopColor="#00D2FF" />
                  </linearGradient>
                </defs>
                <Line type="monotone" dataKey="users" stroke="url(#lineGrad)" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Donut Chart */}
          <motion.div className={styles.panel} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className={styles.panelTitle}>Users by Device</h3>
            <div className={styles.donutWrap}>
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" stroke="none">
                    {deviceData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.donutCenter}>
                <span className={styles.donutValue}>90K</span>
                <span className={styles.donutLabel}>Daily Active</span>
              </div>
            </div>
            <div className={styles.legend}>
              {deviceData.map(d => (
                <div key={d.name} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: d.color }} />
                  {d.name} {d.value}%
                </div>
              ))}
            </div>
          </motion.div>

          {/* Live Counter */}
          <motion.div className={`${styles.panel} ${styles.livePanel}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className={styles.liveIndicator}>
              <span className={styles.liveDot} />
              Students Online Right Now
            </div>
            <div className={styles.liveNumber}>{formatIndian(Math.floor(onlineCount))}</div>

            <h3 className={styles.panelTitle} style={{ marginTop: 'var(--space-6)' }}>Top Results This Week</h3>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={topResults} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} stroke="var(--text-muted)" fontSize={11} />
                <Bar dataKey="searches" fill="var(--accent-violet)" radius={[0, 4, 4, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
