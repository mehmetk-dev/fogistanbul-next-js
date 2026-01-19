import { MetadataRoute } from 'next';
import { getAllPostsNoCache } from '@/lib/ghost';
import { env } from '@/lib/env';

// Her istek için yeniden oluştur (dinamik sitemap)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://fogistanbul.com';
  const now = new Date();
  
  console.log('[Sitemap] Generating sitemap for:', siteUrl);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/hakkimizda`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/hizmetler`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/basili-medya`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/crm-otomasyon`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/dijital-pazarlama`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/icerik-pazarlama`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/produksiyon`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/reklam-yonetimi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/sosyal-medya`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hizmetler/web-tasarim`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfoy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/iletisim`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/gizlilik-politikasi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/kullanim-sartlari`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/kvkk`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic blog posts from Ghost CMS
  let blogPosts: MetadataRoute.Sitemap = [];
  
  try {
    console.log('[Sitemap] Fetching blog posts from Ghost...');
    const posts = await getAllPostsNoCache();
    console.log(`[Sitemap] Found ${posts.length} blog posts`);
    
    blogPosts = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : (post.published_at ? new Date(post.published_at) : now),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('[Sitemap] Error fetching blog posts:', error);
    // Continue without blog posts if there's an error
  }

  const totalUrls = staticPages.length + blogPosts.length;
  console.log(`[Sitemap] Generated ${totalUrls} URLs (${staticPages.length} static + ${blogPosts.length} blog posts)`);

  return [...staticPages, ...blogPosts];
}
