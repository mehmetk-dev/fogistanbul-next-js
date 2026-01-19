import { Metadata } from 'next';
import HakkimizdaClient from './HakkimizdaClient';

export const metadata: Metadata = {
    title: 'Hakkımızda | FOG İstanbul',
    description: 'FOG İstanbul (Focus On Growth), işletmelerin büyümesine odaklanan dijital çözümler grubu. Ekibimiz ve değerlerimiz hakkında bilgi edinin.',
    keywords: ['fog istanbul', 'dijital ajans', 'hakkımızda', 'ekip', 'değerler', 'misyon', 'vizyon'],
    openGraph: {
        title: 'Hakkımızda | FOG İstanbul',
        description: 'FOG İstanbul (Focus On Growth), işletmelerin büyümesine odaklanan dijital çözümler grubu.',
        url: '/hakkimizda',
        type: 'website',
    },
    alternates: {
        canonical: '/hakkimizda',
    },
};

export default function Hakkimizda() {
    return <HakkimizdaClient />;
}
