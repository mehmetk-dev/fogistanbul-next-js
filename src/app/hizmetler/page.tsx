import { Metadata } from 'next';
import HizmetlerClient from './HizmetlerClient';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | FOG İstanbul',
    description: 'FOG İstanbul\'un sunduğu dijital pazarlama, web tasarım, sosyal medya yönetimi, içerik pazarlama, CRM otomasyon ve prodüksiyon hizmetleri.',
    keywords: ['dijital pazarlama', 'web tasarım', 'sosyal medya yönetimi', 'içerik pazarlama', 'CRM', 'prodüksiyon', 'basılı medya', 'reklam yönetimi'],
    openGraph: {
        title: 'Hizmetlerimiz | FOG İstanbul',
        description: 'FOG İstanbul\'un sunduğu dijital pazarlama, web tasarım ve prodüksiyon hizmetleri.',
        url: '/hizmetler',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Hizmetlerimiz',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hizmetlerimiz | FOG İstanbul',
        description: 'FOG İstanbul\'un sunduğu dijital pazarlama, web tasarım ve prodüksiyon hizmetleri.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/hizmetler',
    },
};

export default function Hizmetler() {
    return <HizmetlerClient />;
}
