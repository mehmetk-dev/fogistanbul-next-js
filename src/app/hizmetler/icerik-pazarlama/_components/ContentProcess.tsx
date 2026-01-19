"use client";
import { processSteps } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import styles from './ContentProcess.module.css';

export default function ContentProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h4 className={styles.badge}>ÇALIŞMA MODELİMİZ</h4>
                <h2 className={styles.title}>
                    Fikir, Strateji, <span className={styles.titleHighlight}>Uygulama.</span>
                </h2>
                <p className={styles.description}>
                    Karmaşık süreçleri basitleştiriyor, markanız için en doğru hikayeyi kurguluyoruz.
                </p>
            </div>

            <div className={styles.processTimeline}>
                {/* Connecting Line */}
                <div className={styles.timelineLine}></div>

                {processSteps.map((step, i) => (
                    <div key={i} className={styles.processStep}>
                        <div className={styles.stepMarker}>
                            <div className={styles.stepDot}></div>
                            <span className={styles.stepNumBg}>{step.num}</span>
                        </div>
                        <h4 className={styles.stepTitle}>{step.title}</h4>
                        <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
