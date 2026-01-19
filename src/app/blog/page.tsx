import { getPaginatedPosts, getAllTags } from '@/lib/ghost';
import BlogClient from './BlogClient';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Blog | FOG İstanbul',
    description: 'Dijital pazarlama, web tasarım trendleri, SEO ipuçları ve teknoloji dünyasından en güncel haberler ve stratejiler.',
    keywords: ['dijital pazarlama blog', 'web tasarım trendleri', 'seo ipuçları', 'teknoloji haberleri', 'dijital strateji', 'marketing blog'],
    openGraph: {
        title: 'Blog | FOG İstanbul',
        description: 'Dijital pazarlama, web tasarım trendleri, SEO ipuçları ve teknoloji dünyasından en güncel haberler ve stratejiler.',
        url: '/blog',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'FOG İstanbul Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | FOG İstanbul',
        description: 'Dijital pazarlama, web tasarım trendleri, SEO ipuçları ve teknoloji dünyasından en güncel haberler ve stratejiler.',
        images: ['/og-image.webp'],
    },
    alternates: {
        canonical: 'https://fogistanbul.com/blog',
    },
};

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "FOG İstanbul Blog",
    "description": "Dijital pazarlama, web tasarım trendleri, SEO ipuçları.",
    "url": "https://fogistanbul.com/blog"
};

// Revalidate every 60 seconds
export const revalidate = 60;

// Sayfa başına post sayısı
const POSTS_PER_PAGE = 12;

interface BlogPageProps {
    searchParams: Promise<{ page?: string; tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    // searchParams'ı await et (Next.js 15+)
    const params = await searchParams;
    
    // URL'den sayfa ve tag bilgisini al
    const currentPage = Math.max(1, parseInt(params.page || '1', 10));
    const activeTag = params.tag || undefined;

    // Server-side pagination ile postları getir
    const [{ posts, pagination }, tags] = await Promise.all([
        getPaginatedPosts(currentPage, POSTS_PER_PAGE, activeTag),
        getAllTags(),
    ]);

    return (
        <main className="blog-page-wrapper">
            <Script
                id="blog-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            {/* GRAIN OVERLAY */}
            <div className="blog-grain-overlay" />

            <BlogClient 
                posts={posts} 
                tags={tags}
                pagination={pagination}
                activeTag={activeTag}
            />
        </main>
    );
}
