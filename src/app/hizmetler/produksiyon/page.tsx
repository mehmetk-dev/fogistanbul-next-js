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
    },
    alternates: {
        canonical: '/hizmetler/produksiyon',
    },
};

export default function ProduksiyonPage() {
    return <ProduksiyonClient />;
}
