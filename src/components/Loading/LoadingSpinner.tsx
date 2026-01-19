import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    text?: string;
    fullScreen?: boolean;
}

export default function LoadingSpinner({ 
    size = 'medium', 
    text = 'Yükleniyor...',
    fullScreen = false 
}: LoadingSpinnerProps) {
    const sizeClass = styles[`spinner-${size}`];
    const containerClass = fullScreen ? styles.fullScreen : styles.container;

    return (
        <div className={containerClass} role="status" aria-live="polite" aria-label={text}>
            <div className={`${styles.spinner} ${sizeClass}`} aria-hidden="true"></div>
            {text && (
                <span className={styles.text}>{text}</span>
            )}
            <span className="sr-only">{text}</span>
        </div>
    );
}
