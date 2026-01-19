"use client";
import styles from './BlogFooter.module.css';

export default function BlogFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} FOGİstanbul
                </div>
                <div className={styles.divider} />
                <div className={styles.scrollText}>
                    Scroll ↓
                </div>
            </div>
        </div>
    );
}
