"use client";
import Script from 'next/script';
import { schema } from '@/app/hizmetler/crm-otomasyon/_data/crmData';
import { CrmHero, CrmComparison, CrmStats, CrmWorkflow } from '@/app/hizmetler/crm-otomasyon/_components';
import styles from './CrmOtomasyonClient.module.css';

const CrmOtomasyonClient = () => {
    return (
        <main className={styles.crmPage}>
            <Script
                id="crm-otomasyon-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className={styles.pinkGlow}></div>

            <CrmHero />
            <CrmComparison />
            <CrmStats />
            <CrmWorkflow />
        </main>
    );
};

export default CrmOtomasyonClient;
