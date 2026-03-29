# 🏠 HOMEPAGE_V5 — ishu.fun
## The World-Class Specification Blueprint
### Version 5.0 — Ultimate Edition | The Final Boss Document

> **Domain:** ishu.fun
> **Page Scope:** Homepage / Landing Page ONLY
> **Brand Tagline:** "India's #1 Student Super-Platform"
> **Written By:** Full-Stack Architecture Team (You ARE the Architect + Lead Dev + Designer + SEO Expert + DevOps Engineer)
> **Language:** Easy English — Maximum Detail
> **Status:** 🟢 Ready for World-Class Development
> **Inspiration:** Apple · Tesla · Vercel · Stripe · Framer · GitHub · Linear · Lusion · Basement.studio · Awwwards Winners · Figma · Notion · Nike · Airbnb · Flipkart · Rupay · Google · YouTube · Microsoft · Dropbox · Dribbble Top Picks · 2024 Webby Award Winners

---

## 📋 TABLE OF CONTENTS

1. [Project Overview & Mission](#1-project-overview--mission)
2. [Complete Folder & File Architecture](#2-complete-folder--file-architecture)
3. [Design System & Visual Language](#3-design-system--visual-language)
4. [Typography System](#4-typography-system)
5. [Animation Master Plan](#5-animation-master-plan)
6. [Section-by-Section Blueprint (20 Sections)](#6-section-by-section-blueprint)
   - 6.01 Page Preloader
   - 6.02 Announcement Ticker Bar
   - 6.03 Navbar
   - 6.04 Hero Section
   - 6.05 Trust Bar / Social Proof Strip
   - 6.06 Stats & Numbers Section
   - 6.07 What We Offer (Features/Services)
   - 6.08 Latest Results Preview
   - 6.09 PDF Tools Showcase
   - 6.10 India Map Section
   - 6.11 Exam Calendar Section
   - 6.12 Live Data / Graph Section
   - 6.13 News Preview Section
   - 6.14 WhatsApp Notification CTA
   - 6.15 Blog Preview Section
   - 6.16 Testimonials & Reviews
   - 6.17 Trust & Safety Badges
   - 6.18 FAQ Section
   - 6.19 Final CTA Section
   - 6.20 Footer
7. [UI Micro-Components & Global Elements](#7-ui-micro-components--global-elements)
8. [Image & Media Strategy (With Real URLs)](#8-image--media-strategy)
9. [Performance Optimization](#9-performance-optimization)
10. [SEO Masterplan for ishu.fun](#10-seo-masterplan)
11. [Backend API Specification](#11-backend-api-specification)
12. [Mobile & PWA Strategy](#12-mobile--pwa-strategy)
13. [Accessibility (WCAG 2.1 AA)](#13-accessibility)
14. [Analytics & Tracking](#14-analytics--tracking)
15. [Internationalization (i18n)](#15-internationalization)
16. [Security Hardening](#16-security-hardening)
17. [Testing Plan](#17-testing-plan)
18. [Deployment Architecture](#18-deployment-architecture)
19. [Developer Prompts & Build Order](#19-developer-prompts--build-order)
20. [Complete Checklist](#20-complete-checklist)

---

## 1. PROJECT OVERVIEW & MISSION

### What is ishu.fun?
**ishu.fun** is India's most modern, fastest, and most beautiful all-in-one platform for:
- 📋 **Sarkari Results** — Instant exam results (JEE, NEET, UPSC, SSC, Railway, State PSC, Banking, etc.)
- 💼 **Government Job Vacancies** — Latest govt job alerts with one-click apply
- 🛠️ **PDF Tools** — Merge, compress, convert, OCR, e-sign PDFs (100% free)
- 📰 **Education News** — Curated and verified news for students
- 📝 **Blog / Study Guides** — Strategy content for exam toppers
- 🔔 **WhatsApp Alerts** — Real-time result and vacancy notifications
- 📅 **Exam Calendar** — Important dates, admit cards, answer keys

### Core Value Proposition (Must Land in 3 Seconds)
> **"India's fastest platform for Sarkari Results, Govt Jobs, Free PDF Tools, and Education News — all in one place."**

### Target Audience Profile
| Attribute | Detail |
|---|---|
| **Primary Users** | Students aged 16–30 preparing for competitive exams |
| **Secondary Users** | Graduates applying for government jobs |
| **Tertiary Users** | Parents researching admissions and scholarships |
| **Device Split** | 78% Android Mobile · 12% iOS · 10% Desktop |
| **Connection** | 60% on 4G · 25% on Wifi · 15% on 3G (must handle slow net) |
| **States** | All 28 states + 8 UTs — focus: UP, Bihar, Rajasthan, MP, Maharashtra |
| **Language** | Hindi + English primary; 8 more languages planned |

### Homepage Primary Goals
1. **Grab attention** in first 3 seconds (hero section)
2. **Communicate trust** (stats, badges, testimonials)
3. **Show utility** (results, tools, news previews)
4. **Convert to subscriptions** (WhatsApp alerts CTA)
5. **Drive page depth** (click to Results, Tools, News pages)
6. **Rank #1 on Google** for "sarkari result", "sarkari naukri", "free pdf tools india"

---

## 2. COMPLETE FOLDER & FILE ARCHITECTURE

```
ishu-fun/
│
├── 📁 frontend/                              # React + Vite (deployed on Vercel)
│   │
│   ├── 📁 public/                            # Static files served at root URL
│   │   ├── index.html                        # HTML entry (meta tags, preloads)
│   │   ├── favicon.ico                       # 32x32 multi-size ICO
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png              # 180x180 for iOS home screen
│   │   ├── android-chrome-192x192.png        # PWA icon
│   │   ├── android-chrome-512x512.png        # PWA icon large
│   │   ├── maskable-icon-512x512.png         # PWA maskable icon (safe zone)
│   │   ├── og-image.jpg                      # 1200x630 Open Graph image
│   │   ├── og-image-square.jpg               # 1200x1200 Instagram share
│   │   ├── twitter-card.jpg                  # 1500x500 Twitter banner
│   │   ├── robots.txt                        # Search crawler rules
│   │   ├── sitemap.xml                       # SEO sitemap (auto-generated)
│   │   ├── manifest.json                     # PWA web app manifest
│   │   ├── browserconfig.xml                 # Windows tile config
│   │   ├── _headers                          # Vercel security/cache headers
│   │   ├── _redirects                        # Vercel URL redirects
│   │   │
│   │   ├── 📁 fonts/                         # Self-hosted font files (woff2 + woff)
│   │   │   ├── ClashDisplay-Regular.woff2
│   │   │   ├── ClashDisplay-Medium.woff2
│   │   │   ├── ClashDisplay-SemiBold.woff2
│   │   │   ├── ClashDisplay-Bold.woff2
│   │   │   ├── Satoshi-Regular.woff2
│   │   │   ├── Satoshi-Medium.woff2
│   │   │   ├── Satoshi-Bold.woff2
│   │   │   └── Satoshi-Italic.woff2
│   │   │
│   │   ├── 📁 images/                        # Optimized static images
│   │   │   ├── 📁 hero/
│   │   │   │   ├── hero-bg.webp              # Hero background (dark abstract)
│   │   │   │   ├── hero-illustration.webp    # India-themed student illustration
│   │   │   │   └── hero-phone-mockup.webp    # Phone showing the app
│   │   │   ├── 📁 og/
│   │   │   │   └── og-banner.jpg
│   │   │   ├── 📁 testimonials/
│   │   │   │   ├── student-1.webp            # Real student photo
│   │   │   │   ├── student-2.webp
│   │   │   │   └── student-3.webp
│   │   │   ├── 📁 news/
│   │   │   │   └── placeholder.webp          # News card placeholder
│   │   │   └── india-map.svg                 # SVG vector India map
│   │   │
│   │   ├── 📁 videos/
│   │   │   ├── hero-bg-desktop.webm          # 15s background video (desktop)
│   │   │   └── hero-bg-desktop.mp4           # MP4 fallback
│   │   │
│   │   └── 📁 locales/                       # i18n translation files
│   │       ├── en.json
│   │       ├── hi.json
│   │       ├── bn.json
│   │       ├── ta.json
│   │       ├── te.json
│   │       └── mr.json
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── App.jsx                           # Root app component + providers
│   │   ├── main.jsx                          # Vite entry, ReactDOM.createRoot
│   │   │
│   │   ├── 📁 pages/
│   │   │   └── 📁 HomePage/
│   │   │       ├── index.jsx                 # Assembles all sections in order
│   │   │       ├── HomePage.module.css       # Page-level CSS module
│   │   │       └── HomePage.meta.js          # SEO metadata export for this page
│   │   │
│   │   ├── 📁 components/
│   │   │   │
│   │   │   ├── 📁 layout/
│   │   │   │   ├── 📁 Navbar/
│   │   │   │   │   ├── Navbar.jsx            # Main glass navbar
│   │   │   │   │   ├── NavLinks.jsx          # Desktop nav items + mega dropdowns
│   │   │   │   │   ├── NavCTA.jsx            # "Login" + "Get Alerts" buttons
│   │   │   │   │   ├── MobileMenu.jsx        # Full-screen mobile drawer
│   │   │   │   │   ├── NotificationBell.jsx  # Bell icon + dropdown panel
│   │   │   │   │   ├── UserAvatar.jsx        # Post-login user avatar + dropdown
│   │   │   │   │   └── Navbar.module.css
│   │   │   │   │
│   │   │   │   └── 📁 Footer/
│   │   │   │       ├── Footer.jsx            # Full footer
│   │   │   │       ├── FooterLinks.jsx       # Link columns
│   │   │   │       ├── FooterNewsletter.jsx  # Email subscribe widget
│   │   │   │       ├── FooterSocial.jsx      # Social media links
│   │   │   │       ├── FooterLegal.jsx       # Copyright, privacy links
│   │   │   │       └── Footer.module.css
│   │   │   │
│   │   │   ├── 📁 sections/                  # One folder per homepage section
│   │   │   │   │
│   │   │   │   ├── 📁 PageLoader/            # SECTION 01
│   │   │   │   │   ├── PageLoader.jsx        # Full-screen preloader
│   │   │   │   │   └── PageLoader.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 AnnouncementBar/       # SECTION 02
│   │   │   │   │   ├── AnnouncementBar.jsx   # Scrolling ticker at top
│   │   │   │   │   ├── TickerItem.jsx
│   │   │   │   │   └── AnnouncementBar.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 HeroSection/           # SECTION 04
│   │   │   │   │   ├── HeroSection.jsx       # Main hero wrapper
│   │   │   │   │   ├── HeroCanvas.jsx        # Three.js WebGL scene
│   │   │   │   │   ├── HeroParticles.jsx     # tsParticles system
│   │   │   │   │   ├── HeroText.jsx          # SplitType + GSAP text reveal
│   │   │   │   │   ├── HeroSearch.jsx        # Central search bar
│   │   │   │   │   ├── HeroCTA.jsx           # Primary + secondary buttons
│   │   │   │   │   ├── HeroSocialProof.jsx   # "50L+ students trust us" strip
│   │   │   │   │   ├── HeroScrollHint.jsx    # Animated scroll down arrow
│   │   │   │   │   └── HeroSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 TrustBar/              # SECTION 05
│   │   │   │   │   ├── TrustBar.jsx          # Scrolling logo/brand bar
│   │   │   │   │   └── TrustBar.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 StatsSection/          # SECTION 06
│   │   │   │   │   ├── StatsSection.jsx
│   │   │   │   │   ├── StatCard.jsx
│   │   │   │   │   ├── AnimatedCounter.jsx   # CountUp.js wrapper
│   │   │   │   │   └── StatsSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 FeaturesSection/       # SECTION 07
│   │   │   │   │   ├── FeaturesSection.jsx
│   │   │   │   │   ├── FeatureCard.jsx
│   │   │   │   │   ├── FeatureIcon.jsx       # SVG icon wrapper
│   │   │   │   │   ├── FeatureDetail.jsx     # Expandable detail pane
│   │   │   │   │   └── FeaturesSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 ResultsPreview/        # SECTION 08
│   │   │   │   │   ├── ResultsPreview.jsx
│   │   │   │   │   ├── ResultCard.jsx
│   │   │   │   │   ├── ResultTabs.jsx        # Filter tabs: JEE/NEET/SSC/etc.
│   │   │   │   │   ├── ResultBadge.jsx       # "NEW" / "LIVE" badges
│   │   │   │   │   ├── CountdownTimer.jsx    # Exam countdown
│   │   │   │   │   └── ResultsPreview.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 ToolsShowcase/         # SECTION 09
│   │   │   │   │   ├── ToolsShowcase.jsx
│   │   │   │   │   ├── ToolCard.jsx          # 3D tilt card per tool
│   │   │   │   │   ├── ToolsGrid.jsx
│   │   │   │   │   └── ToolsShowcase.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 IndiaMapSection/       # SECTION 10
│   │   │   │   │   ├── IndiaMapSection.jsx
│   │   │   │   │   ├── MapSVG.jsx            # Interactive India SVG map
│   │   │   │   │   ├── StateTooltip.jsx      # Hover tooltip per state
│   │   │   │   │   ├── StateList.jsx         # Mobile fallback list
│   │   │   │   │   └── IndiaMapSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 ExamCalendar/          # SECTION 11
│   │   │   │   │   ├── ExamCalendar.jsx
│   │   │   │   │   ├── CalendarGrid.jsx
│   │   │   │   │   ├── ExamEvent.jsx
│   │   │   │   │   ├── CountdownBadge.jsx
│   │   │   │   │   └── ExamCalendar.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 LiveDataSection/       # SECTION 12
│   │   │   │   │   ├── LiveDataSection.jsx
│   │   │   │   │   ├── GrowthLineChart.jsx   # Recharts/Chart.js growth chart
│   │   │   │   │   ├── UsageDonutChart.jsx   # Device/state donut chart
│   │   │   │   │   ├── RealtimeTicker.jsx    # Live user count socket
│   │   │   │   │   └── LiveDataSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 NewsPreview/           # SECTION 13
│   │   │   │   │   ├── NewsPreview.jsx
│   │   │   │   │   ├── NewsFeatured.jsx      # Large featured card left
│   │   │   │   │   ├── NewsCard.jsx          # Smaller news cards right
│   │   │   │   │   ├── NewsFilter.jsx        # Category filter tabs
│   │   │   │   │   └── NewsPreview.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 WhatsAppCTA/           # SECTION 14
│   │   │   │   │   ├── WhatsAppCTA.jsx
│   │   │   │   │   ├── PhoneInput.jsx        # +91 phone input
│   │   │   │   │   ├── ExamSelector.jsx      # Multi-select exam chips
│   │   │   │   │   ├── SuccessAnimation.jsx  # Lottie success checkmark
│   │   │   │   │   └── WhatsAppCTA.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 BlogPreview/           # SECTION 15
│   │   │   │   │   ├── BlogPreview.jsx
│   │   │   │   │   ├── BlogCard.jsx
│   │   │   │   │   ├── BlogFeatured.jsx
│   │   │   │   │   └── BlogPreview.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 TestimonialsSection/   # SECTION 16
│   │   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   │   ├── TestimonialMarquee.jsx # Two-row infinite scroll
│   │   │   │   │   └── TestimonialsSection.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 TrustBadges/           # SECTION 17
│   │   │   │   │   ├── TrustBadges.jsx
│   │   │   │   │   └── TrustBadges.module.css
│   │   │   │   │
│   │   │   │   ├── 📁 FAQSection/            # SECTION 18
│   │   │   │   │   ├── FAQSection.jsx
│   │   │   │   │   ├── FAQItem.jsx           # Accordion item
│   │   │   │   │   └── FAQSection.module.css
│   │   │   │   │
│   │   │   │   └── 📁 FinalCTA/             # SECTION 19
│   │   │   │       ├── FinalCTA.jsx
│   │   │   │       └── FinalCTA.module.css
│   │   │   │
│   │   │   └── 📁 ui/                        # Atomic reusable UI components
│   │   │       ├── 📁 Button/
│   │   │       │   ├── Button.jsx            # Base button (primary/ghost/outline)
│   │   │       │   ├── MagneticButton.jsx    # Cursor-following magnetic button
│   │   │       │   ├── GlowButton.jsx        # Neon glow button variant
│   │   │       │   └── Button.module.css
│   │   │       ├── 📁 Badge/
│   │   │       │   ├── Badge.jsx             # Status badges (NEW, LIVE, HOT)
│   │   │       │   └── Badge.module.css
│   │   │       ├── 📁 Card/
│   │   │       │   ├── GlassCard.jsx         # Glassmorphism card
│   │   │       │   ├── TiltCard.jsx          # 3D tilt on mouse hover
│   │   │       │   └── Card.module.css
│   │   │       ├── 📁 Modal/
│   │   │       │   ├── Modal.jsx             # Overlay modal
│   │   │       │   └── Modal.module.css
│   │   │       ├── 📁 Toast/
│   │   │       │   ├── Toast.jsx             # Notification toast
│   │   │       │   └── ToastProvider.jsx
│   │   │       ├── 📁 Skeleton/
│   │   │       │   ├── Skeleton.jsx          # Loading skeleton shimmer
│   │   │       │   └── Skeleton.module.css
│   │   │       ├── 📁 CustomCursor/
│   │   │       │   ├── CustomCursor.jsx      # Animated dot + ring cursor
│   │   │       │   └── CustomCursor.module.css
│   │   │       ├── 📁 ScrollProgress/
│   │   │       │   ├── ScrollProgress.jsx    # Top progress bar
│   │   │       │   └── ScrollProgress.module.css
│   │   │       ├── 📁 BackToTop/
│   │   │       │   ├── BackToTop.jsx
│   │   │       │   └── BackToTop.module.css
│   │   │       ├── 📁 ParticleCanvas/
│   │   │       │   └── ParticleCanvas.jsx    # Reusable tsParticles canvas
│   │   │       ├── 📁 GradientText/
│   │   │       │   └── GradientText.jsx      # Animated gradient text span
│   │   │       ├── 📁 Typewriter/
│   │   │       │   └── Typewriter.jsx        # Typewriter word cycle
│   │   │       ├── 📁 BottomNav/
│   │   │       │   ├── BottomNav.jsx         # Mobile bottom nav bar
│   │   │       │   └── BottomNav.module.css
│   │   │       └── 📁 SectionWrapper/
│   │   │           └── SectionWrapper.jsx    # Section padding + lazy-load trigger
│   │   │
│   │   ├── 📁 hooks/                         # Custom React hooks
│   │   │   ├── useScrollProgress.js          # 0-100% scroll tracking
│   │   │   ├── useIntersectionObserver.js    # Trigger animations on viewport enter
│   │   │   ├── useSmoothScroll.js            # Lenis smooth scroll init
│   │   │   ├── useMousePosition.js           # Real-time cursor coordinates
│   │   │   ├── useCountUp.js                 # CountUp.js animated counter
│   │   │   ├── useMediaQuery.js              # Breakpoint detection
│   │   │   ├── useLocalStorage.js            # Persist preferences
│   │   │   ├── useDebounce.js                # Debounce search/input
│   │   │   ├── usePrefersReducedMotion.js    # Accessibility: no animations
│   │   │   ├── usePageVisible.js             # Pause when tab inactive
│   │   │   ├── useScrollDirection.js         # Up/down for navbar hide/show
│   │   │   ├── useDevicePerformance.js       # Low-end device detection
│   │   │   └── useGSAP.js                    # GSAP context + cleanup wrapper
│   │   │
│   │   ├── 📁 animations/                    # All animation configs centralized
│   │   │   ├── 📁 gsap/
│   │   │   │   ├── gsap.init.js              # Register all GSAP plugins
│   │   │   │   ├── heroAnimations.js         # Hero section full timeline
│   │   │   │   ├── scrollAnimations.js       # ScrollTrigger configs per section
│   │   │   │   ├── textAnimations.js         # SplitType + text reveal timelines
│   │   │   │   ├── pageTransitions.js        # Barba.js + GSAP page transitions
│   │   │   │   └── cardAnimations.js         # Card hover/reveal animations
│   │   │   ├── 📁 three/
│   │   │   │   ├── scene.js                  # Three.js scene, camera, renderer
│   │   │   │   ├── particles.js              # 3D particle system
│   │   │   │   ├── globe.js                  # India globe mesh
│   │   │   │   └── postprocessing.js         # Bloom, depth-of-field effects
│   │   │   ├── 📁 lottie/
│   │   │   │   ├── success.json              # WhatsApp subscribe success
│   │   │   │   ├── loading.json              # General loading spinner
│   │   │   │   └── celebration.json          # Confetti celebration
│   │   │   └── variants.js                   # Framer Motion reusable variants
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── seo.js                        # Title/description/OG helpers
│   │   │   ├── formatDate.js                 # Indian date format helpers
│   │   │   ├── formatNumber.js               # Indian number system (1,00,000)
│   │   │   ├── api.js                        # Axios instance + interceptors
│   │   │   ├── lazyLoader.js                 # IntersectionObserver lazy load
│   │   │   ├── deviceDetect.js               # Mobile/desktop/low-end detection
│   │   │   ├── analytics.js                  # GA4 + Mixpanel event wrappers
│   │   │   └── validators.js                 # Form validation functions
│   │   │
│   │   ├── 📁 constants/
│   │   │   ├── navLinks.js                   # Navbar menu items data
│   │   │   ├── services.js                   # Features/services data array
│   │   │   ├── stats.js                      # Homepage stats data
│   │   │   ├── tools.js                      # PDF tools list data
│   │   │   ├── testimonials.js               # Testimonials data array
│   │   │   ├── faqs.js                       # FAQ Q&A data array
│   │   │   ├── indianStates.js               # All 28 states + 8 UTs data
│   │   │   ├── examCalendar.js               # Upcoming exam dates
│   │   │   └── seoKeywords.js                # Primary + secondary keywords
│   │   │
│   │   └── 📁 styles/
│   │       ├── globals.css                   # Tailwind base + CSS reset
│   │       ├── variables.css                 # CSS custom properties (all tokens)
│   │       ├── typography.css                # Font-face declarations
│   │       ├── animations.css                # Custom keyframe animations
│   │       └── utilities.css                 # Utility classes (scrollbar, etc.)
│   │
│   ├── index.html                            # Vite entry HTML (critical meta, preloads)
│   ├── package.json
│   ├── vite.config.js                        # Vite: aliases, chunking, compression
│   ├── tailwind.config.js                    # Extended Tailwind config
│   ├── postcss.config.js
│   ├── .env.local                            # Local environment variables
│   ├── .env.production                       # Production environment variables
│   └── vercel.json                           # Vercel routing + headers config
│
├── 📁 backend/                               # Node.js + Express (deployed on Render)
│   ├── 📁 src/
│   │   ├── server.js                         # Express app init, middleware, start
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── homepage.routes.js            # All homepage API routes
│   │   │   ├── results.routes.js
│   │   │   ├── news.routes.js
│   │   │   ├── tools.routes.js
│   │   │   ├── whatsapp.routes.js
│   │   │   ├── auth.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── 📁 controllers/
│   │   │   ├── homepage.controller.js        # homepage data aggregator
│   │   │   ├── results.controller.js
│   │   │   ├── news.controller.js
│   │   │   ├── whatsapp.controller.js
│   │   │   └── auth.controller.js
│   │   │
│   │   ├── 📁 models/                        # Mongoose schemas
│   │   │   ├── User.model.js
│   │   │   ├── Result.model.js
│   │   │   ├── News.model.js
│   │   │   ├── Blog.model.js
│   │   │   ├── Notification.model.js
│   │   │   └── Subscriber.model.js
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── auth.middleware.js            # JWT verification
│   │   │   ├── admin.middleware.js           # Admin role check
│   │   │   ├── rateLimit.middleware.js       # Express-rate-limit config
│   │   │   ├── cache.middleware.js           # Redis cache layer
│   │   │   └── cors.middleware.js            # CORS config
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── whatsapp.service.js           # Twilio WhatsApp API
│   │   │   ├── email.service.js              # Resend email API
│   │   │   ├── cache.service.js              # Redis get/set helpers
│   │   │   ├── storage.service.js            # Cloudinary uploads
│   │   │   └── notification.service.js       # Push notifications
│   │   │
│   │   └── 📁 config/
│   │       ├── db.js                         # MongoDB Atlas connection
│   │       ├── redis.js                      # Upstash Redis connection
│   │       ├── env.js                        # Env validation with Zod
│   │       └── logger.js                     # Winston logger
│   │
│   ├── package.json
│   ├── .env.example
│   └── render.yaml                           # Render.com deploy config
│
├── 📁 database/
│   ├── 📁 migrations/                        # Versioned DB migrations
│   ├── 📁 seeds/                             # Dev/test seed data
│   └── 📁 schemas/                           # Schema documentation
│
├── 📁 docs/                                  # All specification documents
│   ├── HOMEPAGE_V5.md                        # ← YOU ARE HERE
│   ├── RESULTS_PAGE.md
│   ├── TOOLS_PAGE.md
│   ├── NEWS_PAGE.md
│   ├── BLOG_PAGE.md
│   ├── ABOUT_PAGE.md
│   ├── CONTACT_PAGE.md
│   ├── AUTH_PAGE.md
│   ├── ADMIN_PANEL.md
│   ├── TEST_PAGE.md
│   └── API_DOCUMENTATION.md
│
├── 📁 .github/
│   └── 📁 workflows/
│       ├── deploy-frontend.yml               # Vercel deploy on push to main
│       └── deploy-backend.yml                # Render deploy on push to main
│
├── docker-compose.yml                        # Local MongoDB + Redis for dev
├── .env.example                              # Root env template
└── README.md                                 # Quick start guide
```

---

## 3. DESIGN SYSTEM & VISUAL LANGUAGE

### Aesthetic Direction: "Dark Luxury Meets Indian Digital"

The visual language is a careful blend of:
- **Global luxury tech** (Apple darkness, Vercel precision, Linear clarity)
- **Indian warmth** (saffron orange, tricolor echoes, familiar trust signals)
- **Modern glassmorphism** (frosted glass cards, backdrop-blur)
- **Neon depth** (subtle glows, gradient borders, electric accents)

### Complete Color Palette (CSS Custom Properties)

```css
/* === variables.css === */
:root {
  /* ── BACKGROUNDS ─────────────────────────── */
  --bg-base:            #080810;   /* Deepest page background */
  --bg-surface:         #0E0E1A;   /* Card surface */
  --bg-elevated:        #14141F;   /* Elevated card / nav */
  --bg-overlay:         #1A1A2E;   /* Tooltip / popover */

  /* ── BRAND ACCENT COLORS ─────────────────── */
  --accent-violet:      #6C63FF;   /* Primary electric violet */
  --accent-cyan:        #00D2FF;   /* Cyan electric */
  --accent-saffron:     #FF6B35;   /* Saffron orange (India) */
  --accent-emerald:     #00C896;   /* Emerald green (India) */
  --accent-gold:        #FFD700;   /* Gold for premium badges */
  --accent-rose:        #FF4D6D;   /* Live / urgent red-pink */

  /* ── TEXT ────────────────────────────────── */
  --text-primary:       #F0F0FF;   /* Main body text */
  --text-secondary:     #9090A8;   /* Subtext / descriptions */
  --text-muted:         #55556A;   /* Disabled / hints */
  --text-inverse:       #08080F;   /* Text on light backgrounds */

  /* ── GLASS / SURFACE ─────────────────────── */
  --glass-bg:           rgba(255,255,255,0.04);
  --glass-border:       rgba(255,255,255,0.08);
  --glass-hover:        rgba(255,255,255,0.07);
  --glass-active:       rgba(108,99,255,0.12);

  /* ── GRADIENTS ───────────────────────────── */
  --grad-hero:          linear-gradient(135deg, #6C63FF 0%, #00D2FF 50%, #00C896 100%);
  --grad-card:          linear-gradient(145deg, rgba(108,99,255,0.08) 0%, rgba(0,210,255,0.04) 100%);
  --grad-glow-violet:   radial-gradient(ellipse, rgba(108,99,255,0.30) 0%, transparent 70%);
  --grad-glow-cyan:     radial-gradient(ellipse, rgba(0,210,255,0.25) 0%, transparent 70%);
  --grad-india:         linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%);
  --grad-button:        linear-gradient(90deg, #6C63FF 0%, #00D2FF 100%);
  --grad-text:          linear-gradient(90deg, #6C63FF, #00D2FF, #00C896);
  --grad-mesh:          radial-gradient(at 40% 20%, rgba(108,99,255,0.2) 0px, transparent 50%),
                        radial-gradient(at 80% 0%, rgba(0,210,255,0.15) 0px, transparent 50%),
                        radial-gradient(at 0% 50%, rgba(0,200,150,0.15) 0px, transparent 50%);

  /* ── BORDERS ─────────────────────────────── */
  --border-subtle:      rgba(255,255,255,0.06);
  --border-medium:      rgba(255,255,255,0.10);
  --border-strong:      rgba(108,99,255,0.30);
  --border-glow:        rgba(108,99,255,0.50);

  /* ── SHADOWS ─────────────────────────────── */
  --shadow-sm:          0 2px 8px rgba(0,0,0,0.3);
  --shadow-md:          0 8px 32px rgba(0,0,0,0.4);
  --shadow-lg:          0 16px 64px rgba(0,0,0,0.5);
  --shadow-glow-violet: 0 0 30px rgba(108,99,255,0.40);
  --shadow-glow-cyan:   0 0 30px rgba(0,210,255,0.40);
  --shadow-glow-saffron:0 0 30px rgba(255,107,53,0.40);

  /* ── SPACING SCALE (8px base) ────────────── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* ── BORDER RADIUS ───────────────────────── */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;

  /* ── Z-INDEX ─────────────────────────────── */
  --z-base:     1;
  --z-card:     10;
  --z-dropdown: 100;
  --z-modal:    200;
  --z-toast:    300;
  --z-cursor:   400;
  --z-loader:   500;
}
```

### Responsive Breakpoints

```css
/* Mobile First */
/* xs: 0–374px     → Very small phones (iPhone SE old) */
/* sm: 375px–639px → Standard phones (iPhone 14, Pixel) */
/* md: 640px–767px → Large phones / small tablets */
/* lg: 768px–1023px → Tablets (iPad) */
/* xl: 1024px–1279px → Laptops */
/* 2xl: 1280px–1535px → Desktops */
/* 3xl: 1536px+    → Large monitors */

/* CSS Usage */
@media (max-width: 639px) { /* mobile */ }
@media (min-width: 640px) { /* tablet up */ }
@media (min-width: 1024px) { /* desktop */ }
```

---

## 4. TYPOGRAPHY SYSTEM

### Font Strategy

```css
/* === typography.css === */

/* Clash Display — Used for ALL headings, hero text, section titles */
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Regular.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Medium.woff2') format('woff2');
  font-weight: 500; font-display: swap;
}
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-SemiBold.woff2') format('woff2');
  font-weight: 600; font-display: swap;
}
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Bold.woff2') format('woff2');
  font-weight: 700; font-display: swap;
}

/* Satoshi — Used for all body text, descriptions, UI labels */
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Regular.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Medium.woff2') format('woff2');
  font-weight: 500; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Bold.woff2') format('woff2');
  font-weight: 700; font-display: swap;
}
```

### Type Scale (clamp for fluid sizing)

```css
:root {
  --font-display: 'Clash Display', 'Inter', sans-serif;
  --font-body:    'Satoshi', 'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Fluid type scale using clamp() */
  /* clamp(MIN, PREFERRED, MAX) */
  --text-xs:    clamp(0.70rem, 1.0vw, 0.80rem);   /* 11–13px */
  --text-sm:    clamp(0.80rem, 1.2vw, 0.90rem);   /* 13–14px */
  --text-base:  clamp(0.90rem, 1.4vw, 1.00rem);   /* 14–16px */
  --text-lg:    clamp(1.00rem, 1.6vw, 1.12rem);   /* 16–18px */
  --text-xl:    clamp(1.12rem, 1.8vw, 1.25rem);   /* 18–20px */
  --text-2xl:   clamp(1.25rem, 2.0vw, 1.50rem);   /* 20–24px */
  --text-3xl:   clamp(1.50rem, 2.5vw, 2.00rem);   /* 24–32px */
  --text-4xl:   clamp(2.00rem, 3.5vw, 2.50rem);   /* 32–40px */
  --text-5xl:   clamp(2.50rem, 5.0vw, 3.50rem);   /* 40–56px */
  --text-6xl:   clamp(3.00rem, 7.0vw, 5.00rem);   /* 48–80px */
  --text-hero:  clamp(3.50rem, 9.0vw, 7.00rem);   /* 56–112px */

  /* Line Heights */
  --leading-tight:  1.1;
  --leading-snug:   1.3;
  --leading-normal: 1.6;
  --leading-loose:  1.8;

  /* Letter Spacing */
  --tracking-tight:  -0.04em;
  --tracking-snug:   -0.02em;
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;
  --tracking-widest:  0.15em;
}
```

### Typography Usage Rules
| Element | Font | Weight | Size | Color |
|---|---|---|---|---|
| Hero headline | Clash Display | 700 | --text-hero | gradient text |
| Section title | Clash Display | 600 | --text-5xl | --text-primary |
| Section subtitle | Clash Display | 500 | --text-3xl | --text-primary |
| Label / overline | Satoshi | 500 | --text-sm | --accent-cyan |
| Body paragraph | Satoshi | 400 | --text-base | --text-secondary |
| Card title | Clash Display | 600 | --text-xl | --text-primary |
| Card body | Satoshi | 400 | --text-sm | --text-secondary |
| Button text | Satoshi | 600 | --text-base | varies |
| Badge / chip | Satoshi | 700 | --text-xs | varies |
| Nav link | Satoshi | 500 | --text-base | --text-secondary |

---

## 5. ANIMATION MASTER PLAN

### Libraries to Install

```json
{
  "dependencies": {
    "gsap": "^3.12.5",
    "lenis": "^1.1.13",
    "@studio-freight/lenis": "^1.0.42",
    "three": "^0.163.0",
    "@react-three/fiber": "^8.16.8",
    "@react-three/drei": "^9.105.6",
    "framer-motion": "^11.2.9",
    "animejs": "^3.2.2",
    "react-spring": "^9.7.3",
    "react-use-gesture": "^9.1.3",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.4.0",
    "countup.js": "^2.8.0",
    "split-type": "^0.3.4",
    "react-intersection-observer": "^9.10.2",
    "recharts": "^2.12.7",
    "@lottiefiles/react-lottie-player": "^3.5.4",
    "swiper": "^11.1.3",
    "embla-carousel-react": "^8.1.5",
    "vanilla-tilt": "^1.8.1"
  }
}
```

> **Note:** Barba.js is NOT needed with React/Vite (it's for multi-page vanilla JS apps). Instead, use **Framer Motion's AnimatePresence** + **React Router** for smooth page transitions.

### GSAP Plugin Registration (gsap.init.js)

```javascript
// animations/gsap/gsap.init.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText'; // GSAP Club (or use split-type free)
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  TextPlugin,
  DrawSVGPlugin,
  CustomEase,
  MorphSVGPlugin
);

// Custom easing curves (inspired by Apple/Linear)
CustomEase.create('smooth', 'M0,0 C0.25,0.46 0.45,0.94 1,1');
CustomEase.create('bounce-out', 'M0,0 C0.34,1.56 0.64,1 1,1');
CustomEase.create('expo-out', 'M0,0 C0.16,1 0.3,1 1,1');

// Lenis → GSAP ScrollTrigger bridge (CRITICAL)
import Lenis from 'lenis';
export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,   // Disable on touch (native feel)
  touchMultiplier: 2,
  infinite: false,
});

// Connect Lenis to GSAP ticker
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// Global ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 85%',
});

export { gsap, ScrollTrigger };
```

### Framer Motion Global Variants

```javascript
// animations/variants.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.3, ease: 'easeOut' } }
};
```

### Animation Performance Rules
1. **Only animate `transform` and `opacity`** — these are GPU-composited, zero layout cost
2. **Use `will-change: transform`** only on elements that WILL animate (not globally)
3. **Three.js canvas**: limit device pixel ratio to `Math.min(window.devicePixelRatio, 2)`
4. **Detect low-end devices** via `navigator.hardwareConcurrency` — if ≤ 2, skip Three.js + particles
5. **Respect `prefers-reduced-motion`** — wrap all animations in a check
6. **Kill ScrollTrigger on component unmount** to prevent memory leaks
7. **Pause Lenis** when a modal/drawer is open
8. **Use `requestAnimationFrame`** for cursor tracking, not scroll events

---

## 6. SECTION-BY-SECTION BLUEPRINT

---

### 6.01 — PAGE PRELOADER

**Purpose:** Brand moment. Shows while page loads. Exits before hero reveals.

**Visual:**
- Full screen `#080810` background
- Center: Animated **ishu.fun** logo reveal
  - Logo text splits → letters slide in from bottom one by one (GSAP stagger)
  - Logo glows with violet → cyan gradient pulse
- Below logo: Thin progress bar fills 0% → 100% horizontally (tracks real load)
- Exit animation: Whole preloader slides up (Y: 0 → -100vh) in 0.8s revealing hero below

**Technical Implementation:**
```jsx
// PageLoader.jsx
// - useState: isLoading (true until window.onload fires)
// - useEffect: listen to document.readyState
// - GSAP: tl.from('.letter', { y: 40, opacity: 0, stagger: 0.06, duration: 0.5 })
// - GSAP exit: gsap.to('.preloader', { y: '-100vh', duration: 0.8, ease: 'expo.inOut' })
// - Lock body scroll while loading: document.body.style.overflow = 'hidden'
// - After exit: document.body.style.overflow = ''
```

**Requirements:**
- Must show for minimum 1.2 seconds even if page loads faster (branding)
- Must have proper `aria-label="Loading ishu.fun"` and `role="status"`
- Exit must be complete before hero animations begin (chain with GSAP)

---

### 6.02 — ANNOUNCEMENT TICKER BAR

**Location:** Fixed at very top of page, above navbar. Height: 36px mobile / 40px desktop.

**Visual Design:**
```
[ 🔥 JEE Mains 2026 Result DECLARED →   ·   NEET 2026 Registration Open →   ·   SSC CGL 2025 Admit Card →   · ]
```
- Background: `var(--accent-saffron)` with 10% opacity, or subtle `var(--bg-elevated)` with border-bottom
- Text: White, Satoshi Medium, 13px
- Marquee: CSS `animation: marquee 30s linear infinite` (or use `react-marquee-player`)
- Items separated by a styled `·` dot separator
- Each item is clickable — links to relevant result/news page
- Dismiss button `✕` on right side — saves dismissed state in `localStorage`
- On mobile: Slightly smaller text, still same ticker behavior

**Data Source:**
- Fetched from `GET /api/v1/homepage/announcements`
- Falls back to hardcoded data if API fails (graceful degradation)
- Limited to 10 latest announcements

**Accessibility:** `aria-label="Latest announcements"`, `role="marquee"` (but also provide a pause button for accessibility — user can stop the scroll)

---

### 6.03 — NAVBAR

**Position:** Sticky (follows user), starts transparent, transitions to glass on scroll

**Desktop Layout (1024px+):**
```
[LOGO]    [Results] [Jobs] [Tools] [News] [Blog] [More ▾]    [🔔] [हि] [Login] [Get Alerts →]
```

**Mobile Layout (<1024px):**
```
[LOGO]                                              [🔔] [☰]
```
↓ when ☰ tapped → Full-screen overlay menu slides from right with all links + CTA buttons

**States:**
1. **Default (top of page):** `background: transparent`, no blur, logo fully visible
2. **Scrolled:** `background: rgba(8,8,16,0.85)`, `backdrop-filter: blur(20px) saturate(180%)`, border-bottom: `1px solid var(--glass-border)`, box-shadow applied
3. **Hidden:** Slides up -100% when user scrolls DOWN more than 200px (saves screen space)
4. **Visible again:** Slides back in when user scrolls UP

**GSAP/CSS for Navbar Scroll:**
```javascript
// useScrollDirection.js → returns 'up' | 'down'
// Navbar: gsap.to('.navbar', { y: direction === 'down' ? '-100%' : '0%', duration: 0.3 })
```

**Logo:**
- `ishu.fun` wordmark in Clash Display Bold
- `.fun` suffix in var(--accent-violet) color
- Subtle orange glow on hover: `filter: drop-shadow(0 0 12px var(--accent-saffron))`
- Links to homepage `/`

**Navigation Links (Desktop):**
- Satoshi Medium, 15px
- Default: `var(--text-secondary)` color
- Hover: `var(--text-primary)` with underline that slides in from left (CSS transition)
- Active page: `var(--accent-cyan)` color
- Dropdown items appear on hover with glass card

**"More" Mega-Dropdown contains:** About, Contact, Test/Quiz (coming soon), Telegram Channel

**Notification Bell (🔔):**
- Shows orange badge with count of new results/news since last visit
- Click: Dropdown panel slides down (glass card, border)
- Inside: Last 5 notifications with title, time, category badge
- "Mark all read" button at bottom
- Uses `localStorage` for non-logged users

**Language Switcher (हि):**
- Simple icon button showing current language abbreviation
- Click: Small dropdown with language options (EN, HI, BN, TA, TE, MR)

**CTA Buttons:**
- `Login` → Ghost button → Opens auth modal
- `Get Alerts →` → Primary gradient button → Smooth scroll to WhatsApp section

**Mobile Menu (Full Screen Overlay):**
```
[✕ Close]
[Logo]
[Results]      [Jobs]
[Tools]        [News]
[Blog]         [About]
───────────────
[Login]        [Get WhatsApp Alerts]
───────────────
[Social Icons: Twitter · Instagram · Telegram · YouTube]
```
Animation: Overlay fades + scales in (Framer Motion AnimatePresence)
Each link slides in from right with stagger (0.05s per item)

---

### 6.04 — HERO SECTION

**This is the most important section. Maximum effort. Maximum impact.**

**Full viewport height (100dvh).** Uses `dvh` (dynamic viewport height) for mobile compatibility with browser chrome.

**Layout (Desktop):**
```
LEFT (55%):                          RIGHT (45%):
┌────────────────────────────────┐   ┌──────────────────────────┐
│ [OVERLINE LABEL]               │   │                          │
│                                │   │    THREE.JS 3D SCENE     │
│ India's Fastest Platform for   │   │                          │
│ Sarkari Results & Govt         │   │  - Floating India globe  │
│ Job Alerts                     │   │  - Particle field        │
│                                │   │  - Orbiting data nodes   │
│ [Search bar — full width]      │   │                          │
│                                │   │  (lazy loaded, disabled  │
│ [Explore Results ▶] [Get       │   │   on mobile/low-end)     │
│  WhatsApp Alerts 💬]           │   │                          │
│                                │   └──────────────────────────┘
│ ─────────────────────────      │
│ 50L+ Students · 4.9★ · India  │
└────────────────────────────────┘
```

**Layout (Mobile):**
- Single column, centered
- 3D canvas replaced with static India gradient illustration (WebP)
- Text at top, search below, CTA buttons below that

**Background (Behind everything):**
- Base: `var(--bg-base)` #080810
- Gradient mesh overlay: `var(--grad-mesh)` — subtle violet/cyan/emerald glows at corners
- Animated very-slow-moving grain texture (CSS or canvas) — adds depth, premium feel
- Optional: 15-second muted looping WebM video background (desktop only)

**Overline Label:**
```
✦  India's #1 Student Platform
```
- Small pill badge: `background: var(--glass-bg)`, `border: 1px solid var(--glass-border)`
- Inner left dot glows with saffron color
- Text: Satoshi Medium, 13px, var(--accent-cyan)
- Slide in from top first (GSAP, 0.6s)

**Main Headline (The Most Important Text on Site):**
```
India's Fastest Platform
for Sarkari Results &
Government Job Alerts
```
- Font: Clash Display Bold
- Size: --text-hero (56px mobile → 112px desktop)
- Color: gradient text (violet → cyan) on key words, white on rest
- "Sarkari Results" → gradient applied via `background-clip: text; -webkit-background-clip: text`
- Animation: **SplitType word-by-word reveal** — each word slides up from `translateY(100%)` with 0.06s stagger, plus fade-in

**Subheadline:**
```
Results · Jobs · Free PDF Tools · News — all in one place.
Built for India's 50 lakh+ competitive exam aspirants.
```
- Font: Satoshi Regular, var(--text-lg)
- Color: var(--text-secondary)
- Animation: Fades in after headline, 0.4s delay

**Typewriter Effect (optional, below subheadline):**
```
Looking for → [JEE Mains Result | NEET 2026 | SSC CGL | Railway Vacancy | ...]
```
- Cycles through exam names with blinking cursor
- Uses custom `Typewriter.jsx` component

**Search Bar:**
- Width: 100% of left column
- Height: 56px (mobile) / 64px (desktop)
- Glassmorphism: `background: var(--glass-bg)`, `border: 1px solid var(--glass-border)`
- On focus: `border-color: var(--accent-violet)`, `box-shadow: var(--shadow-glow-violet)`
- Left: 🔍 search icon (Lucide Icon, NOT AI generated)
- Right: "Search" pill button (gradient bg)
- Placeholder: "Search results, jobs, tools..." in Hindi + English rotating
- On type: Instant search suggestions dropdown with results preview
- Animation: Slides up with a slight glow after 0.8s delay

**CTA Buttons:**
```jsx
<GlowButton primary>Explore Results →</GlowButton>
<MagneticButton secondary>Get WhatsApp Alerts 💬</MagneticButton>
```
Primary Button:
- `background: var(--grad-button)` (violet → cyan)
- Height: 52px, border-radius: var(--radius-full)
- Hover: `scale(1.04)`, glow intensifies, arrow translates right 4px
- Active: `scale(0.98)`

Secondary / WhatsApp Button:
- Border: `1px solid rgba(37,211,102,0.5)` (WhatsApp green tint)
- Background: `rgba(37,211,102,0.08)`
- Icon: Phosphor `WhatsappLogo` icon (SVG, NOT AI generated)
- Hover: Border brightens, bg opacity increases

**Magnetic Button Effect (desktop only):**
```javascript
// MagneticButton.jsx
// useSpring from react-spring for smooth position
// onMouseMove: calc distance to center, apply translate
// onMouseLeave: spring back to 0,0
```

**Social Proof Strip:**
```
[Avatar] [Avatar] [Avatar] [Avatar] +50L Students   ·   ⭐ 4.9/5 Rating   ·   🇮🇳 All India
```
- Avatars: 4 overlapping real student photo circles (or UI Avatars API generated)
- Slide in from bottom, staggered
- "50L Students" uses CountUp.js when in view

**Three.js Hero Canvas (Right Side, Desktop Only):**
Scene Details:
- **India Globe:** Low-poly mesh sphere colored in tri-color gradient
  - Slow rotation: 0.003 radians/frame
  - City nodes pulse: small glowing spheres at major cities (Delhi, Mumbai, Bengaluru, Kolkata, Chennai)
  - Connection lines between nodes (Three.js LineSegments, animated with GSAP)
- **Particle Field:** 800 particles, random positions around the globe, gentle float
- **Post-processing:** UnrealBloomPass (subtle glow), FXAA antialiasing
- **Camera:** PerspectiveCamera, FOV 45, orbits with mouse parallax (subtle)
- **Load timing:** Lazy imported, rendered after preloader exits, no flash

**Scroll Indicator:**
- Animated bouncing down arrow at bottom center
- Text: "Scroll to explore"
- Fades out after 20% scroll depth

**Hero Section GSAP Timeline:**
```javascript
// heroAnimations.js
const heroTimeline = gsap.timeline({ delay: 1.8 }); // After preloader exits
heroTimeline
  .from('.hero-label', { y: -20, opacity: 0, duration: 0.5 })
  .from('.hero-word', { y: '100%', opacity: 0, stagger: 0.06, duration: 0.6, ease: 'expo.out' }, '-=0.2')
  .from('.hero-sub', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
  .from('.hero-search', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
  .from('.hero-cta', { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 }, '-=0.3')
  .from('.hero-social-proof', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2');
```

**Images to Use in Hero:**
- Background illustration: `https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?w=1920` (India night city lights — abstract)
- Student illustration: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800` (student studying)
- Fallback mobile bg: Use pure CSS gradient mesh (no external image)

---

### 6.05 — TRUST BAR / SOCIAL PROOF STRIP

**Position:** Immediately below hero. No gap. Full width.

**Visual:**
```
[ As featured in / Trusted by ]
[NTA logo] [UPSC logo] [SSC logo] [Railway logo] [State Board logos]
```
These are SVG text-based logos of official government exam bodies, NOT corporate logos. Since these are public exam bodies:
- **NTA** (National Testing Agency) — `https://nta.ac.in/`
- **UPSC** (Union Public Service Commission)
- **SSC** (Staff Selection Commission)
- **Indian Railways**
- **IBPS** (Banking)
- State logos (UP Board, Bihar Board, etc.)

**Layout:** Horizontal scrolling marquee on mobile, centered grid on desktop
**Appearance:** Grayscale (20% opacity) → Hover: full color (transition 0.3s)
**Background:** `var(--bg-elevated)`, separated by subtle border lines top and bottom

---

### 6.06 — STATS & NUMBERS SECTION

**Purpose:** Establish trust through real numbers. High impact.

**Layout:** 4-column grid (desktop) / 2×2 grid (tablet) / single column (mobile)

**Stats to Display:**
| Number | Label | Icon |
|---|---|---|
| **50,00,000+** | Students Helped | Users icon |
| **2,00,000+** | Results Published | Certificate icon |
| **99.9%** | Uptime | Shield icon |
| **10,00,000+** | WhatsApp Alerts Sent | Bell icon |

**Each Stat Card:**
- Background: `var(--glass-bg)`, border: `var(--border-subtle)`
- Number: Clash Display Bold, --text-5xl, gradient color
- Label: Satoshi Regular, --text-base, var(--text-secondary)
- Icon: Top-left corner, Phosphor SVG icon, 28px, accent color
- Hover: Card lifts (translateY -4px), border glows
- Animation: CountUp.js triggers when card enters viewport (IntersectionObserver)
- CountUp config: `{ duration: 2.5, separator: ',', useGrouping: true }`

**Section Header:**
- Overline: "BY THE NUMBERS"
- Title: "Trusted by Millions of Indian Students"
- Centered, GSAP scroll reveal

**Background Decoration:**
- Faint grid pattern (CSS `background-image: linear-gradient` repeating grid)
- Glowing orb behind stats: radial gradient purple glow

**Real Data Source:** `GET /api/v1/homepage/stats` (Redis cached 1 hour)

---

### 6.07 — WHAT WE OFFER (FEATURES / SERVICES)

**Purpose:** Showcase the 6 core offerings clearly. "Why use ishu.fun over others?"

**Layout Strategy:** Alternating content layout (like Stripe / Linear) — NOT a boring 3-column grid. Each feature gets a "full-moment" section with large icon, headline, description, and a mini preview/screenshot.

**6 Core Features:**

**Feature 1: ⚡ Instant Sarkari Results**
- Icon: Phosphor `Lightning` (SVG, violet color)
- Headline: "Get Sarkari Results Before Anyone Else"
- Body: "Results for JEE, NEET, UPSC, SSC, Railways, Banking, and 200+ state exams — available the moment they're released. Never miss a result again."
- Visual: Mini mockup of a result card with animated "LIVE" badge
- CTA: "Browse All Results →"

**Feature 2: 💼 Latest Govt Job Vacancies**
- Icon: Phosphor `Briefcase` (SVG, saffron color)
- Headline: "Never Miss a Government Job Opening"
- Body: "Get instant alerts for every new government job vacancy from SSC, UPSC, Railways, State PSC, Banking, Defence, and Teaching sectors."
- Visual: Job listing cards with state badges
- CTA: "View Latest Jobs →"

**Feature 3: 🛠️ Free PDF Tools**
- Icon: Phosphor `FilePdf` (SVG, cyan color)
- Headline: "100% Free PDF Tools — No Signup Needed"
- Body: "Merge, compress, convert, split, rotate, add watermarks, OCR, and e-sign PDFs. 15+ tools available free forever. No limit, no ads, no signup."
- Visual: Animated tool cards grid (small versions)
- CTA: "Try PDF Tools →"

**Feature 4: 📰 Curated Education News**
- Icon: Phosphor `Newspaper` (SVG, emerald color)
- Headline: "Verified Education News You Can Trust"
- Body: "No fake news, no clickbait. Curated, fact-checked education and government news updated 24/7. Subscribe to get personalized news in your language."
- Visual: News card mockup with source badge
- CTA: "Read Latest News →"

**Feature 5: 📅 Exam Calendar & Countdown**
- Icon: Phosphor `CalendarCheck` (SVG, gold color)
- Headline: "Never Miss an Exam Date Again"
- Body: "Complete calendar with admit card release dates, exam dates, answer keys, and result dates. Countdown timers for every upcoming exam."
- Visual: Calendar grid with highlighted dates and countdown
- CTA: "View Exam Calendar →"

**Feature 6: 🔔 WhatsApp Alerts**
- Icon: Phosphor `WhatsappLogo` (SVG, green color)
- Headline: "Results Straight to Your WhatsApp"
- Body: "Subscribe once. Get instant WhatsApp messages the moment any result is published for your selected exams. Free forever, cancel anytime."
- Visual: Phone showing WhatsApp notification
- CTA: "Subscribe Free →"

**Animation:** Each feature reveals on scroll with GSAP ScrollTrigger — alternating slide from left/right.

---

### 6.08 — LATEST RESULTS PREVIEW

**Purpose:** Show the most important content (results) immediately. Drive engagement.

**Section Header:**
- Overline: "LIVE RESULTS"
- Title: "Latest Sarkari Results"
- Right side: "View All Results →" link

**Filter Tabs (horizontal scrollable):**
```
[All] [JEE] [NEET] [UPSC] [SSC] [Railway] [Banking] [State PCS] [Teaching]
```
- Selected: `background: var(--accent-violet)`, white text, pill shaped
- Unselected: Glass pill, var(--text-secondary)
- Click: Smooth filter animation (GSAP), cards fade/slide out/in
- Mobile: Horizontal scroll, no wrapping

**Result Cards (6 cards, 3-column desktop, 2-column tablet, 1-column mobile):**

Each Result Card contains:
```
┌─────────────────────────────────┐
│ [🟢 LIVE] [Category Badge]      │
│                                 │
│ JEE Mains 2026 Session 1 Result │
│                                 │
│ 📅 Released: 28 Mar 2026        │
│ 📋 Total Appeared: 11.5 Lakh   │
│ 🔗 Direct Link Available        │
│                                 │
│ [Check Result →]  [📋 Details]  │
└─────────────────────────────────┘
```
- Card: Glass morphism (`var(--glass-bg)`, border)
- LIVE badge: Pulsing green dot + "LIVE" text (CSS animation)
- NEW badge: Saffron color, Satoshi Bold
- Category badge: Color-coded (violet for JEE, emerald for NEET, etc.)
- Hover: `translateY(-6px)`, border glow, slight 3D tilt (vanilla-tilt)
- "Check Result →" button: Small gradient pill button

**Countdown Timer (for upcoming results):**
```
Result Expected in: [02d] : [14h] : [33m] : [22s]
```
- Styled segmented display, updates every second
- Only shown for upcoming (not yet released) results

**Skeleton Loading:** While data loads, show skeleton cards with shimmer animation

**Data Source:** `GET /api/v1/homepage/latest-results` (6 results, Redis cached 5min)

**Empty State:** If API fails → Show 3 hardcoded popular results as fallback

---

### 6.09 — PDF TOOLS SHOWCASE

**Purpose:** Showcase the PDF tools feature as a major differentiator (unique in this space).

**Section Header:**
- Overline: "FREE PDF TOOLS"
- Title: "15+ Professional PDF Tools — Free Forever"
- Subtitle: "No account needed. No watermarks. No limits. Built for Indian students."

**Tools Grid (4-column desktop, 2-column mobile):**

| Tool | Icon | Color |
|---|---|---|
| Merge PDF | Phosphor `ArrowsMerge` | Violet |
| Compress PDF | Phosphor `ArrowsIn` | Cyan |
| PDF to Word | Phosphor `FileDoc` | Saffron |
| Word to PDF | Phosphor `FilePdf` | Emerald |
| Split PDF | Phosphor `Scissors` | Rose |
| Rotate PDF | Phosphor `ArrowClockwise` | Gold |
| PDF OCR | Phosphor `TextAa` | Violet |
| Add Watermark | Phosphor `Stamp` | Cyan |
| E-Sign PDF | Phosphor `PenNib` | Saffron |
| Unlock PDF | Phosphor `LockOpen` | Emerald |
| Protect PDF | Phosphor `Lock` | Rose |
| Image to PDF | Phosphor `Image` | Gold |
| PDF to Image | Phosphor `Export` | Violet |
| Reorder Pages | Phosphor `Stack` | Cyan |
| PDF Metadata | Phosphor `Info` | Saffron |

**Each Tool Card:**
- Compact card: 180×120px (desktop)
- Icon (36px) + Tool name (Satoshi Medium) + "Try Free" label
- Glassmorphism background
- Hover: 3D tilt effect (vanilla-tilt, max-tilt: 15°), icon bounces (GSAP), border glows with tool color
- Click: Navigate to tools page with that tool active

**Popular Tools Highlight:**
- Top 3 most-used tools get a "⭐ Popular" badge overlay (top-right corner)

**CTA Below Grid:**
```
[🛠️ Try All Tools Free →]   →  /tools
```

---

### 6.10 — INDIA MAP SECTION

**Purpose:** Show coverage across all Indian states. Build regional trust. Drive state-specific navigation.

**Section Header:**
- Overline: "ALL INDIA COVERAGE"
- Title: "Serving Students Across Every State of India"
- Subtitle: "From Jammu & Kashmir to Kanyakumari — we cover every state exam, PSC, and board."

**Interactive India Map (SVG):**
- Source: High-quality SVG map of India with all 28 states + 8 UTs as separate `<path>` elements
- Default: All states in `var(--bg-elevated)` with subtle border
- Hover: State highlights with gradient fill + tooltip appears
- Each state tooltip shows: State name, Vacancy count, Latest result

**State Tooltip Contents:**
```
┌────────────────────┐
│ 🗺 Uttar Pradesh   │
│ 📋 2,340 Active Jobs│
│ 🆕 5 New Results   │
│ [View UP Results →]│
└────────────────────┘
```

**Tooltip:** Glass card, appears near cursor, GSAP fade in (0.2s)

**Mobile Fallback:** Interactive SVG map is hidden on mobile (too small to tap accurately). Instead show a horizontal scrollable grid of state chips:
```
[UP] [Bihar] [Rajasthan] [MP] [Maharashtra] [Gujarat] [Karnataka] ...
```
Each chip is clickable → navigates to `/?state=UP`

**Data Visualization:**
- State color intensity based on vacancy count (darker = more vacancies) — like a heat map
- D3.js used for color scale: `d3.scaleSequential([min, max], d3.interpolateViridis)`

**Most Active States Sidebar (desktop):**
Top 5 states by vacancy count with mini bar chart

**Data Source:** `GET /api/v1/homepage/india-map-data` (state-wise vacancy counts)

---

### 6.11 — EXAM CALENDAR SECTION

**Purpose:** Utility section. Students need this desperately. Show upcoming important dates.

**Section Header:**
- Overline: "EXAM CALENDAR"
- Title: "Important Dates You Cannot Miss"

**Calendar Layout:**
- Month view grid (current month highlighted)
- Important exam dates marked with colored dots
- Color-coded by category (JEE: violet, NEET: green, SSC: blue, etc.)

**Upcoming Events List (right of calendar, or below on mobile):**
```
┌──────────────────────────────────────────────┐
│ 🟣 JEE Mains Session 2          12 April 2026│
│    Registration closes in: 3 days            │
├──────────────────────────────────────────────┤
│ 🟢 NEET 2026                     4 May 2026  │
│    Exam in: 34 days                          │
├──────────────────────────────────────────────┤
│ 🔵 SSC CGL Tier 1               20 May 2026  │
│    Admit card expected in: 12 days           │
└──────────────────────────────────────────────┘
```
Each event: Small countdown badge, exam name, date, category color dot
CTA per event: "Set Reminder" → Opens WhatsApp subscribe modal

---

### 6.12 — LIVE DATA / GRAPH SECTION

**Purpose:** Show real platform growth. Build credibility with visual data. Inspired by Vercel's analytics dashboard look.

**This section has a "mini dashboard" aesthetic** — dark glass panels with charts.

**Panel 1 — Growth Chart (Recharts LineChart):**
- Title: "Student Registrations (Last 12 Months)"
- Line chart with smooth curve
- X axis: Months (Apr 25 → Mar 26)
- Y axis: Users (in lakhs)
- Data (example real-ish): `[2.1L, 2.8L, 3.2L, 4.0L, 4.5L, 5.0L, 5.8L, 6.2L, 6.5L, 7.0L, 7.8L, 8.5L]`
- Gradient fill below the line (violet → transparent)
- Animated: Line draws from left to right on scroll enter (Recharts `isAnimationActive`)
- Tooltip: Shows exact number on hover

**Panel 2 — Donut Chart (Recharts PieChart):**
- Title: "Users by Device"
- Segments: Android 78%, iOS 12%, Desktop 10%
- Colors: --accent-violet, --accent-cyan, --accent-saffron
- Center text: "90K Daily Active Users"
- Animated: Pie segments draw on scroll enter

**Panel 3 — Real-time Counter:**
- Title: "🟢 Students Online Right Now"
- Large animated number: `34,821`
- Updates via WebSocket or polling (fake-realtime if needed)
- Pulsing green dot to indicate live

**Panel 4 — Top Results This Week:**
- Mini horizontal bar chart (Recharts BarChart)
- Top 5 most searched results this week
- Bar fills on scroll enter

---

### 6.13 — NEWS PREVIEW SECTION

**Purpose:** Drive news engagement. Show current, relevant education news.

**Layout (Desktop):**
```
LEFT (Large featured card 1/2 width)  |  RIGHT (3 smaller cards stacked)
```

**Featured Card:**
- Large image (16:9 aspect ratio) — dynamically fetched from news API
- Image source: `https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg?w=800`
- Category badge: "EDUCATION" / "GOVT" / "EXAMS"
- Title: Clash Display Medium, 2xl
- Date + source attribution
- 2-line excerpt
- "Read Full Story →" CTA

**Smaller News Cards (3 on right):**
- Horizontal layout: small image left (80×80px) + text right
- Compact design
- Title: Satoshi Medium, base
- Date: muted text
- Hover: image zooms slightly (scale 1.05, overflow hidden)

**Filter Tabs:** [All] [JEE/NEET] [Govt Jobs] [Scholarships] [Policy] [State News]

**Mobile Layout:** Single column, full-width cards

**Data Source:** `GET /api/v1/homepage/news-preview` (4 items, Redis cached 2min)

**Image Lazy Loading:**
```jsx
// Use loading="lazy" + IntersectionObserver for below-fold images
// Show blur placeholder (LQIP) while loading
// Phosphor 'Image' icon as fallback if image fails to load
```

---

### 6.14 — WHATSAPP NOTIFICATION CTA

**Purpose:** The #1 conversion goal. Get users to subscribe to WhatsApp alerts.

**This section must be visually stunning. It's the "money section."**

**Layout (Desktop):**
```
LEFT: Copy + Form         |  RIGHT: Phone Mockup with WhatsApp UI
```

**Left Side:**
- Overline: "📲 FREE ALERTS"
- Headline: "Get Exam Results Straight to Your WhatsApp"
- Sub: "Join 10,00,000+ students. Zero spam. Cancel anytime. 100% Free."
- 3 bullet points with Phosphor check icons:
  - ✅ Instant result alerts (within seconds)
  - ✅ Upcoming exam reminders (7 days before)
  - ✅ Admit card and answer key notifications

**Subscription Form:**
```jsx
// Step 1: Phone number input with +91 prefix
<PhoneInput placeholder="Enter WhatsApp number" />

// Step 2: Exam selector (multi-select chips)
<ExamSelector exams={['JEE', 'NEET', 'UPSC', 'SSC', 'Railway', 'Banking', 'State PCS']} />

// Submit button: "Subscribe Free →" (WhatsApp green gradient)

// Step 3: Success animation (Lottie checkmark + confetti)
// "You're subscribed! 🎉 You'll receive a confirmation on WhatsApp."
```

**Form Validation:**
- Phone: Must be 10 digits, Indian mobile number pattern `/^[6-9]\d{9}$/`
- Exam: At least 1 must be selected
- Submit: Rate limited (3 per IP per hour on backend)
- OTP verification (optional Phase 2): For now, direct save

**Right Side — WhatsApp UI Mockup:**
- CSS-built phone frame (no image)
- Inside: Animated WhatsApp chat bubbles sliding in
- Shows example messages:
  ```
  ✅ JEE Mains 2026 Result OUT!
  Check your result at ishu.fun
  🔗 Direct Link: ishu.fun/results/jee-mains-2026
  ```
- Background: WhatsApp's characteristic green-ish background pattern
- Animated: Messages appear one by one, simulating real WhatsApp

**Section Background:**
- Deep gradient: `radial-gradient(at 60% 50%, rgba(37,211,102,0.08) 0%, transparent 60%)`
- WhatsApp green glow behind the phone mockup

**API Call:**
```
POST /api/v1/whatsapp/subscribe
Body: { phone: "9876543210", exams: ["jee", "neet"] }
Response: { success: true, message: "Subscribed successfully" }
```

---

### 6.15 — BLOG PREVIEW SECTION

**Purpose:** Drive blog traffic, improve SEO through internal linking, establish authority.

**Section Header:**
- Overline: "FROM OUR BLOG"
- Title: "Study Strategies from Toppers"

**Layout:**
- 1 featured large blog card + 2 smaller cards side by side

**Featured Blog Card:**
- Cover image (from Unsplash education category): `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800`
- Category tag: e.g., "JEE PREPARATION"
- Title: e.g., "How to Score 300+ in JEE Mains 2026 — Complete Strategy Guide"
- Author: avatar + name + date
- Reading time: "8 min read"
- CTA: "Read Article →"

**Smaller Cards:**
- Similar structure, more compact
- Example titles:
  - "UPSC Mains 2025: Important Topics to Focus On"
  - "Best Free Websites for NEET Preparation in 2026"

**Data Source:** `GET /api/v1/homepage/blog-preview` (3 posts, Redis cached 30min)

---

### 6.16 — TESTIMONIALS & REVIEWS

**Purpose:** Social proof from real students. This drives conversion more than any other element.

**Section Header:**
- Overline: "STUDENT SUCCESS"
- Title: "Loved by Students Across India"
- Stats row: ⭐ 4.9/5 · 50L+ Happy Users · Featured in 20+ State Toppers

**Layout: Two-Row Infinite Marquee**
- Row 1: Scrolls LEFT → (continuous)
- Row 2: Scrolls RIGHT → (opposite direction)
- On hover: Both rows PAUSE (CSS `animation-play-state: paused`)
- Speed: `animation-duration: 40s` (slow, readable)
- Implementation: CSS keyframes `@keyframes scroll` with translateX

**Each Testimonial Card:**
```
┌────────────────────────────────────┐
│ [Avatar 48px] Rahul Kumar          │
│               IIT Aspirant, UP     │
│                                    │
│ ⭐⭐⭐⭐⭐                           │
│                                    │
│ "ishu.fun was the first site to    │
│ show JEE Mains result. I checked   │
│ my score 2 hours before official   │
│ site was accessible. Amazing!"     │
│                                    │
│ [JEE] [Result Checker]             │
└────────────────────────────────────┘
```
- Card: Glass card, 280px wide, fixed height 160px
- Avatar: Sourced from `https://api.uifaces.co/our-content/donated/[id].jpg` (free)
- Or use: `https://ui-avatars.com/api/?name=Rahul+Kumar&background=6C63FF&color=fff&size=48`
- Stars: Phosphor `Star` icon filled, saffron/gold color
- Tag badges at bottom: Exam type they used

**15+ Testimonials Total (Use these for data):**

```javascript
// constants/testimonials.js
export const testimonials = [
  { name: "Rahul Kumar", location: "Varanasi, UP", exam: "JEE", rating: 5,
    text: "ishu.fun showed me my JEE result 2 hours before the official site worked. Incredible!" },
  { name: "Priya Sharma", location: "Jaipur, Rajasthan", exam: "NEET", rating: 5,
    text: "The PDF compression tool saved me so much time for my admit card. Super fast!" },
  { name: "Ankit Yadav", location: "Patna, Bihar", exam: "UPSC", rating: 5,
    text: "Best platform for government exam updates. The WhatsApp alerts are lifesaving." },
  { name: "Meena Patel", location: "Ahmedabad, Gujarat", exam: "SSC", rating: 5,
    text: "I subscribed to WhatsApp alerts for SSC CGL and got notified within 2 minutes!" },
  { name: "Vikash Singh", location: "Lucknow, UP", exam: "Railway", rating: 5,
    text: "Railway exam calendar is perfect. Never miss a date anymore. Love the design!" },
  { name: "Pooja Nair", location: "Kochi, Kerala", exam: "Banking", rating: 5,
    text: "IBPS PO result notification came to my WhatsApp before I even heard from friends." },
  { name: "Suresh Reddy", location: "Hyderabad, TS", exam: "NEET", rating: 5,
    text: "The PDF tools are genuinely free with no watermarks. Rare find on internet!" },
  { name: "Kavya Menon", location: "Bengaluru, KA", exam: "JEE", rating: 5,
    text: "Smooth website, beautiful design, and fast results. ishu.fun is simply the best." },
  { name: "Deepak Maurya", location: "Kanpur, UP", exam: "UPSC", rating: 5,
    text: "News section keeps me updated daily. Very trustworthy and ad-free experience." },
  { name: "Anjali Kumari", location: "Bhagalpur, Bihar", exam: "SSC", rating: 5,
    text: "My WhatsApp group of 50+ friends all use ishu.fun now. We spread the word!" },
];
```

---

### 6.17 — TRUST & SAFETY BADGES

**Purpose:** Quick trust signals row. Fast scan, high impact.

**Layout:** Horizontal icon + text grid (5 items on desktop, 2 cols on mobile)

| Icon | Badge Text |
|---|---|
| Phosphor `ShieldCheck` | 100% Secure & Safe |
| Phosphor `LockKey` | No Password Required |
| Phosphor `Money` | Always Free |
| Phosphor `Globe` | All India Coverage |
| Phosphor `Certificate` | Official Sources Only |

**Design:** Each badge is a small horizontal pill: icon (24px, accent color) + text (Satoshi Medium, sm)
**Background:** Slightly different from surrounding sections (`var(--bg-elevated)`)
**No animation needed** — keep this section visually quiet, let the badges speak

---

### 6.18 — FAQ SECTION

**Purpose:** Address common questions. Boosts SEO via FAQ Schema. Reduces support load.

**Section Header:**
- Overline: "FAQ"
- Title: "Frequently Asked Questions"

**Accordion Design:**
- Each question: Satoshi Medium, lg
- Answer: Satoshi Regular, base, var(--text-secondary), hidden by default
- Expand/collapse: Smooth height animation (CSS `max-height` transition or Framer Motion `AnimateHeight`)
- Icon: Phosphor `Plus` → rotates to `×` when expanded
- Border between items: `var(--border-subtle)` 1px

**FAQ Data (12 Questions):**
```javascript
// constants/faqs.js
export const faqs = [
  {
    q: "Is ishu.fun completely free to use?",
    a: "Yes! ishu.fun is 100% free. Results, news, job alerts, and PDF tools are all completely free with no hidden charges, no premium plans, and no credit card required."
  },
  {
    q: "How fast do you publish exam results?",
    a: "We typically publish results within 5–10 minutes of official declaration. Our automated systems monitor official websites 24/7 and instantly update our database."
  },
  {
    q: "Are the results shown official and accurate?",
    a: "Yes. We fetch results directly from official government websites (NTA, UPSC, SSC, Railways, State Boards). We always provide the direct official link alongside our preview."
  },
  {
    q: "How do WhatsApp alerts work?",
    a: "Enter your WhatsApp number, select the exams you're interested in, and click subscribe. You'll receive an instant WhatsApp message whenever a result or vacancy is published for your selected exams."
  },
  {
    q: "Is my phone number safe with you?",
    a: "Absolutely. We never sell or share your phone number. It's only used to send you the alerts you've subscribed for. You can unsubscribe anytime by replying STOP."
  },
  {
    q: "Do the PDF tools work on mobile?",
    a: "Yes! All our PDF tools are fully mobile-compatible. You can upload, process, and download PDFs directly from your Android or iOS device."
  },
  {
    q: "Which exams do you cover?",
    a: "We cover 200+ national and state-level exams including JEE, NEET, UPSC, SSC, CDS, NDA, IBPS, SBI, Indian Railways, all State PSC exams, State Boards, and University exams."
  },
  {
    q: "Is there an app for ishu.fun?",
    a: "Our website works like an app — you can add it to your home screen on Android and iOS (PWA). A dedicated Android app is coming soon!"
  },
  {
    q: "Do you support Hindi and regional languages?",
    a: "Our website is currently in English. Hindi support is coming in the next update. WhatsApp alerts can be sent in Hindi, Hinglish, or English based on your preference."
  },
  {
    q: "How can I report a wrong result or fake news?",
    a: "Use the 'Report an Issue' button on any result or news page, or email us at ishukryk@gmail.com. We take accuracy seriously and investigate all reports within 24 hours."
  },
];
```

**JSON-LD Schema for FAQ (Critical for SEO):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is ishu.fun completely free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! 100% free..." } },
    // ... all FAQs
  ]
}
</script>
```
**This FAQ Schema makes Google show expandable FAQs in search results — massive SEO win.**

---

### 6.19 — FINAL CTA SECTION

**Purpose:** Last chance to convert. Strong emotional + logical CTA.

**Visual:**
- Full-width section with gradient background: `var(--grad-hero)` at 15% opacity on `var(--bg-base)`
- Or: Large dark card with glowing border (gradient border, CSS `border-image` technique)
- Centered content
- Optional: Animated confetti or particle burst in background

**Content:**
```
✦ Ready to Level Up Your Exam Prep?

Join 50,00,000+ Students on India's Fastest Platform

"ishu.fun ne mera result sabse pehle dikhaya" — Rahul, JEE 2026 Topper

[🚀 Get Started — It's Free]    [📲 WhatsApp Alerts]
```
- Headline: Clash Display Bold, --text-5xl
- Quote: Satoshi Italic, var(--text-secondary) — adds human authenticity
- Buttons: Large (60px height), side by side on desktop, stacked on mobile

**Magnetic Effect on Main Button (desktop):** The "Get Started" button physically follows cursor slightly, snapping back. Implemented with React Spring.

---

### 6.20 — FOOTER

**Content Structure:**

**Row 1 — Logo + Tagline + Social:**
```
ishu.fun     India's #1 Student Platform     [Twitter] [Instagram] [Telegram] [YouTube]
```
Social icons: Phosphor `TwitterLogo`, `InstagramLogo`, `TelegramLogo`, `YoutubeLogo` — all SVG

**Row 2 — Link Columns:**
| Column 1: Results | Column 2: Tools | Column 3: Info | Column 4: Legal |
|---|---|---|---|
| JEE Results | PDF Merger | About Us | Privacy Policy |
| NEET Results | Compress PDF | Contact | Terms of Service |
| UPSC Results | PDF to Word | Blog | Disclaimer |
| SSC Results | E-Sign PDF | Sitemap | Cookie Policy |
| Railway Results | OCR Tool | Careers | DMCA |
| All Results → | All Tools → | Advertise | Report Issue |

**Row 3 — Newsletter + Contact:**
```
[Email input            ] [Subscribe →]
📧 ishukryk@gmail.com   📱 +91 8986985813
```

**Row 4 — Bottom Bar:**
```
© 2026 ishu.fun · Made with ❤️ in India 🇮🇳 · All rights reserved
```

**Footer Design:**
- Background: `var(--bg-elevated)` — slightly different from main bg
- Separated from last section by gradient fade
- Top: `border-top: 1px solid var(--border-subtle)`
- Link hover: Color changes to var(--accent-violet) with 0.15s transition
- No 3D animations in footer — keep it clean and lightweight

**SEO in Footer:** Include rich keyword-based text paragraph:
```
ishu.fun provides instant Sarkari Results for JEE, NEET, UPSC, SSC CGL, 
Railway NTPC, IBPS PO, SBI Clerk, and all State PSC exams. 
Free PDF tools include PDF merger, compressor, converter, and more. 
India's most trusted education news and government job alert platform.
```
(This paragraph: font-size 11px, var(--text-muted), helps SEO without cluttering design)

---

## 7. UI MICRO-COMPONENTS & GLOBAL ELEMENTS

### Custom Cursor (Desktop Only)
```jsx
// CustomCursor.jsx
// Two elements: small filled dot (12px) + larger ring (40px)
// Dot: follows cursor exactly (transform with requestAnimationFrame)
// Ring: follows with 0.08 lerp delay (smooth lag)
// Hover on link/button: ring grows to 60px, filled, mix-blend-mode: difference
// Hover on cursor-none element: cursor hides
// Touch devices: completely disabled
```
CSS:
```css
.cursor-dot   { width:12px; height:12px; background:var(--accent-violet); border-radius:50%; }
.cursor-ring  { width:40px; height:40px; border:1.5px solid var(--accent-violet); border-radius:50%; }
```

### Scroll Progress Bar
- Position: Top of page, fixed, above everything (z-index: var(--z-cursor))
- Height: 2px (not intrusive)
- Color: `var(--grad-button)` (violet → cyan gradient)
- Width: 0% → 100% as user scrolls
- Disappears after reaching 100% (brief opacity fade)

### Back To Top Button
- Fixed, bottom-right corner (desktop: 32px from edge)
- Appears only after 50% scroll depth
- Icon: Phosphor `ArrowUp`
- Glass circle button: 48px diameter
- Click: `lenis.scrollTo(0, { duration: 1.5 })`
- Hover: Glow + slight scale

### Mobile Bottom Navigation Bar
```
[🏠 Home] [📋 Results] [🛠️ Tools] [📰 News] [👤 Profile]
```
- Fixed at bottom of screen, only on mobile (below 768px)
- Height: 60px + safe area bottom padding (iOS notch)
- Background: `rgba(8,8,16,0.95)`, `backdrop-filter: blur(20px)`
- Border-top: `1px solid var(--border-subtle)`
- Active item: Violet color + small indicator dot above icon
- Uses Phosphor icons: `House`, `ClipboardList`, `Toolbox`, `Newspaper`, `User`

### Toast Notifications
- Position: Bottom-right (desktop) / top-center (mobile)
- Auto-dismiss: 4 seconds
- Types: success (emerald), error (rose), info (cyan), warning (saffron)
- Animation: Slide + fade in, slide + fade out
- Icon: Phosphor `CheckCircle`, `XCircle`, `Info`, `Warning`

---

## 8. IMAGE & MEDIA STRATEGY

### Where Real Images Are Used + URLs

| Section | Image Purpose | Source + URL |
|---|---|---|
| Hero BG | Dark abstract background | `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80` (starry night) |
| Hero Right | Student at desk illustration | `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80` |
| Testimonials | Student avatars (6 different) | `https://ui-avatars.com/api/?name=Rahul+Kumar&background=6C63FF&color=fff&size=96` |
| News Cards | News placeholder | `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80` (news desk) |
| Blog Featured | Study/education | `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80` (books) |
| Blog Card 2 | UPSC preparation | `https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80` (studying) |
| WhatsApp CTA | Phone WhatsApp mockup | Pure CSS (no external image) |
| India Map | SVG Map | `https://raw.githubusercontent.com/samayo/country-json/master/src/india-states.svg` |
| OG Image | Social share 1200×630 | Custom designed, stored at `/public/og-image.jpg` |

### Image Implementation Rules
```jsx
// GOOD — Always use these patterns:
<img
  src="/images/hero-bg.webp"
  alt="Indian students preparing for competitive exams"
  loading="eager"          // Hero images: eager (LCP)
  fetchpriority="high"     // Hero images: high priority
  width="1920"
  height="1080"
  decoding="async"
/>

// Below fold:
<img
  src="https://images.unsplash.com/..."
  alt="Student reading at library — education news on ishu.fun"
  loading="lazy"           // Below fold: always lazy
  width="600"
  height="400"
/>
```

### Image Optimization Pipeline
1. All images converted to **WebP** format (30-50% smaller than JPEG)
2. Multiple sizes generated: 320w, 640w, 768w, 1024w, 1280w, 1920w
3. **LQIP (Low Quality Image Placeholder):** 20px×20px blurred placeholder shown until full image loads
4. Cloudinary for dynamic resizing: `https://res.cloudinary.com/ishu/image/upload/w_800,f_webp,q_80/hero.jpg`

### Video Strategy
- Hero background video: 15 seconds, silent loop, WebM + MP4 fallback
- Load only on desktop with `prefers-reduced-motion: no-preference`
- Use `<video autoplay muted loop playsinline>` — `playsinline` critical for iOS
- Lazy load: Only create video element when hero enters viewport (IntersectionObserver)

---

## 9. PERFORMANCE OPTIMIZATION

### Target Metrics
| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | ≥ 92 | Chrome DevTools |
| Lighthouse SEO | ≥ 98 | Chrome DevTools |
| Lighthouse Accessibility | ≥ 95 | Chrome DevTools |
| LCP (Largest Contentful Paint) | < 2.0s | Core Web Vitals |
| FID (First Input Delay) | < 100ms | Core Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.05 | Core Web Vitals |
| TTI (Time to Interactive) | < 3.5s | Lighthouse |
| FCP (First Contentful Paint) | < 1.5s | Lighthouse |
| Bundle Size (initial JS) | < 150KB gzipped | Bundle analyzer |
| Three.js Chunk | < 120KB gzipped | Lazy imported |

### Critical CSS Strategy
```html
<!-- index.html — Inline critical CSS for fastest FCP -->
<style>
  /* Inlined: Variables, reset, preloader, hero initial state */
  /* Tool: critters or critical npm package to extract critical CSS */
</style>
<!-- Non-critical CSS loaded with low priority -->
<link rel="stylesheet" href="/assets/main.css" media="print" onload="this.media='all'">
```

### Code Splitting Strategy (vite.config.js)
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-gsap': ['gsap'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-framer': ['framer-motion'],
          'vendor-charts': ['recharts'],
          'vendor-particles': ['@tsparticles/react', '@tsparticles/slim'],
        }
      }
    }
  }
};
```

### Lazy Loading Strategy
```jsx
// HomePage/index.jsx — load sections progressively
import { lazy, Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection'; // EAGER (above fold)
import AnnouncementBar from '../components/sections/AnnouncementBar'; // EAGER

// All below-fold sections: lazy loaded
const StatsSection       = lazy(() => import('../components/sections/StatsSection'));
const FeaturesSection    = lazy(() => import('../components/sections/FeaturesSection'));
const ResultsPreview     = lazy(() => import('../components/sections/ResultsPreview'));
const ToolsShowcase      = lazy(() => import('../components/sections/ToolsShowcase'));
const IndiaMapSection    = lazy(() => import('../components/sections/IndiaMapSection'));
const ExamCalendar       = lazy(() => import('../components/sections/ExamCalendar'));
const LiveDataSection    = lazy(() => import('../components/sections/LiveDataSection'));
const NewsPreview        = lazy(() => import('../components/sections/NewsPreview'));
const WhatsAppCTA        = lazy(() => import('../components/sections/WhatsAppCTA'));
const BlogPreview        = lazy(() => import('../components/sections/BlogPreview'));
const TestimonialsSection= lazy(() => import('../components/sections/TestimonialsSection'));
const FAQSection         = lazy(() => import('../components/sections/FAQSection'));
const FinalCTA           = lazy(() => import('../components/sections/FinalCTA'));
const Footer             = lazy(() => import('../components/layout/Footer'));

// Wrap each in <Suspense fallback={<SectionSkeleton />}>
```

### Font Loading (index.html)
```html
<!-- Critical preloads — add to <head> -->
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="preload" href="/fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Satoshi-Medium.woff2" as="font" type="font/woff2" crossorigin>
```

### Device Performance Detection
```javascript
// hooks/useDevicePerformance.js
const isLowEnd = navigator.hardwareConcurrency <= 2
  || navigator.deviceMemory <= 2  // Device Memory API
  || /Android [1-6]/.test(navigator.userAgent); // Old Android

// If isLowEnd === true:
// - Skip Three.js canvas entirely
// - Skip tsParticles
// - Reduce GSAP animations (just fade, no translate)
// - Use CSS animations only for testimonials marquee
```

### Service Worker (PWA Offline Cache)
```javascript
// Caches:
// - App shell (HTML, CSS, main JS chunk): Network-first with cache fallback
// - Fonts: Cache-first (1 year TTL)
// - Images: Stale-while-revalidate
// - API responses: Network-first, cache fallback with 5min TTL
```

---

## 10. SEO MASTERPLAN

### Target Keywords

**Primary Keywords (High Volume):**
| Keyword | Monthly Search Volume | Difficulty |
|---|---|---|
| sarkari result | 90,00,000 | Very High |
| sarkari naukri | 74,00,000 | Very High |
| jee result 2026 | 50,00,000 | Medium |
| neet result 2026 | 45,00,000 | Medium |
| ssc result 2026 | 20,00,000 | Medium |
| free pdf tools | 8,00,000 | Low |
| pdf merge online free | 5,00,000 | Low |

**Long-Tail Keywords (Easier to rank, high intent):**
- "jee mains 2026 result check online" → 5L/month
- "sarkari result 2026 today" → 12L/month
- "ishu.fun sarkari result" → Brand (grow this)
- "free pdf compressor india without watermark" → 50K/month
- "whatsapp sarkari result alert" → 30K/month

### Meta Tags (index.html + HomePage.meta.js)
```html
<!-- Primary Meta Tags -->
<title>ishu.fun — Sarkari Result, Govt Jobs, Free PDF Tools | India's #1 Student Platform</title>
<meta name="description" content="Get instant Sarkari Results for JEE, NEET, UPSC, SSC, Railway. Free PDF tools — merge, compress, convert. Latest govt job vacancies & education news. 50L+ students trust ishu.fun.">
<meta name="keywords" content="sarkari result, sarkari naukri, jee result 2026, neet result 2026, ssc result, upsc result, free pdf tools, merge pdf, compress pdf, govt jobs india, education news india">
<link rel="canonical" href="https://ishu.fun/">

<!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://ishu.fun/">
<meta property="og:title" content="ishu.fun — India's #1 Platform for Sarkari Results & Free PDF Tools">
<meta property="og:description" content="Instant results for JEE, NEET, UPSC, SSC. Free PDF tools. Govt job alerts. 50L+ students.">
<meta property="og:image" content="https://ishu.fun/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="ishu.fun">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ishu.fun — Sarkari Result, Govt Jobs, Free PDF Tools">
<meta name="twitter:description" content="India's fastest platform for exam results, free PDF tools & govt job alerts.">
<meta name="twitter:image" content="https://ishu.fun/og-image.jpg">

<!-- Geo Tags (India-specific) -->
<meta name="geo.region" content="IN">
<meta name="geo.placename" content="India">
<meta name="language" content="English">

<!-- Robots -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```

### JSON-LD Structured Data (ALL of these in <head>)

**1. WebSite Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ishu.fun",
  "url": "https://ishu.fun",
  "description": "India's #1 Platform for Sarkari Results, Government Jobs, Free PDF Tools and Education News",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ishu.fun/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```
**This enables Google Sitelinks Searchbox in search results!**

**2. Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ishu.fun",
  "url": "https://ishu.fun",
  "logo": "https://ishu.fun/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8986985813",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://twitter.com/ishufun",
    "https://instagram.com/ishufun",
    "https://t.me/ishufun"
  ]
}
```

**3. FAQ Schema:** (see Section 6.18 above)

**4. BreadcrumbList Schema (for inner pages, include on homepage too):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ishu.fun" }
  ]
}
```

### Technical SEO Checklist
- `robots.txt`: Allow all crawlers, link to sitemap
- `sitemap.xml`: All pages, updated daily, submitted to Google Search Console
- `hreflang`: `<link rel="alternate" hreflang="en-IN" href="https://ishu.fun/">` and `hreflang="hi-IN"` for Hindi version
- Internal linking: Every section has "View All →" links to relevant pages
- Page speed: Optimize for Core Web Vitals (see Section 9)
- HTTPS: Always (enforced via Vercel)
- Canonical URLs: Prevent duplicate content
- Image alt text: Keyword-rich but natural
- Heading hierarchy: Only ONE `<h1>` per page (the hero headline)

---

## 11. BACKEND API SPECIFICATION

### Base URL
```
Production: https://api.ishu.fun/api/v1
Development: http://localhost:5000/api/v1
```

### Homepage Endpoints

```
GET /homepage/announcements
Response: { data: [{ id, text, link, category, isUrgent, createdAt }] }
Cache: Redis, 5 minutes
Limit: 10 items

GET /homepage/stats
Response: { data: { totalStudents, totalResults, totalAlertsSent, uptime } }
Cache: Redis, 1 hour

GET /homepage/latest-results
Query: ?category=jee&limit=6
Response: { data: [{ id, examName, category, status, releaseDate, directLink, countdownEnd }] }
Cache: Redis, 5 minutes

GET /homepage/news-preview
Query: ?category=all&limit=4
Response: { data: [{ id, title, excerpt, imageUrl, category, sourceUrl, publishedAt }] }
Cache: Redis, 2 minutes

GET /homepage/blog-preview
Response: { data: [{ id, title, slug, coverImage, category, author, readTime, publishedAt }] }
Cache: Redis, 30 minutes

GET /homepage/exam-calendar
Response: { data: [{ id, examName, category, eventType, date, description }] }
Cache: Redis, 1 hour

GET /homepage/india-map-data
Response: { data: { states: [{ stateCode, stateName, vacancyCount, latestResult }] } }
Cache: Redis, 30 minutes

GET /homepage/tools-list
Response: { data: [{ id, name, slug, icon, description, isPopular }] }
Cache: Redis, 24 hours

POST /whatsapp/subscribe
Body: { phone: "9876543210", exams: ["jee", "neet", "ssc"] }
Response: { success: true, message: "Subscribed successfully" }
Rate limit: 3 requests / IP / hour
Validation: phone (10-digit Indian mobile), exams (min 1 selected)
```

### Response Format (All Endpoints)
```json
{
  "success": true,
  "data": { ... },
  "message": "OK",
  "timestamp": "2026-03-28T10:30:00Z",
  "cached": true
}
```

### Error Format
```json
{
  "success": false,
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "Too many requests. Try again in 15 minutes.",
  "statusCode": 429
}
```

### Caching Implementation (Redis)
```javascript
// middleware/cache.middleware.js
export const cacheMiddleware = (ttl) => async (req, res, next) => {
  const key = `cache:${req.originalUrl}`;
  const cached = await redis.get(key);
  if (cached) {
    return res.json({ ...JSON.parse(cached), cached: true });
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    redis.setex(key, ttl, JSON.stringify(body));
    res.sendResponse(body);
  };
  next();
};
```

---

## 12. MOBILE & PWA STRATEGY

### Progressive Web App Configuration
```json
// public/manifest.json
{
  "name": "ishu.fun — Sarkari Result & Govt Jobs",
  "short_name": "ishu.fun",
  "description": "India's #1 Student Platform for Sarkari Results, Free PDF Tools & Govt Jobs",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#080810",
  "theme_color": "#6C63FF",
  "orientation": "portrait",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/maskable-icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ],
  "categories": ["education", "productivity"],
  "lang": "en-IN",
  "shortcuts": [
    { "name": "Latest Results", "url": "/results", "icons": [{"src":"/icons/results.png","sizes":"96x96"}] },
    { "name": "PDF Tools", "url": "/tools", "icons": [{"src":"/icons/tools.png","sizes":"96x96"}] }
  ]
}
```

### "Add to Home Screen" Banner
- Shows on 2nd visit (or after 30 seconds on 1st visit)
- Custom styled prompt (NOT browser default)
- Dismissible, saves in localStorage
- Message: "📱 Add ishu.fun to Home Screen for faster access!"

### Mobile-Specific Performance Rules
- **No Three.js on mobile** — replaced by static WebP illustration
- **No tsParticles on mobile** — too CPU-intensive
- **Lenis smooth scroll disabled on mobile** — use native momentum scrolling
- **Reduced animation complexity on mobile** — fade only, no translate
- **Image sizes:** Serve 320w images on mobile, 768w on tablet, full on desktop
- **Touch targets:** All interactive elements ≥ 44px × 44px (Apple HIG guideline)

### Mobile Touch Enhancements
- Horizontal swipe on result cards (Swiper.js) for browsing without tapping "View All"
- Long press on exam badge → Quick details tooltip
- Pull-to-refresh (native feel for results section)
- Haptic feedback on subscribe success: `navigator.vibrate([100, 50, 100])`

---

## 13. ACCESSIBILITY

### WCAG 2.1 Level AA Compliance

**Color Contrast:** All text must pass:
- Normal text: ≥ 4.5:1 contrast ratio
- Large text (18pt+ or 14pt bold): ≥ 3:1
- Check with: https://webaim.org/resources/contrastchecker/

**Specific Contrast Values:**
- `--text-primary` (#F0F0FF) on `--bg-base` (#080810): 18.7:1 ✅
- `--text-secondary` (#9090A8) on `--bg-base` (#080810): 5.1:1 ✅
- `--accent-violet` (#6C63FF) on `--bg-base` (#080810): 4.8:1 ✅

**Keyboard Navigation:**
- Tab order follows visual reading order (top → bottom, left → right)
- All interactive elements reachable by Tab key
- Focus styles: `outline: 2px solid var(--accent-violet); outline-offset: 3px;`
- Skip Link: First Tab press shows "Skip to main content" link at top
- Modal/drawer traps focus while open

**Screen Reader:**
- All images have descriptive `alt` text
- Icon-only buttons have `aria-label`
- Dynamic content updates use `aria-live="polite"` regions
- Accordion FAQs: `aria-expanded`, `aria-controls`
- Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
And in JavaScript:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  // Skip GSAP animations, use instant shows instead
  gsap.set('.hero-word', { opacity: 1, y: 0 }); // Instead of animating
}
```

---

## 14. ANALYTICS & TRACKING

### Services
| Service | Purpose | When to Fire |
|---|---|---|
| **Google Analytics 4** | Traffic, pages, conversions | Always |
| **Vercel Analytics** | Core Web Vitals, real user data | Always (built-in) |
| **Microsoft Clarity** | Heatmaps, session recordings | Always (free) |
| **Mixpanel** | Event tracking, funnel analysis | After user consent |

### GA4 Events to Track
```javascript
// utils/analytics.js
export const track = (eventName, params = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
};

// Events:
track('hero_cta_click', { button_type: 'explore_results' | 'whatsapp_alerts' });
track('result_card_click', { exam_name: 'JEE Mains 2026', category: 'jee' });
track('tool_card_click', { tool_name: 'Compress PDF' });
track('news_card_click', { category: 'education' });
track('whatsapp_subscribe_success', { exam_count: 3 });
track('whatsapp_subscribe_fail', { error: 'invalid_phone' });
track('india_map_state_click', { state: 'UP' });
track('search_performed', { query: 'jee result', results_count: 5 });
track('faq_expanded', { question_index: 0 });
track('scroll_depth', { percentage: 25 | 50 | 75 | 100 });
track('language_switched', { from: 'en', to: 'hi' });
track('notification_bell_opened', {});
track('add_to_homescreen_shown', {});
track('add_to_homescreen_accepted', {});
```

### Scroll Depth Tracking
```javascript
// Fires at 25%, 50%, 75%, 100% scroll depth
const milestones = [25, 50, 75, 100];
let fired = new Set();
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  milestones.forEach(m => {
    if (pct >= m && !fired.has(m)) {
      fired.add(m);
      track('scroll_depth', { percentage: m });
    }
  });
});
```

---

## 15. INTERNATIONALIZATION (i18n)

### Implementation with i18next
```javascript
// i18n setup
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: enJSON }, hi: { translation: hiJSON } },
    fallbackLng: 'en',
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
    interpolation: { escapeValue: false },
  });
```

### Phase 1 Languages
- **English (en-IN)** — Default
- **Hindi (hi-IN)** — हिंदी (launch with this)
- **Bengali, Telugu, Marathi, Tamil** — Phase 2

### Number Formatting (Indian System)
```javascript
// utils/formatNumber.js
export const formatIndian = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
  // 5000000 → "50,00,000" ✅
  // Not "5,000,000" ❌
};
```

---

## 16. SECURITY HARDENING

### Frontend Security
```javascript
// vercel.json — Security headers
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://api.fontshare.com; img-src 'self' data: https: blob:; font-src 'self' https://api.fontshare.com; connect-src 'self' https://api.ishu.fun wss://api.ishu.fun; frame-src 'none';"
        }
      ]
    }
  ]
}
```

### Backend Security (Helmet.js)
```javascript
// server.js
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);
```

### Form Security
- All inputs sanitized (DOMPurify on frontend)
- Phone number validated: `/^[6-9]\d{9}$/` (Indian mobile)
- CSRF token on all forms (POST requests)
- Honeypot field on WhatsApp subscribe form (catches bots)

---

## 17. TESTING PLAN

### Unit Tests (Vitest)
```
- AnimatedCounter: test countUp fires on intersection
- PhoneInput: validates Indian phone numbers correctly
- formatIndian: test number formatting
- useScrollDirection: test up/down detection
- useDevicePerformance: mock navigator.hardwareConcurrency
```

### Integration Tests (React Testing Library)
```
- Announcement bar: renders items, dismisses on click
- Navbar: shows glass on scroll, hides on scroll down
- Hero search: shows suggestions on type
- WhatsApp form: validates, submits, shows success
- Result tabs: filters cards correctly by category
- FAQ accordion: expands/collapses correctly
```

### E2E Tests (Playwright)
```
- Homepage loads in < 3 seconds
- Hero CTA buttons navigate correctly
- WhatsApp subscribe flow completes
- India map: hover shows tooltip, click navigates
- Mobile: bottom nav works, 3D canvas absent
- Keyboard navigation through full page works
- No console errors on any section
```

### Performance Tests
```
- Lighthouse CI: run on every pull request
- Block if Performance < 90, SEO < 95, A11y < 90
- k6 load test: 1000 concurrent users, API response < 500ms
```

---

## 18. DEPLOYMENT ARCHITECTURE

### Full Infrastructure Diagram
```
User (Browser)
    ↕ HTTPS
┌─────────────────────────────────────────────────────────┐
│         Cloudflare (Global CDN + DDoS + DNS)             │
│         ishu.fun → Vercel Edge | api.ishu.fun → Render   │
└─────────────────────────────────────────────────────────┘
         ↕                              ↕
  ┌──────────────┐             ┌──────────────────┐
  │   Vercel     │             │   Render.com      │
  │  (Frontend)  │             │  (Backend API)    │
  │  React/Vite  │─REST API───▶│  Node.js/Express  │
  │  Edge CDN    │             │  PORT: 5000        │
  └──────────────┘             └──────────────────┘
                                    ↕          ↕
                          ┌─────────────┐ ┌──────────┐
                          │ MongoDB     │ │ Upstash  │
                          │ Atlas       │ │ Redis    │
                          │ (Primary DB)│ │ (Cache)  │
                          └─────────────┘ └──────────┘
                                    ↕
                          ┌─────────────────────┐
                          │ Cloudinary (Images) │
                          │ Twilio (WhatsApp)   │
                          │ Resend (Email)      │
                          └─────────────────────┘
```

### Environment Variables

**Frontend (.env.local / Vercel env):**
```env
VITE_API_BASE_URL=https://api.ishu.fun
VITE_SITE_URL=https://ishu.fun
VITE_GA4_ID=G-XXXXXXXXXX
VITE_CLARITY_ID=xxxxxxxxxx
VITE_MIXPANEL_TOKEN=xxxxxxxxxx
```

**Backend (.env / Render env):**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ishufun
REDIS_URL=rediss://default:password@region.upstash.io:port
JWT_SECRET=your-256-bit-random-secret-here
JWT_EXPIRES_IN=7d
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
CLOUDINARY_CLOUD_NAME=ishu
CLOUDINARY_API_KEY=xxxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxx
OWNER_EMAIL=ishukryk@gmail.com
CORS_ORIGIN=https://ishu.fun
```

### Vercel Configuration (vercel.json)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    { "source": "/fonts/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
    { "source": "/images/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=3600" }] }
  ]
}
```

### Render Configuration (render.yaml)
```yaml
services:
  - type: web
    name: ishu-backend
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    healthCheckPath: /api/v1/health
    envVars:
      - key: NODE_ENV
        value: production
