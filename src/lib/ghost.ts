import GhostContentAPI from '@tryghost/content-api';
import { unstable_cache } from 'next/cache';
import { env } from './env';

/**
 * Ghost URL'leri:
 * - GHOST_INTERNAL_URL: Docker network içi (SSR fetch için) - http://ghost-app:2368
 * - NEXT_PUBLIC_GHOST_URL: Public URL (tarayıcıda görseller için) - https://blog.fogistanbul.com
 * 
 * API çağrıları internal URL kullanır (daha hızlı, network içi)
 * Görseller public URL kullanır (tarayıcıdan erişilebilir olmalı)
 */
const ghostApiUrl = env.GHOST_INTERNAL_URL || env.NEXT_PUBLIC_GHOST_URL;
const ghostPublicUrl = env.NEXT_PUBLIC_GHOST_URL;

// Ghost API singleton instance
// Uses internal URL for API calls (Docker network)
const api = new GhostContentAPI({
    url: ghostApiUrl,
    key: env.NEXT_PUBLIC_GHOST_CONTENT_KEY,
    version: 'v5.0'
});

/**
 * Internal Ghost URL'i public URL'e dönüştür (görseller için)
 * Bu fonksiyon, API'den dönen internal URL'leri tarayıcının erişebileceği
 * public URL'lere çevirir.
 */
export function convertToPublicUrl(url: string | null): string | null {
    if (!url) return null;
    if (!env.GHOST_INTERNAL_URL) return url; // Internal URL yoksa dönüştürme gerekmez
    
    // Internal URL'i public URL ile değiştir
    return url.replace(env.GHOST_INTERNAL_URL, ghostPublicUrl);
}

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
 * Post'taki internal URL'leri public URL'lere dönüştür
 */
function normalizePostUrls(post: GhostPost): GhostPost {
    return {
        ...post,
        feature_image: convertToPublicUrl(post.feature_image),
        authors: post.authors?.map(author => ({
            ...author,
            profile_image: convertToPublicUrl(author.profile_image),
        })),
    };
}

/**
 * Tüm blog yazılarını getir (cache'siz - sitemap için)
 * Sitemap ve diğer kritik yerlerde kullanılır
 */
export async function getAllPostsNoCache(): Promise<GhostPost[]> {
    try {
        const posts = await api.posts.browse({
            include: ['tags', 'authors'],
            limit: 'all',
            order: 'published_at DESC',
        });
        return (posts as GhostPost[]).map(normalizePostUrls);
    } catch (error) {
        console.error('[Ghost] Error fetching posts (no cache):', error);
        return [];
    }
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
                // Internal URL'leri public URL'lere dönüştür
                return (posts as GhostPost[]).map(normalizePostUrls);
            } catch (error) {
                console.error('[Ghost] Error fetching posts:', error);
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
                // Internal URL'leri public URL'lere dönüştür
                return normalizePostUrls(post as GhostPost);
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

        // Internal URL'leri public URL'lere dönüştür
        const normalizedPosts = posts.map(normalizePostUrls);

        // Yeterli yazı bulamazsak, son yazılarla tamamla
        if (normalizedPosts.length < limit) {
            const remaining = limit - normalizedPosts.length;
            const existingIds = normalizedPosts.map((p) => p.id);
            const recentPosts = await getRecentPosts(remaining, currentPostId, existingIds);
            return [...normalizedPosts, ...recentPosts];
        }

        return normalizedPosts;
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

        // Internal URL'leri public URL'lere dönüştür
        return (posts as GhostPost[]).map(normalizePostUrls);
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching recent posts:', error);
        }
        return [];
    }
}

/**
 * Pagination metadata from Ghost API
 */
export interface GhostPagination {
    page: number;
    limit: number;
    pages: number;
    total: number;
    next: number | null;
    prev: number | null;
}

/**
 * Paginated posts response
 */
export interface PaginatedPostsResponse {
    posts: GhostPost[];
    pagination: GhostPagination;
}

/**
 * Sayfalanmış blog yazılarını getir (Server-side pagination)
 * @param page - Sayfa numarası (1'den başlar)
 * @param limit - Sayfa başına post sayısı
 * @param tagSlug - Opsiyonel tag filtresi
 */
export async function getPaginatedPosts(
    page: number = 1,
    limit: number = 12,
    tagSlug?: string
): Promise<PaginatedPostsResponse> {
    return unstable_cache(
        async () => {
            try {
                const filter = tagSlug ? `tag:${tagSlug}` : undefined;
                
                const response = await api.posts.browse({
                    include: ['tags', 'authors'],
                    limit,
                    page,
                    order: 'published_at DESC',
                    filter,
                });

                // Ghost API pagination meta verisini döndürür
                const meta = (response as unknown as { meta: { pagination: GhostPagination } }).meta;
                
                return {
                    posts: (response as GhostPost[]).map(normalizePostUrls),
                    pagination: meta?.pagination || {
                        page,
                        limit,
                        pages: 1,
                        total: response.length,
                        next: null,
                        prev: null,
                    },
                };
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error fetching paginated posts:', error);
                }
                return {
                    posts: [],
                    pagination: {
                        page: 1,
                        limit,
                        pages: 0,
                        total: 0,
                        next: null,
                        prev: null,
                    },
                };
            }
        },
        [`paginated-posts-${page}-${limit}-${tagSlug || 'all'}`],
        {
            revalidate: 60,
            tags: ['posts'],
        }
    )();
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
