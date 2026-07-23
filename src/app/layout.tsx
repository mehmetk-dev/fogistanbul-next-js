import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientOnlyComponents from "@/components/ClientOnlyComponents";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import { ToastProvider } from "@/components/Toast";
import Analytics from "@/components/Analytics";
import MonitoringInit from "@/components/MonitoringInit";

import PWARegister from "@/components/PWARegister";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import "./globals.css";

// Fonts - Optimized: Only load fonts we actually use
// preload: false to prevent "preloaded but not used" warnings
// Next.js will still optimize and load fonts efficiently
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: false,
  fallback: ["system-ui", "arial"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});

import { env } from '@/lib/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "FOG İstanbul | Dijital Dönüşüm Ajansı",
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
    title: "FOG İstanbul | Dijital Dönüşüm Ajansı",
    description: "İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FOG İstanbul | Dijital Dönüşüm Ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOG İstanbul | Dijital Dönüşüm Ajansı",
    description: "İstanbul merkezli dijital pazarlama, sosyal medya yönetimi ve profesyonel video prodüksiyon ajansı.",
    images: ["/og-image.webp"],
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
      { url: "/assets/fog_logo_pink.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/fog_logo_pink.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/fog_logo_pink.png", sizes: "152x152", type: "image/png" },
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
        {/* Material Symbols - display=block hides icon text until font loads (prevents FOUT) */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/materialsymbolsoutlined/v260/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ed6d8f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FOG İstanbul" />
        {/* Apple Touch Icons - Using FOG logo */}
        <link rel="apple-touch-icon" href="/assets/fog_logo_pink.png" />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        <PWARegister />

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
