"use client";
import { useState } from 'react';
import Script from 'next/script';
import { portfolioSchema, projects } from '@/app/portfoy/_data/portfoyData';
import { PortfoyHero, PortfoyFilters, PortfoyGrid, PortfoyCTA } from '@/app/portfoy/_components';
import styles from './PortfoyClient.module.css';

const Portfoy = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const filteredProjects = activeFilter === 'all' ? projects : projects.filter((p) => p.tags.includes(activeFilter));

    return (
        <main className={styles.portfolioPage}>
            <Script
                id="portfoy-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />

            {/* Hero Section */}
            <PortfoyHero />

            {/* Filters Section */}
            <PortfoyFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />

            {/* Grid Section */}
            <PortfoyGrid projects={filteredProjects} />

            {/* CTA Section */}
            <PortfoyCTA />
        </main>
    );
};

export default Portfoy;
