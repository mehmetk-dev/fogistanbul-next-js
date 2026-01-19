"use client";
import styles from './BasiliMedyaHero.module.css';

export default function BasiliMedyaHero() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.badge}>
                    CREATIVE PRINT DESIGN
                </div>

                <h1 className={styles.title}>
                    <span>TASARIMIN</span>
                    <span className={styles.titleHighlight}>DOKUNULABİLİR</span>
                    <span>HALİ.</span>
                </h1>

                <p className={styles.description}>
                    Markanızın hikayesini sadece ekranda bırakmıyoruz.
                    Kağıdın dokusuyla buluşan, prestijli ve akılda kalıcı görsel deneyimler tasarlıyoruz.
                </p>

                {/* CMYK PRISM VISUAL */}
                <div className={styles.cmykContainer}>
                    <div className={`${styles.cmykOrb} ${styles.cyan}`}></div>
                    <div className={`${styles.cmykOrb} ${styles.magenta}`}></div>
                    <div className={`${styles.cmykOrb} ${styles.yellow}`}></div>

                    <div className={styles.designCore}>
                        <span className={`material-symbols-outlined ${styles.designCoreIcon}`}>palette</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
