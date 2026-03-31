// utils/scrollTriggerManager.js
// Manages ScrollTrigger instances to prevent memory leaks

import { ScrollTrigger } from 'gsap/ScrollTrigger';

class ScrollTriggerManager {
  constructor() {
    this.triggers = new Set();
    this.maxTriggers = 100; // Limit max triggers
  }

  /**
   * Create and register a ScrollTrigger
   * @param {Object} config - ScrollTrigger configuration
   * @returns {ScrollTrigger} - The created trigger
   */
  create(config) {
    // Check if we've exceeded max triggers
    if (this.triggers.size >= this.maxTriggers) {
      console.warn('[ScrollTrigger] Max triggers reached, cleaning up old ones');
      this.cleanupInactive();
    }

    const trigger = ScrollTrigger.create(config);
    this.triggers.add(trigger);

    return trigger;
  }

  /**
   * Cleanup inactive triggers
   */
  cleanupInactive() {
    const triggers = Array.from(this.triggers);

    triggers.forEach(trigger => {
      // Remove triggers for elements no longer in DOM
      if (!document.contains(trigger.trigger)) {
        trigger.kill();
        this.triggers.delete(trigger);
      }
    });

    console.log(`[ScrollTrigger] Cleaned up, ${this.triggers.size} triggers remain`);
  }

  /**
   * Kill a specific trigger
   * @param {ScrollTrigger} trigger - The trigger to kill
   */
  kill(trigger) {
    if (trigger) {
      trigger.kill();
      this.triggers.delete(trigger);
    }
  }

  /**
   * Kill all triggers
   */
  killAll() {
    this.triggers.forEach(trigger => trigger.kill());
    this.triggers.clear();
    console.log('[ScrollTrigger] All triggers killed');
  }

  /**
   * Refresh all triggers
   */
  refresh() {
    ScrollTrigger.refresh();
  }

  /**
   * Get current trigger count
   * @returns {number} - Number of active triggers
   */
  getCount() {
    return this.triggers.size;
  }

  /**
   * Auto cleanup on page visibility change
   */
  enableAutoCleanup() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.cleanupInactive();
      }
    });

    // Cleanup every 5 minutes
    setInterval(() => {
      this.cleanupInactive();
    }, 5 * 60 * 1000);

    console.log('[ScrollTrigger] Auto cleanup enabled');
  }
}

// Export singleton instance
export const scrollTriggerManager = new ScrollTriggerManager();

// Enable auto cleanup
scrollTriggerManager.enableAutoCleanup();

export default scrollTriggerManager;
