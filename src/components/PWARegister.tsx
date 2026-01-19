'use client';

import { useEffect } from 'react';
import { registerServiceWorker } from '@/lib/pwa';

/**
 * PWA Service Worker Registration Component
 * 
 * Registers the service worker when the component mounts.
 * This should be included in the root layout.
 */
export default function PWARegister() {
  useEffect(() => {
    // Only register in production
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker().catch((error) => {
        console.error('[PWA] Failed to register service worker:', error);
      });
    } else {
      console.log('[PWA] Service Worker registration skipped in development');
    }
  }, []);

  return null;
}
