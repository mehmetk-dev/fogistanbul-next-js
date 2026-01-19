"use client";
import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/app/hizmetler/_data/hizmetlerData';
import styles from './ServicesList.module.css';

export default function ServicesList() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={styles.servicesListContainer}>
            {services.map((service, index) => (
                <Link
                    href={service.link}
                    key={service.id}
                    className={styles.serviceCard}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* 3D Glow Icon Background */}
                    <span className={`material-symbols-outlined ${styles.cardBgIcon}`}>
                        {service.icon}
                    </span>

                    <div className={styles.cardContent}>
                        {/* Index & Arrow */}
                        <div className={styles.metaRow}>
                            <span className={`${styles.indexNumber} ${hoveredIndex === index ? styles.indexNumberHovered : ''}`}>
                                0{index + 1}
                            </span>
                            <span className={`material-symbols-outlined ${styles.arrowIcon} ${hoveredIndex === index ? styles.arrowIconHovered : ''}`}>
                                north_east
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className={styles.cardTitle}>
                            {service.title}
                        </h2>

                        {/* Subtitle */}
                        <h3 className={`${styles.serviceSubtitle} ${hoveredIndex === index ? styles.serviceSubtitleHovered : ''}`}>
                            {service.subtitle}
                        </h3>

                        {/* Description */}
                        <p className={styles.cardDesc}>
                            {service.description}
                        </p>

                        {/* Tags */}
                        <div className={styles.featuresList}>
                            {service.tags.map(tag => (
                                <span key={tag} className={`${styles.featureTag} ${hoveredIndex === index ? styles.featureTagHovered : ''}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
