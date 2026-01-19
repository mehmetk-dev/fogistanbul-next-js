import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientOnlyComponents from "@/components/ClientOnlyComponents";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import { ToastProvider } from "@/components/Toast";
import Analytics from "@/components/Analytics";
import MonitoringInit from "@/components/MonitoringInit";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";
import PWARegister from "@/components/PWARegister";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import "./globals.css";

// Fonts - Optimized: Only load fonts we actually use
// Reduced font weights for better performance (only used weights: 400, 500, 600, 700, 800, 900)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "optional", // Faster initial render - shows fallback immediately
  weight: ["400", "500", "600", "700", "800", "900"], // Removed 300 (not used)
  preload: false, // Disable preload when using display:optional to avoid warnings
  fallback: ["system-ui", "arial"], // Better fallback for faster rendering
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "optional", // Faster initial render
  weight: ["400", "500", "600", "700"], // Removed 300 (not used)
  preload: false, // Disable preload when using display:optional to avoid warnings
  fallback: ["system-ui", "sans-serif"],
});

import { env } from '@/lib/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "FOG İstanbul | Yeni Nesil Dijital Ajans",
    template: "%s | FOG İstanbul",
  },
  description: "İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı. Markanızı dijital dünyada büyütüyoruz.",
  keywords: ["dijital ajans", "sosyal medya yönetimi", "web tasarım", "SEO", "dijital pazarlama", "prodüksiyon", "istanbul"],
  authors: [{ name: "FOG İstanbul" }],
  creator: "FOG İstanbul",
  publisher: "FOG İstanbul",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "FOG İstanbul",
    title: "FOG İstanbul | Yeni Nesil Dijital Ajans",
    description: "İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FOG İstanbul Dijital Ajans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOG İstanbul | Yeni Nesil Dijital Ajans",
    description: "İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="tr" data-scroll-behavior="smooth" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect for Google Fonts - Optimized order */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols will be loaded lazily via MaterialSymbolsLoader component */}
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ed6d8f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FOG İstanbul" />
        {/* Apple Touch Icons - Using favicon as fallback */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        <PWARegister />
        <MaterialSymbolsLoader />
        <MonitoringInit />
        <Analytics />
        <ToastProvider>
          <ErrorBoundaryWrapper>
            <ClientOnlyComponents />
            <Header />
            <main>{children}</main>
            <Footer />
            <PWAInstallPrompt />
          </ErrorBoundaryWrapper>
        </ToastProvider>
      </body>
    </html>
  );
}
