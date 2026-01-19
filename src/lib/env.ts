/**
 * Environment Variables Validation
 * 
 * Backend Analogy: Spring Boot'da @ConfigurationProperties ile
 * application.yml'deki değerleri validate etmek gibi.
 * 
 * Bu dosya startup'ta tüm environment variable'ları kontrol eder
 * ve eksik/kötü değerler varsa hata fırlatır.
 */

type EnvSchema = {
    // Public (Client-side) Environment Variables
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_GHOST_URL: string;
    NEXT_PUBLIC_GHOST_CONTENT_KEY: string;
    NEXT_PUBLIC_GA_ID?: string; // Google Analytics ID (optional)
    NEXT_PUBLIC_SENTRY_DSN?: string; // Sentry DSN (optional)
    
    // Server-side Environment Variables (optional for some)
    EMAILJS_SERVICE_ID?: string;
    EMAILJS_TEMPLATE_ID?: string;
    EMAILJS_PUBLIC_KEY?: string;
};

type EnvConfig = {
    [K in keyof EnvSchema]: EnvSchema[K];
};

/**
 * Development defaults - Only used if env vars are missing in development
 * In production, these should NEVER be used - always require explicit values
 */
const DEVELOPMENT_DEFAULTS: Partial<EnvConfig> = {
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    NEXT_PUBLIC_GHOST_URL: 'https://blog.fogistanbul.com',
    NEXT_PUBLIC_GHOST_CONTENT_KEY: 'development-key-placeholder',
};

/**
 * Validates environment variables at runtime
 * Throws error if required variables are missing
 */
function validateEnv(): EnvConfig {
    const errors: string[] = [];
    const config: Partial<EnvConfig> = {};
    // Check both NODE_ENV and if we're in browser (client-side)
    let isDevelopment = process.env.NODE_ENV === 'development';
    try {
        if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
            isDevelopment = true;
        }
    } catch {
        // Ignore errors when accessing window.location
    }
    const isProduction = process.env.NODE_ENV === 'production';
    const isClientSide = typeof window !== 'undefined';

    // Required Public Variables
    const requiredPublicVars: (keyof EnvSchema)[] = [
        'NEXT_PUBLIC_SITE_URL',
        'NEXT_PUBLIC_GHOST_URL',
        'NEXT_PUBLIC_GHOST_CONTENT_KEY',
    ];

    // Check required variables
    for (const key of requiredPublicVars) {
        const value = process.env[key];
        const isEmpty = !value || (typeof value === 'string' && value.trim() === '');
        if (isEmpty) {
            // In development or client-side, use defaults instead of throwing
            if ((isDevelopment || !isProduction || isClientSide) && DEVELOPMENT_DEFAULTS[key]) {
                // Use development default with warning
                const defaultValue = DEVELOPMENT_DEFAULTS[key] as string;
                if (!isClientSide || process.env.NODE_ENV === 'development') {
                    console.warn(
                        `⚠️  Missing ${key}, using development default: ${defaultValue}\n` +
                        `   Please create .env.local file with proper values.`
                    );
                }
                config[key] = defaultValue;
            } else {
                // Only add to errors if we're in production server-side
                if (isProduction && !isClientSide) {
                    errors.push(`Missing required environment variable: ${key}`);
                } else {
                    // Client-side or non-production: use default
                    if (DEVELOPMENT_DEFAULTS[key]) {
                        config[key] = DEVELOPMENT_DEFAULTS[key] as string;
                    }
                }
            }
        } else {
            config[key] = value;
        }
    }

    // Optional variables (with defaults or validation)
    const emailServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailPublicKey = process.env.EMAILJS_PUBLIC_KEY;

    // EmailJS config - silently use values if available
    // Note: Hardcoded fallbacks exist in iletisimData.ts, so no warning needed
    if (emailServiceId) config.EMAILJS_SERVICE_ID = emailServiceId;
    if (emailTemplateId) config.EMAILJS_TEMPLATE_ID = emailTemplateId;
    if (emailPublicKey) config.EMAILJS_PUBLIC_KEY = emailPublicKey;

    // Validate URL formats
    if (config.NEXT_PUBLIC_SITE_URL) {
        try {
            new URL(config.NEXT_PUBLIC_SITE_URL);
        } catch {
            errors.push(`Invalid URL format for NEXT_PUBLIC_SITE_URL: ${config.NEXT_PUBLIC_SITE_URL}`);
        }
    }

    if (config.NEXT_PUBLIC_GHOST_URL) {
        try {
            new URL(config.NEXT_PUBLIC_GHOST_URL);
        } catch {
            errors.push(`Invalid URL format for NEXT_PUBLIC_GHOST_URL: ${config.NEXT_PUBLIC_GHOST_URL}`);
        }
    }

    // Ensure all required variables have values (use defaults if missing)
    for (const key of requiredPublicVars) {
        if (!config[key] && DEVELOPMENT_DEFAULTS[key]) {
            config[key] = DEVELOPMENT_DEFAULTS[key] as string;
        }
    }

    // Throw if any errors (only in production, server-side)
    if (errors.length > 0) {
        const errorMessage = [
            '❌ Environment Variables Validation Failed:',
            ...errors,
            '',
            'Please check your .env.local or deployment environment variables.',
        ].join('\n');

        // Only throw in production and server-side
        // Client-side and development should use defaults
        if (isProduction && !isClientSide) {
            throw new Error(errorMessage);
        } else {
            // In development or client-side, just warn
            if (!isClientSide) {
                console.error(errorMessage);
            }
        }
    }

    return config as EnvConfig;
}

/**
 * Validated environment configuration
 * This will be validated at module load time
 */
export const env = validateEnv();

/**
 * Helper to get environment variable with fallback
 */
export function getEnv(key: keyof EnvSchema, fallback?: string): string {
    const value = process.env[key];
    if (!value && fallback) {
        return fallback;
    }
    if (!value) {
        throw new Error(`Environment variable ${key} is required but not set`);
    }
    return value;
}

/**
 * Check if we're in production
 */
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * Check if we're in development
 */
export const isDevelopment = process.env.NODE_ENV === 'development';
