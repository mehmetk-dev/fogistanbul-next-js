import { Metadata } from 'next';
import Script from 'next/script';
import styles from './LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | FOG İstanbul',
    description: 'FOG İstanbul web sitesi gizlilik politikası. Kişisel verilerinizi nasıl topladığımız ve koruduğumuz hakkında bilgi edinin.',
    alternates: {
        canonical: 'https://fogistanbul.com/gizlilik-politikasi',
    },
};

const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gizlilik Politikası",
    "description": "FOG İstanbul gizlilik politikası ve veri güvenliği ilkeleri.",
    "url": "https://fogistanbul.com/gizlilik-politikasi"
};

export default function GizlilikPolitikasiPage() {
    return (
        <main className={styles.legalPage}>
            <Script
                id="privacy-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Gizlilik Politikası</h1>

                <div className={`legal-content ${styles.content}`}>
                    <p>Son Güncelleme: 01.01.2024</p>
                    <br />
                    <p>FOG İstanbul (&quot;Şirket&quot;) olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine önem veriyoruz. Bu Gizlilik Politikası, topladığımız verilerin türünü, nasıl kullanıldığını ve nasıl korunduğunu açıklar.</p>

                    <h3>1. Toplanan Bilgiler</h3>
                    <p>Web sitemiz üzerinden &quot;İletişim&quot; veya &quot;Teklif Al&quot; formlarını doldurduğunuzda; adınız, e-posta adresiniz, telefon numaranız gibi kişisel bilgileri toplayabiliriz. Ayrıca, site kullanım analizi için anonim veriler (IP adresi, tarayıcı türü vb.) toplanabilir.</p>

                    <h3>2. Bilgilerin Kullanımı</h3>
                    <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
                    <ul>
                        <li>Hizmet taleplerinize yanıt vermek.</li>
                        <li>Size özel teklifler sunmak.</li>
                        <li>Web sitesi deneyimini iyileştirmek.</li>
                        <li>Yasal yükümlülükleri yerine getirmek.</li>
                    </ul>

                    <h3>3. Çerezler (Cookies)</h3>
                    <p>Kullanıcı deneyimini artırmak için çerezler kullanmaktayız. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya engelleyebilirsiniz.</p>

                    <h3>4. Veri Güvenliği</h3>
                    <p>Kişisel verileriniz, endüstri standardı güvenlik önlemleriyle korunmaktadır. Bilgileriniz, yasal zorunluluklar haricinde üçüncü şahıslarla paylaşılmaz.</p>

                    <h3>5. İletişim</h3>
                    <p>Gizlilik politikamızla ilgili sorularınız için <a href="mailto:info@fogistanbul.com">info@fogistanbul.com</a> adresinden bize ulaşabilirsiniz.</p>
                </div>
            </div>
        </main>
    );
}
