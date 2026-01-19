"use client";
import Link from 'next/link';
import { performanceData } from '@/app/hizmetler/reklam-yonetimi/_data/reklamData';
import styles from './AdsPerformance.module.css';

export default function AdsPerformance() {
    return (
        <section className={styles.section}>
            {/* Decorative Glow for Soft Connection */}
            <div className={styles.decorativeGlow}></div>
            <h2 className={styles.heading}>
                YATIRIM <span className={styles.headingHighlight}>GETİRİSİNİ</span> MAKSİMİZE ET.
            </h2>

            <div className={styles.dashboardPreview}>
                {/* Background Radar Effect */}
                <div className={styles.radarCircle}></div>
                <div className={styles.radarSweep}></div>

                {/* Main Performance Card */}
                <div className={styles.perfCard}>
                    <div className={styles.pcHeader}>
                        <span className={styles.liveBadge}>● LIVE CAMPAIGN</span>
                        <span className={`material-symbols-outlined ${styles.pcHeaderMore}`}>more_horiz</span>
                    </div>

                    <div className={styles.pcMetrics}>
                        <div className={styles.metricItem}>
                            <div className={styles.mLabel}>Harcama</div>
                            <div className={styles.mVal}>{performanceData.spend}</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.mLabel}>Ciro</div>
                            <div className={`${styles.mVal} ${styles.mValHighlight}`}>{performanceData.revenue}</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.mLabel}>ROAS</div>
                            <div className={styles.mVal}>{performanceData.roas}</div>
                        </div>
                    </div>

                    {/* Animated Graph */}
                    <div className={styles.pcGraph}>
                        <svg viewBox="0 0 300 100" preserveAspectRatio="none" className={styles.graphSvg}>
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4285F4" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#4285F4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,100 L0,80 L30,75 L60,85 L90,60 L120,65 L150,40 L180,45 L210,20 L240,25 L270,10 L300,5 L300,100 Z" fill="url(#chartGradient)" />
                            <path d="M0,80 L30,75 L60,85 L90,60 L120,65 L150,40 L180,45 L210,20 L240,25 L270,10 L300,5" fill="none" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Pulse Point at the end */}
                            <circle cx="300" cy="5" r="4" fill="#fff" className={styles.pulsePoint} />
                        </svg>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className={`${styles.floatStat} ${styles.fs1}`}>
                    <span className="material-symbols-outlined">ads_click</span>
                    CTR %4.8
                </div>
                <div className={`${styles.floatStat} ${styles.fs2}`}>
                    <span className="material-symbols-outlined">attach_money</span>
                    CPC ₺0.45
                </div>
            </div>

            <div>
                <Link href="/iletisim" className={styles.launchBtn}>
                    KAMPANYAYI BAŞLAT
                    <span className="material-symbols-outlined">trending_up</span>
                </Link>
            </div>
        </section>
    );
}
