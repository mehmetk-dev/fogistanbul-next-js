"use client";
import Script from 'next/script';
import { portfolioSchema } from '@/app/portfoy/_data/portfoyData';
import { PortfoyHero, PortfoyCTA } from '@/app/portfoy/_components';
import styles from './PortfoyClient.module.css';

const Portfoy = () => {
    return (
        <main className={styles.portfolioPage}>
            <Script
                id="portfoy-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />

            {/* Hero Section */}
            <PortfoyHero />

            <section className={styles.preparingSection} aria-labelledby="portfolio-preparing-title">
                <span className={`material-symbols-outlined ${styles.preparingIcon}`} aria-hidden="true">
                    auto_awesome
                </span>
                <h2 id="portfolio-preparing-title">Portföyümüzü hazırlıyoruz</h2>
                <p>
                    Gerçek proje içeriklerimizi hazırlıyoruz. Her çalışmayı verilen hizmet,
                    hedef ve elde edilen sonuçlarla birlikte yayınlayacağız.
                </p>
            </section>

            {/* CTA Section */}
            <PortfoyCTA />
        </main>
    );
};

export default Portfoy;
