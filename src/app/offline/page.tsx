'use client';

import Link from 'next/link';
import styles from './OfflinePage.module.css';

export default function OfflinePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        <h1 className={styles.title}>Offline Moddasınız</h1>
        
        <p className={styles.description}>
          İnternet bağlantınız kesilmiş görünüyor. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.
        </p>
        
        <div className={styles.actions}>
          <button
            onClick={() => window.location.reload()}
            className={styles.primaryButton}
            aria-label="Sayfayı yenile"
          >
            Yeniden Dene
          </button>
          
          <Link
            href="/"
            className={styles.secondaryButton}
            aria-label="Ana sayfaya dön"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
        
        <div className={styles.info}>
          <p className={styles.infoText}>
            Bazı sayfalar offline modda çalışmaya devam edebilir.
          </p>
        </div>
      </div>
    </div>
  );
}
