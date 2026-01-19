"use client";
import Script from 'next/script';
import { aboutSchema } from '@/app/hakkimizda/_data/hakkimizdaData';
import {
  HeroSection,
  ManifestoSection,
  ProcessSection,
  TeamSection,
  MediaSection,
  FooterCTA
} from '@/app/hakkimizda/_components';
import styles from './HakkimizdaClient.module.css';

const Hakkimizda = () => {
  return (
    <main className={styles.aboutPage}>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className={styles.pinkGlow}></div>

      {/* Page Sections */}
      <HeroSection />
      <ManifestoSection />
      <ProcessSection />
      <TeamSection />
      <MediaSection />
      <FooterCTA />
    </main>
  );
};

export default Hakkimizda;
