// components/layout/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Bell, CaretDown, Globe } from '@phosphor-icons/react';
import { navLinks, moreLinks } from '../../../constants/navLinks';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { direction, scrollY } = useScrollDirection();
  const isDesktop = useIsDesktop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const isScrolled = scrollY > 50;
  const isHidden = direction === 'down' && scrollY > 200;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="ishu.fun homepage">
            <span className={styles.logoText}>ishu</span>
            <span className={styles.logoDot}>.</span>
            <span className={styles.logoFun}>fun</span>
          </a>

          {/* Desktop Nav */}
          {isDesktop && (
            <div className={styles.desktopNav}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
              <div
                className={styles.moreWrapper}
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button className={styles.navLink}>
                  More <CaretDown size={14} />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {moreLinks.map(link => (
                        <a key={link.label} href={link.href} className={styles.dropdownItem}>
                          {link.label}
                          {link.badge && <span className={styles.badge}>{link.badge}</span>}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Right Side */}
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Notifications">
              <Bell size={20} />
              <span className={styles.notifDot} />
            </button>

            {isDesktop && (
              <>
                <button className={styles.iconBtn} aria-label="Language">
                  <Globe size={18} />
                </button>
                <a href="/login" className={styles.loginBtn}>Login</a>
                <a href="#whatsapp-cta" className={styles.ctaBtn}>
                  Get Alerts →
                </a>
              </>
            )}

            {!isDesktop && (
              <button
                className={styles.menuBtn}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <List size={24} />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileHeader}>
                <a href="/" className={styles.logo}>
                  <span className={styles.logoText}>ishu</span>
                  <span className={styles.logoDot}>.</span>
                  <span className={styles.logoFun}>fun</span>
                </a>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X size={24} color="var(--text-primary)" />
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {[...navLinks, ...moreLinks].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={styles.mobileLink}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.badge && <span className={styles.badge}>{link.badge}</span>}
                  </motion.a>
                ))}
              </div>

              <div className={styles.mobileCtas}>
                <a href="/login" className={styles.loginBtn} style={{ width: '100%', textAlign: 'center' }}>Login</a>
                <a href="#whatsapp-cta" className={styles.ctaBtn} style={{ width: '100%', textAlign: 'center' }} onClick={() => setMobileOpen(false)}>
                  Get WhatsApp Alerts
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
