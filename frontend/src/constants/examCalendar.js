// constants/examCalendar.js
export const examCalendar = [
  { id: 1, examName: 'JEE Mains Session 2', category: 'jee', eventType: 'exam', date: '2026-04-12', description: 'JEE Mains 2026 Session 2 Examination', color: 'var(--accent-violet)' },
  { id: 2, examName: 'NEET 2026', category: 'neet', eventType: 'exam', date: '2026-05-04', description: 'National Eligibility cum Entrance Test 2026', color: 'var(--accent-emerald)' },
  { id: 3, examName: 'SSC CGL Tier 1', category: 'ssc', eventType: 'exam', date: '2026-05-20', description: 'SSC Combined Graduate Level Tier 1 Exam', color: 'var(--accent-cyan)' },
  { id: 4, examName: 'UPSC Prelims 2026', category: 'upsc', eventType: 'exam', date: '2026-05-25', description: 'UPSC Civil Services Preliminary Exam', color: 'var(--accent-saffron)' },
  { id: 5, examName: 'RRB NTPC CBT-2', category: 'railway', eventType: 'exam', date: '2026-04-15', description: 'Railway NTPC Computer Based Test Phase 2', color: 'var(--accent-rose)' },
  { id: 6, examName: 'IBPS PO Prelims', category: 'banking', eventType: 'exam', date: '2026-06-08', description: 'IBPS Probationary Officer Preliminary Exam', color: 'var(--accent-gold)' },
  { id: 7, examName: 'JEE Advanced 2026', category: 'jee', eventType: 'exam', date: '2026-06-15', description: 'JEE Advanced 2026 for IIT Admission', color: 'var(--accent-violet)' },
  { id: 8, examName: 'NDA 2 2026', category: 'defence', eventType: 'exam', date: '2026-09-07', description: 'National Defence Academy Exam 2 2026', color: 'var(--accent-cyan)' },
];

export const resultCalendar = [
  { id: 1, examName: 'JEE Mains Session 1', category: 'jee', status: 'live', releaseDate: '2026-03-28', directLink: 'https://jeemain.nta.ac.in', totalAppeared: '11.5 Lakh' },
  { id: 2, examName: 'NEET 2026 Registration', category: 'neet', status: 'upcoming', releaseDate: '2026-04-01', directLink: 'https://neet.nta.nic.in', totalAppeared: null },
  { id: 3, examName: 'SSC CGL 2025 Final', category: 'ssc', status: 'new', releaseDate: '2026-03-25', directLink: 'https://ssc.nic.in', totalAppeared: '15.2 Lakh' },
  { id: 4, examName: 'UPSC CSE 2025 Mains', category: 'upsc', status: 'new', releaseDate: '2026-03-20', directLink: 'https://upsc.gov.in', totalAppeared: '2.8 Lakh' },
  { id: 5, examName: 'Railway RRB NTPC', category: 'railway', status: 'live', releaseDate: '2026-03-27', directLink: 'https://rrbcdg.gov.in', totalAppeared: '1.2 Crore' },
  { id: 6, examName: 'IBPS Clerk 2026', category: 'banking', status: 'upcoming', releaseDate: '2026-04-10', directLink: 'https://ibps.in', totalAppeared: null },
];

export const announcements = [
  { id: 1, text: '🔥 JEE Mains 2026 Result DECLARED', link: '/results/jee-mains-2026', category: 'result', isUrgent: true },
  { id: 2, text: 'NEET 2026 Registration Open', link: '/news/neet-2026-registration', category: 'news', isUrgent: false },
  { id: 3, text: 'SSC CGL 2025 Admit Card Available', link: '/results/ssc-cgl-2025', category: 'admit-card', isUrgent: true },
  { id: 4, text: 'UPSC Prelims 2026 Date Announced', link: '/news/upsc-2026-dates', category: 'date', isUrgent: false },
  { id: 5, text: 'Railway NTPC Phase 2 Result OUT', link: '/results/rrb-ntpc-2026', category: 'result', isUrgent: true },
  { id: 6, text: '📋 New: Free PDF Merge Tool Launched', link: '/tools/merge-pdf', category: 'tools', isUrgent: false },
  { id: 7, text: 'Bihar Board 12th Result Expected Soon', link: '/results/bihar-board-12th', category: 'result', isUrgent: false },
  { id: 8, text: 'IBPS PO 2026 Notification Released', link: '/news/ibps-po-2026', category: 'vacancy', isUrgent: true },
];
