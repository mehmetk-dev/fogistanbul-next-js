"use client";
import styles from './MediaSection.module.css';

export default function MediaSection() {
    return (
        <section className={styles.mediaSection}>
            <div className={styles.abstractGrid}></div>
            <div className={styles.mediaText}>
                FOG ISTANBUL<br />
                EST. 2025
            </div>
        </section>
    );
}
