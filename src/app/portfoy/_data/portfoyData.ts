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
    "description": "FOG İstanbul'un yayın izni alınmış gerçek çalışmalarının paylaşılacağı portfolyo sayfası.",
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

// Yalnızca yayın izni alınmış, gerçek müşteri çalışmaları buraya eklenecek.
export const projects: Project[] = [];

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
