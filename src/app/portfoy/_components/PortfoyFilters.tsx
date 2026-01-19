"use client";
import { filters } from '@/app/portfoy/_data/portfoyData';
import styles from './PortfoyFilters.module.css';

interface PortfoyFiltersProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export default function PortfoyFilters({ activeFilter, onFilterChange }: PortfoyFiltersProps) {
    return (
        <section className={styles.filtersSection} aria-label="Portföy filtreleri">
            <div className={styles.filterScrollContainer} role="group" aria-label="Proje kategorileri">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => onFilterChange(f.id)}
                        className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterBtnActive : ''}`}
                        aria-pressed={activeFilter === f.id}
                        aria-label={`${f.label} projelerini göster`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
        </section>
    );
}
