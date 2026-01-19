"use client";
import Link from 'next/link';
import styles from './BasiliMedyaCTA.module.css';

export default function BasiliMedyaCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.ctaGrid}>
                {/* Left: Text */}
                <div className={styles.ctaTextSide}>
                    <div className={styles.badge}>
                        YAYINA HAZIR MISINIZ?
                    </div>
                    <h2 className={styles.title}>
                        MARKANIZI <br /> SAYFALARA DÖKELİM.
                    </h2>
                    <p className={styles.description}>
                        Kataloğunuzdan kartvizitinize kadar her detayda tasarımın gücünü deneyimleyin.
                    </p>
                    <Link href="/iletisim" className={styles.ctaButton} aria-label="Basılı medya projesi başlatmak için iletişim sayfasına git">
                        PROJE BAŞLAT <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`} aria-hidden="true">arrow_forward</span>
                    </Link>
                </div>

                {/* Right: 3D Magazine Visual */}
                <div className={styles.visualContainer}>
                    <div className={styles.visualGlow}></div>
                    <div className={styles.perspectiveContainer}>
                        <div className={styles.book}>
                            <div className={`${styles.page} ${styles.backCover}`}></div>
                            <div className={`${styles.page} ${styles.pages}`}></div>
                            <div className={`${styles.page} ${styles.pages} ${styles.pagesSecond}`}></div>
                            <div className={`${styles.page} ${styles.frontCover}`}>
                                <div className={styles.frontCoverText}>
                                    FOG<br />MAG.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
