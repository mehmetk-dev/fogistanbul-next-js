import { Metadata } from 'next';
import CrmOtomasyonClient from './CrmOtomasyonClient';

export const metadata: Metadata = {
    title: 'CRM ve İş Süreçleri Otomasyonu | FOG İstanbul',
    description: 'Müşteri takibi, satış otomasyonu ve veri yönetimi. İş süreçlerinizi dijitalleştirerek kaostan kurtarın. Verimliliğinizi artırın.',
    keywords: ['crm', 'müşteri ilişkileri yönetimi', 'satış otomasyonu', 'iş süreçleri', 'veri yönetimi', 'workflow automation', 'lead management'],
    openGraph: {
        title: 'CRM ve İş Süreçleri Otomasyonu | FOG İstanbul',
        description: 'Müşteri takibi, satış otomasyonu ve veri yönetimi. İş süreçlerinizi dijitalleştirerek kaostan kurtarın.',
        url: '/hizmetler/crm-otomasyon',
        type: 'website',
    },
    alternates: {
        canonical: '/hizmetler/crm-otomasyon',
    },
};

export default function CrmOtomasyonPage() {
    return <CrmOtomasyonClient />;
}
