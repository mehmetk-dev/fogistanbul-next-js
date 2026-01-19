"use client";
import Link from 'next/link';
import styles from './FooterCTA.module.css';

export default function FooterCTA() {
    return (
        <section className={styles.footerCta}>
            <h2 className={styles.ctaTitle}>BİR FİKRİN Mİ VAR?</h2>
            <Link href="/iletisim" className={styles.ctaBtn} aria-label="Projeyi başlatmak için iletişim sayfasına git">
                PROJEYİ BAŞLAT <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
            </Link>
        </section>
    );
}
