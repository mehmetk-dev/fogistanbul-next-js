'use client';

import { useMonitoring } from '@/lib/monitoring.client';

/**
 * Client-side Monitoring Initialization Component
 * 
 * Bu component client-side'da monitoring'i başlatır.
 * Layout'a eklenir.
 */
export default function MonitoringInit() {
    useMonitoring();
    return null;
}
