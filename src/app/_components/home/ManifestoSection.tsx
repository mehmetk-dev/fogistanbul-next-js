"use client";
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './ManifestoSection.module.css';

export default function ManifestoSection() {
    const isMobile = useIsMobile();

    return (
        <section
            id="manifesto-section"
            className={styles.manifestoSection}
        >
            {/* Background Decorations */}
            <div className={styles.backgroundDecoration1} />
            <div className={styles.backgroundDecoration2} />

            {/* Floating Elements - Disabled on mobile */}
            {!isMobile && (
                <>
                    <div className={`${styles.floatingElement1} animate-float`} />
                    <div className={`${styles.floatingElement2} animate-float ${styles.floatingElement2Reverse}`} />
                </>
            )}

            <div className={styles.container}>
                <div className={`${styles.grid} manifesto-grid`}>
                    {/* Left Side - Text Content */}
                    <div className="slide-in-left">
                        {/* Badge */}
                        <div className={styles.badge}>
                            <span className={`material-symbols-outlined ${styles.badgeIcon}`}>explore</span>
                            <span className={styles.badgeText}>Vizyon</span>
                        </div>

                        <h2 className={styles.heading}>
                            Biz Sadece Bir Ajans Değiliz, <br />
                            <span className={styles.headingHighlight}>Biz Bir Değişim Hareketiyiz.</span>
                        </h2>

                        <p className={styles.paragraph}>
                            Dijital dünyada sıradanlığa yer yok. Her marka bir hikaye anlatır, ancak sadece cesur olanlar
                            dinlenir. Biz, <strong className={styles.paragraphStrong}>veriyi sanatla</strong>, <strong className={styles.paragraphStrong}>teknolojiyi duygularla</strong> birleştiriyoruz.
                        </p>
                        <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
                            Global standartlarda işler üretmek için buradayız. Sizin vizyonunuz, bizim tutkumuzla
                            birleştiğinde ortaya çıkan sonuç: <strong className={styles.paragraphStrongPrimary}>Kusursuzluk.</strong>
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/hakkimizda"
                            className={styles.ctaButton}
                        >
                            Hikayemizi Keşfet
                            <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`}>arrow_forward</span>
                        </Link>
                    </div>

                    {/* Right Side - Creative Visual Showcase */}
                    <div className={`slide-in-right ${styles.visualWrapper}`}>
                        {/* Central Glowing Orb - Reduced animation on mobile */}
                        <div className={`central-orb ${styles.centralOrb} ${isMobile ? styles.centralOrbMobile : ''}`}>
                            {!isMobile && (
                                <div className={styles.orbRing} />
                            )}
                            <div className={styles.orbContent}>
                                <span className={styles.orbTextFog}>FOG</span>
                                <span className={styles.orbTextIstanbul}>İstanbul</span>
                            </div>
                        </div>

                        {/* Orbiting Icons */}
                        {!isMobile ? (
                            <>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop1}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop1}`}>auto_awesome</span>
                                </div>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop2}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop2}`}>palette</span>
                                </div>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop3}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop3}`}>trending_up</span>
                                </div>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop4}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop4}`}>bolt</span>
                                </div>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop5}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop5}`}>insights</span>
                                </div>
                                <div className={`orbit-icon ${styles.orbitIcon} ${styles.orbitIconDesktop6}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerDesktop6}`}>group</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile1}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile1}`}>auto_awesome</span>
                                </div>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile2}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile}`}>palette</span>
                                </div>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile3}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile}`}>trending_up</span>
                                </div>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile4}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile}`}>bolt</span>
                                </div>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile5}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile}`}>insights</span>
                                </div>
                                <div className={`${styles.orbitIcon} ${styles.orbitIconMobile6}`}>
                                    <span className={`material-symbols-outlined ${styles.orbitIconInner} ${styles.orbitIconInnerMobile}`}>group</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
