import { Metadata } from 'next';
import Script from 'next/script';
import styles from '../LegalPage.module.css';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve haklarınız.',
    keywords: ['kvkk', 'kişisel verilerin korunması', 'gizlilik', 'veri güvenliği', 'aydınlatma metni', 'fog istanbul'],
    openGraph: {
        title: 'KVKK Aydınlatma Metni | FOG İstanbul',
        description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve haklarınız.',
        url: '/kvkk',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul KVKK',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KVKK Aydınlatma Metni | FOG İstanbul',
        description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve haklarınız.',
        images: ['/og-image.webp'],
    },
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
                <header className={styles.hero}>
                    <span className={styles.eyebrow}>YASAL METİNLER</span>
                    <h1 className={styles.title}>KVKK Aydınlatma Metni</h1>
                    <p className={styles.lead}>Bu metin, kişisel verilerinizin kim tarafından, hangi amaç ve hukuki sebeplerle işlendiğini ve haklarınızı açıklar.</p>
                    <div className={styles.meta}>
                        <span>Yürürlük: 25.01.2026</span>
                        <span>6698 sayılı KVKK</span>
                    </div>
                </header>

                <article className={`legal-content ${styles.content}`}>
                    <section className={styles.summary}>
                        <h2>Kısa bilgilendirme</h2>
                        <ul>
                            <li>Veri sorumlusu Burcu Aldığ&apos;dır.</li>
                            <li>Verileriniz iletişim, teklif, sözleşme, faturalandırma ve hizmet süreçleri için işlenir.</li>
                            <li>KVKK kapsamındaki başvurularınızı fogistanbul@gmail.com adresine iletebilirsiniz.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>1. Veri sorumlusunun kimliği</h2>
                        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu aşağıdaki bilgileri bulunan Burcu Aldığ&apos;dır. FOG İstanbul ve FogCatalog ifadeleri, sunulan hizmetlerde kullanılan marka ve hizmet adlarıdır.</p>
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
                        <h2>2. İşlenen kişisel veriler</h2>
                        <p>İlişkinizin niteliğine göre aşağıdaki veri kategorileri işlenebilir:</p>
                        <ul>
                            <li><strong>Kimlik ve iletişim:</strong> ad, soyad, e-posta adresi, telefon numarası ve adres.</li>
                            <li><strong>Müşteri işlem bilgileri:</strong> teklif, sipariş, abonelik, sözleşme, talep ve destek kayıtları.</li>
                            <li><strong>Finans bilgileri:</strong> fatura ve ödeme işlem bilgileri. Kart bilgileri ödeme hizmeti sağlayıcısı tarafından işlenebilir; FOG İstanbul tarafından saklanmaz.</li>
                            <li><strong>İşlem güvenliği ve teknik veriler:</strong> IP adresi, cihaz ve tarayıcı bilgileri, erişim kayıtları, hata kayıtları ve çerez tercihleri.</li>
                            <li><strong>İçerik verileri:</strong> iletişim formu, e-posta veya hizmet kapsamında tarafınızca iletilen mesaj ve dosyalar.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. İşleme amaçları ve hukuki sebepler</h2>
                        <p>Veriler; iletişim taleplerinin yanıtlanması, teklif hazırlanması, sözleşmenin kurulması ve ifası, abonelik ve müşteri ilişkilerinin yönetimi, faturalandırma, destek, bilgi güvenliği, hukuki yükümlülüklerin yerine getirilmesi ve bir hakkın tesisi veya korunması amaçlarıyla işlenir.</p>
                        <p>Bu faaliyetler KVKK madde 5/2 kapsamında sözleşmenin kurulması veya ifası, hukuki yükümlülük, bir hakkın tesisi, kullanılması veya korunması ve temel haklarınıza zarar vermemek kaydıyla meşru menfaat hukuki sebeplerine dayanır. Zorunlu olmayan pazarlama veya analitik faaliyetler ise gerekli olduğu ölçüde açık rızanıza dayanır.</p>
                    </section>

                    <section>
                        <h2>4. Toplama yöntemi</h2>
                        <p>Verileriniz; web sitesi formları, e-posta, telefon, yüz yüze görüşmeler, sözleşme ve fatura süreçleri, FogCatalog platformundaki işlemler ile çerezler ve benzeri teknolojiler üzerinden tamamen veya kısmen otomatik yöntemlerle toplanabilir.</p>
                    </section>

                    <section>
                        <h2>5. Aktarım ve yurt dışı aktarım</h2>
                        <p>Kişisel verileriniz, amaçla sınırlı ve gerekli olduğu ölçüde; yetkili kamu kurumlarına, mali müşavirlere, hukuk danışmanlarına, ödeme ve faturalandırma kuruluşlarına, barındırma, e-posta iletimi, analiz, hata izleme ve bilgi teknolojisi hizmeti sağlayıcılarına aktarılabilir.</p>
                        <p>Yurt dışında altyapı sunan bir hizmet sağlayıcının kullanılması halinde aktarım, KVKK madde 9 kapsamındaki şartlar ve uygun güvenceler gözetilerek gerçekleştirilir.</p>
                    </section>

                    <section>
                        <h2>6. Saklama süresi ve güvenlik</h2>
                        <p>Verileriniz, işleme amacı için gerekli süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca tutulur; sürenin sonunda silinir, yok edilir veya anonim hale getirilir. Yetkisiz erişim, kayıp ve kötüye kullanıma karşı uygun teknik ve idari tedbirler uygulanır.</p>
                    </section>

                    <section>
                        <h2>7. KVKK kapsamındaki haklarınız</h2>
                        <p>KVKK madde 11 uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, aktarılan üçüncü kişileri bilme, eksik veya yanlış verilerin düzeltilmesini isteme, şartları oluştuğunda silme veya yok etme talebinde bulunma, otomatik analiz sonucu aleyhinize çıkan sonuca itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.</p>
                    </section>

                    <section>
                        <h2>8. Başvuru yöntemi</h2>
                        <p>Başvurunuzu kimliğinizi doğrulamaya elverişli bilgiler ve talebinizin ayrıntılarıyla birlikte <a href="mailto:fogistanbul@gmail.com">fogistanbul@gmail.com</a> adresine veya yukarıdaki posta adresine iletebilirsiniz. Başvurular, niteliğine göre en kısa sürede ve en geç 30 gün içinde yanıtlanır.</p>
                    </section>

                    <p className={styles.closing}>Bu metin, veri işleme faaliyetlerinde veya mevzuatta değişiklik olması halinde güncellenebilir.</p>
                </article>
            </div>
        </main>
    );
}
