"use client";
import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <nav className={styles.pagination} aria-label="Sayfa navigasyonu">
            <button
                className={styles.pageBtn}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                aria-label="Önceki sayfa"
                aria-disabled={currentPage === 1}
            >
                <span aria-hidden="true">&lt;</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    className={`${styles.pageBtn} ${currentPage === page ? styles.pageBtnActive : ''}`}
                    onClick={() => onPageChange(page)}
                    aria-label={`Sayfa ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </button>
            ))}

            <button
                className={styles.pageBtn}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                aria-label="Sonraki sayfa"
                aria-disabled={currentPage === totalPages}
            >
                <span aria-hidden="true">&gt;</span>
            </button>
        </nav>
    );
}
