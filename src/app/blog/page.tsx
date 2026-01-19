import { getAllPosts, getAllTags } from '@/lib/ghost';
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

export default async function BlogPage() {
    const posts = await getAllPosts();
    const tags = await getAllTags();

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

            <BlogClient initialPosts={posts} tags={tags} />
        </main>
    );
}
