'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useIsMobile } from '@/hooks/useIsMobile';

// Lazy load heavy components
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false,
});

const LightRays = dynamic(() => import('@/components/LightRays'), {
  ssr: false,
});

export default function ClientOnlyComponents() {
  const isMobile = useIsMobile();
  const [shouldLoadLightRays, setShouldLoadLightRays] = useState(false);

  useEffect(() => {
    // Only load LightRays on desktop and after initial render
    if (!isMobile) {
      // Delay loading to reduce initial blocking - use requestIdleCallback for better performance
      const loadLightRays = () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            setShouldLoadLightRays(true);
          }, { timeout: 2000 });
        } else {
          setTimeout(() => {
            setShouldLoadLightRays(true);
          }, 1000);
        }
      };
      loadLightRays();
    }
  }, [isMobile]);

  return (
    <>
      {!isMobile && <CustomCursor />}
      {/* Global LightRays Effect - Only on desktop, lazy loaded */}
      {shouldLoadLightRays && !isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            opacity: 1,
            pointerEvents: 'none',
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ee2b7c"
            raysSpeed={0.6}
            lightSpread={1.0}
            rayLength={1.8}
            fadeDistance={0.9}
            pulsating={false}
          />
        </div>
      )}
    </>
  );
}
