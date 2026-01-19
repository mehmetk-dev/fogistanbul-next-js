"use client";
import { processSteps } from '@/app/hizmetler/web-tasarim/_data/webTasarimData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './WebProcess.module.css';

export default function WebProcess() {
    const isMobile = useIsMobile();

    return (
        <section className={styles.section}>
            {/* Ambient Background Glow */}
            <div className={styles.ambientGlow} />

            <h2 className={styles.heading}>
                BAŞARI <span className={styles.headingHighlight}>YOLCULUĞU</span>
            </h2>

            <div className={styles.container}>
                <div className={`${styles.processContainer} ${isMobile ? styles.processContainerMobile : ''}`}>
                    {/* Connecting Neon Line for Desktop ONLY */}
                    {!isMobile && (
                        <div className={styles.neonLine}>
                            <svg className={styles.neonLineSvg}>
                                <defs>
                                    <linearGradient id="neonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#333" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#fff" stopOpacity="0.8" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path d="M0,300 C150,300 150,200 300,200 C450,200 450,100 600,100 C750,100 750,0 900,0"
                                    stroke="url(#neonGrad)" strokeWidth="3" fill="none"
                                    filter="url(#glow)" />
                            </svg>
                        </div>
                    )}

                    {processSteps.map((item, i) => (
                        <div key={i} className={`${styles.processStep} ${isMobile ? styles.processStepMobile : ''}`} style={!isMobile ? { marginTop: item.marginTop } : undefined}>
                            {/* Mobile Timeline Dot */}
                            {isMobile && <div className={styles.timelineDot} />}

                            {/* Glass Card */}
                            <div className={styles.glassCard}>
                                {/* Giant Watermark Number */}
                                <div className={styles.watermarkNumber}>
                                    {item.step}
                                </div>

                                {/* Icon Box */}
                                <div className={styles.iconBox}>
                                    <span className={`material-symbols-outlined ${styles.iconBoxIcon}`}>{item.icon}</span>
                                </div>

                                <h3 className={styles.stepTitle}>{item.title}</h3>
                                <p className={styles.stepDesc}>{item.desc}</p>
                            </div>

                            {/* Glowing Dot for DESKTOP */}
                            {!isMobile && <div className={styles.glowingDot} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
