"use client";
import Link from 'next/link';
import { services } from '@/app/_data/homeData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
    const isMobile = useIsMobile();

    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={`fade-in-up ${styles.header}`}>
                    <span className={styles.badge}>
                        Neler Yapıyoruz?
                    </span>
                    <h3 className={styles.heading}>
                        Dijital İhtiyaçlarınız İçin 360° Çözümler
                    </h3>
                </div>

                {/* Ultra Premium Service Cards Grid */}
                <div className={`${styles.grid} service-grid`}>
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            className={`premium-service-card scale-in stagger-${(index % 4) + 1} ${styles.serviceCard} ${isMobile ? styles.serviceCardMobile : ''} ${!isMobile ? styles.serviceCardAnimated : ''}`}
                            style={!isMobile ? {
                                animationDelay: `${index * 0.5}s`
                            } : undefined}
                        >
                            {/* Inner Card */}
                            <div className={styles.cardInner}>
                                {/* Shine Effect */}
                                <div className={styles.shineEffect} />

                                {/* Floating Particles - Disabled on mobile */}
                                {!isMobile && (
                                    <>
                                        <div className={`${styles.particle} ${styles.particle1}`} />
                                        <div className={`${styles.particle} ${styles.particle2}`} />
                                    </>
                                )}

                                {/* Gradient Glow Background */}
                                <div className={styles.gradientGlow} />

                                {/* Icon with Glow Ring */}
                                <div className={styles.iconWrapper}>
                                    {/* Pulse Ring */}
                                    <div className={styles.pulseRing} />
                                    <span className={`material-symbols-outlined ${styles.icon}`}>{service.icon}</span>
                                </div>

                                {/* Title */}
                                <h4 className={styles.title}>
                                    {service.title}
                                </h4>

                                {/* Tagline with gradient text effect */}
                                <p className={styles.tagline}>
                                    {service.tagline}
                                </p>

                                {/* Bottom Arrow with Line */}
                                <div className={styles.bottomArrow}>
                                    <span className={styles.arrowLine} />
                                    Detaylar
                                    <span className={`material-symbols-outlined ${styles.arrowIcon}`}>arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className={styles.viewAllWrapper}>
                    <Link
                        href="/hizmetler"
                        className={styles.viewAllButton}
                    >
                        Tüm Hizmetleri Gör
                        <span className={`material-symbols-outlined ${styles.viewAllButtonArrow}`}>
                            arrow_right_alt
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
