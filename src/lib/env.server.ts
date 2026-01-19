/**
 * Server-side Environment Variables
 * 
 * Bu dosya sadece server-side'da çalışan environment variable'lar için.
 * Client-side'a expose edilmemeli.
 */

import { env } from './env';

/**
 * Server-side only environment variables
 * Bu değişkenler client bundle'a dahil edilmez
 */
export const serverEnv = {
    // Site URL (server-side kullanım için)
    siteUrl: env.NEXT_PUBLIC_SITE_URL,
    
    // Ghost API (server-side)
    ghostUrl: env.NEXT_PUBLIC_GHOST_URL,
    ghostKey: env.NEXT_PUBLIC_GHOST_CONTENT_KEY,
    
    // EmailJS (server-side, optional)
    emailjsServiceId: env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: env.EMAILJS_TEMPLATE_ID,
    emailjsPublicKey: env.EMAILJS_PUBLIC_KEY,
} as const;
