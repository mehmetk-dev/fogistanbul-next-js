"use client";
import Link from 'next/link';
import styles from './SocialCTA.module.css';

export default function SocialCTA() {
    return (
        <section className={styles.section}>
            {/* Decorative Floating Icons */}
            <div className={styles.floatingIcon1}>
                <span className={`material-symbols-outlined ${styles.floatingIconInner}`}>thumb_up</span>
            </div>
            <div className={styles.floatingIcon2}>
                <span className={`material-symbols-outlined ${styles.floatingIconInnerLarge}`}>chat_bubble</span>
            </div>

            <div className={styles.container}>
                {/* Top Icons */}
                <div className={styles.topIcons}>
                    <span className={`material-symbols-outlined ${styles.topIcon} ${styles.topIconPink}`}>favorite</span>
                    <span className={`material-symbols-outlined ${styles.topIcon} ${styles.topIconWhite}`}>send</span>
                    <span className={`material-symbols-outlined ${styles.topIcon} ${styles.topIconGreen}`}>verified</span>
                </div>

                <h2 className={styles.heading}>
                    ETKİLEŞİMİ <br />
                    <span className={styles.headingHighlight}>BAŞLAT.</span>
                </h2>

                <p className={styles.description}>
                    Kaydırma (scroll) yapmayı bırakan, markanıza odaklanan ve harekete geçen bir kitle oluşturmaya hazır mısınız?
                </p>

                <Link href="/iletisim" className={styles.ctaButton} aria-label="Sosyal medya hizmetleri için teklif almak üzere iletişim sayfasına git">
                    TAKİPÇİLERİ MÜŞTERİYE DÖNÜŞTÜR <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`} aria-hidden="true">campaign</span>
                </Link>
            </div>
        </section>
    );
}
