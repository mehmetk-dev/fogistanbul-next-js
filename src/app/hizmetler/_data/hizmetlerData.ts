// Hizmetler page data

import { colors as designColors } from '@/design-system/colors';

export const colors = {
    primary: designColors.primary,           // #ed6d8f - Standard Pink
    bgDark: designColors.bgDark,
    bgDarker: designColors.bgDarker,
    surfaceDark: designColors.surfaceDark,
    borderDark: designColors.borderDark,
    textGray: designColors.textGray,
    accentPink: designColors.primary,        // Use standard pink
};

export const services = [
    {
        id: 'digital',
        icon: 'campaign',
        title: 'DİJİTAL PAZARLAMA',
        subtitle: 'Marka bilinirliğinizi artırın',
        description: 'Bütünleşik pazarlama stratejileri ile markanızı her kanalda tutarlı ve güçlü kılıyoruz.',
        tags: ['Google Ads', 'SEO Optimizasyonu', 'Data Analytics', 'Conversion', 'Growth Hacking'],
        link: '/hizmetler/dijital-pazarlama'
    },
    {
        id: 'social',
        icon: 'share',
        title: 'SOSYAL MEDYA',
        subtitle: 'Etkileşiminizi katlıyoruz',
        description: 'Organik takipçi kazandıran, markanızın sesini duyuran ve etkileşimi katlayan profesyonel yönetim.',
        tags: ['Instagram & TikTok', 'Community Management', 'Viral İçerik', 'Influencer Marketing', 'Reels Production'],
        link: '/hizmetler/sosyal-medya'
    },
    {
        id: 'web',
        icon: 'web',
        title: 'WEB TASARIM',
        subtitle: 'Dijital vitrininizi tasarlıyoruz',
        description: 'Müşteriye kolay erişim ve potansiyel müşterileri hızlı satışa çevirmek için tasarlanmış, yüksek performanslı web sistemleri.',
        tags: ['UX/UI Tasarım', 'E-Ticaret', 'Kurumsal Web', 'Hızlı Arayüz', 'Mobil Uyumlu'],
        link: '/hizmetler/web-tasarim'
    },
    {
        id: 'production',
        icon: 'photo_camera',
        title: 'PRODÜKSİYON',
        subtitle: 'Hikayenizi sinematik anlatın',
        description: 'Ürün ve hizmetlerinizi en iyi ışıkta yansıtan, profesyonel fotoğraf ve video çekimleri. Yapay zeka destekli kreatifler.',
        tags: ['Tanıtım Filmi', 'Ürün Çekimi', 'Drone Çekimi', 'Kurgu & Montaj', 'Post-Prodüksiyon'],
        link: '/hizmetler/produksiyon'
    },
    {
        id: 'ads',
        icon: 'ads_click',
        title: 'REKLAM YÖNETİMİ',
        subtitle: 'Nokta atışı büyüme',
        description: 'Google, Meta ve TikTok reklamlarıyla markanızı doğru hedef kitleyle buluşturuyoruz. ROI odaklı kampanyalar.',
        tags: ['Google Ads', 'Meta (FB/Insta) Ads', 'TikTok Ads', 'LinkedIn Ads', 'Retargeting'],
        link: '/hizmetler/reklam-yonetimi'
    },
    {
        id: 'content',
        icon: 'edit_note',
        title: 'İÇERİK PAZARLAMA',
        subtitle: 'Stratejik içerik yönetimi',
        description: 'Copy/paste olmayan, SEO-uyumlu ve markanızın tonuna uygun, değer yaratan stratejik içerikler.',
        tags: ['SEO Blog', 'Video Senaryo', 'Copywriting', 'E-Bülten', 'Kurumsal Hikaye'],
        link: '/hizmetler/icerik-pazarlama'
    },
    {
        id: 'crm',
        icon: 'hub',
        title: 'CRM & OTOMASYON',
        subtitle: 'Şirketinizin dijital beyni',
        description: 'Müşteri verilerinizi tek bir çatı altında toplayan, satış süreçlerinizi otomatize eden akıllı sistemler.',
        tags: ['HubSpot Kurulum', 'Satış Otomasyonu', 'Email Marketing', 'Veri Yönetimi', 'Chatbot'],
        link: '/hizmetler/crm-otomasyon'
    },
    {
        id: 'print',
        icon: 'print',
        title: 'BASILI MEDYA',
        subtitle: 'Tasarımın dokunulabilir hali',
        description: 'Kartvizitten billboardlara, katalogdan ambalaja kadar markanızın eldeki hissini tasarlıyoruz.',
        tags: ['Katalog Tasarımı', 'Ambalaj & Etiket', 'Kurumsal Kimlik', 'Billboard', 'Dergi & Broşür'],
        link: '/hizmetler/basili-medya'
    }
];

export const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hizmetlerimiz - FOG İstanbul",
    "description": "FOG İstanbul'un sunduğu dijital pazarlama, web tasarım ve prodüksiyon hizmetleri.",
    "url": "https://fogistanbul.com/hizmetler",
    "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "description": service.description,
        "url": `https://fogistanbul.com${service.link}`
    }))
};
