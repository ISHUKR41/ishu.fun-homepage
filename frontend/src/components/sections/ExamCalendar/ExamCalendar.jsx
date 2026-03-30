// components/sections/ExamCalendar/ExamCalendar.jsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, Bell, ArrowRight } from '@phosphor-icons/react';
import { examCalendar as examData } from '../../../constants/examCalendar';
import styles from './ExamCalendar.module.css';

const categoryColors = {
  jee: '#6C63FF', neet: '#00C896', upsc: '#FF6B35',
  ssc: '#00D2FF', railway: '#FF4D6D', banking: '#FFD700',
};

function getDaysUntil(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((date - now) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function CalendarGrid() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();
  const monthName = now.toLocaleString('en-IN', { month: 'long', year: 'numeric' });

  // Find exam dates in this month
  const examDates = useMemo(() => {
    const dates = {};
    examData.forEach(exam => {
      const d = new Date(exam.date || exam.releaseDate);
      if (d.getMonth() === month && d.getFullYear() === year) {
        dates[d.getDate()] = categoryColors[exam.category] || '#6C63FF';
      }
    });
    return dates;
  }, [month, year]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const blanks = Array(firstDay).fill(null);
  const cells = [...blanks, ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarTitle}>{monthName}</div>
      <div className={styles.calendarHeader}>
        {days.map(d => <span key={d}>{d}</span>)}
      </div>
      <div className={styles.calendarGrid}>
        {cells.map((day, i) => (
          <div
            key={i}
            className={`${styles.calendarCell} ${day === today ? styles.today : ''} ${!day ? styles.empty : ''}`}
          >
            {day && (
              <>
                <span>{day}</span>
                {examDates[day] && (
                  <span className={styles.examDot} style={{ background: examDates[day] }} />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EventCard({ exam, index }) {
  const daysLeft = getDaysUntil(exam.date || exam.releaseDate);
  const color = categoryColors[exam.category] || '#6C63FF';

  return (
    <motion.div
      className={styles.eventCard}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className={styles.eventDot} style={{ background: color }} />
      <div className={styles.eventContent}>
        <span className={styles.eventName}>{exam.examName}</span>
        <span className={styles.eventDate}>
          <Clock size={12} /> {new Date(exam.date || exam.releaseDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      </div>
      <div className={styles.eventRight}>
        {daysLeft > 0 ? (
          <span className={styles.countdown} style={{ background: `${color}12`, color }}>
            {daysLeft}d left
          </span>
        ) : (
          <span className={styles.countdown} style={{ background: 'rgba(0,200,150,0.1)', color: '#00C896' }}>
            Released
          </span>
        )}
        <button className={styles.reminderBtn} aria-label="Set reminder">
          <Bell size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export default function ExamCalendar() {
  return (
    <section className={styles.section} id="exam-calendar">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">EXAM CALENDAR</span>
          <h2 className="section-title">Important Dates You Cannot Miss</h2>
        </motion.div>

        <div className={styles.content}>
          <CalendarGrid />
          <div className={styles.events}>
            <h3 className={styles.eventsTitle}>
              <CalendarCheck size={20} weight="duotone" /> Upcoming Events
            </h3>
            <div className={styles.eventsList}>
              {examData.slice(0, 6).map((exam, i) => (
                <EventCard key={exam.id || i} exam={exam} index={i} />
              ))}
            </div>
            <a href="/exam-calendar" className={styles.viewAllLink}>
              View Full Calendar <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
