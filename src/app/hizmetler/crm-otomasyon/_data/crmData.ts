export const bentoStats = [
    {
        title: 'KURUMSAL HAFIZA',
        value: '%100',
        desc: 'Personel değişse bile veri asla kaybolmaz. Tüm müşteri geçmişi güvende.',
        icon: 'memory',
        color: '#00ff88',
        progress: '100%'
    },
    {
        title: 'KESİNTİSİZ ERİŞİM',
        value: '7/24',
        desc: 'Ofise bağımlılığı ortadan kaldırın. Dünyanın her yerinden, her cihazdan yönetim.',
        icon: 'cloud_upload',
        color: '#ed6d8f',
        progress: '100%'
    },
    {
        title: 'OPERASYONEL KAOS',
        value: '0',
        desc: 'Manuel hataları ve unutulan işleri sıfıra indirin. Tam otomasyon.',
        icon: 'done_all',
        color: '#fff',
        progress: '0%'
    }
];

export const workflowSteps = [
    {
        label: 'YENİ LEAD',
        sub: 'Web Formu & Data',
        icon: 'person_search',
        status: 'status-lead'
    },
    {
        label: 'İLİŞKİ KURMA',
        sub: 'Otomatik Mailler',
        icon: 'mark_chat_read',
        status: 'status-process'
    },
    {
        label: 'TEKLİF',
        sub: 'PDF Sunum',
        icon: 'request_quote',
        status: 'status-offer'
    },
    {
        label: 'ANLAŞMA',
        sub: 'Satış & Tahsilat',
        icon: 'handshake',
        status: 'status-won'
    }
];

export const comparisonData = {
    chaos: {
        img: "/assets/services/crm-chaos.webp",
        label: "MANUEL KAOS",
        color: "#ff4d4d",
        alt: "Manuel Kaos"
    },
    system: {
        img: "/assets/services/crm-system.webp",
        label: "DİJİTAL SİSTEM",
        color: "#00ff88",
        alt: "Dijital Sistem"
    }
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRM ve Otomasyon Sistemleri - FOG İstanbul",
    "description": "İş süreçlerinizi optimize eden CRM ve otomasyon çözümleri. Kurumsal hafıza ve veri güvenliği.",
    "provider": {
        "@type": "Organization",
        "name": "FOG İstanbul"
    }
};
