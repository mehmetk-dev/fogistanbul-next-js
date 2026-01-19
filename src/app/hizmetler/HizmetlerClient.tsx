"use client";
import Script from 'next/script';
import { servicesSchema } from '@/app/hizmetler/_data/hizmetlerData';
import {
  StickyHeroPanel,
  ServicesList,
  HizmetlerCTASection
} from '@/app/hizmetler/_components';
import styles from './HizmetlerClient.module.css';

const Hizmetler = () => {
  return (
    <main className={styles.servicesPage}>
      <Script
        id="hizmetler-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Hero & Sticky Layout Wrapper */}
      <div className={styles.heroStickyWrapper}>

        <div className={styles.layoutContainer}>
          <div className={styles.servicesGrid}>
            {/* Left: Sticky Content */}
            <StickyHeroPanel />

            {/* Right: Services List */}
            <ServicesList />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HizmetlerCTASection />
    </main>
  );
};

export default Hizmetler;
