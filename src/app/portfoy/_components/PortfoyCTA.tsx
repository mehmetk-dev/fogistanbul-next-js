"use client";
import Link from 'next/link';
import styles from './PortfoyCTA.module.css';

export default function PortfoyCTA() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.backgroundGradient} />

            <div className={styles.content}>
                <h2 className={styles.title}>
                    SIRADAKİ EFSANE<br />
                    <span className={styles.titleHighlight}>SİZİN MARKANIZ OLSUN.</span>
                </h2>

                <Link href="/iletisim" className={styles.ctaLinkWrapper} aria-label="Projeyi başlatmak için iletişim sayfasına git">
                    <div className={styles.ctaLinkInner}>
                        Projeyi Başlat <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
