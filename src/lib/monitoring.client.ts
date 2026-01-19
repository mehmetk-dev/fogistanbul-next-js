'use client';

/**
 * Client-side Error Monitoring
 * 
 * Bu dosya sadece client-side'da çalışır.
 * Sentry'yi client-side'da initialize eder.
 * 
 * Note: @sentry/nextjs paketi opsiyoneldir.
 * Paket yüklü değilse monitoring devre dışı kalır.
 * Paketi yüklemek için: npm install @sentry/nextjs
 */

import { useEffect } from 'react';

/**
 * Initialize monitoring on client-side
 */
export function useMonitoring() {
    useEffect(() => {
        const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
        
        if (!dsn || process.env.NODE_ENV !== 'production') {
            return;
        }

        // Dynamic import with error handling
        // Package is optional - if not installed, monitoring will be disabled
        if (typeof window !== 'undefined') {
            // Use string-based dynamic import to prevent build-time errors
            const loadSentry = async () => {
                try {
                    const Sentry = await import('@sentry/nextjs');
                    if (Sentry && Sentry.default) {
                        Sentry.default.init({
                            dsn,
                            environment: process.env.NODE_ENV,
                            tracesSampleRate: 0.1,
                            beforeSend(event) {
                                // Filter out sensitive data
                                if (event.request) {
                                    delete event.request.cookies;
                                    delete event.request.headers;
                                }
                                return event;
                            },
                        });
                    }
                } catch (error) {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn('Sentry client init skipped:', error);
                    }
                }
            };
            loadSentry();
        }
    }, []);
}

/**
 * Client-side error logger
 */
export function logClientError(
    error: Error, 
    context?: { 
        userId?: string; 
        tags?: Record<string, string>;
        extra?: Record<string, unknown>;
    }
) {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    
    if (dsn && process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Try to log to Sentry using runtime dynamic import
        // Package is optional - if not installed, will fallback to console
        const logToSentry = async () => {
            try {
                const Sentry = await import('@sentry/nextjs');
                if (Sentry && Sentry.default) {
                    Sentry.default.captureException(error, {
                        tags: context?.tags,
                        extra: context?.extra,
                        user: context?.userId ? { id: context.userId } : undefined,
                    });
                }
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Sentry log failed:', err);
                    console.error('Error:', error, context);
                }
            }
        };
        logToSentry();
    } else if (process.env.NODE_ENV === 'development') {
        console.error('Error:', error, context);
    }
}
