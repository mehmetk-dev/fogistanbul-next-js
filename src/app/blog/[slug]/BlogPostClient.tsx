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
        return date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className={styles.blogPostPage}>
            <div className={styles.scrollProgressBar} style={{ width: `${scrollProgress}%` }} />

            {/* HERO SECTION MATCHING VITE PROJECT */}
            <div className={styles.heroContainer}>
                <Link href="/blog" className={styles.backLink}>
                    <span>←</span> LİSTEYE DÖN
                </Link>

                <div className={styles.heroCard}>
                    {post.feature_image && (
                        <img
                            src={post.feature_image}
                            alt={post.title}
                            className={styles.heroImage}
                        />
                    )}
                    {/* Gradient Overlay */}
                    <div className={styles.heroOverlay}></div>

                    {/* Content Overlay */}
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            {post.primary_tag && <span className={styles.tag}>{post.primary_tag.name}</span>}
                            <span>{formatDate(post.published_at)}</span>
                            <span>•</span>
                            <span>{post.authors?.[0]?.name || 'FOG İstanbul'}</span>
                        </div>
                        <h1 className={styles.postTitle}>{post.title}</h1>
                    </div>
                </div>
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
                                        <img src={p.feature_image || ''} alt={p.title} />
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

            {/* BACK TO LIST BOTTOM */}
            <div className={styles.bottomBackBtn}>
                <Link href="/blog" className={styles.pillBtn}>
                    <span>←</span> Tüm Yazılar
                </Link>
            </div>
        </div>
    );
}
