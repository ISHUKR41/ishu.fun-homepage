// main.jsx — Vite entry point
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Initialize GSAP plugins globally (must be before any component imports)
import './animations/gsap/gsap.init.js';

import App from './App.jsx';
import './styles/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
