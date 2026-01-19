"use client";
import Link from 'next/link';
import { workflowSteps } from '@/app/hizmetler/crm-otomasyon/_data/crmData';
import styles from './CrmWorkflow.module.css';

export default function CrmWorkflow() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                İŞ AKIŞINIZI <span className={styles.headingHighlight}>OTOMATİZE EDİN.</span>
            </h2>

            <div className={styles.pipelineContainer}>
                {/* Moving Connection Line Background */}
                <div className={styles.pipelineLine}>
                    <div className={styles.pipelineFlowPacket}></div>
                </div>

                {/* Nodes */}
                {workflowSteps.map((step, i) => (
                    <div key={i} className={styles.stageNode}>
                        <div className={`${styles.nodeIcon} ${styles[step.status]}`}>
                            <span className={`material-symbols-outlined ${styles.nodeIconInner}`}>{step.icon}</span>
                        </div>
                        <div className={styles.nodeText}>
                            <div className={styles.nodeLabel}>{step.label}</div>
                            <div className={styles.nodeSub}>{step.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <Link href="/iletisim" className={styles.startBtn}>
                    SİSTEMİ KUR
                    <span className={`material-symbols-outlined ${styles.startBtnIcon}`}>arrow_forward</span>
                </Link>
            </div>
        </section>
    );
}
