/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from 'react';
import styles from './WebHero.module.css';

export default function WebHero() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.heroSection}>
            {/* Background Image with Parallax */}
            <div className={styles.backgroundImage} style={{ transform: `translateY(${scrolled * 0.2}px)` }}>
                <img src="/assets/services/web-hero.webp" alt="Abstract Background" loading="lazy" />
            </div>

            {/* Gradient Fade */}
            <div className={styles.gradientFade} />

            <div className={styles.content}>
                <div className={styles.badge}>7/24 AÇIK MAĞAZANIZ</div>
                <h1 className={styles.title}>
                    Müşteri <span className={styles.titleHighlight}>Getiren</span><br />Tasarımlar.
                </h1>
                <p className={styles.description}>
                    Sadece güzel görünen değil, ziyaretçiyi müşteriye dönüştüren web siteleri kuruyoruz.
                </p>
            </div>

            {/* Scroll Button */}
            <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className={styles.scrollButton}
            >
                <div style={{
                    background: '#1a1a1a',
                    padding: '5px 8px',
                    borderBottom: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }}></span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></span>
                </div>
                <div className={styles.scrollButtonInner}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem', color: '#ed6d8f', animation: 'bounce 2s infinite' }}>expand_more</span>
                </div>
            </button>
        </section>
    );
}
