"use client";
import styles from './SuccessModal.module.css';

interface SuccessModalProps {
    onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
    return (
        <div className={styles.successModalOverlay}>
            <div className={styles.successModal}>
                <div className={styles.successIconWrapper}>
                    <span className={`material-symbols-outlined ${styles.successIcon}`}>check_circle</span>
                </div>
                <h3>MESAJ İLETİLDİ</h3>
                <p>Fikirleriniz bize ulaştı. En kısa sürede dönüş yapacağız.</p>
                <button onClick={onClose} className={styles.closeBtn}>HARİKA</button>
            </div>
        </div>
    );
}
