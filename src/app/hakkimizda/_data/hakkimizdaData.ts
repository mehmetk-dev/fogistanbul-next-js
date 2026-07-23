// Hakkımızda page data

export const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Hakkımızda - FOG İstanbul",
    "description": "FOG İstanbul (Focus On Growth), firmaları ve markaları dijital dünyaya taşıyan, büyüme odaklı dijital dönüşüm ajansıdır.",
    "url": "https://fogistanbul.com/hakkimizda",
    "publisher": {
        "@type": "Organization",
        "name": "FOG İstanbul",
        "logo": {
            "@type": "ImageObject",
            "url": "https://fogistanbul.com/logo.png"
        }
    }
};

export const processes = [
    { id: '01', title: 'DİNLEME & ANALİZ', desc: 'Sizi, bütçenizi ve hedeflerinizi anlıyoruz. İhtiyacınız olmayanı önermiyoruz.' },
    { id: '02', title: 'STRATEJİ', desc: 'Bütçenizi en verimli kullanacak dijital yol haritasını kurguluyoruz.' },
    { id: '03', title: 'ÜRETİM', desc: 'Web sitesinden sosyal medyaya, markanız için gereken tüm içerikleri üretiyoruz.' },
    { id: '04', title: 'SONUÇ', desc: 'Sadece güzel görünen değil, size gerçek müşteri kazandıran işler yapıyoruz.' }
];

export const offices = [
    { name: 'İSTANBUL OFİS', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
    { name: 'BURSA OFİS', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80' }
];
