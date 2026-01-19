"use client";
import styles from './ContactHero.module.css';

interface ContactHeroProps {
    onScrollToForm: () => void;
}

export default function ContactHero({ onScrollToForm }: ContactHeroProps) {
    return (
        <div className={styles.textContent}>
            <h1 className={styles.heroTitle}>
                BİR<br />
                <span className={styles.outlineText}>ADIM</span><br />
                ATIN.
            </h1>
            <div className={styles.lineDec}></div>
            <p className={styles.heroDesc}>
                Fikirleriniz bizim için sadece veri değil, işlenecek birer ham mücevher.
                Bize ulaşın, onları parlatmamıza izin verin.
            </p>

            <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                    <span className={styles.label}>MERKEZLER</span>
                    <span className={styles.value}>İSTANBUL / BURSA</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>DİREKT HAT</span>
                    <a href="tel:+902125550000" className={`${styles.value} ${styles.valueLink}`} aria-label="Telefon ara: +90 212 555 0000">+90 212 555 0000</a>
                </div>
            </div>

            <div className={`${styles.contactDetails} ${styles.contactDetailsMargin}`}>
                <div className={styles.detailItem}>
                    <span className={styles.label}>E-POSTA</span>
                    <a href="mailto:iletisim@fogistanbul.com" className={`${styles.value} ${styles.valueLink}`} aria-label="E-posta gönder: iletisim@fogistanbul.com">iletisim@fogistanbul.com</a>
                </div>
            </div>

            {/* Mobile Only: Scroll to Form Button */}
            <button
                type="button"
                className={styles.mobileScrollBtn}
                onClick={onScrollToForm}
                aria-label="İletişim formuna git"
            >
                <span className={styles.scrollBtnText}>İLETİŞİME GEÇ</span>
                <span className={`material-symbols-outlined ${styles.scrollBtnIcon}`} aria-hidden="true">keyboard_arrow_down</span>
            </button>
        </div>
    );
}
