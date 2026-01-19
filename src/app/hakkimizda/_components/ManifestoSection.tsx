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
                    Karmaşık terimlerle kafanızı karıştırmıyoruz. İster bir KOBİ olun, ister büyük bir marka; sizin dilinizden konuşan, bütçenizi koruyan ve işinizi büyüten <span className={styles.highlight}>şeffaf bir ekibiz.</span>
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
                        Her ölçekten markanın, dijital dünyada &quot;büyük oyuncularla&quot; aynı kalitede
                        temsil edilmesini sağlamak ve teknolojiyi herkes için erişilebilir kılmak.
                    </div>
                </div>
                <div className={styles.visionBox}>
                    <div className={styles.visionTitle}>MİSYONUMUZ</div>
                    <div className={styles.visionText}>
                        Karmaşık süreçleri basitleştirmek. Bütçenizi aşan değil, size kazandıran;
                        estetik ve fonksiyonu birleştiren akıllı çözümler üretmek.
                    </div>
                </div>
                {/* Added 3rd Column to Fill Space */}
                <div className={styles.visionBox}>
                    <div className={styles.visionTitle}>DEĞERLERİMİZ</div>
                    <div className={styles.visionText}>
                        %100 Şeffaflık, ulaşılabilir bütçeler ve sonuç odaklı stratejiler.
                        Bizim için başarı, sizin büyüme oranınızdır.
                    </div>
                </div>
            </section>
        </div>
    );
}
