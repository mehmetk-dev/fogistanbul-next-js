'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: (id: string) => void;
}

export default function Toast({ id, message, type = 'info', duration = 5000, onClose }: ToastProps) {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onClose(id);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [id, duration, onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return 'check_circle';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'info':
            default:
                return 'info';
        }
    };

    return (
        <div
            className={`${styles.toast} ${styles[`toast-${type}`]}`}
            role="alert"
            aria-live={type === 'error' ? 'assertive' : 'polite'}
            aria-atomic="true"
        >
            <div className={styles.toastContent}>
                <span className={`material-symbols-outlined ${styles.toastIcon}`} aria-hidden="true">
                    {getIcon()}
                </span>
                <span className={styles.toastMessage}>{message}</span>
                <button
                    className={styles.toastClose}
                    onClick={() => onClose(id)}
                    aria-label="Bildirimi kapat"
                >
                    <span className="material-symbols-outlined" aria-hidden="true">close</span>
                </button>
            </div>
        </div>
    );
}
