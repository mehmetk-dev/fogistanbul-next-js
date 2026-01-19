"use client";
import styles from './StickyHeroPanel.module.css';

export default function StickyHeroPanel() {
    return (
        <div className={styles.stickyPanel}>
            {/* Badge */}
            <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Hizmetlerimiz
            </div>

            {/* Hero Title */}
            <h1 className={styles.title}>
                İŞİNİZİ<br />
                BÜYÜTEN<br />
                SONUÇ ODAKLI<br />
                <span className={styles.titleHighlight}>DİJİTAL ÇÖZÜMLER.</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
                Markanızın ihtiyacı olan tüm dijital çözümler tek bir çatı altında.
                Stratejiden uygulamaya, baştan sona yanınızdayız.
            </p>

            {/* Marquee */}
            <div className={styles.marqueeWrapper}>
                <div className={styles.animateMarquee}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <span key={i} className={styles.marqueeText}>
                            STRATEJİ • TASARIM • YAZILIM • PAZARLAMA •
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
