import { Metadata } from 'next';
import SosyalMedyaClient from './SosyalMedyaClient';

export const metadata: Metadata = {
    title: 'Sosyal Medya Yönetimi | FOG İstanbul',
    description: 'Profesyonel sosyal medya yönetimi ile markanızın takipçi kitlesini büyütün, etkileşimi artırın ve sadık müşteriler kazanın. Facebook, Instagram, TikTok stratejileri.',
    keywords: ['sosyal medya yönetimi', 'instagram yönetimi', 'facebook yönetimi', 'tiktok yönetimi', 'sosyal medya stratejisi', 'content creation', 'community management'],
    openGraph: {
        title: 'Sosyal Medya Yönetimi | FOG İstanbul',
        description: 'Profesyonel sosyal medya yönetimi ile markanızın takipçi kitlesini büyütün, etkileşimi artırın ve sadık müşteriler kazanın.',
        url: '/hizmetler/sosyal-medya',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Sosyal Medya Yönetimi',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sosyal Medya Yönetimi | FOG İstanbul',
        description: 'Profesyonel sosyal medya yönetimi ile markanızın takipçi kitlesini büyütün, etkileşimi artırın ve sadık müşteriler kazanın.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/hizmetler/sosyal-medya',
    },
};

export default function SosyalMedyaPage() {
    return <SosyalMedyaClient />;
}
