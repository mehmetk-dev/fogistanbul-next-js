// İletişim page data

export const colors = {
    primary: '#ed6d8f',
    bgDark: '#080406',
    textMuted: '#9ca3af',
};

export const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "İletişim - FOG İstanbul",
    "description": "Projeleriniz için bizimle iletişime geçin. İstanbul ve Bursa ofislerimizle hizmetinizdeyiz.",
    "url": "https://fogistanbul.com/iletisim"
};

import { env } from '@/lib/env';

// EmailJS Configuration
// Uses environment variables if available, falls back to hardcoded values for backward compatibility
export const EMAIL_CONFIG = {
    SERVICE_ID: env.EMAILJS_SERVICE_ID || 'service_xjrcrfa',
    TEMPLATE_ID: env.EMAILJS_TEMPLATE_ID || 'template_0p7q584',
    PUBLIC_KEY: env.EMAILJS_PUBLIC_KEY || 'lcdMSlXalekcIdzW5'
};
