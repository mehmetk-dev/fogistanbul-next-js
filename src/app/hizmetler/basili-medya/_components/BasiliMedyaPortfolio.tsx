"use client";
import Image from 'next/image';
import { portfolioItems } from '@/app/hizmetler/basili-medya/_data/basiliMedyaData';
import styles from './BasiliMedyaPortfolio.module.css';

export default function BasiliMedyaPortfolio() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>SELECTED WORKS</div>
                    <h2 className={styles.title}>SEÇKİN İŞLER</h2>
                </div>

                <div className={styles.wideGrid}>
                    {portfolioItems.map((item, i) => (
                        <div key={i} className={styles.designCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className={styles.cardImg}
                                    quality={80}
                                />
                                <div className={styles.imageOverlay}></div>
                                <div className={styles.categoryBadge}>
                                    {item.cat}
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                                <div className={styles.cardLink}>
                                    İNCELE <span className={`material-symbols-outlined ${styles.cardLinkIcon}`}>arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
