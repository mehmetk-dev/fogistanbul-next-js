'use client';

import { useEffect } from 'react';

/**
 * Material Symbols Font Loader
 * 
 * Lazy loads Material Symbols font for better performance.
 * This prevents render-blocking on initial page load.
 */
export default function MaterialSymbolsLoader() {
    useEffect(() => {
        // Only load Material Symbols after page is interactive
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(() => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            }, { timeout: 2000 });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            }, 1000);
        }
    }, []);

    return null;
}
