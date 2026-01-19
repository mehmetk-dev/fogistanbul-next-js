/* eslint-disable @next/next/no-img-element */
'use client';
import { GhostPost } from '@/lib/ghost';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './BlogPostClient.module.css';

type Props = {
    post: GhostPost;
    relatedPosts: GhostPost[];
}

export default function BlogPostClient({ post, relatedPosts }: Props) {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Scroll Progress Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const calculateReadingTime = (html: string) => {
        const text = html.replace(/<[^>]*>/g, '').trim();
        const words = text.split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // 200 kelime/dakika
        return readingTime;
    };

    const author = post.authors?.[0] || { name: 'FOG İstanbul', profile_image: null };
    const readingTime = calculateReadingTime(post.html);

    return (
        <div className={styles.blogPostPage}>
            <div className={styles.scrollProgressBar} style={{ width: `${scrollProgress}%` }} />

            {/* HEADER SECTION */}
            <div className={styles.headerContainer}>
                <Link href="/blog" className={styles.backLink}>
                    <span>←</span> LİSTEYE DÖN
                </Link>

                {/* TITLE */}
                <h1 className={styles.postTitle}>{post.title}</h1>

                {/* AUTHOR INFO */}
                <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                        {author.profile_image ? (
                            <img src={author.profile_image} alt={author.name} />
                        ) : (
                            <div className={styles.avatarPlaceholder}>
                                <span className="material-symbols-outlined">person</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.authorDetails}>
                        <div className={styles.authorName}>{author.name}</div>
                        <div className={styles.authorMeta}>
                            {formatDate(post.published_at)} — {readingTime} dk okuma
                        </div>
                    </div>
                </div>

                {/* FEATURE IMAGE */}
                {post.feature_image && (
                    <div className={styles.featureImageContainer}>
                        <img
                            src={post.feature_image}
                            alt={post.title}
                            className={styles.featureImage}
                        />
                    </div>
                )}
            </div>

            {/* CONTENT */}
            <article className={styles.contentWrapper}>
                <div className="ghost-content" dangerouslySetInnerHTML={{ __html: post.html }} />

                <div className={styles.endDecoration}>
                    <div className={styles.endDecorationLine}></div>
                    <span className={styles.endDecorationText}>SON</span>
                    <div className={styles.endDecorationLine}></div>
                </div>
            </article>

            {/* RELATED POSTS */}
            {relatedPosts.length > 0 && (
                <section className={styles.relatedSection}>
                    <div className={styles.relatedContainer}>
                        <div className={styles.relatedHeader}>
                            <h3 className={styles.relatedHeaderTitle}>İLGİNİZİ ÇEKEBİLİR</h3>
                            <div className={styles.relatedHeaderLine}></div>
                        </div>
                        <div className={styles.relatedGrid}>
                            {relatedPosts.slice(0, 3).map(p => (
                                <Link key={p.id} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                                    <div className={styles.rcImageWrapper}>
                                        <img 
                                            src={p.feature_image && p.feature_image.trim() ? p.feature_image : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80'} 
                                            alt={p.title} 
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.src !== 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80') {
                                                    target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80';
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className={styles.rcContent}>
                                        <div className={styles.rcMeta}>
                                            <span className={styles.rcTag}>#{p.primary_tag?.name || 'Blog'}</span>
                                            <span>•</span>
                                            <span>{formatDate(p.published_at)}</span>
                                        </div>
                                        <h4 className={styles.rcTitle}>{p.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
