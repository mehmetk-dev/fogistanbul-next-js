// Hakkımızda page data

export const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Hakkımızda - FOG İstanbul",
    "description": "FOG İstanbul (Focus On Growth), işletmelerin büyümesine odaklanan dijital çözümler grubu. KOBİ'ler ve markalar için anlaşılır stratejiler.",
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

export const team = [
    { name: 'Enes Duman', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80' },
    { name: 'Burcu Aldığ', role: 'Content & SEO', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80' },
    { name: 'Mehmet Kerem', role: 'Web Development', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80' },
    { name: 'Hakan Enes', role: 'Video Production', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80' }
];

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
