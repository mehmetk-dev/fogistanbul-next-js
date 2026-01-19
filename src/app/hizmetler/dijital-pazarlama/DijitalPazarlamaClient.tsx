"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/dijital-pazarlama/_data/dijitalPazarlamaData';
import { DigitalHero, DigitalProcess, DigitalServices, DigitalFunnel } from '@/app/hizmetler/dijital-pazarlama/_components';
import styles from './DijitalPazarlamaClient.module.css';

const DijitalPazarlamaClient = () => {
    return (
        <main className={styles.digitalPage}>
            <Script
                id="dijital-pazarlama-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className={styles.meshBg}></div>

            <DigitalHero />
            <DigitalProcess />
            <DigitalServices />
            <DigitalFunnel />
        </main>
    );
};

export default DijitalPazarlamaClient;
