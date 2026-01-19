"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { rotatingContent } from '@/app/_data/homeData';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);
    const [subtitleKey, setSubtitleKey] = useState(0);
    const isMobile = useIsMobile();

    // Memoize content to avoid recalculation
    const currentContent = useMemo(
        () => rotatingContent[currentIndex],
        [currentIndex]
    );

    // Memoize glitch handler
    const handleGlitch = useCallback(() => {
        setIsGlitching(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingContent.length);
            setSubtitleKey((prev) => prev + 1);
            setIsGlitching(false);
        }, 300);
    }, []);

    useEffect(() => {
        // Disable glitch animation on mobile for better performance
        if (isMobile) return;

        const interval = setInterval(handleGlitch, 3500);

        return () => clearInterval(interval);
    }, [isMobile, handleGlitch]);

    return (
        <section className={styles.heroSection}>

            {/* Background Image - Optimized with Next.js Image */}
            <div className={styles.backgroundWrapper}>
                {/* Gradient Overlay */}
                <div className={styles.gradientOverlay} />
                {/* Dark overlay for better text readability */}
                <div className={styles.darkOverlay} />
                {/* Abstract tech background - Optimized with blur placeholder */}
                <div className={styles.backgroundImage}>
                    <Image
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
                        alt=""
                        fill
                        priority
                        quality={75}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        className={styles.backgroundImageContent}
                    />
                </div>
            </div>

            <div className={styles.heroContainer}>
                {/* Badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    FOGİSTANBUL
                </div>

                {/* Main Title - FOCUS ON + Rotating Word */}
                <div className={styles.titleWrapper}>
                    {/* FOCUS ON - Static */}
                    <span className={styles.heroTitleStatic}>
                        FOCUS ON
                    </span>

                    {/* Rotating Word with Glitch Effect - Disabled on mobile */}
                    <div className="glitch-wrapper">
                        <h1
                            className={`glitch-text hero-glitch-text ${isGlitching && !isMobile ? 'glitching' : ''} ${isMobile ? styles.glitchTextMobile : ''}`}
                            data-text={currentContent.word}
                        >
                            {currentContent.word}
                        </h1>
                    </div>
                </div>

                {/* Subtitle - Changes with word */}
                <p
                    key={subtitleKey}
                    className={`fade-in-up ${styles.heroSubtitle}`}
                >
                    {currentContent.subtitle}
                </p>

                {/* Progress Dots */}
                <div className={styles.progressDots}>
                    {rotatingContent.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.progressDot} ${index === currentIndex ? styles.progressDotActive : styles.progressDotInactive}`}
                        />
                    ))}
                </div>

                {/* CTAs */}
                <div className={styles.ctaWrapper}>
                    <Link
                        href="/hizmetler"
                        className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
                        aria-label="Hizmetlerimizi keşfet"
                    >
                        Hizmetleri Keşfet
                        <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`} aria-hidden="true">arrow_forward</span>
                    </Link>
                    <Link
                        href="/iletisim"
                        className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}
                        aria-label="İletişime geç"
                    >
                        İletişime Geç
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                type="button"
                className={styles.scrollIndicatorWrapper}
                onClick={() => {
                    const section = document.getElementById('manifesto-section');
                    if (section) {
                        const isMobile = window.innerWidth <= 768;
                        const yOffset = isMobile ? 60 : -50;
                        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }}
                aria-label="Aşağı kaydır ve FOG İstanbul ile tanış"
            >
                {/* Text Label */}
                <span className={`fade-in-up ${styles.scrollIndicatorText}`}>
                    FOG İSTANBUL İLE TANIŞ
                </span>

                {/* Animated Arrow Button */}
                <div className={`${styles.scrollBtnInner} animate-bounce`} aria-hidden="true">
                    <span className={`material-symbols-outlined ${styles.scrollBtnIcon}`}>
                        keyboard_arrow_down
                    </span>
                </div>
            </button>
        </section>
    );
}
