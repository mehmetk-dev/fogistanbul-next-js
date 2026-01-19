"use client";
import { useEffect, useMemo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { agencySchema } from '@/app/_data/homeData';
import HeroSection from '@/app/_components/home/HeroSection';
import { LoadingSkeleton } from '@/components/Loading';

// Lazy load below-the-fold sections for better initial performance
const ManifestoSection = dynamic(() => import('@/app/_components/home/ManifestoSection'), {
  loading: () => <LoadingSkeleton height="400px" />,
});

const ServicesSection = dynamic(() => import('@/app/_components/home/ServicesSection'), {
  loading: () => <LoadingSkeleton height="300px" />,
});

const PortfolioSection = dynamic(() => import('@/app/_components/home/PortfolioSection'), {
  loading: () => <LoadingSkeleton height="400px" />,
});

const CTASection = dynamic(() => import('@/app/_components/home/CTASection'), {
  loading: () => <LoadingSkeleton height="200px" />,
});

const Home = () => {
  // Hydration tamamlandıktan sonra animasyonları başlat
  const [isHydrated, setIsHydrated] = useState(false);

  // Memoize animation class names
  const animationClasses = useMemo(
    () => '.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .zoom-rotate-in, .blur-in, .bounce-in, .flip-in',
    []
  );

  // Memoize observer callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, []);

  // Check and show elements already in viewport immediately - More aggressive
  const checkInitialVisibility = useCallback(() => {
    const animatedElements = document.querySelectorAll(animationClasses);
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isInViewport = rect.top < viewportHeight * 2 && rect.bottom > -200;
      
      // If element is in viewport or very close, make it visible immediately
      if (isInViewport && !el.classList.contains('visible')) {
        el.classList.add('visible');
        // Force reflow to ensure visibility
        if (el instanceof HTMLElement) {
          void el.offsetHeight;
        }
      }
    });
  }, [animationClasses]);

  // Hydration tamamlandığını işaretle
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Check visibility - Sadece hydration sonrası çalışır
  useEffect(() => {
    if (!isHydrated) return;

    // Multiple checks with different timings to ensure elements are visible
    const checkMultiple = () => {
      checkInitialVisibility();
    };

    // Check after hydration is complete
    const rafId1 = requestAnimationFrame(checkMultiple);
    const rafId2 = requestAnimationFrame(() => {
      requestAnimationFrame(checkMultiple);
    });

    // Check after short delays
    const timeout1 = setTimeout(checkMultiple, 50);
    const timeout2 = setTimeout(checkMultiple, 150);
    const timeout3 = setTimeout(checkMultiple, 300);

    return () => {
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [isHydrated, checkInitialVisibility]);

  // Scroll Animation Observer - Sadece hydration sonrası çalışır
  useEffect(() => {
    if (!isHydrated) return;

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let idleCallbackId: number | null = null;
    let mutationObserver: MutationObserver | null = null;

    const initObserver = () => {
      // Check visibility before setting up observer
      checkInitialVisibility();

      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.05,
        rootMargin: '100px 0px 100px 0px',
      });

      // Observe all animated elements
      const animatedElements = document.querySelectorAll(animationClasses);
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 2 && rect.bottom > -200;
        if (isInViewport && !el.classList.contains('visible')) {
          el.classList.add('visible');
        } else if (!el.classList.contains('visible')) {
          observer?.observe(el);
        }
      });
      
      setTimeout(checkInitialVisibility, 100);
    };

    // Watch for dynamically added elements (from lazy loading)
    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const animatedElements = element.matches?.(animationClasses) 
              ? [element] 
              : Array.from(element.querySelectorAll?.(animationClasses) || []);
            
            animatedElements.forEach((el) => {
              const rect = el.getBoundingClientRect();
              const isInViewport = rect.top < window.innerHeight * 2 && rect.bottom > -200;
              if (isInViewport && !el.classList.contains('visible')) {
                el.classList.add('visible');
              } else if (!el.classList.contains('visible')) {
                observer?.observe(el);
              }
            });
            
            setTimeout(checkInitialVisibility, 50);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      idleCallbackId = requestIdleCallback(initObserver, { timeout: 100 });
    } else {
      timeoutId = setTimeout(initObserver, 0);
    }
    
    return () => {
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (idleCallbackId !== null && 'cancelIdleCallback' in window) {
        cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      if (observer) {
        const animatedElements = document.querySelectorAll(animationClasses);
        animatedElements.forEach((el) => observer?.unobserve(el));
        observer.disconnect();
      }
    };
  }, [isHydrated, handleIntersection, animationClasses, checkInitialVisibility]);

  return (
    <main style={{ minHeight: '100vh' }}>
      <Script
        id="agency-schema"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />


      {/* Page Sections */}
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
    </main>
  );
};

export default Home;