```

### CI/CD (GitHub Actions)

**.github/workflows/deploy-frontend.yml:**
```yaml
name: Deploy Frontend
on:
  push:
    branches: [main]
    paths: ['frontend/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: cd frontend && npm ci && npm run build
      - run: npx lighthouse-ci autorun  # Fail if score drops
      - uses: amondnet/vercel-action@v25  # Deploy to Vercel
```

**.github/workflows/deploy-backend.yml:**
```yaml
name: Deploy Backend
on:
  push:
    branches: [main]
    paths: ['backend/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: cd backend && npm ci && npm test
      - name: Trigger Render Deploy
        run: curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK_URL }}
```

---

## 19. DEVELOPER PROMPTS & BUILD ORDER

### Recommended Build Order

**Phase 1 — Foundation (Day 1–2):**
```
1. Set up Vite + React project in /frontend
2. Install all npm packages
3. Configure Tailwind, PostCSS
4. Copy variables.css, typography.css, globals.css
5. Set up GSAP (gsap.init.js) + Lenis smooth scroll
6. Build SectionWrapper component
7. Build CustomCursor component
8. Set up Vercel project, test deploy
```

**Phase 2 — Core Structure (Day 3–4):**
```
9.  Build PageLoader
10. Build AnnouncementBar
11. Build Navbar (desktop + mobile menu)
12. Build Footer structure
13. Connect Navbar scroll behavior (glass effect)
14. Build ScrollProgress bar
15. Build BackToTop button
16. Build BottomNav (mobile)
```

**Phase 3 — Hero (Day 5–7):**
```
17. Build HeroSection layout (left/right)
18. Implement SplitType + GSAP text reveal
19. Build HeroSearch component with suggestion dropdown
20. Build Magnetic + Glow buttons
21. Implement Three.js scene (lazy load)
22. Connect hero GSAP timeline (triggers after preloader exits)
23. Test on mobile — replace canvas with illustration
```

**Phase 4 — Content Sections (Day 8–13):**
```
24. StatsSection + AnimatedCounter (CountUp.js + IntersectionObserver)
25. FeaturesSection (alternating layout + scroll reveal)
26. ResultsPreview (tabs + cards + API integration)
27. ToolsShowcase (tilt cards + grid)
28. IndiaMapSection (SVG map + D3 color scale + tooltips)
29. ExamCalendar (calendar grid + countdown timers)
30. LiveDataSection (Recharts charts)
31. NewsPreview (featured + grid + API)
32. WhatsAppCTA (form + phone mockup + Lottie success)
33. BlogPreview
34. TestimonialsSection (dual marquee)
35. TrustBadges
36. FAQSection (accordion + JSON-LD)
37. FinalCTA (magnetic button)
```

**Phase 5 — Polish & SEO (Day 14–16):**
```
38. Add all JSON-LD schemas to index.html
39. Optimize all images to WebP
40. Implement lazy loading for all below-fold sections
41. Configure code splitting in vite.config.js
42. Implement prefers-reduced-motion
43. Add all aria-labels and accessibility attributes
44. Run Lighthouse, fix all issues
45. Test on real Android device (Samsung Galaxy / Xiaomi)
46. Final SEO meta tags review
```

**Phase 6 — Backend & Deploy (Day 17–20):**
```
47. Set up Express server in /backend
48. Connect MongoDB Atlas
49. Connect Upstash Redis
50. Implement all homepage API endpoints
51. Add Redis caching to all GET routes
52. Implement WhatsApp subscribe POST route
53. Add rate limiting, CORS, helmet
54. Configure environment variables on Render
55. Test all API endpoints with Postman
56. Final deploy: frontend to Vercel, backend to Render
57. Configure Cloudflare DNS
58. Test full production deployment
```

### Developer Prompt Templates

**Prompt for HeroSection:**
```
Build a full-screen hero section for ishu.fun (Indian education platform) using React and GSAP.
- Left side (55%): Logo overline label, large SplitType-animated headline using Clash Display Bold font,
  subheadline, search bar with glass effect, two CTA buttons (primary gradient + magnetic WhatsApp button),
  social proof strip (avatar circles + "50L+ Students" CountUp)
