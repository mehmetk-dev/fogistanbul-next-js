/* eslint-disable @next/next/no-img-element */
"use client";
import styles from './ManifestoSection.module.css';

export default function ManifestoSection() {
    return (
        <div className={styles.infoWrapper}>
            {/* Background Watermark Fills Space */}
            <div className={styles.watermarkText}>MINDSET</div>

            <section className={styles.manifestoSection}>
                <div className={styles.manifestoText}>
                    Adımızdaki FOG, <span className={styles.highlight}>&quot;Focus On Growth&quot;</span> yani &quot;Büyümeye Odaklan&quot; anlamına gelir.<br /><br />
                    Biz, işletmenizin tüm dijital ihtiyaçlarını tek merkezden yöneten bir <span className={styles.manifestoTextWhite}>dijital çözümler grubuyuz.</span><br />
                    Sizin dilinizden konuşuyor, bütçenizi koruyor ve hedeflerinize en kolay yoldan ulaşmanız için çalışıyoruz.
                    <span className={styles.highlight}> Lafı uzatmıyor, büyümenize odaklanıyoruz!</span>
                </div>
                {/* Brand Logo for Mobile "Design" Feel */}
                <img src="/assets/fog_logo_pink.png" alt="FOG Design" className={styles.manifestoLogo} />
            </section>

            {/* Visual Connector */}
            <div className={styles.connectorLine}></div>

            <section className={styles.visionSection}>
                <div className={styles.visionBox}>
                    <div className={styles.visionTitle}>VİZYONUMUZ</div>
                    <div className={styles.visionText}>
                        Firmanızın ve markanızın dijital dünyaya adaptasyonunu sağlamak ve
                        teknolojiyi her firma için erişilebilir kılmak.
                    </div>
                </div>
                <div className={styles.visionBox}>
                    <div className={styles.visionTitle}>MİSYONUMUZ</div>
                    <div className={styles.visionText}>
                        İşletmelerin dijitalleşme süreçlerini kolaylaştırmak; bütçe dostu, size kazandıran,
                        estetik ile işlevselliği birleştiren çözümler üretmek.
                    </div>
                </div>
                {/* Added 3rd Column to Fill Space */}
                <div className={styles.visionBox}>
                    <div className={styles.visionTitle}>DEĞERLERİMİZ</div>
                    <div className={styles.visionText}>
                        İş ortaklarımıza %100 şeffaflık sunmak ve ulaşılabilir bütçelerle sonuç odaklı
                        stratejiler üretmek. Bizim için başarı, firmanızın ve markanızın büyüme oranıdır.
                    </div>
                </div>
            </section>
        </div>
    );
}
