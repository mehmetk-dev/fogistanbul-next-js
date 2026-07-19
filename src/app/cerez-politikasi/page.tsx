import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import styles from '../LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Çerez Politikası',
    description: 'FOG İstanbul web sitesinde kullanılan çerezler, benzeri teknolojiler, amaçları, süreleri ve tercihlerinizi yönetme yolları.',
    keywords: ['çerez politikası', 'cookie policy', 'çerez tercihleri', 'google analytics', 'fog istanbul'],
    openGraph: {
        title: 'Çerez Politikası | FOG İstanbul',
        description: 'Kullanılan çerezler, amaçları, süreleri ve tercihlerinizi yönetme yolları.',
        url: '/cerez-politikasi',
        type: 'website',
        images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'FOG İstanbul Çerez Politikası' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Çerez Politikası | FOG İstanbul',
        description: 'Kullanılan çerezler, amaçları, süreleri ve tercihlerinizi yönetme yolları.',
        images: ['/og-image.webp'],
    },
    alternates: { canonical: 'https://fogistanbul.com/cerez-politikasi' },
};

const cookieSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Çerez Politikası',
    description: 'FOG İstanbul çerez ve benzeri teknolojiler politikası.',
    url: 'https://fogistanbul.com/cerez-politikasi',
};

export default function CerezPolitikasiPage() {
    return (
        <main className={styles.legalPage}>
            <Script
                id="cookie-policy-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
            />
            <div className={styles.container}>
                <header className={styles.hero}>
                    <span className={styles.eyebrow}>YASAL METİNLER</span>
                    <h1 className={styles.title}>Çerez Politikası</h1>
                    <p className={styles.lead}>fogistanbul.com üzerinde kullanılan çerezleri ve benzeri teknolojileri, bunların amaçlarını ve tercihlerinizi nasıl yönetebileceğinizi açıklar.</p>
                    <div className={styles.meta}>
                        <span>Yürürlük: 25.01.2026</span>
                        <span>Son güncelleme: 25.01.2026</span>
                    </div>
                </header>

                <article className={`legal-content ${styles.content}`}>
                    <section className={styles.summary}>
                        <h2>Kısa bilgilendirme</h2>
                        <ul>
                            <li>Zorunlu teknolojiler sitenin çalışması ve güvenliği için kullanılır.</li>
                            <li>Analitik çerezler yalnızca yapılandırılmışsa ve gerekli hukuki koşullar sağlanmışsa kullanılır.</li>
                            <li>Zorunlu olmayan çerezleri reddetmeniz sitenin temel özelliklerine erişiminizi engellemez.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>1. Veri sorumlusu</h2>
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
                        <h2>2. Çerez ve benzeri teknolojiler nedir?</h2>
                        <p>Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilebilen küçük metin dosyalarıdır. Yerel depolama ve oturum depolama gibi benzeri teknolojiler de tercihlerin hatırlanması veya teknik işlevlerin yürütülmesi için tarayıcıda bilgi saklayabilir.</p>
                    </section>

                    <section>
                        <h2>3. Kullanım amaçları</h2>
                        <ul>
                            <li><strong>Zorunlu:</strong> güvenliğin, ağ iletişiminin ve açıkça talep ettiğiniz temel site işlevlerinin sağlanması.</li>
                            <li><strong>İşlevsel:</strong> dil, görünüm veya kapatılmış bildirim gibi tercihlerin hatırlanması.</li>
                            <li><strong>Performans ve analitik:</strong> ziyaretçi sayısı, sayfa görüntüleme ve teknik performansın ölçülmesi.</li>
                            <li><strong>Pazarlama:</strong> reklamların kişiselleştirilmesi ve kampanya performansının ölçülmesi. Bu kategori mevcut teknik yapılandırmada kullanılmıyorsa çerez bırakılmaz.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Kullanılabilecek teknolojiler</h2>
                        <div className={styles.tableWrapper}>
                            <table>
                                <thead>
                                    <tr><th>Ad / Sağlayıcı</th><th>Tür</th><th>Amaç</th><th>Süre</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>pwa-install-dismissed / FOG İstanbul</td>
                                        <td>Oturum depolama · İşlevsel</td>
                                        <td>PWA yükleme hatırlatıcısının aynı oturumda tekrar gösterilmemesi.</td>
                                        <td>Tarayıcı oturumu</td>
                                    </tr>
                                    <tr>
                                        <td>_ga, _ga_&lt;container-id&gt; / Google Analytics</td>
                                        <td>Üçüncü taraf · Analitik</td>
                                        <td>Site kullanımına ilişkin toplu istatistikler oluşturmak. Yalnızca Google Analytics yapılandırılmışsa kullanılır.</td>
                                        <td>Yapılandırmaya bağlı olarak en fazla 2 yıl</td>
                                    </tr>
                                    <tr>
                                        <td>Sentry</td>
                                        <td>Teknik kayıt · Performans/Güvenlik</td>
                                        <td>Uygulama hatalarını teşhis etmek ve hizmet güvenilirliğini artırmak. Yalnızca hata izleme yapılandırılmışsa çalışır.</td>
                                        <td>Sağlayıcı ve hesap ayarlarına bağlı</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.closing}>Kullanılan araçlar ve süreler teknik yapılandırma veya sağlayıcı güncellemeleri nedeniyle değişebilir. Önemli değişikliklerde bu tablo güncellenir.</p>
                    </section>

                    <section>
                        <h2>5. Hukuki sebep ve tercih yönetimi</h2>
                        <p>Kesinlikle gerekli teknolojiler, talep ettiğiniz bilgi toplumu hizmetinin sunulması ve meşru menfaat kapsamında kullanılır. Analitik, işlevsel veya pazarlama amaçlı zorunlu olmayan çerezler için gerekli olduğu ölçüde açık rızanız esas alınır.</p>
                        <p>Tarayıcınızın ayarlar bölümünden çerezleri görebilir, silebilir veya engelleyebilirsiniz. Tüm çerezlerin engellenmesi bazı işlevlerin beklendiği gibi çalışmamasına neden olabilir. Zorunlu olmayan çerezler için verdiğiniz tercihi dilediğiniz zaman geri alabilirsiniz.</p>
                    </section>

                    <section>
                        <h2>6. Üçüncü taraflar ve yurt dışı aktarım</h2>
                        <p>Google Analytics veya Sentry gibi üçüncü taraf araçlar etkinse teknik veriler bu sağlayıcıların altyapılarında işlenebilir. Yurt dışı aktarım söz konusu olduğunda KVKK madde 9 kapsamındaki şartlar ve uygun güvenceler gözetilir. Sağlayıcıların kendi çerez ve gizlilik metinleri ayrıca uygulanır.</p>
                    </section>

                    <section>
                        <h2>7. Haklarınız ve iletişim</h2>
                        <p>Kişisel verileriniz ve çerez tercihleriyle ilgili taleplerinizi <a href="mailto:fogistanbul@gmail.com">fogistanbul@gmail.com</a> adresine iletebilirsiniz. Ayrıntılı bilgi için <Link href="/kvkk">KVKK Aydınlatma Metni</Link> ve <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> sayfalarını inceleyebilirsiniz.</p>
                    </section>
                </article>
            </div>
        </main>
    );
}
