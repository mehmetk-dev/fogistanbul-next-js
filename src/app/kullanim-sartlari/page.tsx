import { Metadata } from 'next';
import Script from 'next/script';
import styles from './LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Kullanım Şartları | FOG İstanbul',
    description: 'FOG İstanbul web sitesi kullanım koşulları. Siteyi kullanırken uymanız gereken kurallar ve yasal bildirimler.',
    keywords: ['kullanım şartları', 'terms of service', 'yasal uyarı', 'site kuralları', 'fog istanbul'],
    openGraph: {
        title: 'Kullanım Şartları | FOG İstanbul',
        description: 'FOG İstanbul web sitesi kullanım koşulları. Siteyi kullanırken uymanız gereken kurallar ve yasal bildirimler.',
        url: '/kullanim-sartlari',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Kullanım Şartları',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kullanım Şartları | FOG İstanbul',
        description: 'FOG İstanbul web sitesi kullanım koşulları. Siteyi kullanırken uymanız gereken kurallar ve yasal bildirimler.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: 'https://fogistanbul.com/kullanim-sartlari',
    },
};

const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kullanım Şartları",
    "description": "FOG İstanbul web sitesi kullanım koşulları ve yasal uyarılar.",
    "url": "https://fogistanbul.com/kullanim-sartlari"
};

export default function KullanimSartlariPage() {
    return (
        <main className={styles.legalPage}>
            <Script
                id="terms-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Kullanım Şartları</h1>

                <div className={`legal-content ${styles.content}`}>
                    <p>Lütfen fogistanbul.com web sitesini (&quot;Site&quot;) kullanmadan önce bu Kullanım Şartları&apos;nı dikkatlice okuyunuz.</p>

                    <h3>1. Kabul</h3>
                    <p>Siteye erişerek veya siteyi kullanarak, bu şartları kabul etmiş olursunuz. Eğer bu şartları kabul etmiyorsanız, lütfen siteyi kullanmayınız.</p>

                    <h3>2. Fikri Mülkiyet</h3>
                    <p>Bu web sitesinde yer alan tüm içerik (metinler, grafikler, logolar, görseller, yazılımlar vb.) FOG İstanbul&apos;a aittir ve uluslararası telif hakkı yasalarıyla korunmaktadır. İzinsiz kopyalanması veya kullanılması yasaktır.</p>

                    <h3>3. Kullanıcı Yükümlülükleri</h3>
                    <p>Siteyi hukuka aykırı amaçlarla kullanamazsınız. Sisteme zarar verecek, veri güvenliğini tehlikeye atacak davranışlardan kaçınmalısınız.</p>

                    <h3>4. Değişiklik Hakkı</h3>
                    <p>FOG İstanbul, bu şartları dilediği zaman önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.</p>

                    <h3>5. Sorumluluk Reddi</h3>
                    <p>Site üzerindeki bilgiler &quot;olduğu gibi&quot; sunulmaktadır. FOG İstanbul, sitedeki bilgilerin doğruluğu veya kesintisiz hizmet konusunda garanti vermez.</p>
                </div>
            </div>
        </main>
    );
}
