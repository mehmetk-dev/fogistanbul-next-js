"use client";
import Link from 'next/link';
import styles from './ProductionCTA.module.css';

export default function ProductionCTA() {
    return (
        <section className={styles.section}>
            <Link href="/iletisim" className={styles.ctaLink} aria-label="Prodüksiyon projesi başlatmak için iletişim sayfasına git">
                <div className={styles.clapperWrapper}>
                    {/* TOP ARM */}
                    <div className={styles.clapperTop}>
                        {[...Array(6)].map((_, i) => (
                            <div key={`t-${i}`} className={styles.stripe}></div>
                        ))}
                    </div>

                    {/* BODY */}
                    <div className={styles.clapperBody}>
                        <div className={styles.title}>
                            PROJENİ BAŞLAT
                        </div>
                        <div className={styles.subtitle}>
                            SCENE 1 - TAKE 1
                        </div>
                        <div className={styles.meta}>
                            <span>DIRECTOR: <span className={styles.metaBold}>FOG İSTANBUL</span></span>
                            <span>DATE: <span className={styles.metaBold}>2024</span></span>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
