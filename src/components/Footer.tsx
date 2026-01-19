"use client";
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>

                {/* 1. BRAND */}
                <div className={`${styles.brandCol} ${styles.footerCol}`}>
                    <div className={styles.logoWrapper}>
                        <Link href="/" className={styles.logoLink} aria-label="FOG İstanbul Ana Sayfa">
                            <span className={styles.logoText} aria-hidden="true">
                                <span className={styles.logoTextRed}>FOG</span>
                                <span className={styles.logoTextWhite}>İstanbul</span>
                            </span>
                        </Link>
                    </div>
                    <p className={styles.brandDesc}>
                        Markanızın hikayesini yazar, dijital dünyada sahneye koyarız.
                        Strateji, Tasarım ve Teknoloji tek çatı altında.
                    </p>
                    <div className={styles.socialRow} role="list">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/fogistanbul/" className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="Instagram hesabımızı ziyaret edin (yeni sekmede açılır)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/profile.php?id=61582900602889" className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="Facebook sayfamızı ziyaret edin (yeni sekmede açılır)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a href="https://x.com/fogistanbul" className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) hesabımızı ziyaret edin (yeni sekmede açılır)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Mail */}
                        <a href="mailto:iletisim@fogistanbul.com" className={styles.socialIcon} aria-label="E-posta gönder: iletisim@fogistanbul.com">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 2. HIZLI ERİŞİM */}
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>MENÜ</div>
                    <nav aria-label="Hızlı erişim menüsü">
                        <ul className={styles.footerLinks}>
                            <li><Link href="/">Ana Sayfa</Link></li>
                            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link href="/portfoy">Projeler</Link></li>
                            <li><Link href="/iletisim">İletişim</Link></li>
                            <li><Link href="/hizmetler">Hizmetler</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* 3. HİZMETLER */}
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>HİZMETLER</div>
                    <nav aria-label="Hizmetler menüsü">
                        <ul className={styles.footerLinks}>
                            <li><Link href="/hizmetler/web-tasarim">Web Tasarım</Link></li>
                            <li><Link href="/hizmetler/sosyal-medya">Sosyal Medya</Link></li>
                            <li><Link href="/hizmetler/produksiyon">Prodüksiyon</Link></li>
                            <li><Link href="/hizmetler/reklam-yonetimi">Reklam Yönetimi</Link></li>
                            <li><Link href="/hizmetler/icerik-pazarlama">İçerik & SEO</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* 4. İLETİŞİM */}
                <div className={styles.footerCol}>
                    <div className={styles.footerHeading}>İLETİŞİM</div>
                    <div className={styles.contactItem}>
                        <span className={`material-symbols-outlined ${styles.contactIcon}`} aria-hidden="true">location_on</span>
                        <address style={{ fontStyle: 'normal' }}>
                            Levent, Büyükdere Cd. No:123<br />Şişli / İstanbul
                        </address>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={`material-symbols-outlined ${styles.contactIcon}`} aria-hidden="true">mail</span>
                        <a href="mailto:iletisim@fogistanbul.com" className={styles.contactLink} aria-label="E-posta gönder: iletisim@fogistanbul.com">iletisim@fogistanbul.com</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={`material-symbols-outlined ${styles.contactIcon}`} aria-hidden="true">call</span>
                        <a href="tel:+902125550123" className={styles.contactLink} aria-label="Telefon ara: +90 (212) 555 01 23">+90 (212) 555 01 23</a>
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className={styles.footerBottom}>
                <div>© 2025 FOG İstanbul. Tüm Hakları Saklıdır.</div>
                <div className={styles.footerBottomLinks}>
                    <Link href="/gizlilik" className={styles.footerBottomLink}>Gizlilik</Link>
                    <Link href="/kullanim" className={styles.footerBottomLink}>Şartlar</Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
