"use client";
import styles from './PortfoyHero.module.css';

export default function PortfoyHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundGlow} />

            <div className={styles.content}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    Portfolio
                </div>
                <h1 className={styles.title}>
                    SEÇİLMİŞ <span className={styles.titleHighlight}>İŞLER.</span>
                </h1>
                <p className={styles.description}>
                    Sıradanlığa meydan okuyan markalar için ürettiğimiz dijital deneyimler, tasarımlar ve stratejiler.
                </p>
            </div>
        </section>
    );
}
