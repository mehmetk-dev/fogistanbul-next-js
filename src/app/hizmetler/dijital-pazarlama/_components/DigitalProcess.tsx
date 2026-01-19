"use client";
import { processSteps } from '@/app/hizmetler/dijital-pazarlama/_data/dijitalPazarlamaData';
import styles from './DigitalProcess.module.css';

export default function DigitalProcess() {
    return (
        <section id="process-section" className={styles.section}>
            {/* Visual Transition */}
            <div className={styles.visualTransition}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        BÜYÜME STRATEJİSİ
                    </div>

                    <h2 className={styles.title}>
                        <span>NASIL</span>
                        <span className={styles.titleHighlight}>ÇALIŞIYORUZ?</span>
                    </h2>
                </div>

                <div className={styles.timelineContainer}>
                    {processSteps.map((step, i) => (
                        <div key={i} className={styles.marketingCard} style={{
                            transform: i === 1 ? 'translateY(40px)' : 'none'
                        }}>
                            <div className={styles.stepNum}>{step.num}</div>
                            <span className={`material-symbols-outlined ${styles.stepIcon}`} style={{ color: step.color }}>{step.icon}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
