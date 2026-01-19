import { Metadata } from 'next';
import WebTasarimClient from './WebTasarimClient';

export const metadata: Metadata = {
    title: 'Web Tasarım ve Yazılım Çözümleri | FOG İstanbul',
    description: 'Kullanıcı dostu, hızlı ve SEO uyumlu web site tasarım çözümleri. Modern teknolojilerle profesyonel web siteleri. Next.js, React ve performans odaklı geliştirme.',
    keywords: ['web tasarım', 'web yazılım', 'next.js', 'react', 'seo uyumlu web sitesi', 'responsive tasarım', 'e-ticaret', 'kurumsal web sitesi'],
    openGraph: {
        title: 'Web Tasarım ve Yazılım Çözümleri | FOG İstanbul',
        description: 'Kullanıcı dostu, hızlı ve SEO uyumlu web site tasarım çözümleri. Modern teknolojilerle profesyonel web siteleri.',
        url: '/hizmetler/web-tasarim',
        type: 'website',
    },
    alternates: {
        canonical: '/hizmetler/web-tasarim',
    },
};

export default function WebTasarimPage() {
    return <WebTasarimClient />;
}
