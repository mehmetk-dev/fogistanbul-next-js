"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePageView } from '@/hooks/usePageView';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const pathname = usePathname();
    
    // Track page views for analytics
    usePageView();

    const servicesSubmenu = [
        { name: 'Dijital Pazarlama', path: '/hizmetler/dijital-pazarlama' },
        { name: 'Sosyal Medya', path: '/hizmetler/sosyal-medya' },
        { name: 'Web Tasarım', path: '/hizmetler/web-tasarim' },
        { name: 'Prodüksiyon', path: '/hizmetler/produksiyon' },
        { name: 'Reklam Yönetimi', path: '/hizmetler/reklam-yonetimi' },
        { name: 'İçerik Pazarlama', path: '/hizmetler/icerik-pazarlama' },
        { name: 'CRM & Otomasyon', path: '/hizmetler/crm-otomasyon' },
        { name: 'Basılı Medya', path: '/hizmetler/basili-medya' },
    ];

    useEffect(() => {
        // İlk yüklemede scroll pozisyonunu kontrol et
        const checkScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };
        
        // Sayfa yüklendiğinde kontrol et
        checkScroll();
        
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'unset';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) {
            const resetId = requestAnimationFrame(() => setActiveMobileSubmenu(null));
            return () => cancelAnimationFrame(resetId);
        }
    }, [isMenuOpen]);

    // Close mobile menu on resize > 1024px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    const navLinks = [
        { path: '/hakkimizda', label: 'Hakkımızda' },
        { path: '/hizmetler', label: 'Hizmetler', hasDropdown: true },
        { path: '/portfoy', label: 'Portföy' },
        { path: '/blog', label: 'Blog' },
        { path: '/iletisim', label: 'İletişim' },
    ];

    const isActive = (path: string) => pathname === path || (path === '/hizmetler' && pathname?.startsWith('/hizmetler'));

    // Keyboard navigation handlers
    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    const handleEscape = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // Focus management for mobile menu
    useEffect(() => {
        if (isMenuOpen) {
            const firstLink = document.querySelector(`.${styles.mobileNavLink}`) as HTMLElement;
            firstLink?.focus();
        }
    }, [isMenuOpen]);

    return (
        <header 
            className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
            role="banner"
        >
            <div className={styles.container}>
                {/* Logo */}
                <Link 
                    href="/" 
                    className={styles.logoLink}
                    aria-label="FOG İstanbul Ana Sayfa"
                >
                    <span className={styles.logoText} aria-hidden="true">
                        <span className={styles.logoTextRed}>FOG</span>
                        <span className={styles.logoTextWhite}>İstanbul</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav 
                    className={styles.desktopNav}
                    role="navigation"
                    aria-label="Ana Navigasyon"
                >
                    {navLinks.map((link) => (
                        <div
                            key={link.path}
                            className={styles.navItem}
                            onMouseEnter={() => link.hasDropdown && setIsServicesHovered(true)}
                            onMouseLeave={() => link.hasDropdown && setIsServicesHovered(false)}
                            onFocus={() => link.hasDropdown && setIsServicesHovered(true)}
                            onBlur={(e) => {
                                // Only close if focus is moving outside the nav item
                                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                    setIsServicesHovered(false);
                                }
                            }}
                        >
                            <Link
                                href={link.path}
                                className={`${styles.navLink} ${isActive(link.path) ? styles.navLinkActive : ''}`}
                                aria-current={isActive(link.path) ? 'page' : undefined}
                                aria-haspopup={link.hasDropdown ? 'true' : undefined}
                                aria-expanded={link.hasDropdown ? isServicesHovered : undefined}
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <span
                                        className={`material-symbols-outlined ${styles.dropdownIcon} ${isServicesHovered ? styles.dropdownIconOpen : ''}`}
                                        aria-hidden="true"
                                    >
                                        keyboard_arrow_down
                                    </span>
                                )}
                                {isActive(link.path) && (
                                    <span className={styles.activeIndicator} aria-hidden="true" />
                                )}
                            </Link>

                            {/* Desktop Dropdown Menu */}
                            {link.hasDropdown && (
                                <div 
                                    className={`${styles.dropdown} ${isServicesHovered ? styles.dropdownOpen : ''}`}
                                    role="menu"
                                    aria-label={`${link.label} alt menüsü`}
                                    aria-hidden={!isServicesHovered}
                                >
                                    <div className={styles.dropdownContent}>
                                        {servicesSubmenu.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                href={subItem.path}
                                                className={styles.dropdownLink}
                                                role="menuitem"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/iletisim"
                        className={styles.ctaButton}
                        aria-label="Teklif almak için iletişim sayfasına git"
                    >
                        Teklif Al <span className={`material-symbols-outlined ${styles.ctaButtonIcon}`} aria-hidden="true">arrow_forward</span>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={styles.mobileToggle}
                    aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
                >
                    <span className={`${styles.mobileToggleLine} ${isMenuOpen ? styles.mobileToggleLineTopOpen : ''}`} aria-hidden="true" />
                    <span className={`${styles.mobileToggleLine} ${styles.mobileToggleLineMiddle} ${isMenuOpen ? styles.mobileToggleLineMiddleHidden : ''}`} aria-hidden="true" />
                    <span className={`${styles.mobileToggleLine} ${isMenuOpen ? styles.mobileToggleLineBottomOpen : ''}`} aria-hidden="true" />
                </button>
            </div>

            {/* Mobile Fullscreen Menu Overlay */}
            <div 
                className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}
                aria-hidden={!isMenuOpen}
                onKeyDown={handleEscape}
            >
                <div className={styles.mobileOverlayDecoration} aria-hidden="true" />

                <nav 
                    className={styles.mobileNav}
                    id="mobile-navigation"
                    role="navigation"
                    aria-label="Mobil Navigasyon"
                >
                    {navLinks.map((link, index) => (
                        <div key={link.path} className={styles.mobileNavItem}>
                            <div className={styles.mobileNavItemWrapper}>
                                <Link
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`${styles.mobileNavLink} ${isMenuOpen ? styles.mobileNavLinkOpen : ''}`}
                                    style={{
                                        transitionDelay: `${index * 0.05}s`
                                    }}
                                    aria-current={isActive(link.path) && !link.hasDropdown ? 'page' : undefined}
                                >
                                    {isActive(link.path) && !link.hasDropdown && (
                                        <span className={styles.mobileNavLinkActiveDot} aria-hidden="true" />
                                    )}
                                    {link.label}
                                </Link>

                                {/* Mobile Toggle Button */}
                                {link.hasDropdown && (
                                    <button
                                        onClick={() => setActiveMobileSubmenu(prev => prev === link.path ? null : link.path)}
                                        className={`${styles.mobileSubmenuToggle} ${isMenuOpen ? styles.mobileSubmenuToggleOpen : ''} ${activeMobileSubmenu === link.path ? styles.mobileSubmenuToggleRotated : ''}`}
                                        style={{
                                            transitionDelay: `${index * 0.05}s`
                                        }}
                                        aria-label={`${link.label} alt menüsünü ${activeMobileSubmenu === link.path ? 'kapat' : 'aç'}`}
                                        aria-expanded={activeMobileSubmenu === link.path}
                                        aria-controls={`mobile-submenu-${link.path}`}
                                        onKeyDown={(e) => handleKeyDown(e, () => setActiveMobileSubmenu(prev => prev === link.path ? null : link.path))}
                                    >
                                        <span className="material-symbols-outlined" aria-hidden="true">keyboard_arrow_down</span>
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu - Collapsible */}
                            {link.hasDropdown && (
                                <div 
                                    className={`${styles.mobileSubmenu} ${activeMobileSubmenu === link.path ? styles.mobileSubmenuOpen : ''}`}
                                    id={`mobile-submenu-${link.path}`}
                                    role="menu"
                                    aria-hidden={activeMobileSubmenu !== link.path}
                                >
                                    {servicesSubmenu.map(subItem => (
                                        <Link
                                            key={subItem.path}
                                            href={subItem.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={styles.mobileSubmenuLink}
                                            role="menuitem"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/iletisim"
                        onClick={() => setIsMenuOpen(false)}
                        className={`${styles.mobileCtaButton} ${isMenuOpen ? styles.mobileCtaButtonOpen : ''}`}
                        style={{
                            transitionDelay: `${navLinks.length * 0.1}s`
                        }}
                        aria-label="Teklif almak için iletişim sayfasına git"
                    >
                        Hemen Teklif Al
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
