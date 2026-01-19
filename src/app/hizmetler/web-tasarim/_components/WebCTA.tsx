"use client";
import Link from 'next/link';
import styles from './WebCTA.module.css';

export default function WebCTA() {
    return (
        <section className={styles.footerSection}>
            <div className={styles.browserWrapper}>
                {/* Browser Header */}
                <div className={styles.browserHeader}>
                    <div className={styles.browserDots}>
                        <span className={`${styles.browserDot} ${styles.browserDotRed}`}></span>
                        <span className={`${styles.browserDot} ${styles.browserDotYellow}`}></span>
                        <span className={`${styles.browserDot} ${styles.browserDotGreen}`}></span>
                    </div>
                    <div className={styles.browserAddress}>
                        fogistanbul.com/magaza/web-tasarim
                    </div>
                </div>

                {/* Browser Body */}
                <div className={styles.browserBody}>
                    <div className={styles.productLayout}>
                        {/* Left: Image / Icon */}
                        <div className={styles.productImage}>
                            <span className={`material-symbols-outlined ${styles.productImageIcon}`}>devices</span>
                        </div>

                        {/* Right: Info */}
                        <div className={styles.productInfo}>
                            <div className={styles.rating}>
                                ★★★★★ <span className={styles.ratingText}>(Müşteri Garantili)</span>
                            </div>
                            <h2 className={styles.productTitle}>
                                Yeni Nesil<br />Web Sitesi
                            </h2>
                            <p className={styles.productDesc}>
                                Hız, güvenlik ve estetiğin mükemmel birleşimi. İşinizi büyütecek dijital dönüşüm paketi.
                            </p>
                            <Link href="/iletisim" className={styles.buyBtn} aria-label="Web tasarım hizmeti için teklif almak üzere iletişim sayfasına git">
                                Hemen Teklif Al
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
