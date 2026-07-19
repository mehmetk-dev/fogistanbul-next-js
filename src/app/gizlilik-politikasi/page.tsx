import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import styles from '../LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası',
    description: 'FOG İstanbul web sitesi gizlilik politikası. Kişisel verilerinizi nasıl topladığımız ve koruduğumuz hakkında bilgi edinin.',
    keywords: ['gizlilik politikası', 'privacy policy', 'veri koruma', 'çerezler', 'cookie policy', 'fog istanbul'],
    openGraph: {
        title: 'Gizlilik Politikası | FOG İstanbul',
        description: 'FOG İstanbul web sitesi gizlilik politikası. Kişisel verilerinizi nasıl topladığımız ve koruduğumuz hakkında bilgi edinin.',
        url: '/gizlilik-politikasi',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Gizlilik Politikası',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gizlilik Politikası | FOG İstanbul',
        description: 'FOG İstanbul web sitesi gizlilik politikası. Kişisel verilerinizi nasıl topladığımız ve koruduğumuz hakkında bilgi edinin.',
        images: ['/og-image.webp'],
    },
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
                <header className={styles.hero}>
                    <span className={styles.eyebrow}>YASAL METİNLER</span>
                    <h1 className={styles.title}>Gizlilik Politikası</h1>
                    <p className={styles.lead}>fogistanbul.com ziyaretçilerinin, müşterilerin ve bizimle iletişime geçen kişilerin verilerini nasıl kullandığımızı açıklar.</p>
                    <div className={styles.meta}>
                        <span>Yürürlük: 25.01.2026</span>
                        <span>Son güncelleme: 25.01.2026</span>
                    </div>
                </header>

                <article className={`legal-content ${styles.content}`}>
                    <section className={styles.summary}>
                        <h2>Gizlilik yaklaşımımız</h2>
                        <ul>
                            <li>Yalnızca belirli ve meşru amaçlar için gerekli verileri işleriz.</li>
                            <li>Verileri amaçla bağlantılı süre boyunca saklar ve erişimi sınırlarız.</li>
                            <li>Hak talepleri için doğrudan fogistanbul@gmail.com adresinden bize ulaşabilirsiniz.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>1. Politikanın kapsamı</h2>
                        <p>Bu politika; FOG İstanbul web sitesi, iletişim ve teklif süreçleri ile Burcu Aldığ tarafından sunulan FOG İstanbul ve FogCatalog hizmetleri kapsamında işlenen kişisel verileri kapsar. Başka sitelere verilen bağlantılar, ilgili üçüncü tarafların kendi gizlilik kurallarına tabidir.</p>
                    </section>

                    <section>
                        <h2>2. Hizmet sağlayıcı</h2>
                        <div className={styles.companyCard}>
                            <dl className={styles.detailGrid}>
                                <div><dt>Ünvan</dt><dd>Burcu Aldığ</dd></div>
                                <div><dt>Vergi Dairesi / No</dt><dd>Nilüfer V.D. / 0510559196</dd></div>
                                <div><dt>E-posta</dt><dd><a href="mailto:fogistanbul@gmail.com">fogistanbul@gmail.com</a></dd></div>
                                <div><dt>Telefon</dt><dd><a href="tel:+905434062580">+90 543 406 25 80</a></dd></div>
                                <div className={styles.wide}><dt>Adres</dt><dd>23 Nisan Mah. 241. Sk. No: 8 İç Kapı No: 42, Nilüfer / Bursa / Türkiye</dd></div>
                            </dl>
                        </div>
                    </section>

                    <section>
                        <h2>3. Topladığımız bilgiler</h2>
                        <ul>
                            <li>İletişim veya teklif formunda paylaştığınız ad, e-posta, telefon ve mesaj bilgileri.</li>
                            <li>Hizmet veya abonelik ilişkisinde oluşan sipariş, sözleşme, fatura, ödeme ve destek bilgileri.</li>
                            <li>Site güvenliği ve performansı için IP adresi, tarayıcı, cihaz, erişim ve hata kayıtları.</li>
                            <li>Çerezler ve benzeri teknolojiler aracılığıyla oluşan tercih ve kullanım verileri.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Bilgileri neden kullanıyoruz?</h2>
                        <ul>
                            <li>Taleplerinizi yanıtlamak ve size uygun teklif hazırlamak.</li>
                            <li>Sözleşme, abonelik, ödeme, faturalandırma ve destek süreçlerini yürütmek.</li>
                            <li>Siteyi güvenli tutmak, hataları gidermek ve kullanıcı deneyimini geliştirmek.</li>
                            <li>Yasal ve mali yükümlülükleri yerine getirmek, haklarımızı korumak.</li>
                            <li>Açık rızanızın gerektiği durumlarda analitik veya pazarlama faaliyetleri yürütmek.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Paylaşım ve hizmet sağlayıcılar</h2>
                        <p>Verileriniz satış amacıyla üçüncü kişilere verilmez. Hizmetin yürütülmesi için gerekli olduğunda barındırma, e-posta iletimi, ödeme, faturalandırma, analiz, hata izleme, mali müşavirlik ve hukuk hizmeti sağlayıcılarıyla; kanuni yükümlülük halinde yetkili kamu kurumlarıyla sınırlı olarak paylaşılabilir.</p>
                        <p>Üçüncü taraf altyapılarının yurt dışında bulunması halinde kişisel veri aktarımı, yürürlükteki KVKK hükümleri ve uygun güvence mekanizmaları çerçevesinde ele alınır.</p>
                    </section>

                    <section>
                        <h2>6. Saklama ve güvenlik</h2>
                        <p>Verileriniz amaç için gerekli olan süre ve zorunlu yasal saklama dönemleri boyunca tutulur. Süre sonunda güvenli biçimde silinir, yok edilir veya anonim hale getirilir. Yetkisiz erişimi azaltmak için erişim sınırlandırma, güncel yazılım, kayıt ve yedekleme gibi makul teknik ve idari önlemler uygulanır.</p>
                    </section>

                    <section>
                        <h2>7. Çerezler</h2>
                        <p>Site, temel işlevleri sağlamak ve yapılandırmaya bağlı olarak kullanım istatistikleri üretmek için çerezlerden veya benzeri teknolojilerden yararlanabilir. Türler, sağlayıcılar, amaçlar ve saklama süreleri için <Link href="/cerez-politikasi">Çerez Politikası</Link> sayfasını inceleyebilirsiniz.</p>
                    </section>

                    <section>
                        <h2>8. Haklarınız ve iletişim</h2>
                        <p>Kişisel verilerinizle ilgili bilgi, düzeltme, silme ve diğer KVKK taleplerinizi <a href="mailto:fogistanbul@gmail.com">fogistanbul@gmail.com</a> adresine iletebilirsiniz. Ayrıntılı hak ve başvuru yöntemi <Link href="/kvkk">KVKK Aydınlatma Metni</Link> içinde açıklanmıştır.</p>
                    </section>

                    <section>
                        <h2>9. Politika değişiklikleri</h2>
                        <p>Hizmetlerde veya mevzuatta değişiklik olması halinde bu politika güncellenebilir. Güncel sürüm, yürürlük ve son güncelleme tarihiyle birlikte bu sayfada yayımlanır.</p>
                    </section>
                </article>
            </div>
        </main>
    );
}
