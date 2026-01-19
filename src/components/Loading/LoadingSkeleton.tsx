import styles from './LoadingSkeleton.module.css';

interface LoadingSkeletonProps {
    width?: string;
    height?: string;
    rounded?: boolean;
    className?: string;
}

export default function LoadingSkeleton({ 
    width = '100%', 
    height = '1rem',
    rounded = false,
    className = ''
}: LoadingSkeletonProps) {
    return (
        <div
            className={`${styles.skeleton} ${rounded ? styles.rounded : ''} ${className}`}
            style={{ width, height }}
            aria-hidden="true"
        />
    );
}