- Right side (45%): Three.js canvas showing India globe with city nodes and particle field (lazy loaded, 
  hidden on mobile)
- Background: Dark #080810 with CSS radial gradient mesh (violet/cyan/emerald glows at corners)
- Animation timeline: Runs after preloader exits (1.8s delay). Words slide up from translateY(100%) 
  with 0.06s stagger, then subheadline, search bar, buttons, social proof all fade+slide in sequence
- Mobile: Single column, canvas replaced with WebP illustration, reduced animations
- Use Phosphor React icons, CSS variables from variables.css, Satoshi/Clash Display fonts
```

**Prompt for WhatsApp CTA:**
```
Build WhatsApp subscription section for ishu.fun using React. 
Left: Copy + form. Right: CSS-built phone mockup with animated WhatsApp chat bubbles.
Form: +91 prefix phone input (validates /^[6-9]\d{9}$/), multi-select exam chip selector 
(JEE/NEET/UPSC/SSC/Railway/Banking), submit button with WhatsApp green gradient.
On success: Show Lottie success animation + confetti, display "You're subscribed! 🎉" message.
API: POST /api/v1/whatsapp/subscribe with { phone, exams[] }.
Phone mockup: Pure CSS, dark phone frame, WhatsApp green-tinted chat background, 
animated message bubbles slide in from bottom with stagger (anime.js or GSAP).
Section bg: Subtle green radial glow behind phone mockup.
```

**Prompt for India Map:**
```
Build interactive India SVG map section for ishu.fun. 
Import India state SVG paths. On hover: Highlight state with gradient fill, show glass tooltip 
(state name, active vacancy count, latest result name, "View Results" button).
Color states by vacancy count using D3.js color scale (scaleSequential with interpolateViridis).
Mobile fallback: Replace SVG map with horizontal scrollable state chip grid.
Data: Fetch from GET /api/v1/homepage/india-map-data, fallback to static indianStates.js constant.
Add GSAP ScrollTrigger: Map scales from 0.85 to 1.0 as it enters viewport.
Right sidebar (desktop): Top 5 states mini bar chart using Recharts.
```

---

## 20. COMPLETE CHECKLIST

### 🎨 Design
- [ ] variables.css implemented with all CSS custom properties
- [ ] typography.css with Clash Display + Satoshi font-faces
- [ ] Dark theme consistent across all 20 sections
- [ ] Brand colors (violet, cyan, saffron, emerald) used correctly
- [ ] Glassmorphism cards look correct (backdrop-blur, border)
- [ ] All hover states are smooth (200ms transitions)
- [ ] Custom cursor visible and working on desktop
- [ ] Gradient text applied correctly to hero headline
- [ ] Scroll progress bar showing
- [ ] No AI-generated icons anywhere (Phosphor SVGs only)

### ⚡ Animations
- [ ] GSAP + Lenis initialized correctly (no conflicts)
- [ ] Preloader exits smoothly before hero animations start
- [ ] Hero SplitType text reveals on load
- [ ] ScrollTrigger working on all below-fold sections
- [ ] Stats CountUp fires when entering viewport
- [ ] Testimonials dual-marquee running, pauses on hover
- [ ] Three.js canvas loaded lazily, working on desktop
- [ ] Magnetic button effect on "Get Started" CTA
- [ ] 3D card tilt on tool cards (vanilla-tilt)
- [ ] `prefers-reduced-motion` disables all animations correctly

### 📱 Mobile
- [ ] Mobile (375px) — no horizontal overflow, all text readable
- [ ] Tablet (768px) — layout adapts correctly
- [ ] Desktop (1280px) — full layout with max-width container
- [ ] Large (1920px) — max-width prevents over-stretching (max-w: 1536px)
- [ ] Bottom nav visible on mobile only
- [ ] Three.js canvas hidden on mobile
- [ ] tsParticles disabled on mobile
- [ ] Touch targets all ≥ 44×44px
- [ ] Safe area insets handled (iPhone notch, Android navigation)

### 🚀 Performance
- [ ] Lighthouse Performance ≥ 92
- [ ] Lighthouse SEO ≥ 98
- [ ] Lighthouse Accessibility ≥ 95
- [ ] LCP < 2.0s
- [ ] CLS < 0.05
- [ ] Initial JS bundle < 150KB gzipped
- [ ] Three.js chunk lazy loaded (not in initial bundle)
- [ ] All below-fold sections lazy loaded (React.lazy + Suspense)
- [ ] All images in WebP format with correct alt text
- [ ] Fonts self-hosted and preloaded in <head>
- [ ] No render-blocking resources
- [ ] Service Worker configured for PWA offline

### 🔍 SEO
- [ ] Title tag (80 chars max) with primary keywords
- [ ] Meta description (160 chars) with CTA + keywords
- [ ] OG tags (og:title, og:description, og:image 1200×630)
- [ ] Twitter card tags
- [ ] Canonical URL set
- [ ] robots.txt allowing crawlers
- [ ] sitemap.xml generated and submitted to Search Console
- [ ] JSON-LD: WebSite (with SearchAction), Organization, FAQPage, BreadcrumbList
- [ ] hreflang tags for en-IN and hi-IN
- [ ] Only one <h1> on page (hero headline)
- [ ] Internal links from homepage to all major sections
- [ ] Image alt text is keyword-rich and descriptive

### ♿ Accessibility
- [ ] All images have alt attributes
- [ ] Color contrast ≥ 4.5:1 everywhere
- [ ] All interactive elements keyboard-navigable
- [ ] Focus styles visible on all elements
- [ ] Skip-to-content link at top
- [ ] aria-label on all icon-only buttons
- [ ] aria-live regions for dynamic content
- [ ] Accordion FAQs have aria-expanded
- [ ] Modal traps focus correctly

### 🔧 Backend & API
- [ ] All 8 homepage GET endpoints working and returning correct data
- [ ] WhatsApp subscribe POST endpoint working
- [ ] Redis caching configured on all GET endpoints
- [ ] Rate limiting configured (100/15min general, 3/hr WhatsApp subscribe)
- [ ] CORS configured (only allows ishu.fun origin)
- [ ] All inputs validated (Zod)
- [ ] Error responses follow standard format
- [ ] Health check endpoint: GET /api/v1/health
- [ ] MongoDB connection stable (with retry logic)
- [ ] Environment variables configured on Render

### 🧪 Testing
- [ ] No console errors or warnings on any section
- [ ] Tested on: Chrome, Firefox, Safari, Edge
- [ ] Tested on: iPhone SE, iPhone 14, Pixel 7, Samsung Galaxy
- [ ] Tested on: iPad Air, Samsung Tab
- [ ] WhatsApp form: all validation cases work
- [ ] India map: hover and click work
- [ ] API fallbacks work when backend is down
- [ ] Lighthouse CI passing in GitHub Actions
- [ ] load test: API handles 1000 concurrent users

### 🚢 Deployment
- [ ] Frontend deployed on Vercel, accessible at https://ishu.fun
- [ ] Backend deployed on Render, accessible at https://api.ishu.fun
- [ ] Cloudflare DNS configured correctly
- [ ] HTTPS enforced on both domains
- [ ] Security headers in vercel.json and helmet.js
- [ ] GitHub Actions CI/CD pipelines working
- [ ] Environment variables set in Vercel and Render dashboards
- [ ] MongoDB Atlas IP whitelist includes Render server IP
- [ ] Monitoring: Uptime Robot configured (alerts if site goes down)

---

## 📞 OWNER & PROJECT INFO

```
Owner:    Ishu
Domain:   ishu.fun
Email:    ishukryk@gmail.com
Phone:    +91 8986985813
WhatsApp: +91 8986985813
```

---

## 📝 DOCUMENT HISTORY

| Version | Date | Changes |
|---|---|---|
| V1.0 | 2025 | Initial structure, basic sections |
| V2.0 | 2025 | Added animations, 3D section |
| V3.0 | 2025 | Ultra detailed edition, full GSAP specs |
| V4.0 | 2026 | Added Lenis, split components, API spec |
| **V5.0** | **2026** | **Complete overhaul. World-class spec. 20 sections. Full code. Full SEO. Full DevOps.** |

---

*This document represents the complete, final, authoritative specification for the ishu.fun homepage. Every team member, every developer, every designer, every SEO specialist, every DevOps engineer has ONE source of truth — this document.*

*Other pages (Results, Tools, News, Blog, About, Contact, Auth, Admin, Test) are handled by their own separate specification documents.*

*Version: 5.0 | Status: 🟢 READY FOR WORLD-CLASS DEVELOPMENT*
*Next: Deploy. Rank #1. Change Indian Education.*
