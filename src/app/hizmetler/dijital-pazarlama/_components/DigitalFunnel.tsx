"use client";
import Link from 'next/link';
import { funnelData } from '@/app/hizmetler/dijital-pazarlama/_data/dijitalPazarlamaData';
import styles from './DigitalFunnel.module.css';

export default function DigitalFunnel() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                SİSTEM KUR. <span className={styles.headingHighlight}>BÜYÜMEYİ İZLE.</span>
            </h2>

            <div className={styles.funnelContainer}>
                {/* Funnel Layers */}
                <div className={styles.funnelWrapper}>
                    {/* Layer 1: Traffic */}
                    <div className={`${styles.fLayer} ${styles.lTraffic}`}>
                        <div className={styles.fLabel}>{funnelData.traffic.label}</div>
                        <div className={styles.fMetric}>{funnelData.traffic.value}</div>
                        <div className={`${styles.fParticles} ${styles.p1}`}></div>
                    </div>

                    {/* Connector 1 */}
                    <div className={styles.fConnector}>
                        <span className={styles.cVal}>{funnelData.metrics.ctr} CTR</span>
                        <div className={styles.cLine}></div>
                    </div>

                    {/* Layer 2: Leads */}
                    <div className={`${styles.fLayer} ${styles.lLeads}`}>
                        <div className={styles.fLabel}>{funnelData.leads.label}</div>
                        <div className={styles.fMetric}>{funnelData.leads.value}</div>
                        <div className={`${styles.fParticles} ${styles.p2}`}></div>
                    </div>

                    {/* Connector 2 */}
                    <div className={styles.fConnector}>
                        <span className={styles.cVal}>{funnelData.metrics.cr} CR</span>
                        <div className={styles.cLine}></div>
                    </div>

                    {/* Layer 3: Sales */}
                    <div className={`${styles.fLayer} ${styles.lSales}`}>
                        <div className={`${styles.fLabel} ${styles.fLabelHighlight}`}>{funnelData.sales.label}</div>
                        <div className={styles.fMetric}>{funnelData.sales.value}</div>
                        <div className={`${styles.fParticles} ${styles.p3}`}></div>
                    </div>
                </div>
            </div>

            <div>
                <Link href="/iletisim" className={styles.strategyBtn}>
                    HUNİYİ İNŞA ET
                    <span className={`material-symbols-outlined ${styles.strategyBtnIcon}`}>filter_list</span>
                </Link>
            </div>
        </section>
    );
}
