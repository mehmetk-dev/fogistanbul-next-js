"use client";
import { processes } from '@/app/hakkimizda/_data/hakkimizdaData';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
    return (
        <section className={styles.processSection}>
            <div className={styles.processHeader}>
                <div className={styles.processBadge}>Süreçlerimiz</div>
                <h2 className={styles.processTitle}>NASIL<br />ÇALIŞIYORUZ?</h2>
                <p className={styles.processDescription}>
                    Dijital dünyada başarı tesadüf değildir. Veri odaklı analiz, yaratıcı strateji ve kusursuz uygulama ile markanızı hedeflerine ulaştırıyoruz.
                </p>
            </div>

            <div className={styles.processGrid}>
                {processes.map(p => (
                    <div key={p.id} className={styles.processCard}>
                        <div className={styles.processId}>{p.id}</div>
                        <div className={styles.processCardTitle}>{p.title}</div>
                        <div className={styles.processCardDesc}>{p.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
