/**
 * Environment Variables Example
 * 
 * Bu dosya hangi environment variable'ların gerekli olduğunu gösterir.
 * Gerçek değerleri .env.local dosyasına ekleyin (git'e commit edilmez).
 * 
 * .env.local dosyası oluşturun ve şu değişkenleri ekleyin:
 */

export const ENV_EXAMPLE = {
    // Site URL (production'da https://fogistanbul.com gibi)
    NEXT_PUBLIC_SITE_URL: 'https://fogistanbul.com',
    
    // Ghost CMS Configuration
    NEXT_PUBLIC_GHOST_URL: 'https://blog.fogistanbul.com',
    NEXT_PUBLIC_GHOST_CONTENT_KEY: 'your-ghost-content-api-key',
    
    // EmailJS Configuration (optional - Contact form için)
    EMAILJS_SERVICE_ID: 'service_xjrcrfa',
    EMAILJS_TEMPLATE_ID: 'template_0p7q584',
    EMAILJS_PUBLIC_KEY: 'your-emailjs-public-key',
};

/**
 * .env.local dosyası örneği:
 * 
 * NEXT_PUBLIC_SITE_URL=https://fogistanbul.com
 * NEXT_PUBLIC_GHOST_URL=https://blog.fogistanbul.com
 * NEXT_PUBLIC_GHOST_CONTENT_KEY=your-key-here
 * EMAILJS_SERVICE_ID=service_xjrcrfa
 * EMAILJS_TEMPLATE_ID=template_0p7q584
 * EMAILJS_PUBLIC_KEY=your-key-here
 */
