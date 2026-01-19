import { Metadata } from 'next';
import IletisimClient from './IletisimClient';

export const metadata: Metadata = {
    title: 'İletişim | FOG İstanbul',
    description: 'Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz. Ücretsiz teklif alın.',
    keywords: ['iletişim', 'teklif al', 'fog istanbul iletişim', 'dijital ajans iletişim', 'istanbul ajans'],
    openGraph: {
        title: 'İletişim | FOG İstanbul',
        description: 'Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz.',
        url: '/iletisim',
        type: 'website',
    },
    alternates: {
        canonical: '/iletisim',
    },
};

export default function Iletisim() {
    return <IletisimClient />;
}
