"use client";
import styles from './AdsHero.module.css';

export default function AdsHero() {
    const scrollToPlatforms = () => {
        const section = document.getElementById('platforms-section');
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 40;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.targetCircle}></div>
            {/* Crosshairs */}
            <div className={styles.crosshairVertical}></div>
            <div className={styles.crosshairHorizontal}></div>

            <div className={styles.content}>
                <div className={styles.badge}>TARGET LOCKED</div>
                <h1 className={styles.title}>
                    NOKTA ATIŞI<br />
                    <span className={styles.titleHighlight}>BÜYÜME.</span>
                </h1>
                <p className={styles.description}>
                    Bütçenizi boşa harcamayın. Veri odaklı reklam stratejileri ile sadece ürününüzü arayan kitleye ulaşın.
                </p>
            </div>

            {/* Aşağı Kaydırma Butonu */}
            <button
                onClick={scrollToPlatforms}
                className={styles.scrollButton}
            >
                <span className={`material-symbols-outlined ${styles.scrollButtonIcon}`}>ads_click</span>
                <span className={`material-symbols-outlined ${styles.scrollButtonIconSecond}`}>expand_more</span>
            </button>

            <div className={styles.sectionFade}></div>
        </section>
    );
}
