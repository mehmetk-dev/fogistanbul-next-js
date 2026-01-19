"use client";
import { processSteps } from '@/app/hizmetler/basili-medya/_data/basiliMedyaData';
import styles from './BasiliMedyaProcess.module.css';

export default function BasiliMedyaProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>TASARIM SÜRECİMİZ</h2>
                <p className={styles.description}>Fikirden gerçeğe uzanan 4 adımlık yolculuk.</p>
            </div>

            <div className={styles.container}>
                {processSteps.map((step) => (
                    <div key={step.id} className={styles.processStepRow}>
                        {step.position === 'left' ? (
                            <>
                                <div className={`${styles.processContent} ${styles.processContentLeft}`}>
                                    <div className={styles.processBgNum}>{step.id}</div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                                <div className={styles.processCenterLine}>
                                    <div className={styles.processCenterDot}></div>
                                </div>
                                <div></div>
                            </>
                        ) : (
                            <>
                                <div></div>
                                <div className={styles.processCenterLine}>
                                    <div className={styles.processCenterDot}></div>
                                </div>
                                <div className={`${styles.processContent} ${styles.processContentRight}`}>
                                    <div className={styles.processBgNum}>{step.id}</div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
