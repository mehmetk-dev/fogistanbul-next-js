/* eslint-disable @next/next/no-img-element */
"use client";
import { floatingKeywords } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import styles from './ContentHero.module.css';

export default function ContentHero() {
    const scrollToServices = () => {
        const el = document.getElementById('services-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.heroSection}>
            {/* Background Glow */}
            <div className={styles.bgGlow}></div>
            <div className={styles.bgGlow2}></div>

            {/* Main Content */}
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <div className={styles.tagline}>İÇERİK PAZARLAMA</div>
                    <h1 className={styles.title}>
                        Markanız İçin <br />
                        <span className={styles.textGradient}>Stratejik İçerikler.</span>
                    </h1>

                    <p className={styles.description}>
                        Arama motorlarında görünür olun, sosyal medyada etkileşim yaratın.
                        Web siteniz ve dijital kanallarınız için profesyonel içerik üretimi hizmetleri.
                    </p>
                </div>

                {/* Floating Keywords Visual */}
                <div className={styles.keywordsVisual}>
                    {/* Rings container */}
                    <div className={styles.ringsWrap}>
                        <div className={styles.gradientRing}></div>
                        <div className={styles.gradientRingInner}></div>
                        <div className={styles.centerElement}>
                            <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)' }}>edit_note</span>
                            <span className={styles.centerLabel}>İçerik</span>
                        </div>
                    </div>

                    {/* Tags container */}
                    <div className={styles.tagsWrap}>
                        {floatingKeywords.map((kw, i) => (
                            <div
                                key={i}
                                className={`${styles.floatingTag} ${styles[`tag${i + 1}`]}`}
                            >
                                {kw.text}
                            </div>
                        ))}
                        <div className={`${styles.floatingTag} ${styles.tag5}`}>
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                            +320% Trafik
                        </div>
                        <div className={`${styles.floatingTag} ${styles.tag6}`}>
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span>
                            Top 3 Sıralama
                        </div>
                    </div>

                    {/* Decorative dots */}
                    <div className={`${styles.dot} ${styles.dot1}`}></div>
                    <div className={`${styles.dot} ${styles.dot2}`}></div>
                    <div className={`${styles.dot} ${styles.dot3}`}></div>
                </div>
            </div>

            {/* SCROLL DOWN BUTTON */}
            <div className={styles.heroScrollBtn} onClick={scrollToServices}>
                <span className={styles.scrollBtnText}>AŞAĞI KAYDIR</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>
        </section>
    );
}
