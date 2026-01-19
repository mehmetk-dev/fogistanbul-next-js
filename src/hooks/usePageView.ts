'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/components/Analytics';

/**
 * Hook to track page views for client-side navigation
 * 
 * Next.js App Router'da client-side navigation olduğunda
 * Google Analytics'e page view gönderir.
 */
export function usePageView() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            trackPageView(pathname);
        }
    }, [pathname]);
}
