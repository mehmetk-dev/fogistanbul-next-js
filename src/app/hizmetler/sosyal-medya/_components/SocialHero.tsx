/* eslint-disable @next/next/no-img-element */
"use client";
import { heroFeatures, heroMobileFeatures } from '@/app/hizmetler/sosyal-medya/_data/sosyalMedyaData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './SocialHero.module.css';

export default function SocialHero() {
    const isMobile = useIsMobile();

    const handleScroll = () => {
        const target = document.querySelector('.platform-section');
        if (target) {
            const offset = 120;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.socialHeroSection}>
            {isMobile ? (
                /* === MOBILE LAYOUT === */
                <div className={styles.mobileHero}>
                    {/* 1. Title (Top) */}
                    <div className={styles.mobileTitleBlock}>
                        <h1>MARKANI <span className={styles.highlightText}>BÜYÜT.</span></h1>
                        <p>Sosyal medya yönetimi ile markanızın dijital varlığını güçlendiriyoruz.</p>
                    </div>

                    {/* 2. Phone (Middle) */}
                    <div className={styles.mobilePhoneContainer}>
                        <img src="/assets/services/social-phone-mockup.webp" alt="Fog Social App" className={styles.mobilePhoneImg} />
                    </div>

                    {/* 3. Cards Grid */}
                    <div className={styles.mobileCardsGrid}>
                        {heroMobileFeatures.map((item, i) => (
                            <div key={i} className={styles.mobileCard}>
                                <span className={`material-symbols-outlined ${styles.mobileCardIcon}`}>{item.icon}</span>
                                <h3 className={styles.mobileCardTitle}>{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* 4. Scroll Button (Bottom) */}
                    <div className={styles.mobileScrollBtn} onClick={handleScroll}>
                        <span className={`material-symbols-outlined ${styles.mobileScrollBtnIcon}`}>expand_more</span>
                        <span className={styles.mobileScrollBtnText}>KEŞFET</span>
                    </div>
                </div>
            ) : (
                /* === DESKTOP LAYOUT === */
                <>
                    {/* HEADLINE */}
                    <div className={styles.heroContent}>
                        <div className={styles.titleBgGlow}></div>
                        <h1 className={styles.heroTitle}>
                            MARKANI <span className={styles.highlightText}>BÜYÜT.</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Sosyal medya yönetimi ile markanızın dijital varlığını güçlendiriyor,
                            hedef kitlenizle etkileşimi artırıyoruz.
                        </p>
                    </div>

                    {/* 3-Column Feature Grid */}
                    <div className={styles.heroFeatureGrid}>
                        {/* LEFT FEATURES */}
                        <div className={`${styles.featureCol} ${styles.featureColLeft}`}>
                            {heroFeatures.filter(f => f.position === 'left').map((item, i) => (
                                <div key={i} className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <span className={`material-symbols-outlined ${styles.featureIconInner}`}>{item.icon}</span>
                                    </div>
                                    <div className={styles.featureText}>
                                        <h3 className={styles.featureTextTitle}>{item.title}</h3>
                                        <p className={styles.featureTextDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CENTER PHONE IMAGE */}
                        <div className={styles.centerPhone}>
                            <div className={styles.phoneGlow}></div>
                            <img src="/assets/services/social-phone-mockup.webp" alt="Fog Social App" className={styles.phoneImg} />
                        </div>

                        {/* RIGHT FEATURES */}
                        <div className={`${styles.featureCol} ${styles.featureColRight}`}>
                            {heroFeatures.filter(f => f.position === 'right').map((item, i) => (
                                <div key={i} className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <span className={`material-symbols-outlined ${styles.featureIconInner}`}>{item.icon}</span>
                                    </div>
                                    <div className={styles.featureText}>
                                        <h3 className={styles.featureTextTitle}>{item.title}</h3>
                                        <p className={styles.featureTextDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={styles.unifiedScrollIndicator} onClick={handleScroll}>
                        <div className={styles.socialScrollRing}>
                            <span className={`material-symbols-outlined ${styles.socialScrollRingInner}`}>swipe_vertical</span>
                        </div>
                        <span className={styles.scrollHint}>KEŞFET</span>
                    </div>
                </>
            )}
        </section>
    );
}
