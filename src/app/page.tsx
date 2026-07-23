import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: 'Dijital Dönüşüm Ajansı',
    description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı. Markanızı dijital dünyada büyütüyoruz.',
    keywords: ['dijital ajans', 'sosyal medya yönetimi', 'web tasarım', 'SEO', 'dijital pazarlama', 'prodüksiyon', 'istanbul', 'dijital strateji'],
    openGraph: {
        title: 'FOG İstanbul | Dijital Dönüşüm Ajansı',
        description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.',
        url: '/',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul | Dijital Dönüşüm Ajansı',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FOG İstanbul | Dijital Dönüşüm Ajansı',
        description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.',
        images: ['/og-image.webp'],
    },
};

export default function Home() {
    return <HomeClient />;
}
