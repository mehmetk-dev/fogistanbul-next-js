"use client";
import Image from 'next/image';
import { comparisonData } from '@/app/hizmetler/crm-otomasyon/_data/crmData';
import styles from './CrmComparison.module.css';

export default function CrmComparison() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>KAOS VS. DÜZEN</h2>
            <p className={styles.description}>
                Geleneksel yöntemler ile modern sistemler arasındaki farkı görün. Hangisi size daha güven veriyor?
            </p>

            <div className={styles.comparisonWrapper}>
                {/* LEFT: MANUEL CHAOS */}
                <div className={styles.compBox}>
                    <Image
                        src={comparisonData.chaos.img}
                        alt={comparisonData.chaos.alt}
                        fill
                        className={styles.compImg}
                        quality={80}
                    />
                    <div className={styles.compLabel} style={{ color: comparisonData.chaos.color, borderColor: comparisonData.chaos.color }}>
                        {comparisonData.chaos.label}
                    </div>
                </div>

                {/* RIGHT: DIGITAL SYSTEM */}
                <div className={styles.compBox}>
                    <Image
                        src={comparisonData.system.img}
                        alt={comparisonData.system.alt}
                        fill
                        className={styles.compImg}
                        quality={80}
                    />
                    <div className={styles.compLabel} style={{ color: comparisonData.system.color, borderColor: comparisonData.system.color }}>
                        {comparisonData.system.label}
                    </div>
                </div>
            </div>
        </section>
    );
}
