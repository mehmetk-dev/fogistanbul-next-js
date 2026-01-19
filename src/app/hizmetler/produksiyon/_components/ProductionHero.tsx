/* eslint-disable @next/next/no-img-element */
"use client";
import { heroData } from '@/app/hizmetler/produksiyon/_data/produksiyonData';
import styles from './ProductionHero.module.css';

export default function ProductionHero() {
    const handleScroll = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <section className={styles.prodHeroSection}>
            {/* Arka Plan Görsel - Tam Ekran */}
            <div className={styles.prodHeroBgDiv}>
                <img src={heroData.bgImage} alt="Prodüksiyon" className={styles.heroBgImage} />
                {/* Gradient Overlay */}
                <div className={styles.gradientOverlay} />
            </div>

            <div className={styles.contentWrapper}>
                {/* REC Indicator */}
                <div className={styles.recIndicator}>
                    <span className={styles.recDot}></span>
                    <span className={styles.recText}>{heroData.recText}</span>
                </div>

                <h1 className={styles.heroTitle}>
                    {heroData.title}
                </h1>
                <p className={styles.heroSubtitle}>
                    {heroData.subtitle}
                </p>
            </div>

            {/* SCROLL DOWN - FILM STRIP STYLE */}
            <div
                onClick={handleScroll}
                className={styles.filmScrollWrapper}
            >
                <div className={styles.filmStrip}>
                    {/* Film Holes Left */}
                    {[...Array(5)].map((_, i) => (
                        <div key={`l-${i}`} className={styles.filmHole}></div>
                    ))}

                    {/* Film Holes Right */}
                    <div className={styles.filmHolesRight}>
                        {[...Array(5)].map((_, i) => (
                            <div key={`r-${i}`} className={styles.filmHoleRight}></div>
                        ))}
                    </div>

                    {/* Arrows Animation */}
                    <div className={styles.filmArrows}>
                        <span className={`material-symbols-outlined ${styles.filmArrowIcon}`}>keyboard_arrow_down</span>
                        <span className={`material-symbols-outlined ${styles.filmArrowIconSecond}`}>keyboard_arrow_down</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
