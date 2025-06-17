'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Also handle any delayed content loading
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Handle page visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
