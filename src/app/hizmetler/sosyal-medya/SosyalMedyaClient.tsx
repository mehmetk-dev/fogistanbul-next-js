"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/sosyal-medya/_data/sosyalMedyaData';
import { SocialHero, SocialPlatforms, SocialApproach, SocialCTA } from '@/app/hizmetler/sosyal-medya/_components';
import styles from './SosyalMedyaClient.module.css';

const SosyalMedyaClient = () => {
    return (
        <main className={styles.socialPage}>
            <Script
                id="sosyal-medya-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Background Effects */}
            <div className={styles.pinkGlow}></div>
            <div className={`${styles.pinkGlow} ${styles.pinkGlowBottom}`}></div>

            <SocialHero />
            <SocialPlatforms />
            <SocialApproach />
            <SocialCTA />
        </main>
    );
};

export default SosyalMedyaClient;
