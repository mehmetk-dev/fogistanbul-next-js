import { getPostBySlug, getRelatedPosts } from '@/lib/ghost';
import BlogPostClient from './BlogPostClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Script from 'next/script';

// Revalidate every 60 seconds
export const revalidate = 60;

type Props = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: '404 - Not Found',
        }
    }

    const cleanDescription = (post.meta_description || post.custom_excerpt || post.excerpt || '').replace(/\n/g, ' ').substring(0, 160);

    return {
        title: post.meta_title || post.title,
        description: cleanDescription,
        openGraph: {
            title: post.meta_title || post.title,
            description: cleanDescription,
            images: post.feature_image ? [post.feature_image] : [],
        },
        alternates: {
            canonical: post.canonical_url || `https://fogistanbul.com/blog/${slug}`,
        }
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(post.tags || [], post.id);

    return (
        <main className="blog-post-page-wrapper">
            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="blog-post-glow blog-post-glow-1" />
            <div className="blog-post-glow blog-post-glow-2" />
            <div className="blog-post-glow blog-post-glow-3" />

            {/* Schema */}
            <Script
                id="blog-post-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": (post.meta_description || post.excerpt || post.title)?.replace(/\n/g, ' '),
                        "image": post.feature_image,
                        "author": {
                            "@type": "Person",
                            "name": post.authors?.[0]?.name || "FOG İstanbul Team"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "FOG İstanbul",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://fogistanbul.com/logo.png"
                            }
                        },
                        "datePublished": post.published_at,
                        "dateModified": post.updated_at || post.published_at
                    })
                }}
            />

            <BlogPostClient post={post} relatedPosts={relatedPosts} />
        </main>
    );
}
