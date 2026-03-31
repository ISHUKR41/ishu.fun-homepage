// main.jsx — Vite entry point
// NOTE: StrictMode intentionally removed — it causes Lenis smooth-scroll to
// initialize twice in development (StrictMode double-invokes effects), which
// breaks smooth scrolling. StrictMode checks are not needed in production.
import { createRoot } from 'react-dom/client';

// Initialize GSAP plugins globally (must be before any component imports)
import './animations/gsap/gsap.init.js';

import App from './App.jsx';
import './styles/globals.css';
import './styles/accessibility-responsive.css';
import './styles/responsive-fixes.css';

createRoot(document.getElementById('root')).render(<App />);
