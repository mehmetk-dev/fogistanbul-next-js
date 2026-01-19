"use client";
import { bentoStats } from '@/app/hizmetler/crm-otomasyon/_data/crmData';
import styles from './CrmStats.module.css';

export default function CrmStats() {
    return (
        <section className={styles.section}>
            {/* Cyber Grid Background */}
            <div className={styles.cyberGrid}></div>

            {/* Content Container - Grid */}
            <div className={styles.statsGrid}>
                {/* LEFT: TEXT CONTENT */}
                <div className={styles.leftContent}>
                    <div className={styles.badge}>
                        SYSTEM_METRICS
                    </div>

                    <h2 className={styles.title}>
                        VERİ ODAKLI <br />
                        <span className={styles.titleHighlight}>BÜYÜME.</span>
                    </h2>

                    <p className={styles.description}>
                        Teknolojiyi iş süreçlerinize entegre ettiğinizde sadece zaman kazanmazsınız; geleceği bugünden inşa edersiniz.
                        Kaybolan veriler yerine, size yol gösteren anlamlı içgörülere sahip olun.
                    </p>

                    <div className={styles.divider}></div>
                </div>

                {/* RIGHT: STAT CARDS (BENTO) */}
                <div className={styles.rightContent}>
                    {bentoStats.map((stat, i) => (
                        <div key={i} className={styles.bentoCard}>
                            <div className={`${styles.bentoIconBox} ${i === 2 ? styles.bentoIconBoxWhite : i === 1 ? styles.bentoIconBoxPink : ''}`}>
                                <span className={`material-symbols-outlined ${styles.bentoIcon}`}>{stat.icon}</span>
                            </div>
                            <div className={styles.bentoContent}>
                                <div className={styles.bentoHeader}>
                                    <h3 className={styles.bentoTitle}>{stat.title}</h3>
                                    <span className={`${styles.bentoValue} ${i === 2 ? styles.bentoValueWhite : i === 1 ? styles.bentoValuePink : ''}`}>{stat.value}</span>
                                </div>
                                <div className={styles.bentoBarBg}>
                                    <div className={`${styles.bentoBarFill} ${i === 2 ? styles.bentoBarFillWhite : i === 1 ? styles.bentoBarFillPink : ''}`} style={{ width: stat.progress }}></div>
                                </div>
                                <p className={styles.bentoDesc}>{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
