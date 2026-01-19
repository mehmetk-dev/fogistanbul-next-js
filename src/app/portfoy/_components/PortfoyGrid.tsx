"use client";
/* eslint-disable @next/next/no-img-element */
import { Project } from '@/app/portfoy/_data/portfoyData';
import styles from './PortfoyGrid.module.css';

interface PortfoyGridProps {
    projects: Project[];
}

export default function PortfoyGrid({ projects }: PortfoyGridProps) {
    return (
        <section className={styles.gridSection}>
            <div className={styles.masonryGrid}>
                {projects.map((p) => (
                    <div
                        key={p.id}
                        className={styles.projectCard}
                    >
                        {/* Doğal boyutlarda resim - asimetrik masonry için */}
                        <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            width={800}
                            className={styles.projectImage}
                        />

                        {/* Overlay */}
                        <div className={styles.overlay}>
                            <span className={`${styles.categoryLabel} ${styles.textItem}`}>
                                {p.category}
                            </span>

                            <h3 className={`${styles.title} ${styles.textItem}`}>
                                {p.title}
                            </h3>

                            <p className={`${styles.description} ${styles.textItem}`}>
                                {p.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
