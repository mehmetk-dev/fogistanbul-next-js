"use client";
import Link from 'next/link';
import styles from './HizmetlerCTASection.module.css';

export default function HizmetlerCTASection() {
    return (
        <section className={styles.ctaSection}>
            {/* Background Glows */}
            <div className={styles.backgroundGlow} />

            <div className={styles.content}>
                {/* Decorative Elements */}
                <div className={styles.decorativeElement1} />
                <div className={styles.decorativeElement2} />

                <h2 className={styles.title}>
                    PROJENİZE <br />
                    <span className={styles.titleHighlight}>DEĞER KATALIM.</span>
                </h2>

                <p className={styles.description}>
                    Hangi aşamada olursanız olun, hedeflerinize ulaşmanız için<br className={styles.desktopBr} /> stratejik bir yol haritası çizelim.
                </p>

                <Link href="/iletisim" className={styles.ctaButton} aria-label="Teklif almak için iletişim sayfasına git">
                    Teklif Alın <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
                </Link>
            </div>
        </section>
    );
}
