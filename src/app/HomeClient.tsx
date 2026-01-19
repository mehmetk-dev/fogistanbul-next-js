"use client";
import { useEffect, useMemo, useCallback } from 'react';
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

  // Memoize observer config
  const observerConfig = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }),
    []
  );

  // Scroll Animation Observer - Optimized for performance with useCallback
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let idleCallbackId: number | null = null;

    const initObserver = () => {
      observer = new IntersectionObserver(handleIntersection, observerConfig);

      // Observe all animated elements
      const animatedElements = document.querySelectorAll(animationClasses);
      animatedElements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // Use requestIdleCallback for better performance, fallback to setTimeout
    if ('requestIdleCallback' in window) {
      idleCallbackId = requestIdleCallback(initObserver, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(initObserver, 100);
    }

    return () => {
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
  }, [handleIntersection, observerConfig, animationClasses]);

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
