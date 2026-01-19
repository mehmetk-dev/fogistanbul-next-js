/**
 * Server-side Error Monitoring & Logging
 * 
 * Server-side için error logging.
 * Client-side için monitoring.client.ts kullanılır.
 * 
 * Backend Analogy: Spring Boot'da Logback/SLF4J gibi
 * - Production'da Sentry'ye gönderir (opsiyonel)
 * - Development'ta console'a yazar
 */

interface ErrorContext {
    userId?: string;
    tags?: Record<string, string>;
    extra?: Record<string, unknown>;
}

/**
 * Server-side error logger
 * Note: Sentry server-side için @sentry/nextjs paketi gerekir
 * Bu dosya şimdilik sadece console logging yapar
 */
export function logServerError(error: Error, context?: ErrorContext) {
    if (process.env.NODE_ENV === 'development') {
        console.error('Server Error:', error, context);
    }
    // In production, you can integrate Sentry server-side here
    // For now, errors are logged to server logs
}

/**
 * Log message (info level) - Server-side
 */
export function logServerInfo(message: string, context?: Record<string, unknown>) {
    if (process.env.NODE_ENV === 'development') {
        console.info('Server Info:', message, context);
    }
}
