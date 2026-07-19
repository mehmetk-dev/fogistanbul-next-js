"use client";
import { useRef, useState } from 'react';
import { solutions } from '@/app/hizmetler/web-tasarim/_data/webTasarimData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './WebSolutions.module.css';

export default function WebSolutions() {
    const isMobile = useIsMobile();
    const gridRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const scrollLeft = target.scrollLeft;
        const clientWidth = target.clientWidth;
        if (clientWidth > 0) {
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    const scrollToIndex = (index: number) => {
        if (gridRef.current) {
            const clientWidth = gridRef.current.clientWidth;
            gridRef.current.scrollTo({
                left: index * clientWidth,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            scrollToIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < solutions.length - 1) {
            scrollToIndex(activeIndex + 1);
        }
    };

    return (
        <section className={`${styles.section} ${isMobile ? styles.sectionMobile : ''}`}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} ${isMobile ? styles.headingMobile : ''}`}>
                    ÇÖZÜM <span className={styles.headingOutline}>MATRİSİ</span>
                </h2>

                <div 
                    ref={gridRef}
                    className={styles.responsiveGrid}
                    onScroll={handleScroll}
                >
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

                {/* Mobile Navigation Controls */}
                {isMobile && (
                    <div className={styles.mobileControls}>
                        <button 
                            className={`${styles.navButton} ${activeIndex === 0 ? styles.navButtonDisabled : ''}`}
                            onClick={handlePrev}
                            aria-label="Önceki"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>

                        <div className={styles.dotsContainer}>
                            {solutions.map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`}
                                    onClick={() => scrollToIndex(i)}
                                    aria-label={`Git sayfa ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button 
                            className={`${styles.navButton} ${activeIndex === solutions.length - 1 ? styles.navButtonDisabled : ''}`}
                            onClick={handleNext}
                            aria-label="Sonraki"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
