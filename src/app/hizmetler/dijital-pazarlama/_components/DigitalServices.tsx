"use client";
import { serviceList } from '@/app/hizmetler/dijital-pazarlama/_data/dijitalPazarlamaData';
import styles from './DigitalServices.module.css';

export default function DigitalServices() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        KAPSAMLI<br />
                        <span className={styles.titleHighlight}>ÇÖZÜMLER.</span>
                    </h2>
                    <p className={styles.description}>
                        Dijital büyüme için uçtan uca stratejiler.
                    </p>
                </div>

                {/* Services List */}
                <div className={styles.servicesList}>
                    {serviceList.map((s, i) => (
                        <div key={i} className={styles.serviceRow}>
                            <div className={styles.rowContent}>
                                {/* Left: Title Block */}
                                <div className={styles.titleBlock}>
                                    <div className={styles.rowNum}>{s.num}</div>
                                    <h4 className={styles.rowTitle}>{s.title}</h4>
                                </div>

                                {/* Right: Desc & Icon */}
                                <div className={styles.descCol}>
                                    <p className={styles.rowDesc}>{s.desc}</p>
                                    <div className={styles.rowIconBox} style={{
                                        border: `1px solid ${s.color}`,
                                        background: `linear-gradient(135deg, ${s.color}20, transparent)`
                                    }}>
                                        <span className={`material-symbols-outlined ${styles.rowIcon}`} style={{ color: s.color }}>{s.icon}</span>
                                    </div>
                                    <span className={`material-symbols-outlined ${styles.rowArrow}`}>
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
