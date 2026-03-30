# ishu.fun — India's #1 Student Platform

## Overview
An ultra-premium, Apple/Framer/Vercel-inspired React 19 frontend for India's top educational platform. Covers Sarkari Results, Government Jobs, Free PDF Tools, Exam Calendar, and Education News for competitive exam aspirants across India.

## Tech Stack
- **Framework:** React 19 with Vite 8
- **Language:** JavaScript (JSX)
- **Package Manager:** npm
- **Styling:** CSS Modules + global CSS variables
- **Animations:** GSAP, Framer Motion, Anime.js, React Spring, Lenis
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Icons:** Phosphor Icons, Lucide React
- **Routing:** React Router DOM v7
- **Charts:** Recharts
- **Carousels:** Embla Carousel, Swiper

## Project Structure
```
frontend/          # Main frontend application
  src/
    animations/    # GSAP, Anime.js, Spring animation logic
    components/
      layout/      # Navbar, Footer
      sections/    # Page sections (Hero, IndiaMap, ExamCalendar, etc.)
      ui/          # Reusable atomic components
    constants/     # Static data (exam calendar, nav links)
    hooks/         # Custom React hooks
    pages/         # Page components (HomePage)
    styles/        # Global styles, variables, typography
    utils/         # SEO, accessibility, performance helpers
  public/          # Static assets, PWA manifest, service worker
```

## Running the App
- **Dev Server:** `cd frontend && npm run dev`
- **Port:** 5000
- **Host:** 0.0.0.0 (required for Replit preview)

## Vite Configuration
- Port: 5000
- Host: 0.0.0.0
- `allowedHosts: true` (required for Replit proxy)
- Manual chunking for Three.js, GSAP, Framer Motion, etc.
- Path aliases: `@`, `@components`, `@sections`, `@hooks`, `@constants`, `@styles`, `@utils`, `@animations`

## Workflow
- **"Start application"** — runs `cd frontend && npm run dev`, waits for port 5000
