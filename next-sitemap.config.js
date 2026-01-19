/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://fogistanbul.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    exclude: ['/404'],
    transform: async (config, path) => {
        // Custom priority and changefreq for different pages
        let priority = 0.7;
        let changefreq = 'monthly';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'weekly';
        } else if (path.startsWith('/blog')) {
            priority = 0.8;
            changefreq = 'daily';
        } else if (path.startsWith('/hizmetler')) {
            priority = 0.9;
            changefreq = 'monthly';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
};
