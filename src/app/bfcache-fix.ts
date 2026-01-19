/**
 * Back/Forward Cache (bfcache) Optimization
 * 
 * Bu dosya sayfa unload edildiğinde bfcache'in çalışmasını sağlar.
 * 
 * Backend Analogy: Spring Boot'da HTTP caching headers gibi
 * - Browser'a sayfanın cache'lenebileceğini söyler
 * - Geri/ileri navigasyonu hızlandırır
 */

'use client';

import { useEffect } from 'react';

/**
 * Optimize page for back/forward cache
 * 
 * Bu hook sayfa unload edildiğinde bfcache'in çalışmasını sağlar.
 * Özellikle WebSocket veya persistent connection kullanmayan sayfalarda etkilidir.
 */
export function useBfcacheOptimization() {
    useEffect(() => {
        // Page Visibility API ile sayfa görünürlüğünü takip et
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                // Sayfa gizlendiğinde, bfcache için hazırla
                // WebSocket veya persistent connection'ları kapat
                // (Bizim durumumuzda yok, ama gelecekte eklenebilir)
            }
        };

        // pageshow event - bfcache'den geri geldiğinde
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                // Sayfa bfcache'den geldi, state'i yenile
                // Örneğin: scroll position, form state, vb.
                window.scrollTo(0, 0);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('pageshow', handlePageShow);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);
}
