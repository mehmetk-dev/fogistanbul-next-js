'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/components/Toast';
import styles from './PWAInstallPrompt.module.css';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * PWA Install Prompt Component
 * 
 * Shows install prompt when PWA can be installed.
 * Uses the beforeinstallprompt event to show custom install UI.
 */
export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(display-mode: standalone)').matches;
  });
  const { showInfo } = useToast();

  useEffect(() => {
    // Check if user already dismissed in this session
    const isDismissed = sessionStorage.getItem('pwa-install-dismissed') === 'true';
    
    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Only prevent default and show custom UI if not already dismissed
      // This avoids the browser warning when we don't intend to show our prompt
      if (isDismissed) {
        // Let the browser handle it naturally (no custom UI)
        return;
      }
      
      // Prevent the default browser install prompt
      e.preventDefault();
      
      // Store the event for later use
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show our custom prompt after a delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000); // Show after 3 seconds
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      showInfo('FOG İstanbul başarıyla yüklendi!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [showInfo]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for user response
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      showInfo('FOG İstanbul yükleniyor...');
    } else {
      showInfo('Yükleme iptal edildi.');
    }

    // Clear the prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if already installed or dismissed
  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  // Check if user dismissed in this session
  if (sessionStorage.getItem('pwa-install-dismissed') === 'true') {
    return null;
  }

  return (
    <div className={styles.promptContainer} role="dialog" aria-labelledby="pwa-install-title" aria-modal="true">
      <div className={styles.promptContent}>
        <div className={styles.promptIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        <div className={styles.promptText}>
          <h3 id="pwa-install-title" className={styles.promptTitle}>
            FOG İstanbul&apos;u Yükle
          </h3>
          <p className={styles.promptDescription}>
            Ana ekranınıza ekleyin ve daha hızlı erişin.
          </p>
        </div>
        
        <div className={styles.promptActions}>
          <button
            onClick={handleInstallClick}
            className={styles.installButton}
            aria-label="FOG İstanbul&apos;u yükle"
          >
            Yükle
          </button>
          <button
            onClick={handleDismiss}
            className={styles.dismissButton}
            aria-label="Şimdi değil"
          >
            Şimdi Değil
          </button>
        </div>
        
        <button
          onClick={handleDismiss}
          className={styles.closeButton}
          aria-label="Kapat"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            close
          </span>
        </button>
      </div>
    </div>
  );
}
