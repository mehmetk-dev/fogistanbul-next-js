/* eslint-disable @next/next/no-img-element */
"use client";
import { serviceList } from '@/app/hizmetler/produksiyon/_data/produksiyonData';
import styles from './ProductionServices.module.css';

export default function ProductionServices() {
    return (
        <>
            {serviceList.map((item, i) => (
                <section key={i} className={`${styles.serviceGridSection} ${i % 2 === 0 ? '' : styles.serviceGridSectionReverse}`}>
                    {/* İlk section'da başlık göster (Overlay) */}
                    {item.hasTitle && (
                        <div className={styles.gridHeaderOverlay}>
                            <span className={styles.gridHeaderLabel}>PRODÜKSİYON</span>
                            <h2 className={styles.gridHeaderTitle}>HİZMETLERİMİZ</h2>
                        </div>
                    )}

                    {/* Görsel Tarafı */}
                    <div className={styles.gridImgCol}>
                        <img src={item.img} alt={item.title} />
                    </div>

                    {/* İçerik Tarafı */}
                    <div className={styles.gridContentCol}>
                        <div className={styles.contentInner}>
                            <span className={styles.gridNum}>{item.num}</span>
                            <span className={styles.gridTag}>{item.tag}</span>
                            <h3 className={styles.gridTitle}>{item.title}</h3>
                            <p className={styles.gridDesc}>{item.desc}</p>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
