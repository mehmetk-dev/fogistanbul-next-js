"use client";
import styles from './AdsBudget.module.css';

export default function AdsBudget() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <span className={`material-symbols-outlined ${styles.icon}`}>paid</span>
                <div className={styles.content}>
                    <h4 className={styles.title}>Şeffaf Bütçe & Ücretlendirme</h4>
                    <p className={styles.description}>
                        Reklam bütçeniz tamamen sizin kontrolünüzdedir ve doğrudan ilgili platformlara (Google/Meta) kredi kartınızla ödersiniz.
                        Biz sadece bu bütçeyi en verimli şekilde yönetmek için <strong>hizmet bedeli</strong> alırız.
                        Gizli maliyet veya komisyon yoktur; raporlarda her kuruşun nereye harcandığını şeffafça görürsünüz.
                    </p>
                </div>
            </div>
        </section>
    );
}
