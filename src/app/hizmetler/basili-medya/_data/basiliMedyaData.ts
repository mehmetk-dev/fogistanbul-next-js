export const images = {
    catalogMockup: "/assets/services/catalog-mockup.webp",
    brochureMockup: "/assets/services/fog-brochure-mockup.png",
    stationeryMockup: "/assets/services/fog-stationery-mockup.png",
};

export const processSteps = [
    {
        id: '01',
        title: 'KEŞİF & ANALİZ',
        desc: "Markanızın DNA'sını çözümlüyor, rakipleri inceliyor ve görsel rotamızı verilerle çiziyoruz.",
        position: 'left'
    },
    {
        id: '02',
        title: 'STRATEJİ & KONSEPT',
        desc: "Sadece güzel değil, akıllıca. İletişim stratejinize uygun, özgün bir görsel dünya kurguluyoruz.",
        position: 'right'
    },
    {
        id: '03',
        title: 'TASARIM & DOKUNUŞ',
        desc: "Tipografi, renk teorisi ve doku. Her detayı estetik ve fonksiyonla işliyoruz.",
        position: 'left'
    },
    {
        id: '04',
        title: 'ÜRETİM & KALİTE',
        desc: "Dijital tasarımı fiziğe kusursuz aktarıyoruz. Baskı öncesi ve sonrası titiz kontrol.",
        position: 'right'
    }
];

export const portfolioItems = [
    {
        title: 'KATALOG TASARIMI',
        cat: 'EDITORIAL',
        img: images.catalogMockup,
        desc: 'Okuyucuyu içine çeken, dokusuyla yaşayan tasarımlar.'
    },
    {
        title: 'KURUMSAL KİMLİK',
        cat: 'BRANDING',
        img: images.stationeryMockup,
        desc: 'Markanızın imzasını taşıyan prestijli ofis materyalleri.'
    },
    {
        title: 'BROŞÜR & BASKI',
        cat: 'MARKETING',
        img: images.brochureMockup,
        desc: 'Etkileyici ve akılda kalıcı baskı çözümleri.'
    },
];

export const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basılı Medya Tasarımı - FOG İstanbul",
    "description": "Katalog, broşür, kurumsal kimlik ve ambalaj tasarımı hizmetleri.",
    "provider": {
        "@type": "Organization",
        "name": "FOG İstanbul"
    }
};
