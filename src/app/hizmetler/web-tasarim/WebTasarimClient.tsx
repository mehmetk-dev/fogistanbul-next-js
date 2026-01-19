"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/web-tasarim/_data/webTasarimData';
import { WebHero, WebProcess, WebSolutions, WebCTA } from '@/app/hizmetler/web-tasarim/_components';
import styles from './WebTasarimClient.module.css';

const WebTasarimClient = () => {
    return (
        <main className={styles.webPage}>
            <Script
                id="web-tasarim-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <WebHero />
            <WebProcess />
            <WebSolutions />
            <WebCTA />
        </main>
    );
};

export default WebTasarimClient;
