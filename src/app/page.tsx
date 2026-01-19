import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: 'FOG İstanbul | Yeni Nesil Dijital Ajans',
    description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı. Markanızı dijital dünyada büyütüyoruz.',
    keywords: ['dijital ajans', 'sosyal medya yönetimi', 'web tasarım', 'SEO', 'dijital pazarlama', 'prodüksiyon', 'istanbul', 'dijital strateji'],
    openGraph: {
        title: 'FOG İstanbul | Yeni Nesil Dijital Ajans',
        description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.',
        url: '/',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FOG İstanbul | Yeni Nesil Dijital Ajans',
        description: 'İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.',
    },
};

export default function Home() {
    return <HomeClient />;
}
