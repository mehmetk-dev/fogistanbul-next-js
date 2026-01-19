/* eslint-disable @next/next/no-img-element */
"use client";
import { softwareTools } from '@/app/hizmetler/produksiyon/_data/produksiyonData';
import styles from './ProductionTools.module.css';

export default function ProductionTools() {
    return (
        <section className={styles.section}>
            {/* Dekoratif Glow */}
            <div className={styles.decorativeGlow} />

            {/* Başlık */}
            <div className={styles.header}>
                <div className={styles.badge}>
                    PROFESYONEL ARAÇLAR
                </div>
                <h2 className={styles.title}>
                    Kullandığımız Yazılımlar
                </h2>
                <p className={styles.description}>
                    Endüstri standardı kurgu ve efekt programlarıyla en yüksek kalitede içerikler üretiyoruz.
                </p>
            </div>

            {/* Program Kartları - Büyük Glassmorphism */}
            <div className={styles.toolsGrid}>
                {softwareTools.map((program, i) => (
                    <div key={i} className={styles.toolCard}>
                        <div className={styles.toolIconWrapper}>
                            <img src={program.img} alt={program.name} className={styles.toolIcon} />
                        </div>
                        <h3 className={styles.toolName}>{program.name}</h3>
                        <div className={styles.toolDesc}>{program.desc}</div>
                        <p className={styles.toolDetail}>
                            {program.detail}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
