"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/produksiyon/_data/produksiyonData';
import { ProductionHero, ProductionServices, ProductionTools, ProductionCTA } from '@/app/hizmetler/produksiyon/_components';
import styles from './ProduksiyonClient.module.css';

const ProduksiyonClient = () => {
    return (
        <main className={styles.productionPage}>
            <Script
                id="produksiyon-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <ProductionHero />
            <ProductionServices />
            <ProductionTools />
            <ProductionCTA />
        </main>
    );
};

export default ProduksiyonClient;
