"use client";
import Image from 'next/image';
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
                        <div className={styles.imageContainer}>
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.projectImage}
                                quality={85}
                                loading="lazy"
                            />
                        </div>

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
