/* eslint-disable @next/next/no-img-element */
"use client";
import { adPlatforms } from '@/app/hizmetler/reklam-yonetimi/_data/reklamData';
import styles from './AdsPlatforms.module.css';

export default function AdsPlatforms() {
    return (
        <section id="platforms-section" className={styles.section}>
            <div className={styles.sectionFadeTop}></div>

            {/* Decorative Title */}
            <div className={styles.header}>
                <div className={styles.badgeWrapper}>
                    <div className={`${styles.badgeLine} ${styles.badgeLineLeft}`}></div>
                    <span className={styles.badgeText}>Stratejik Reklam</span>
                    <div className={`${styles.badgeLine} ${styles.badgeLineRight}`}></div>
                </div>
                <h2 className={styles.title}>
                    REKLAM PLATFORMLARI
                </h2>
                <p className={styles.subtitle}>Hedef kitlenize ulaşmanın en etkili yolları</p>
            </div>

            <div className={styles.platformsGrid}>
                {adPlatforms.map((platform, i) => (
                    <div key={i} className={styles.platformCard} style={{ borderTop: `4px solid ${platform.color}` }}>
                        <div className={styles.glowBg} style={{ background: platform.color, right: '-50px', top: '-50px' }}></div>

                        {/* Main Logo - Top Right */}
                        <div className={styles.mainIconAbsolute}>
                            <img src={platform.mainIcon} alt={platform.name} width="48" height="48" style={{ display: 'block' }} />
                        </div>

                        {/* Sub Icons */}
                        <div className={styles.subIcons}>
                            {platform.subIcons.map((sub, j) => (
                                <img key={j} src={sub.src} alt={sub.alt} width="32" height="32" />
                            ))}
                        </div>

                        <h3 className={styles.platformTitle}>{platform.name}</h3>
                        <div className={styles.platformHead}>{platform.head}</div>
                        <p className={styles.platformDesc}>{platform.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
