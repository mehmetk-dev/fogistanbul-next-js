/* eslint-disable @next/next/no-img-element */
"use client";
import { approachItems } from '@/app/hizmetler/sosyal-medya/_data/sosyalMedyaData';
import styles from './SocialApproach.module.css';

export default function SocialApproach() {
    return (
        <section className={styles.approachSection}>
            <div className={styles.backgroundGlow}></div>
            <div className={styles.rotatingRing}></div>

            <div className={styles.approachGrid}>
                {/* Left: Headline & Badge */}
                <div className={styles.leftColumn}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>
                            STRATEJİK YOL HARİTASI
                        </span>
                        <h2 className={styles.heading}>
                            BÜTÜNCÜL <br />
                            <span className={styles.headingHighlight}>YAKLAŞIM.</span>
                        </h2>
                        <div className={styles.divider}></div>
                    </div>

                    <p className={styles.description}>
                        Sadece paylaşım yapmak değil, yaşayan bir ekosistem kurmak.
                        Markanızın dijitaldeki her adımını birbirini besleyen bir döngüye dönüştürüyoruz.
                    </p>
                    <p className={styles.descriptionSecondary}>
                        Dijital kaosun içinde kaybolmanıza izin vermiyoruz. Veri odaklı analizler ve yaratıcı içerik
                        stratejileriyle, markanızı sadece görünür kılmıyor, aynı zamanda hedef kitlenizle
                        duygusal bağ kuran akılda kalıcı bir deneyime dönüştürüyoruz.
                    </p>
                </div>

                {/* Right: Service Summaries */}
                <div className={styles.rightColumn}>
                    {approachItems.map((item, i) => (
                        <div key={i} className={styles.approachBox}>
                            {/* Hover Glow Effect */}
                            <div className={`${styles.boxGlow} ${i === 0 ? styles.boxGlowPink : styles.boxGlowBlue}`}></div>

                            <div className={styles.logosContainer}>
                                {item.logos.length === 3 ? (
                                    <>
                                        <div className={styles.logosRow}>
                                            <img src={`/assets/social-logos/${item.logos[0]}`} alt="Social" className={styles.logoImg} />
                                            <img src={`/assets/social-logos/${item.logos[1]}`} alt="Social" className={styles.logoImg} />
                                        </div>
                                        <img src={`/assets/social-logos/${item.logos[2]}`} alt="Social" className={styles.logoImg} />
                                    </>
                                ) : (
                                    item.logos.map((logo, l) => (
                                        <img key={l} src={`/assets/social-logos/${logo}`} alt="Social" className={styles.logoImg} />
                                    ))
                                )}
                            </div>
                            <div className={styles.approachContent}>
                                <h3 className={styles.approachTitle}>{item.title}</h3>
                                <p className={styles.approachDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
