// Portföy page data

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

export const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolyo - FOG İstanbul",
    "description": "Web tasarım, branding, prodüksiyon ve dijital pazarlama alanındaki seçilmiş projelerimiz.",
    "url": "https://fogistanbul.com/portfoy"
};

export interface Project {
    id: number;
    image: string;
    category: string;
    title: string;
    desc: string;
    tags: string[];
}

export const projects: Project[] = [
    { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', category: 'Web Tasarım', title: 'Vogue Moda', desc: 'Lüks moda markası için e-ticaret çözümü.', tags: ['web'] },
    { id: 2, image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', category: 'Dijital Pazarlama', title: 'Arch Studio', desc: 'Mimarlık ofisi kurumsal kimlik çalışması.', tags: ['digital', 'print'] },
    { id: 3, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', category: 'Web Tasarım', title: 'Nova FinTech', desc: 'Yeni nesil finansal yönetim asistanı.', tags: ['web'] },
    { id: 4, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', category: 'Web Tasarım', title: 'Modernist Galeri', desc: 'Online sanat galerisi ve müzayede platformu.', tags: ['web'] },
    { id: 5, image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', category: 'Dijital Pazarlama', title: 'NextGen Lansman', desc: 'Teknoloji girişimi için lansman kampanyası.', tags: ['digital', 'ads'] },
    { id: 6, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', category: 'Sosyal Medya', title: 'Coffee Lab', desc: '3. dalga kahve zinciri sosyal medya yönetimi.', tags: ['sosyal'] },
    { id: 7, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', category: 'Prodüksiyon', title: 'Urban Sneakers', desc: 'Sokak modası fotoğraf ve video prodüksiyonu.', tags: ['produksiyon'] },
    { id: 8, image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', category: 'Web Tasarım', title: 'Tech Summit 2024', desc: 'Global teknoloji konferansı web sitesi.', tags: ['web'] },
    { id: 9, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', category: 'Basılı Medya', title: 'Eco Life', desc: 'Sürdürülebilir yaşam ürünleri marka kimliği.', tags: ['print'] },
];

export interface Filter {
    id: string;
    label: string;
}

export const filters: Filter[] = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web Tasarım' },
    { id: 'digital', label: 'Dijital Pazarlama' },
    { id: 'sosyal', label: 'Sosyal Medya' },
    { id: 'produksiyon', label: 'Prodüksiyon' },
    { id: 'ads', label: 'Reklam Yönetimi' },
    { id: 'content', label: 'İçerik Pazarlama' },
    { id: 'crm', label: 'CRM & Otomasyon' },
    { id: 'print', label: 'Basılı Medya' },
];
