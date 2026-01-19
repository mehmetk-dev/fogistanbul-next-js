"use client";
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { floatingKeywords } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import styles from './ContentCTA.module.css';

export default function ContentCTA() {
    return (
        <section className={styles.section}>
            {/* Background Text */}
            <div className={styles.backgroundText}>
                SEO RANK
            </div>

            {/* Decorative Elements - Floating Keywords */}
            <div className={styles.keywordsContainer}>
                {floatingKeywords.map((kw, i) => (
                    <span key={i} className={styles.kwBubble} style={kw.style as CSSProperties}>
                        {kw.text}
                    </span>
                ))}
            </div>

            {/* Decorative Glow */}
            <div className={styles.decorativeGlow}></div>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    Arama Motorlarında<br />
                    <span className={styles.titleHighlight}>Zirveye Oynayın.</span>
                </h2>
                <p className={styles.description}>
                    Sadece içerik üretmiyoruz; Google&apos;ın algoritmalarına fısıldayan stratejiler geliştiriyoruz. Görünürlüğünüzü artırın, trafiğinizi katlayın.
                </p>

                <Link href="/iletisim" className={styles.ctaButton} aria-label="SEO teklifi almak için iletişim sayfasına git">
                    <span>SEO Teklifi Alın</span>
                    <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`} aria-hidden="true">travel_explore</span>
                </Link>
            </div>
        </section>
    );
}
