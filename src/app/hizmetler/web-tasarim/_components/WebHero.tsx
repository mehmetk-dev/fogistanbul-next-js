/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from 'react';
import styles from './WebHero.module.css';

export default function WebHero() {
    const [scrolled, setScrolled] = useState(0);
    const [activeMode, setActiveMode] = useState<'vector' | 'layers' | 'grid'>('vector');
    
    // Playgrounds State
    // 1. Color Palettes
    const palettes = [
        { name: 'Fog Rose', bg: '#0b0b0f', primary: '#ed6d8f', text: '#ffffff', accent: '#3b3b4f' },
        { name: 'Nordic Slate', bg: '#1a2332', primary: '#78a2cc', text: '#f4f7f6', accent: '#2d3d52' },
        { name: 'Sunset Glow', bg: '#181115', primary: '#f68e5f', text: '#fff0eb', accent: '#2d1e25' },
        { name: 'Cyber Neon', bg: '#050a12', primary: '#00ffcc', text: '#ffffff', accent: '#112240' }
    ];
    const [paletteIndex, setPaletteIndex] = useState(0);

    // 2. Typography Pairings
    const fonts = [
        { name: 'Modern Sans', titleFont: 'var(--font-montserrat)', descFont: 'var(--font-space-grotesk)' },
        { name: 'Klasik Serif', titleFont: 'Georgia, serif', descFont: 'Times New Roman, serif' },
        { name: 'Kod / Mono', titleFont: '"JetBrains Mono", monospace', descFont: '"JetBrains Mono", monospace' }
    ];
    const [fontIndex, setFontIndex] = useState(0);

    // 3. Layout Grid Sim
    const [layoutMode, setLayoutMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

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
                    Site ziyaretçilerine kullanım kolaylığı sunan, ürün ve hizmetlerin satış
                    veya dönüşüm oranını artırmayı hedefleyen web siteleri tasarlıyoruz.
                </p>

                {/* Trust stats & metrics */}
                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>%100</span>
                        <span className={styles.statLabel}>Mobil Uyum</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>&lt; 1.2sn</span>
                        <span className={styles.statLabel}>Yüklenme</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>SEO</span>
                        <span className={styles.statLabel}>Dostu</span>
                    </div>
                </div>
            </div>

            {/* Premium Web Design Visual Switcher */}
            <div className={styles.visualContainer}>
                <div className={styles.glowBlob}></div>

                {/* Visual Canvas Area */}
                <div className={styles.canvasArea}>
                    {/* MODE 1: COLOR PALETTE GENERATOR */}
                    {activeMode === 'vector' && (
                        <div className={styles.paletteSandbox}>
                            <div className={styles.boxHeader}>Renk Paleti Seçimi</div>
                            
                            {/* Card Preview that changes colors */}
                            <div 
                                className={styles.colorCard} 
                                style={{ 
                                    backgroundColor: palettes[paletteIndex].bg,
                                    borderColor: palettes[paletteIndex].accent
                                }}
                            >
                                <span className={styles.colorName} style={{ color: palettes[paletteIndex].primary }}>
                                    {palettes[paletteIndex].name}
                                </span>
                                <h4 style={{ color: palettes[paletteIndex].text }}>Örnek Tasarım Başlığı</h4>
                                <p style={{ color: `${palettes[paletteIndex].text}99` }}>
                                    Renk uyumu web sitenizin kimliğini belirler.
                                </p>
                            </div>

                            <div className={styles.paletteControls}>
                                <button 
                                    className={styles.playBtn}
                                    onClick={() => setPaletteIndex((prev) => (prev + 1) % palettes.length)}
                                >
                                    <span className="material-symbols-outlined">palette</span>
                                    Renk Değiştir
                                </button>
                                <div className={styles.hexList}>
                                    <span style={{ color: palettes[paletteIndex].primary }}>{palettes[paletteIndex].primary}</span>
                                    <span style={{ color: palettes[paletteIndex].accent }}>{palettes[paletteIndex].accent}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* MODE 2: TYPOGRAPHY PAIRINGS */}
                    {activeMode === 'layers' && (
                        <div className={styles.fontSandbox}>
                            <div className={styles.boxHeader}>Tipografi Eşleşmesi</div>
                            
                            {/* Text preview that changes fonts */}
                            <div className={styles.fontPreviewArea}>
                                <h3 style={{ fontFamily: fonts[fontIndex].titleFont }}>
                                    Tipografi Sesimizdir.
                                </h3>
                                <p style={{ fontFamily: fonts[fontIndex].descFont }}>
                                    Doğru yazı tipleri, içeriğin okunabilirliğini artırır ve marka hissini yansıtır.
                                </p>
                            </div>

                            <div className={styles.fontTabs}>
                                {fonts.map((f, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.fontTabBtn} ${fontIndex === i ? styles.fontTabBtnActive : ''}`}
                                        onClick={() => setFontIndex(i)}
                                    >
                                        {f.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MODE 3: LAYOUT RESPONSIVENESS GRID SIM */}
                    {activeMode === 'grid' && (
                        <div className={styles.layoutSandbox}>
                            <div className={styles.boxHeader}>Duyarlı (Responsive) Izgara</div>
                            
                            {/* Layout preview area */}
                            <div className={`${styles.layoutGrid} ${styles[`grid_${layoutMode}`]}`}>
                                <div className={styles.layoutBlock}><span>1</span></div>
                                <div className={styles.layoutBlock}><span>2</span></div>
                                <div className={styles.layoutBlock}><span>3</span></div>
                            </div>

                            {/* Controls */}
                            <div className={styles.layoutSelector}>
                                <button 
                                    className={`${styles.layoutBtn} ${layoutMode === 'desktop' ? styles.layoutBtnActive : ''}`}
                                    onClick={() => setLayoutMode('desktop')}
                                >
                                    <span className="material-symbols-outlined">desktop_windows</span>
                                </button>
                                <button 
                                    className={`${styles.layoutBtn} ${layoutMode === 'tablet' ? styles.layoutBtnActive : ''}`}
                                    onClick={() => setLayoutMode('tablet')}
                                >
                                    <span className="material-symbols-outlined">tablet_mac</span>
                                </button>
                                <button 
                                    className={`${styles.layoutBtn} ${layoutMode === 'mobile' ? styles.layoutBtnActive : ''}`}
                                    onClick={() => setLayoutMode('mobile')}
                                >
                                    <span className="material-symbols-outlined">smartphone</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mode Selector Tabs */}
                <div className={styles.modeTabs}>
                    <button 
                        className={`${styles.tabBtn} ${activeMode === 'vector' ? styles.tabBtnActive : ''}`}
                        onClick={() => setActiveMode('vector')}
                    >
                        <span className="material-symbols-outlined">contrast</span>
                        Renk Paleti
                    </button>
                    <button 
                        className={`${styles.tabBtn} ${activeMode === 'layers' ? styles.tabBtnActive : ''}`}
                        onClick={() => setActiveMode('layers')}
                    >
                        <span className="material-symbols-outlined">text_fields</span>
                        Tipografi
                    </button>
                    <button 
                        className={`${styles.tabBtn} ${activeMode === 'grid' ? styles.tabBtnActive : ''}`}
                        onClick={() => setActiveMode('grid')}
                    >
                        <span className="material-symbols-outlined">view_quilt</span>
                        Ekran Modu
                    </button>
                </div>
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
