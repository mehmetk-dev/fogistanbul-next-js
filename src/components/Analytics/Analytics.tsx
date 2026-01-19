'use client';

import Script from 'next/script';

/**
 * Analytics Component
 * 
 * Google Analytics veya Vercel Analytics entegrasyonu için.
 * Environment variable ile kontrol edilir.
 * 
 * Backend Analogy: Spring Boot'da Actuator metrics gibi
 * - Production'da aktif
 * - Development'ta pasif (opsiyonel)
 */
export default function Analytics() {
    // Google Analytics ID (opsiyonel - env'den alınır)
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    // Sadece production'da ve GA ID varsa yükle
    if (process.env.NODE_ENV !== 'production' || !gaId) {
        return null;
    }

    return (
        <>
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
}

/**
 * Track page view manually (for client-side navigation)
 */
export function trackPageView(url: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
            page_path: url,
        });
    }
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}
