"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/reklam-yonetimi/_data/reklamData';
import { AdsHero, AdsPlatforms, AdsBudget, AdsPerformance } from '@/app/hizmetler/reklam-yonetimi/_components';
import styles from './ReklamYonetimiClient.module.css';

const ReklamYonetimiClient = () => {
    return (
        <main className={styles.adsPage}>
            <Script
                id="reklam-yonetimi-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className={styles.pinkGlow}></div>

            <AdsHero />
            <AdsPlatforms />
            <AdsBudget />
            <AdsPerformance />
        </main>
    );
};

export default ReklamYonetimiClient;
