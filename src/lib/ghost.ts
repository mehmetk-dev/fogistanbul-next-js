import GhostContentAPI from '@tryghost/content-api';
import { unstable_cache } from 'next/cache';
import { env } from './env';

// Ghost API singleton instance
// Uses validated environment variables from env.ts
const api = new GhostContentAPI({
    url: env.NEXT_PUBLIC_GHOST_URL,
    key: env.NEXT_PUBLIC_GHOST_CONTENT_KEY,
    version: 'v5.0'
});

export interface GhostPost {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    feature_image: string | null;
    featured: boolean;
    excerpt: string;
    custom_excerpt: string | null;
    meta_title: string | null;
    meta_description: string | null;
    published_at: string;
    updated_at: string;
    created_at: string;
    tags?: GhostTag[];
    authors?: GhostAuthor[];
    primary_tag?: GhostTag;
    primary_author?: GhostAuthor;
    canonical_url?: string;
}

export interface GhostTag {
    id: string;
    name: string;
    slug: string;
    description: string | null;
}

export interface GhostAuthor {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    bio: string | null;
}

/**
 * Tüm blog yazılarını getir
 * Cache: 60 saniye (ISR + unstable_cache)
 */
export async function getAllPosts(): Promise<GhostPost[]> {
    return unstable_cache(
        async () => {
            try {
                const posts = await api.posts.browse({
                    include: ['tags', 'authors'],
                    limit: 'all',
                    order: 'published_at DESC',
                });
                return posts as GhostPost[];
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error fetching posts:', error);
                }
                return [];
            }
        },
        ['all-posts'],
        {
            revalidate: 60,
            tags: ['posts'],
        }
    )();
}

// Next.js cache configuration
export const revalidate = 60; // Revalidate every 60 seconds

/**
 * Tek bir blog yazısını slug ile getir
 * Cache: 60 saniye (ISR + unstable_cache)
 */
export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
    return unstable_cache(
        async () => {
            try {
                const post = await api.posts.read(
                    { slug },
                    { include: ['tags', 'authors'] }
                );
                return post as GhostPost;
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(`Error fetching post ${slug}:`, error);
                }
                return null;
            }
        },
        [`post-${slug}`],
        {
            revalidate: 60,
            tags: ['posts', `post-${slug}`],
        }
    )();
}

/**
 * İlgili yazıları getir (aynı tag'e sahip)
 */
export async function getRelatedPosts(
    tags: GhostTag[],
    currentPostId: string,
    limit: number = 3
): Promise<GhostPost[]> {
    if (!tags || tags.length === 0) {
        // Tag yoksa son yazıları getir
        return getRecentPosts(limit, currentPostId);
    }

    try {
        const tagSlugs = tags.map((tag) => tag.slug).join(',');
        const posts = (await api.posts.browse({
            include: ['tags', 'authors'],
            filter: `tag:[${tagSlugs}]+id:-${currentPostId}`,
            limit,
        })) as GhostPost[];

        // Yeterli yazı bulamazsak, son yazılarla tamamla
        if (posts.length < limit) {
            const remaining = limit - posts.length;
            const existingIds = posts.map((p) => p.id);
            const recentPosts = await getRecentPosts(remaining, currentPostId, existingIds);
            return [...posts, ...recentPosts] as GhostPost[];
        }

        return posts as GhostPost[];
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching related posts:', error);
        }
        return [];
    }
}

/**
 * Son yayınlanan yazıları getir
 */
async function getRecentPosts(
    limit: number,
    excludeId?: string,
    excludeIds: string[] = []
): Promise<GhostPost[]> {
    try {
        const allExcluded = excludeId ? [excludeId, ...excludeIds] : excludeIds;
        const filterIds = allExcluded.join(',');

        const posts = await api.posts.browse({
            include: ['tags', 'authors'],
            filter: filterIds ? `id:-[${filterIds}]` : undefined,
            limit,
            order: 'published_at DESC',
        });

        return posts as GhostPost[];
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching recent posts:', error);
        }
        return [];
    }
}

/**
 * Tüm tag'leri getir
 * Cache: 60 saniye (ISR + unstable_cache)
 */
export async function getAllTags(): Promise<GhostTag[]> {
    return unstable_cache(
        async () => {
            try {
                const tags = await api.tags.browse({
                    limit: 'all',
                    filter: 'visibility:public',
                });
                return tags as GhostTag[];
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error fetching tags:', error);
                }
                return [];
            }
        },
        ['all-tags'],
        {
            revalidate: 60,
            tags: ['tags'],
        }
    )();
}
