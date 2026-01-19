import { Metadata } from 'next';
import Script from 'next/script';
import styles from './LegalPage.module.css';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | FOG İstanbul',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve haklarınız.',
    alternates: {
        canonical: 'https://fogistanbul.com/kvkk',
    },
};

const kvkkSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KVKK Aydınlatma Metni",
    "description": "FOG İstanbul KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
    "url": "https://fogistanbul.com/kvkk"
};

export default function KvkkPage() {
    return (
        <main className={styles.legalPage}>
            <Script
                id="kvkk-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(kvkkSchema) }}
            />
            <div className={styles.container}>
                <h1 className={styles.title}>KVKK Aydınlatma Metni</h1>

                <div className={`legal-content ${styles.content}`}>
                    <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, FOG İstanbul olarak kişisel verilerinizi ne şekilde işlediğimizi açıklamak isteriz.</p>

                    <h3>1. Veri Sorumlusu</h3>
                    <p>FOG İstanbul, kişisel verileriniz açısından Veri Sorumlusu sıfatına haizdir.</p>

                    <h3>2. İşlenen Kişisel Veriler</h3>
                    <p>Ad, soyad, e-posta, telefon numarası ve talep/mesaj içeriğiniz gibi kimlik ve iletişim bilgileriniz işlenmektedir.</p>

                    <h3>3. İşleme Amacı</h3>
                    <p>Verileriniz; iletişim faaliyetlerinin yürütülmesi, hizmet tekliflerinin sunulması ve müşteri ilişkilerinin yönetimi amacıyla işlenir.</p>

                    <h3>4. Verilerin Aktarımı</h3>
                    <p>Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır.</p>

                    <h3>5. Haklarınız</h3>
                    <p>KVKK&apos;nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz. Taleplerinizi info@fogistanbul.com adresine iletebilirsiniz.</p>
                </div>
            </div>
        </main>
    );
}
