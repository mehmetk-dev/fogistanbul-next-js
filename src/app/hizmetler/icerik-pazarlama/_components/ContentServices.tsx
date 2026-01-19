"use client";
import { bentoGridItems } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import styles from './ContentServices.module.css';

export default function ContentServices() {
    return (
        <section id="services-grid" className={styles.section}>
            <div className={styles.bottomFade}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4 className={styles.badge}>HİZMET KAPSAMI</h4>
                    <h2 className={styles.title}>
                        Dijital Dünyada<br />
                        <span className={styles.titleHighlight}>İçerik Hakimiyeti.</span>
                    </h2>
                </div>

                <div className={styles.bentoGridWrapper}>
                    <div className={styles.bentoGrid}>
                        {bentoGridItems.map((item, i) => (
                            <div key={i} className={`${styles.bentoCard} ${item.span2 ? styles.span2 : ''}`}>
                                {item.span2 ? (
                                    <>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.cardIcon}>
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div className={styles.cardNumber}>{item.num}</div>
                                        </div>
                                        <div>
                                            <h3 className={styles.cardTitle}>{item.title}</h3>
                                            <p className={`${styles.cardDesc} ${styles.cardDescWithMargin}`}>{item.desc}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.cardIcon}>
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDesc}>{item.desc}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
