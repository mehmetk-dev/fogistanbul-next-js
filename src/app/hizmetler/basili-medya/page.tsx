import { Metadata } from 'next';
import BasiliMedyaClient from './BasiliMedyaClient';

export const metadata: Metadata = {
    title: 'Katalog ve Kurumsal Baskı Tasarımı | FOG İstanbul',
    description: 'Katalog, broşür, kurumsal kimlik ve ambalaj tasarımı. Markanızı dijitalden fiziğe taşıyan yaratıcı baskı çözümleri.',
    keywords: ['baskı tasarım', 'katalog tasarım', 'broşür tasarım', 'kurumsal kimlik', 'ambalaj tasarım', 'print design', 'brand identity'],
    openGraph: {
        title: 'Katalog ve Kurumsal Baskı Tasarımı | FOG İstanbul',
        description: 'Katalog, broşür, kurumsal kimlik ve ambalaj tasarımı. Markanızı dijitalden fiziğe taşıyan yaratıcı baskı çözümleri.',
        url: '/hizmetler/basili-medya',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Basılı Medya',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Katalog ve Kurumsal Baskı Tasarımı | FOG İstanbul',
        description: 'Katalog, broşür, kurumsal kimlik ve ambalaj tasarımı. Markanızı dijitalden fiziğe taşıyan yaratıcı baskı çözümleri.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/hizmetler/basili-medya',
    },
};

export default function BasiliMedyaPage() {
    return <BasiliMedyaClient />;
}
