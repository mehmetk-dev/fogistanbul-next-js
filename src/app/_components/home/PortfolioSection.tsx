"use client";
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/_data/homeData';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
    return (
        <section className={styles.portfolioSection}>
            {/* Background Decorations */}
            <div className={styles.backgroundDecoration} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={`fade-in-up ${styles.header}`}>
                    <span className={styles.badge}>
                        Portfolio
                    </span>
                    <h3 className={styles.heading}>
                        Son Projelerimiz
                    </h3>
                    <p className={styles.description}>
                        Müşterilerimiz için hayata geçirdiğimiz başarılı projelerden bazıları
                    </p>
                </div>

                {/* Projects Grid */}
                <div className={`${styles.grid} projects-grid`}>
                    {projects.map((project, index) => (
                        <Link
                            href="/portfoy"
                            key={index}
                            className={`project-card zoom-rotate-in stagger-${(index % 6) + 1} ${styles.projectCard}`}
                        >
                            {/* Project Image */}
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.projectImage}
                                    quality={75}
                                    loading="lazy"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className={styles.projectOverlay} />

                            {/* Category Badge */}
                            <div className={styles.categoryBadge}>
                                {project.category}
                            </div>

                            {/* Project Info */}
                            <div className={styles.content}>
                                <h4 className={styles.title}>
                                    {project.title}
                                </h4>
                                <div className={styles.descriptionText}>
                                    Projeleri İncele
                                    <span className={`material-symbols-outlined ${styles.descriptionTextIcon}`}>arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className={styles.viewAllWrapper}>
                    <Link
                        href="/portfoy"
                        className={styles.viewAllButton}
                    >
                        Tüm Projeleri Gör
                        <span className={`material-symbols-outlined ${styles.viewAllButtonIcon}`}>arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
