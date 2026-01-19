"use client";
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            {/* Decorations */}
            <div className={styles.decoration} />

            <div className={`fade-in-up ${styles.container}`}>
                <h2 className={styles.heading}>
                    Bir Sonraki Büyük Projeniz <br />
                    <span className={styles.headingHighlight}>Burada Başlıyor</span>
                </h2>
                <p className={styles.description}>
                    Fikirlerinizi gerçeğe dönüştürmek için sabırsızlanıyoruz. Hemen tanışalım ve markanızı bir üst seviyeye
                    taşıyalım.
                </p>
                <div className={styles.buttonsWrapper}>
                    <Link
                        href="/iletisim"
                        className={styles.primaryButton}
                        aria-label="Teklif almak için iletişim sayfasına git"
                    >
                        Hemen Teklif Al
                        <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                    </Link>
                    <a
                        href="tel:+902125550123"
                        className={styles.phoneLink}
                        aria-label="Telefon ara: +90 (212) 555 00 00"
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">call</span>
                        +90 (212) 555 00 00
                    </a>
                </div>
            </div>
        </section>
    );
}
