"use client";
import Script from 'next/script';
import { useState } from 'react';
import { contactSchema } from '@/app/iletisim/_data/iletisimData';
import { ContactHero, ContactForm, SuccessModal } from '@/app/iletisim/_components';
import styles from './IletisimClient.module.css';

const Iletisim = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleScrollToForm = () => {
        const el = document.getElementById('contact-form-section');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 30;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.main}>
            <Script
                id="contact-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            {/* Atmospheric Background */}
            <div className={styles.fogBg}>
                <div className={styles.spotlightFix}></div>
                <div className={`${styles.fogLayer} ${styles.fogLayer1}`}></div>
                <div className={`${styles.fogLayer} ${styles.fogLayer2}`}></div>
                <div className={styles.noiseOverlay}></div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.surrealLayout}>
                    {/* Left: Text Content */}
                    <ContactHero onScrollToForm={handleScrollToForm} />

                    {/* Right: Contact Form */}
                    <ContactForm onSuccess={() => setShowSuccess(true)} />
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
        </main>
    );
};

export default Iletisim;
