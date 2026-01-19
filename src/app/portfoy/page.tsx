import { Metadata } from 'next';
import PortfoyClient from './PortfoyClient';

export const metadata: Metadata = {
    title: 'Portfolyo | FOG İstanbul',
    description: 'Web tasarım, branding, prodüksiyon ve dijital pazarlama alanındaki seçilmiş projelerimiz. Başarı hikayelerimizi keşfedin.',
    keywords: ['portfolyo', 'projeler', 'web tasarım projeleri', 'dijital pazarlama örnekleri', 'başarı hikayeleri'],
    openGraph: {
        title: 'Portfolyo | FOG İstanbul',
        description: 'Web tasarım, branding, prodüksiyon ve dijital pazarlama alanındaki seçilmiş projelerimiz.',
        url: '/portfoy',
        type: 'website',
    },
    alternates: {
        canonical: '/portfoy',
    },
};

export default function Portfoy() {
    return <PortfoyClient />;
}
