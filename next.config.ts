import type { NextConfig } from "next";

// Validate environment variables at build time (throws in production if missing)
import './src/lib/env';

const nextConfig: NextConfig = {
  // Performans optimizasyonları
  reactStrictMode: true,
  
  // Compression
  compress: true,

  // Image optimization - Enhanced for better performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.fogistanbul.com',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'], // AVIF first for best compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Performance optimizations
    unoptimized: false,
    loader: 'default',
  },

  // Headers for SEO and Performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Enable back/forward cache (bfcache) for better performance
          // This allows browsers to cache pages for instant back/forward navigation
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Static pages can be cached for bfcache
      {
        source: '/((?!api|_next|.*\\..*|.*\\[.*\\]).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/kullanim',
        destination: '/kullanim-sartlari',
        permanent: true,
      },
      {
        source: '/gizlilik',
        destination: '/gizlilik-politikasi',
        permanent: true,
      },
    ];
  },
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      '@/components',
      '@/app/_components',
      'next/image',
      'next/link',
      'next/script',
      '@tryghost/content-api',
    ],
    // CSS optimization - reduce chunk sizes and improve loading
    optimizeCss: true,
  },
  
  // Note: swcMinify is enabled by default in Next.js 16
  // Modern browser target removes legacy polyfills (defined in package.json browserslist)
  // This removes unnecessary polyfills (saves ~13.5 KiB)
  
  // Output optimization
  output: 'standalone',
  
  // Turbopack config (Next.js 16 default - faster than webpack)
  // CSS chunk optimization is handled automatically by Turbopack
  turbopack: {
    // Optimize CSS chunking
    resolveAlias: {},
    // Set root directory to prevent lockfile warning
    root: process.cwd(),
  },
  
  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn logs
    } : false,
  },
};

export default nextConfig;
