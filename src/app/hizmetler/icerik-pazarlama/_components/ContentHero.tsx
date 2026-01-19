/* eslint-disable @next/next/no-img-element */
"use client";
import { heroNodes, heroLogo } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import styles from './ContentHero.module.css';

export default function ContentHero() {
    const scrollToServices = () => {
        const el = document.getElementById('services-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.heroSection}>
            {/* Text Content */}
            <div className={styles.heroText}>
                <h1 className={styles.title}>
                    Markanız İçin <br />
                    <span className={styles.textGradient}>Stratejik İçerikler.</span>
                </h1>

                <p className={styles.description}>
                    Arama motorlarında görünür olun, sosyal medyada etkileşim yaratın.
                    Web siteniz ve dijital kanallarınız için profesyonel içerik üretimi hizmetleri.
                </p>
            </div>

            {/* SCROLL DOWN BUTTON */}
            <div className={styles.heroScrollBtn} onClick={scrollToServices}>
                <span className={styles.scrollBtnText}>AŞAĞI KAYDIR</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>

            {/* Hero Visual */}
            <div className={styles.heroVisual}>
                <div className={styles.logoContainer}>
                    <img src={heroLogo} alt="FOG" className={styles.logoImage} />
                </div>

                {/* Orbiting Elements */}
                {heroNodes.map((node, i) => (
                    <div key={i} className={`${styles.contentNode} ${styles[node.className]}`}>
                        <div className={styles.nodeIcon}>
                            <span className="material-symbols-outlined">{node.icon}</span>
                        </div>
                        <div className={styles.nodeContent}>
                            <div className={styles.nodeTitle}>{node.title}</div>
                            <div className={styles.nodeSub}>{node.sub}</div>
                        </div>
                    </div>
                ))}

                {/* Connecting Lines (SVG) - Desktop */}
                <svg className={styles.desktopLines}>
                    <line x1="50%" y1="50%" x2="70%" y2="18%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="70%" y2="82%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="30%" y2="18%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="30%" y2="82%" className={styles.line} />
                </svg>

                {/* Connecting Lines (SVG) - Mobile */}
                <svg className={styles.mobileLines}>
                    <line x1="50%" y1="50%" x2="15%" y2="15%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="85%" y2="15%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="15%" y2="85%" className={styles.line} />
                    <line x1="50%" y1="50%" x2="85%" y2="85%" className={styles.line} />
                </svg>
            </div>
        </section>
    );
}
