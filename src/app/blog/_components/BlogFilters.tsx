"use client";
import { useState, useEffect } from 'react';
import { GhostTag } from '@/lib/ghost';
import styles from './BlogFilters.module.css';

interface BlogFiltersProps {
    tags: GhostTag[];
    activeTag: string | null;
    searchTerm: string;
    onTagChange: (slug: string | null) => void;
    onSearchChange: (term: string) => void;
}

export default function BlogFilters({ tags, activeTag, searchTerm, onTagChange, onSearchChange }: BlogFiltersProps) {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMobileSearchOpen(false);
            setIsClosing(false);
        }, 300); // Animation duration
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isMobileSearchOpen && !isClosing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileSearchOpen, isClosing]);

    return (
        <section className={`stagger-4 ${styles.filtersSection}`}>
            <div className={styles.sectionLabel}>
                <span>Kategorilerimiz</span>
            </div>

            <div className={styles.filtersContainer}>
                {/* TAGS LIST */}
                <div className={`${styles.filterScroll} ${isMobileSearchOpen ? styles.filterScrollHidden : ''}`} role="group" aria-label="Blog kategorileri">
                    <button
                        className={`${styles.filterBtn} ${activeTag === null ? styles.filterBtnActive : ''}`}
                        onClick={() => onTagChange(null)}
                        aria-pressed={activeTag === null}
                        aria-label="Tüm blog yazılarını göster"
                    >
                        Tümü
                    </button>

                    {tags.map(tag => (
                        <button
                            key={tag.id}
                            className={`${styles.filterBtn} ${activeTag === tag.slug ? styles.filterBtnActive : ''}`}
                            onClick={() => onTagChange(tag.slug)}
                            aria-pressed={activeTag === tag.slug}
                            aria-label={`${tag.name} kategorisindeki yazıları göster`}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>

                {/* DESKTOP SEARCH */}
                <div className={styles.desktopSearch}>
                    <label htmlFor="blog-search" className="sr-only">Blog yazılarında ara</label>
                    <input
                        id="blog-search"
                        type="text"
                        placeholder="Ara..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className={styles.searchInput}
                        aria-label="Blog yazılarında ara"
                    />
                    <span className={`material-symbols-outlined ${styles.searchIcon}`} aria-hidden="true">
                        search
                    </span>
                </div>

                {/* MOBILE SEARCH TRIGGER BUTTON */}
                <button
                    className={styles.mobileSearchBtn}
                    onClick={() => setIsMobileSearchOpen(true)}
                    aria-label="Arama yap"
                    aria-expanded={isMobileSearchOpen}
                >
                    <span className="material-symbols-outlined" aria-hidden="true">search</span>
                </button>

                {/* MOBILE SEARCH OVERLAY */}
                {(isMobileSearchOpen || isClosing) && (
                    <div 
                        className={`${styles.mobileSearchOverlay} ${isMobileSearchOpen && !isClosing ? styles.mobileSearchOverlayOpen : ''} ${isClosing ? styles.mobileSearchOverlayClosing : ''}`} 
                        aria-hidden={!isMobileSearchOpen}
                        onClick={handleClose}
                    >
                        <div 
                            className={styles.mobileSearchHeader}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <label htmlFor="mobile-blog-search" className="sr-only">Blog yazılarında ara</label>
                            <input
                                id="mobile-blog-search"
                                type="text"
                                placeholder="Yazılarda ara..."
                                value={searchTerm}
                                autoFocus={isMobileSearchOpen && !isClosing}
                                onChange={(e) => onSearchChange(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleClose();
                                    }
                                }}
                                className={styles.mobileSearchInput}
                                aria-label="Blog yazılarında ara"
                            />
                            <button
                                onClick={handleClose}
                                className={styles.mobileSearchSubmit}
                                aria-label="Ara"
                            >
                                <span className="material-symbols-outlined" aria-hidden="true">search</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Gradient Fade to Soften Edge */}
            <div className={styles.gradientFade} />
        </section>
    );
}
