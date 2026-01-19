"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { schema, images } from '@/app/hizmetler/basili-medya/_data/basiliMedyaData';
import { BasiliMedyaHero, BasiliMedyaProcess, BasiliMedyaPortfolio, BasiliMedyaCTA } from '@/app/hizmetler/basili-medya/_components';
import styles from './BasiliMedyaClient.module.css';

const BasiliMedyaClient = () => {
    // Inject CSS variable for background image
    useEffect(() => {
        document.documentElement.style.setProperty('--catalog-bg', `url(${images.catalogMockup})`);
    }, []);

    return (
        <main className={styles.basiliMedyaPage}>
            <div className={styles.heroBgAnim}></div>

            <Script
                id="basili-medya-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <BasiliMedyaHero />
            <BasiliMedyaProcess />
            <BasiliMedyaPortfolio />
            <BasiliMedyaCTA />
        </main>
    );
};

export default BasiliMedyaClient;
