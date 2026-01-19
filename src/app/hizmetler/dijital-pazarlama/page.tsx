import { Metadata } from 'next';
import DijitalPazarlamaClient from './DijitalPazarlamaClient';

export const metadata: Metadata = {
    title: 'Dijital Pazarlama ve Performans | FOG İstanbul',
    description: 'Google Ads, Sosyal Medya Reklamları, SEO ve Veri Analizi hizmetlerimizle markanızın cirosunu artırın. FOG İstanbul ile dijital ekosisteminizi kurun.',
    keywords: ['dijital pazarlama', 'google ads', 'sosyal medya reklamları', 'performans pazarlama', 'roi', 'conversion optimization', 'veri analizi', 'marketing automation'],
    openGraph: {
        title: 'Dijital Pazarlama ve Performans | FOG İstanbul',
        description: 'Google Ads, Sosyal Medya Reklamları, SEO ve Veri Analizi hizmetlerimizle markanızın cirosunu artırın.',
        url: '/hizmetler/dijital-pazarlama',
        type: 'website',
    },
    alternates: {
        canonical: '/hizmetler/dijital-pazarlama',
    },
};

export default function DijitalPazarlamaPage() {
    return <DijitalPazarlamaClient />;
}
