"use client";
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroGrid}>
                {/* Left: Text */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.heroTitleBlock}>GELECEĞİ</span>
                        <span className={`${styles.heroTitleBlock} ${styles.heroTitleGray}`}>TAHMİN ETME.</span>
                        <span className={`${styles.heroTitleBlock} ${styles.heroTitleAccent}`}>ONU İNŞA ET.</span>
                    </h1>
                    <div className={styles.heroSubtitle}>
                        FOG İSTANBUL, MODERN MARKALAR İÇİN YENİ NESİL DİJİTAL ÇÖZÜMLER ÜRETİR.
                    </div>
                </div>

                {/* Right: Original CSS Cubes with Letters */}
                <div className={styles.heroVisual}>
                    <div className={styles.cubeScene}>
                        {/* Cube 1 (Bottom - G) */}
                        <div className={`${styles.cubeWrapper} ${styles.cubeWrapper1}`}>
                            <div className={styles.cube}>
                                <div className={`${styles.cubeFace} ${styles.faceFront}`}>G</div>
                                <div className={`${styles.cubeFace} ${styles.faceRight}`}>G</div>
                                <div className={`${styles.cubeFace} ${styles.faceLeft}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBack}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceTop}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBottom}`}></div>
                            </div>
                        </div>
                        {/* Cube 2 (Middle - O) */}
                        <div className={`${styles.cubeWrapper} ${styles.cubeWrapper2}`}>
                            <div className={styles.cube}>
                                <div className={`${styles.cubeFace} ${styles.faceFront}`}>O</div>
                                <div className={`${styles.cubeFace} ${styles.faceRight}`}>O</div>
                                <div className={`${styles.cubeFace} ${styles.faceLeft}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBack}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceTop}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBottom}`}></div>
                            </div>
                        </div>
                        {/* Cube 3 (Top - F) */}
                        <div className={`${styles.cubeWrapper} ${styles.cubeWrapper3}`}>
                            <div className={styles.cube}>
                                <div className={`${styles.cubeFace} ${styles.faceFront}`}>F</div>
                                <div className={`${styles.cubeFace} ${styles.faceRight}`}>F</div>
                                <div className={`${styles.cubeFace} ${styles.faceLeft}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBack}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceTop}`}></div>
                                <div className={`${styles.cubeFace} ${styles.faceBottom}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <button
                className={styles.scrollIndicator}
                onClick={() => window.scrollTo({ top: window.innerHeight - 30, behavior: 'smooth' })}
            >
                <span className={styles.scrollText}>KEŞFET</span>
                <span className={`material-symbols-outlined ${styles.scrollArrow}`}>keyboard_arrow_down</span>
            </button>
        </section>
    );
}
