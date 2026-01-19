/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://fogistanbul.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    // Sitemap generation devre dışı - Next.js native sitemap.ts kullanılıyor
    // Bu config sadece robots.txt oluşturur
    outDir: './public',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        additionalSitemaps: [
            'https://fogistanbul.com/sitemap.xml', // Next.js dynamic sitemap
        ],
    },
    // Sitemap oluşturmayı devre dışı bırak (Next.js sitemap.ts kullanılacak)
    exclude: ['*'],
};
