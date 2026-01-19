export const adPlatforms = [
    {
        name: 'GOOGLE ADS',
        head: 'SEARCH • SHOPPING • YOUTUBE',
        desc: '"Şu ürünü arıyorum" diyen kişilere tam o anda görünün. Satın almaya en yakın müşterileri web sitenize çekiyor, bütçenizi boşa harcamıyoruz.',
        color: '#4285F4',
        mainIcon: 'https://cdn.simpleicons.org/googleads',
        subIcons: [
            { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', alt: 'Google' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg', alt: 'YouTube' }
        ]
    },
    {
        name: 'META ADS',
        head: 'INSTAGRAM • FACEBOOK',
        desc: "Instagram ve Facebook'ta göz alıcı reklamlarla markanızı binlerce kişiye tanıtın. Aklında kalan görseller, tamamlanmayan alışverişler için hatırlatmalar.",
        color: '#C13584',
        mainIcon: 'https://cdn.simpleicons.org/meta/0668E1',
        subIcons: [
            { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg', alt: 'Instagram' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg', alt: 'Facebook' }
        ]
    },
    {
        name: 'TIKTOK ADS',
        head: 'VİRAL • GEN Z',
        desc: 'Genç nesle ulaşmanın en etkili yolu. Trend videolarla ürününüzü viral hale getiriyoruz. Reklam gibi durmuyor, içerik gibi tüketiliyor.',
        color: '#00f2ea',
        mainIcon: 'https://cdn.simpleicons.org/tiktok/ffffff',
        subIcons: [] // No sub icons
    },
    {
        name: 'LINKEDIN ADS',
        head: 'B2B • KURUMSAL',
        desc: 'Şirketlere veya profesyonellere hizmet mi sunuyorsunuz? Doğru kişilere (müdürler, satın alma sorumlusu) doğrudan ulaşın. Kurumsal satış sürecinizi hızlandırın.',
        color: '#0A66C2',
        mainIcon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
        subIcons: [] // No sub icons
    }
];

export const performanceData = {
    spend: '₺12.450',
    revenue: '₺145.890',
    roas: '11.7x'
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reklam Yönetimi - FOG İstanbul",
    "description": "Google, Meta, TikTok ve LinkedIn reklamları ile nokta atışı büyüme. Şeffaf bütçe yönetimi ve yüksek ROAS.",
    "provider": {
        "@type": "Organization",
        "name": "FOG İstanbul"
    }
};
