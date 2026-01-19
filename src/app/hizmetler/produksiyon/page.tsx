import { Metadata } from 'next';
import ProduksiyonClient from './ProduksiyonClient';

export const metadata: Metadata = {
    title: 'Fotoğraf ve Video Prodüksiyon | FOG İstanbul',
    description: 'Tanıtım filmi, drone çekimi, YouTube içerik üretimi ve profesyonel fotoğrafçılık. Markanızı sinematik kalitede anlatıyoruz.',
    keywords: ['video prodüksiyon', 'tanıtım filmi', 'drone çekimi', 'youtube içerik', 'profesyonel fotoğrafçılık', 'video editing', 'cinematography'],
    openGraph: {
        title: 'Fotoğraf ve Video Prodüksiyon | FOG İstanbul',
        description: 'Tanıtım filmi, drone çekimi, YouTube içerik üretimi ve profesyonel fotoğrafçılık. Markanızı sinematik kalitede anlatıyoruz.',
        url: '/hizmetler/produksiyon',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Prodüksiyon',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fotoğraf ve Video Prodüksiyon | FOG İstanbul',
        description: 'Tanıtım filmi, drone çekimi, YouTube içerik üretimi ve profesyonel fotoğrafçılık. Markanızı sinematik kalitede anlatıyoruz.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: '/hizmetler/produksiyon',
    },
};

export default function ProduksiyonPage() {
    return <ProduksiyonClient />;
}
