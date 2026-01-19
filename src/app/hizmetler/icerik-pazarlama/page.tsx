import { Metadata } from 'next';
import IcerikPazarlamaClient from './IcerikPazarlamaClient';

export const metadata: Metadata = {
    title: 'İçerik Pazarlama ve SEO | FOG İstanbul',
    description: 'Markanız için SEO uyumlu makale, blog, video senaryosu ve stratejik içerik pazarlama hizmetleri. Google\'da yükselin, organik trafiğinizi artırın.',
    keywords: ['içerik pazarlama', 'seo', 'blog yazarlığı', 'content marketing', 'keyword research', 'on-page seo', 'link building', 'organik trafik'],
    openGraph: {
        title: 'İçerik Pazarlama ve SEO | FOG İstanbul',
        description: 'Markanız için SEO uyumlu makale, blog, video senaryosu ve stratejik içerik pazarlama hizmetleri. Google\'da yükselin.',
        url: '/hizmetler/icerik-pazarlama',
        type: 'website',
    },
    alternates: {
        canonical: '/hizmetler/icerik-pazarlama',
    },
};

export default function IcerikPazarlamaPage() {
    return <IcerikPazarlamaClient />;
}
