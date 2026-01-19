"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { schema } from '@/app/hizmetler/icerik-pazarlama/_data/icerikData';
import { ContentHero, ContentServices, ContentProcess, ContentCTA } from '@/app/hizmetler/icerik-pazarlama/_components';
import styles from './IcerikPazarlamaClient.module.css';

const IcerikPazarlamaClient = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={styles.contentPage}>
            <Script
                id="icerik-pazarlama-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <ContentHero />
            <ContentServices />
            <ContentProcess />
            <ContentCTA />
        </main>
    );
};

export default IcerikPazarlamaClient;
