import { Metadata } from 'next';
import IletisimClient from './IletisimClient';

export const metadata: Metadata = {
    title: 'İletişim | FOG İstanbul',
    description: 'Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz. Ücretsiz teklif alın.',
    keywords: ['iletişim', 'teklif al', 'fog istanbul iletişim', 'dijital ajans iletişim', 'istanbul ajans'],
    openGraph: {
        title: 'İletişim | FOG İstanbul',
        description: 'Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz.',
        url: '/iletisim',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul İletişim',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'İletişim | FOG İstanbul',
        description: 'Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/iletisim',
    },
};

export default function Iletisim() {
    return <IletisimClient />;
}
