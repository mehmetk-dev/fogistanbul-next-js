"use client";
import { solutions } from '@/app/hizmetler/web-tasarim/_data/webTasarimData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './WebSolutions.module.css';

export default function WebSolutions() {
    const isMobile = useIsMobile();

    return (
        <section className={`${styles.section} ${isMobile ? styles.sectionMobile : ''}`}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} ${isMobile ? styles.headingMobile : ''}`}>
                    ÇÖZÜM <span className={styles.headingOutline}>MATRİSİ</span>
                </h2>

                <div className={styles.responsiveGrid}>
                    {solutions.map((item, i) => (
                        <div key={i} className={styles.solutionCard}>
                            {/* Header: Icon + ID */}
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    <span className={`material-symbols-outlined ${styles.iconBoxIcon}`}>{item.icon}</span>
                                </div>
                                <div className={styles.cardId}>{item.id}</div>
                            </div>

                            {/* Body: Title & Desc */}
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <div className={styles.cardSubtitle}>
                                    {item.subtitle}
                                </div>
                            </div>

                            {/* Footer: Tags - More readable checklist style */}
                            <div className={styles.cardFooter}>
                                {item.features.map((feat, f) => (
                                    <div key={f} className={styles.featureItem}>
                                        <span className={`material-symbols-outlined ${styles.featureIcon}`}>check_circle</span>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            {/* Hover Action Hint */}
                            <div className={styles.cardArrow}>
                                <span className={`material-symbols-outlined ${styles.cardArrowIcon}`}>arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
