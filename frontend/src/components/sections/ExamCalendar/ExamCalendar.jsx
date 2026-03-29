// components/sections/ExamCalendar/ExamCalendar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell } from '@phosphor-icons/react';
import { examCalendar } from '../../../constants/examCalendar';
import { getTimeUntil, formatDate } from '../../../utils/formatNumber';
import styles from './ExamCalendar.module.css';

function CountdownBadge({ date }) {
  const [time, setTime] = useState(getTimeUntil(date));
  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeUntil(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);
  if (!time) return <span className={styles.badge} style={{ background: 'rgba(0,200,150,0.1)', color: 'var(--accent-emerald)' }}>Completed</span>;
  return (
    <span className={styles.countdown}>
      <span className={styles.countUnit}>{time.days}<small>d</small></span>
      <span className={styles.countSep}>:</span>
      <span className={styles.countUnit}>{time.hours}<small>h</small></span>
      <span className={styles.countSep}>:</span>
      <span className={styles.countUnit}>{time.mins}<small>m</small></span>
    </span>
  );
}

export default function ExamCalendar() {
  return (
    <section className={styles.section} id="exam-calendar">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">EXAM CALENDAR</span>
          <h2 className="section-title">Important Dates You Cannot Miss</h2>
        </motion.div>
        <div className={styles.list}>
          {examCalendar.map((exam, i) => (
            <motion.div
              key={exam.id}
              className={styles.eventCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
            >
              <div className={styles.eventDot} style={{ background: exam.color }} />
              <div className={styles.eventInfo}>
                <h4 className={styles.eventName}>{exam.examName}</h4>
                <p className={styles.eventDesc}>{exam.description}</p>
              </div>
              <div className={styles.eventDate}>
                <Calendar size={14} /> {formatDate(exam.date)}
              </div>
              <CountdownBadge date={exam.date} />
              <button className={styles.reminderBtn} aria-label="Set reminder">
                <Bell size={16} /> Remind
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
