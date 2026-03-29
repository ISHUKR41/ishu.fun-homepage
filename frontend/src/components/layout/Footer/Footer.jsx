// components/layout/Footer/Footer.jsx
import { TwitterLogo, InstagramLogo, TelegramLogo, YoutubeLogo, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { footerLinks } from '../../../constants/navLinks';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        {/* Row 1 — Logo + Social */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <span>ishu</span><span className={styles.dot}>.</span><span className={styles.fun}>fun</span>
            </a>
            <p className={styles.tagline}>India's #1 Student Platform</p>
          </div>
          <div className={styles.social}>
            <a href="https://twitter.com/ishufun" aria-label="Twitter" className={styles.socialIcon}><TwitterLogo size={20} /></a>
            <a href="https://instagram.com/ishufun" aria-label="Instagram" className={styles.socialIcon}><InstagramLogo size={20} /></a>
            <a href="https://t.me/ishufun" aria-label="Telegram" className={styles.socialIcon}><TelegramLogo size={20} /></a>
            <a href="https://youtube.com/@ishufun" aria-label="YouTube" className={styles.socialIcon}><YoutubeLogo size={20} /></a>
          </div>
        </div>

        {/* Row 2 — Link Columns */}
        <div className={styles.linkGrid}>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              {links.map(link => (
                <a key={link.label} href={link.href} className={styles.footerLink}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Row 3 — Newsletter + Contact */}
        <div className={styles.contactRow}>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.subBtn}>Subscribe →</button>
          </div>
          <div className={styles.contactInfo}>
            <span><EnvelopeSimple size={14} /> ishukryk@gmail.com</span>
            <span><Phone size={14} /> +91 8986985813</span>
          </div>
        </div>

        {/* SEO paragraph */}
        <p className={styles.seoParagraph}>
          ishu.fun provides instant Sarkari Results for JEE, NEET, UPSC, SSC CGL, Railway NTPC, IBPS PO, SBI Clerk, and all State PSC exams.
          Free PDF tools include PDF merger, compressor, converter, and more.
          India's most trusted education news and government job alert platform.
        </p>

        {/* Row 4 — Bottom */}
        <div className={styles.bottomBar}>
          <span>© 2026 ishu.fun · Made with ❤️ in India 🇮🇳 · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
