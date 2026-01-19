"use client";
import styles from './CrmHero.module.css';

export default function CrmHero() {
    return (
        <section className={styles.section}>
            {/* Tech Decoration: Status Badge */}
            <div className={styles.statusBadge}>
                <div className={styles.statusDot}></div>
                <span className={styles.statusText}>SYSTEM: ONLINE</span>
            </div>

            <div className={styles.badge}>
                BUSINESS INTELLIGENCE
            </div>

            <h1 className={styles.title}>
                ŞİRKETİNİZİN<br />
                <span className={styles.gradientTextPink}>DİJİTAL BEYNİ.</span>
            </h1>

            <p className={styles.description}>
                Müşteri hafızanızı excel dosyalarından kurtarın.
                Satış öncesi, sırası ve sonrasını yöneten akıllı sistemler kuruyoruz.
            </p>

            {/* Aşağı Kaydırma Butonu */}
            <button
                onClick={() => {
                    const scrollPosition = window.innerHeight - 70;
                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                }}
                className={styles.scrollButton}
            >
                <span className={`material-symbols-outlined ${styles.scrollButtonIcon}`}>settings</span>
                <span className={styles.scrollButtonText}>Keşfet</span>
                <span className={`material-symbols-outlined ${styles.scrollButtonIconSecond}`}>expand_more</span>
            </button>
        </section>
    );
}
