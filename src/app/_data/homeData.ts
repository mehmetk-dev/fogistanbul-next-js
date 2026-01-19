// Home page data - extracted from HomeClient.tsx
import { colors as designColors } from '@/design-system/colors';

// Re-export colors from design system for backward compatibility
export const colors = {
    primary: designColors.primary,           // #ed6d8f - Standard Pink
    primaryDark: designColors.primaryDark,
    bgDark: designColors.bgDark,
    bgDarker: designColors.bgDarker,
    surfaceDark: designColors.surfaceDark,
    borderDark: designColors.borderDark,
    textGray: designColors.textGray,
    textLight: designColors.textLight,
};

// Rotating content for hero
export const rotatingContent = [
    {
        word: "GROWTH",
        subtitle: "Müşterileriniz ayağınıza gelsin! Dijital mağazanızla kepenkleriniz hiç kapanmasın!",
    },
    {
        word: "SOSYAL MEDYA",
        subtitle: "Organik takipçi kazandırıyor, etkileşimi katlıyoruz! Hesabınız anasayfada kayıp geçmeyin!",
    },
    {
        word: "CRM",
        subtitle: "Tek çatıda, tek programda… firmaya dair hemen her şeyi bir araya getirebiliyoruz!",
    },
    {
        word: "REKLAM",
        subtitle: "Kimse bir tık uzağınızda kalmayacak! Hedef kitlenin her zaman odağında olun!",
    },
    {
        word: "PAZARLAMA",
        subtitle: "Özgün içerik, özgün marka! İstatistiklerle gerçek marka, gerçek büyüme!",
    },
    {
        word: "WEBSİTE",
        subtitle: "Dijital mağazanızın vitrinini sizin zevkinize göre tasarlayalım!",
    },
    {
        word: "DİJİTAL",
        subtitle: "Doğru ışık, doğru açı, doğru ajans ile kayda geçin! Kadrajımızda markanız var!",
    },
    {
        word: "PRODÜKSİYON",
        subtitle: "Yerinde hizmet! Işıklar hep üzerinizde!",
    },
    {
        word: "MEDYA",
        subtitle: "Multi-channel medya stratejileri ile maksimum ulaşım sağlıyoruz!",
    },
];

// Services data - Kompakt ve modern kartlar için
export const services = [
    {
        icon: 'campaign',
        title: 'Dijital Pazarlama',
        tagline: 'Marka bilinirliğinizi artırın',
        link: '/hizmetler/dijital-pazarlama'
    },
    {
        icon: 'share',
        title: 'Sosyal Medya',
        tagline: 'Etkileşiminizi katlıyoruz',
        link: '/hizmetler/sosyal-medya'
    },
    {
        icon: 'web',
        title: 'Web Tasarım',
        tagline: 'Dijital vitrininizi tasarlıyoruz',
        link: '/hizmetler/web-tasarim'
    },
    {
        icon: 'photo_camera',
        title: 'Prodüksiyon',
        tagline: 'Hikayenizi sinematik anlatın',
        link: '/hizmetler/produksiyon'
    },
    {
        icon: 'ads_click',
        title: 'Reklam Yönetimi',
        tagline: 'Nokta atışı büyüme',
        link: '/hizmetler/reklam-yonetimi'
    },
    {
        icon: 'edit_note',
        title: 'İçerik Pazarlama',
        tagline: 'Stratejik içerik yönetimi',
        link: '/hizmetler/icerik-pazarlama'
    },
    {
        icon: 'hub',
        title: 'CRM & Otomasyon',
        tagline: 'Şirketinizin dijital beyni',
        link: '/hizmetler/crm-otomasyon'
    },
    {
        icon: 'print',
        title: 'Basılı Medya',
        tagline: 'Tasarımın dokunulabilir hali',
        link: '/hizmetler/basili-medya'
    },
];

// Portfolio/Projects data
export const projects = [
    {
        title: 'E-Ticaret Platformu',
        category: 'Web Geliştirme',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
        description: 'Modern ve hızlı alışveriş deneyimi'
    },
    {
        title: 'Marka Kimliği Tasarımı',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
        description: 'Kurumsal kimlik ve logo tasarımı'
    },
    {
        title: 'Sosyal Medya Yönetimi',
        category: 'Dijital Pazarlama',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
        description: 'Organik büyüme ve içerik stratejisi'
    },
    {
        title: 'Mobil Uygulama',
        category: 'App Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
        description: 'iOS ve Android uygulama geliştirme'
    },
    {
        title: 'Kurumsal Website',
        category: 'Web Tasarım',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
        description: 'Responsive ve modern web tasarımı'
    },
    {
        title: 'Video Prodüksiyon',
        category: 'Prodüksiyon',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
        description: 'Profesyonel video ve fotoğraf çekimi'
    }
];

// Schema.org Verisi - Ajans Bilgileri
export const agencySchema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "FOG İstanbul",
    "image": "https://fogistanbul.com/logo.png",
    "@id": "https://fogistanbul.com",
    "url": "https://fogistanbul.com",
    "telephone": "+902125550000",
    "priceRange": "$$",
    "description": "İstanbul merkezli FOG Ajans; Web Tasarım, Sosyal Medya Yönetimi, SEO ve Video Prodüksiyon hizmetleri sunan 360° dijital performans ajansıdır.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "İstanbul",
        "addressCountry": "TR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.0082,
        "longitude": 28.9784
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.instagram.com/fogistanbul",
        "https://www.linkedin.com/company/fogistanbul"
    ]
};
