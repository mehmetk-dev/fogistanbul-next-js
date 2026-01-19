"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GhostPost } from '@/lib/ghost';
import Pagination from './Pagination';
import styles from './BlogGrid.module.css';

interface BlogGridProps {
    posts: GhostPost[];
    totalPosts: number; // Not used for logic, but maybe for info
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BlogGrid({ posts, currentPage, totalPages, onPageChange }: BlogGridProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return { day: '', month: '', year: '' };
        const date = new Date(dateStr);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleDateString('tr-TR', { month: 'short' }).toUpperCase(),
            year: date.getFullYear()
        };
    };

    return (
        <section className={styles.gridSection}>
            {posts.length === 0 ? (
                <div className={styles.emptyState}>
                    Aradığınız blog yazısı bulunamadı.
                </div>
            ) : (
                <>
                    <div className={styles.postsGrid}>
                        {posts.map((post, index) => {
                            const date = formatDate(post.published_at || post.created_at);
                            const isHovered = hoveredId === post.id;
                            const categoryName = post.primary_tag ? post.primary_tag.name : null;

                            return (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className={styles.postCard}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                    onMouseEnter={() => setHoveredId(post.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Image Container */}
                                    <div className={styles.imageContainer}>
                                        <Image
                                            className={styles.postImage}
                                            src={post.feature_image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80'}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={75}
                                            loading="lazy"
                                        />
                                        <div className={`${styles.imageOverlay} ${isHovered ? '' : styles.imageOverlayVisible}`} />
                                    </div>

                                    {/* Meta & Title */}
                                    <div className={styles.metaRow}>
                                        {categoryName && (
                                            <span className={styles.categoryTag}>
                                                {categoryName}
                                            </span>
                                        )}
                                        <span className={styles.dateText}>
                                            {date.day}.{date.month}.{date.year}
                                        </span>
                                    </div>

                                    <h2 className={`magnetic-title ${styles.postTitle}`}>
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    {(post.excerpt || post.custom_excerpt) && (
                                        <p className={styles.excerpt}>
                                            {(post.custom_excerpt || post.excerpt)}
                                        </p>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </>
            )}
        </section>
    );
}
