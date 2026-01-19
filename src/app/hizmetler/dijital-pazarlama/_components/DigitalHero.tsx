"use client";
import Image from 'next/image';
import styles from './DigitalHero.module.css';

export default function DigitalHero() {
    const scrollToProcess = () => {
        const el = document.getElementById('process-section');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 10;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            {/* Semantic Image for SEO */}
            <Image
                src="/assets/services/digital-marketing-meeting.jpg"
                alt="FOG İstanbul Dijital Pazarlama ve Strateji Toplantısı - Google Ads ve SEO Analizi"
                fill
                className={styles.backgroundImage}
                priority
                quality={80}
            />

            {/* Dark Overlay */}
            <div className={styles.darkOverlay}></div>

            {/* Hidden Semantic H1 for SEO */}
            <h1 className={styles.hiddenH1}>
                Dijital Pazarlama ve Performans Yönetimi
            </h1>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.badge}>
                    Bütünleşik Dijital Strateji
                </div>

                <h2 className={styles.title}>
                    DİJİTAL<br />
                    EKOSİSTEMİNİZİ<br />
                    <span className={styles.titleHighlight}>İNŞA EDİYORUZ.</span>
                </h2>

                <p className={styles.description}>
                    Sadece reklam vermek yetmez. Tüm kanalların birbirini beslediği,
                    yaşayan ve büyüyen bir sistem kuruyoruz.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollButton} onClick={scrollToProcess}>
                <span className={styles.scrollButtonText}>KEŞFET</span>
                <span className={`material-symbols-outlined ${styles.scrollButtonIcon}`}>
                    keyboard_arrow_down
                </span>
            </div>
        </section>
    );
}
