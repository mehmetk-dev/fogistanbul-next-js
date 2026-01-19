import { Metadata } from 'next';
import ReklamYonetimiClient from './ReklamYonetimiClient';

export const metadata: Metadata = {
    title: 'Dijital Reklam Yönetimi (Google, Meta, TikTok) | FOG İstanbul',
    description: 'Google Ads, Meta (Instagram/Facebook) ve TikTok reklam yönetimi. Veri odaklı stratejilerle reklam bütçenizi yatırıma dönüştürün.',
    keywords: ['google ads', 'meta ads', 'facebook reklam', 'instagram reklam', 'tiktok reklam', 'ppc', 'reklam yönetimi', 'advertising'],
    openGraph: {
        title: 'Dijital Reklam Yönetimi (Google, Meta, TikTok) | FOG İstanbul',
        description: 'Google Ads, Meta (Instagram/Facebook) ve TikTok reklam yönetimi. Veri odaklı stratejilerle reklam bütçenizi yatırıma dönüştürün.',
        url: '/hizmetler/reklam-yonetimi',
        type: 'website',
    },
    alternates: {
        canonical: '/hizmetler/reklam-yonetimi',
    },
};

export default function ReklamYonetimiPage() {
    return <ReklamYonetimiClient />;
}
