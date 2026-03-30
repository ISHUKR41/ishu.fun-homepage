// accessibility.js — WCAG 2.1 AA Accessibility Utilities

// Focus Management
export function setupFocusManagement() {
  // Add visible focus indicators for keyboard navigation
  let usingMouse = false;

  document.addEventListener('mousedown', () => {
    usingMouse = true;
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      usingMouse = false;
    }
  });

  // Add class to body based on input method
  document.addEventListener('focusin', () => {
    if (usingMouse) {
      document.body.classList.add('using-mouse');
    } else {
      document.body.classList.remove('using-mouse');
    }
  });
}

// Skip Navigation Links
export function enhanceSkipLinks() {
  const skipLinks = document.querySelectorAll('a[href^="#"]');

  skipLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Reduced Motion Detection
export function respectReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const disableAnimations = () => {
    document.body.classList.add('reduce-motion');
    console.log('[A11y] Reduced motion enabled');
  };

  const enableAnimations = () => {
    document.body.classList.remove('reduce-motion');
  };

  if (prefersReducedMotion.matches) {
    disableAnimations();
  }

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      disableAnimations();
    } else {
      enableAnimations();
    }
  });

  return prefersReducedMotion.matches;
}

// Color Contrast Checker
export function checkColorContrast(foreground, background) {
  const getLuminance = (rgb) => {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return {
    ratio: ratio.toFixed(2),
    passAA: ratio >= 4.5,
    passAAA: ratio >= 7,
  };
}

// ARIA Live Announcer
export function createLiveAnnouncer() {
  let announcer = document.getElementById('aria-live-announcer');

  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'aria-live-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(announcer);
  }

  return {
    announce: (message, priority = 'polite') => {
      announcer.setAttribute('aria-live', priority);
      announcer.textContent = '';
      setTimeout(() => {
        announcer.textContent = message;
      }, 100);
    },
  };
}

// Keyboard Navigation Enhancement
export function enhanceKeyboardNavigation() {
  // Escape key to close modals/dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const event = new CustomEvent('escape-pressed');
      document.dispatchEvent(event);
    }
  });

  // Arrow key navigation for lists
  document.querySelectorAll('[role="listbox"], [role="menu"]').forEach((list) => {
    const items = list.querySelectorAll('[role="option"], [role="menuitem"]');
    let currentIndex = 0;

    list.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        currentIndex = 0;
        items[currentIndex].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        currentIndex = items.length - 1;
        items[currentIndex].focus();
      }
    });
  });
}

// Form Accessibility Enhancements
export function enhanceFormAccessibility() {
  // Associate labels with inputs
  document.querySelectorAll('input, textarea, select').forEach((field) => {
    if (!field.getAttribute('aria-label') && !field.getAttribute('aria-labelledby')) {
      const label = document.querySelector(`label[for="${field.id}"]`);
      if (label) {
        field.setAttribute('aria-labelledby', label.id || `label-${field.id}`);
        if (!label.id) label.id = `label-${field.id}`;
      }
    }

    // Add error announcement
    field.addEventListener('invalid', (e) => {
      e.preventDefault();
      const announcer = createLiveAnnouncer();
      announcer.announce(
        `${field.getAttribute('aria-label') || field.name}: ${field.validationMessage}`,
        'assertive'
      );
    });
  });
}

// Accessible Modal Dialog
export function createAccessibleModal(modalElement) {
  let previousFocus = null;

  return {
    open: () => {
      previousFocus = document.activeElement;
      modalElement.setAttribute('role', 'dialog');
      modalElement.setAttribute('aria-modal', 'true');
      modalElement.setAttribute('tabindex', '-1');

      // Focus first focusable element
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length) {
        focusableElements[0].focus();
      } else {
        modalElement.focus();
      }

      // Trap focus within modal
      modalElement.addEventListener('keydown', trapFocus);
    },

    close: () => {
      modalElement.removeEventListener('keydown', trapFocus);
      if (previousFocus) {
        previousFocus.focus();
      }
    },
  };

  function trapFocus(e) {
    if (e.key !== 'Tab') return;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

// Accessible Tooltips
export function createAccessibleTooltip(triggerElement, tooltipContent) {
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
  let tooltipElement = null;

  triggerElement.setAttribute('aria-describedby', tooltipId);

  const show = () => {
    tooltipElement = document.createElement('div');
    tooltipElement.id = tooltipId;
    tooltipElement.setAttribute('role', 'tooltip');
    tooltipElement.textContent = tooltipContent;
    tooltipElement.style.cssText = `
      position: absolute;
      z-index: 1000;
      background: var(--bg-elevated);
      color: var(--text-primary);
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      box-shadow: var(--shadow-md);
    `;

    document.body.appendChild(tooltipElement);

    const rect = triggerElement.getBoundingClientRect();
    tooltipElement.style.top = `${rect.bottom + 8}px`;
    tooltipElement.style.left = `${rect.left}px`;
  };

  const hide = () => {
    if (tooltipElement) {
      tooltipElement.remove();
      tooltipElement = null;
    }
  };

  triggerElement.addEventListener('mouseenter', show);
  triggerElement.addEventListener('focus', show);
  triggerElement.addEventListener('mouseleave', hide);
  triggerElement.addEventListener('blur', hide);

  return { show, hide };
}

// Initialize all accessibility features
export function initAccessibility() {
  setupFocusManagement();
  enhanceSkipLinks();
  respectReducedMotion();
  enhanceKeyboardNavigation();
  enhanceFormAccessibility();

  console.log('[A11y] Accessibility features initialized');

  return {
    liveAnnouncer: createLiveAnnouncer(),
    reducedMotion: respectReducedMotion(),
  };
}

export default {
  setupFocusManagement,
  enhanceSkipLinks,
  respectReducedMotion,
  checkColorContrast,
  createLiveAnnouncer,
  enhanceKeyboardNavigation,
  enhanceFormAccessibility,
  createAccessibleModal,
  createAccessibleTooltip,
  initAccessibility,
};
