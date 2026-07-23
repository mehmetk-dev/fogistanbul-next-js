import { Metadata } from 'next';
import PortfoyClient from './PortfoyClient';

export const metadata: Metadata = {
    title: 'Portfolyo',
    description: 'FOG İstanbul gerçek proje çalışmalarını, verilen hizmetleri ve ölçülebilir sonuçlarıyla birlikte yakında paylaşacak.',
    keywords: ['portfolyo', 'projeler', 'web tasarım projeleri', 'dijital pazarlama örnekleri', 'başarı hikayeleri'],
    openGraph: {
        title: 'Portfolyo | FOG İstanbul',
        description: 'FOG İstanbul gerçek proje çalışmalarını ve ölçülebilir sonuçlarını yakında paylaşacak.',
        url: '/portfoy',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Portfolyo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolyo | FOG İstanbul',
        description: 'FOG İstanbul gerçek proje çalışmalarını ve ölçülebilir sonuçlarını yakında paylaşacak.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/portfoy',
    },
};

export default function Portfoy() {
    return <PortfoyClient />;
}
