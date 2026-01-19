"use client";
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { GhostPost, GhostTag, GhostPagination } from '@/lib/ghost';
import styles from './BlogClient.module.css';
import { BlogHero, BlogFilters, BlogGrid, BlogFooter } from '@/app/blog/_components';

interface BlogClientProps {
    posts: GhostPost[];
    tags: GhostTag[];
    pagination: GhostPagination;
    activeTag?: string;
}

const BlogClient = ({ posts, tags, pagination, activeTag }: BlogClientProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Client-side arama için state (server'a gitmeden filtreler)
    const [searchTerm, setSearchTerm] = useState('');

    // Client-side arama filtresi (sadece mevcut sayfadaki postları filtreler)
    const filteredPosts = posts.filter(post => {
        if (!searchTerm) return true;
        return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // URL'i güncelle (sayfa değişimi veya tag değişimi)
    const updateUrl = useCallback((params: { page?: number; tag?: string | null }) => {
        const current = new URLSearchParams(searchParams.toString());
        
        if (params.page !== undefined) {
            if (params.page <= 1) {
                current.delete('page');
            } else {
                current.set('page', params.page.toString());
            }
        }
        
        if (params.tag !== undefined) {
            if (params.tag === null || params.tag === '') {
                current.delete('tag');
            } else {
                current.set('tag', params.tag);
            }
            // Tag değişince sayfayı 1'e sıfırla
            current.delete('page');
        }
        
        const query = current.toString();
        router.push(query ? `/blog?${query}` : '/blog');
    }, [router, searchParams]);

    // Tag değişimi handler
    const handleTagChange = (slug: string | null) => {
        updateUrl({ tag: slug });
    };

    // Arama handler (client-side, URL'e gitmez)
    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
    };

    // Sayfa değişimi handler
    const handlePageChange = (page: number) => {
        updateUrl({ page });
        window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
    };

    return (
        <div className={styles.blogPage}>

            <BlogHero postCount={pagination.total} />

            <BlogFilters
                tags={tags}
                activeTag={activeTag || null}
                searchTerm={searchTerm}
                onTagChange={handleTagChange}
                onSearchChange={handleSearchChange}
            />

            <BlogGrid
                posts={filteredPosts}
                totalPosts={pagination.total}
                currentPage={pagination.page}
                totalPages={pagination.pages}
                onPageChange={handlePageChange}
            />

            <BlogFooter />

        </div>
    );
};

export default BlogClient;
