import { Metadata } from 'next';
import HakkimizdaClient from './HakkimizdaClient';

export const metadata: Metadata = {
    title: 'Hakkımızda',
    description: 'FOG İstanbul (Focus On Growth), firmaları ve markaları dijital dünyaya taşıyan, büyüme odaklı dijital dönüşüm ajansıdır.',
    keywords: ['fog istanbul', 'dijital ajans', 'dijital dönüşüm ajansı', 'hakkımızda', 'değerler', 'misyon', 'vizyon'],
    openGraph: {
        title: 'Hakkımızda | FOG İstanbul',
        description: 'FOG İstanbul (Focus On Growth), işletmelerin büyümesine odaklanan dijital çözümler grubu.',
        url: '/hakkimizda',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Hakkımızda',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hakkımızda | FOG İstanbul',
        description: 'FOG İstanbul (Focus On Growth), işletmelerin büyümesine odaklanan dijital çözümler grubu.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/hakkimizda',
    },
};

export default function Hakkimizda() {
    return <HakkimizdaClient />;
}
