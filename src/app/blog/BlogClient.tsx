"use client";
import { useState } from 'react';
import { GhostPost, GhostTag } from '@/lib/ghost';
import styles from './BlogClient.module.css';
import { BlogHero, BlogFilters, BlogGrid, BlogFooter } from '@/app/blog/_components';

interface BlogClientProps {
    initialPosts: GhostPost[];
    tags: GhostTag[];
}

const BlogClient = ({ initialPosts, tags }: BlogClientProps) => {
    // State
    const [posts] = useState<GhostPost[]>(initialPosts);
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter Logic
    const filteredPosts = posts.filter(post => {
        const matchesTag = activeTag ? post.primary_tag && post.primary_tag.slug === activeTag : true;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTag && matchesSearch;
    });

    // Pagination Logic
    const postsPerPage = 12;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Handlers
    const handleTagChange = (slug: string | null) => {
        setActiveTag(slug);
        setCurrentPage(1);
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
    };

    return (
        <div className={styles.blogPage}>

            <BlogHero postCount={filteredPosts.length} />

            <BlogFilters
                tags={tags}
                activeTag={activeTag}
                searchTerm={searchTerm}
                onTagChange={handleTagChange}
                onSearchChange={handleSearchChange}
            />

            <BlogGrid
                posts={currentPosts}
                totalPosts={filteredPosts.length}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <BlogFooter />

        </div>
    );
};

export default BlogClient;
