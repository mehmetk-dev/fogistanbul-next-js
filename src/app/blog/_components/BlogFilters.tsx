"use client";
import { useState } from 'react';
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
                <div className={`${styles.mobileSearchOverlay} ${isMobileSearchOpen ? styles.mobileSearchOverlayOpen : ''}`} aria-hidden={!isMobileSearchOpen}>
                    <label htmlFor="mobile-blog-search" className="sr-only">Blog yazılarında ara</label>
                    <input
                        id="mobile-blog-search"
                        type="text"
                        placeholder="Yazılarda ara..."
                        value={searchTerm}
                        autoFocus={isMobileSearchOpen}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className={styles.mobileSearchInput}
                        aria-label="Blog yazılarında ara"
                    />
                    <button
                        onClick={() => {
                            setIsMobileSearchOpen(false);
                            onSearchChange('');
                        }}
                        className={styles.mobileSearchClose}
                        aria-label="Aramayı kapat"
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">close</span>
                    </button>
                </div>
            </div>

            {/* Gradient Fade to Soften Edge */}
            <div className={styles.gradientFade} />
        </section>
    );
}
