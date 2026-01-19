"use client";
import styles from './BlogHero.module.css';

interface BlogHeroProps {
    postCount: number;
}

export default function BlogHero({ postCount }: BlogHeroProps) {
    return (
        <section className={`hero-section ${styles.heroSection}`}>
            {/* Decorative Line */}
            <div className={`stagger-1 ${styles.decorativeLine}`} />

            {/* Issue Label */}
            <div className={`stagger-2 ${styles.issueLabel}`}>
                FOGİstanbul / Blog {new Date().getFullYear()}
            </div>

            {/* Main Title */}
            <h1 className={`hero-title stagger-3 ${styles.title}`}>
                Stories
            </h1>

            {/* Subtitle Row */}
            <div className={`subtitle-row stagger-4 ${styles.subtitleRow}`}>
                <div className={styles.subtitleLine} />
                <p className={styles.subtitle}>
                    Dijital dünyadan içgörüler, tasarım hikayeleri ve yaratıcı keşifler.
                </p>
            </div>

            {/* Post Count Badge */}
            <div className={`articles-badge stagger-5 ${styles.articlesBadge}`}>
                <div className={styles.articlesCount}>
                    {postCount.toString().padStart(2, '0')}
                </div>
                <div className={styles.articlesLabel}>
                    YAZI
                </div>
            </div>
        </section>
    );
}
