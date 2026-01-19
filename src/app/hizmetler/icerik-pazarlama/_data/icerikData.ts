export const heroNodes = [
    {
        icon: 'article',
        title: 'SEO Uyumlu',
        sub: 'Blog Yazıları',
        className: 'node-1'
    },
    {
        icon: 'movie',
        title: 'YouTube & Reels',
        sub: 'Video Senaryo',
        className: 'node-2'
    },
    {
        icon: 'chat_bubble',
        title: 'Sosyal Medya',
        sub: 'Post Metinleri',
        className: 'node-3'
    },
    {
        icon: 'campaign',
        title: 'Reklam & Tanıtım',
        sub: 'Copywriting',
        className: 'node-4'
    }
];

export const bentoGridItems = [
    {
        num: '01',
        title: 'SEO Uyumlu Blog & Makale',
        desc: "Google'ın sevdiği, kullanıcıların okuduğu içerikler. Anahtar kelime analizi, rakip incelemesi ve semantik yapı ile web sitenizin organik trafiğini artırıyoruz.",
        icon: 'find_in_page',
        span2: true
    },
    {
        num: '02',
        title: 'Video Senaryosu',
        desc: "YouTube videolarınız ve Reels içerikleriniz için akıcı, izleyiciyi tutan profesyonel senaryo yazımı.",
        icon: 'movie_edit',
        span2: false
    },
    {
        num: '03',
        title: 'Sosyal Medya Metinleri',
        desc: "Görsellerinizi tamamlayan, etkileşim getiren ve marka dilinizi yansıtan post açıklamaları (captions).",
        icon: 'post_add',
        span2: false
    },
    {
        num: '04',
        title: 'Reklam Yazarlığı (Copywriting)',
        desc: "Satış odaklı landing page metinleri, reklam sloganları ve e-posta bültenleri. Müşteriyi harekete geçiren, ikna edici kelimeler.",
        icon: 'psychology_alt',
        span2: true
    }
];

export const processSteps = [
    {
        num: '01',
        title: 'Analiz ve Strateji',
        desc: 'Sektörünüzü, rakiplerinizi ve hedef kitlenizi derinlemesine analiz ederek içerik haritasını çıkartıyoruz.'
    },
    {
        num: '02',
        title: 'Üretim ve Optimizasyon',
        desc: 'Uzman yazarlarımız devreye girer. SEO kriterlerine uygun, marka dilinizi yansıtan orijinal içerikler hazırlanır.'
    },
    {
        num: '03',
        title: 'Yayın ve Raporlama',
        desc: 'İçerikler planlanan takvimde yayınlanır. Etkileşim ve trafik verileri düzenli olarak raporlanır.'
    }
];

export const floatingKeywords = [
    { text: '#Google Birincisi', style: { top: '20%', left: '15%', color: '#ed6d8f', borderColor: '#ed6d8f', transform: 'rotate(-10deg)', background: 'rgba(238,43,124,0.1)' } },
    { text: 'Organik Trafik', style: { bottom: '25%', right: '15%', color: '#aaa', borderColor: 'rgba(255,255,255,0.1)', transform: 'rotate(5deg)', background: 'rgba(255,255,255,0.05)' } },
    { text: 'Anahtar Kelime', style: { top: '30%', right: '20%', color: '#aaa', borderColor: 'rgba(255,255,255,0.1)', transform: 'rotate(15deg)', background: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', padding: '8px 16px' } },
    { text: 'Backlink & Otorite', style: { bottom: '20%', left: '20%', color: '#ed6d8f', borderColor: '#ed6d8f', transform: 'rotate(-5deg)', background: 'rgba(238,43,124,0.1)', fontSize: '0.8rem', padding: '8px 16px' } }
];

export const heroLogo = "/assets/fog_logo_pink.png";

export const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "İçerik Pazarlama ve SEO - FOG İstanbul",
    "description": "SEO uyumlu blog, video senaryosu ve sosyal medya metinleri ile dijital görünürlüğünüzü artırın.",
    "provider": {
        "@type": "Organization",
        "name": "FOG İstanbul"
    }
};
