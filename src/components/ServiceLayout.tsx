'use client';

import { useEffect, useState } from 'react';
import ServiceCTA from './ServiceCTA';

import { colors as designColors } from '@/design-system/colors';

const colors = {
    primary: designColors.primary,           // #ed6d8f - Standard Pink
    primaryDark: designColors.primaryDark,
    primaryLight: designColors.primaryLight,
    bgDark: designColors.bgDark,
    bgDarker: designColors.bgDarker,
    surfaceDark: designColors.surfaceDark,
    borderDark: designColors.borderDark,
    textMuted: designColors.textMuted,
    textLight: designColors.textLight,
};

interface Feature {
    title: string;
    desc: string;
    icon?: string;
}

interface ProcessStep {
    title: string;
    desc: string;
}

interface Project {
    title: string;
    image?: string;
    category: string;
}

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    icon?: string;
    features?: Feature[];
    process?: ProcessStep[];
    technologies?: string[];
    projects?: Project[];
}

const ServiceLayout = ({
    title,
    subtitle,
    description,
    icon,
    features = [],
    process = [],
    technologies = [],
    projects = []
}: ServiceLayoutProps) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll-service').forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div style={{ backgroundColor: colors.bgDarker, minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>

            {/* HER0 SECTION */}
            <section style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '0 20px'
            }}>
                {/* Dynamic Background */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${colors.primary}15, transparent 70%)`
                }} />

                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `linear-gradient(${colors.borderDark} 1px, transparent 1px), linear-gradient(90deg, ${colors.borderDark} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    opacity: 0.1,
                    transform: `translateY(${scrollY * 0.2}px)`
                }} />

                <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', textAlign: 'center' }}>

                    {/* Icon Glow */}
                    <div className="animate-float" style={{
                        width: '100px', height: '100px',
                        margin: '0 auto 40px',
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
                        borderRadius: '30px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 0 60px ${colors.primary}60`,
                        transform: 'rotate(-5deg)'
                    }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'white' }}>{icon || 'rocket_launch'}</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}>
                        {title}
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        color: colors.textMuted,
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.5
                    }}>
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* DESCRIPTION & INTRO */}
            <section style={{ padding: '100px 20px', background: colors.surfaceDark }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '60px' }} className="md:grid-cols-2">
                    <div className="animate-on-scroll-service fade-up">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>
                            Neden <span style={{ color: colors.primary }}>{title}?</span>
                        </h2>
                        <div style={{ height: '4px', width: '80px', background: colors.primary, marginBottom: '40px' }} />
                    </div>
                    <div className="animate-on-scroll-service fade-up" style={{ transitionDelay: '0.2s' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: colors.textMuted }}>
                            {description}
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section style={{ padding: '120px 20px' }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                        <span style={{ color: colors.primary, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Kabiliyetlerimiz</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '16px' }}>Neler Sunuyoruz?</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                        {features.map((feature, i) => (
                            <div key={i} className="animate-on-scroll-service fade-up feature-card-service" style={{
                                padding: '40px',
                                background: colors.surfaceDark,
                                borderRadius: '24px',
                                border: `1px solid ${colors.borderDark}`,
                                transition: 'all 0.4s ease',
                                transitionDelay: `${i * 0.1}s`
                            }}>
                                <div style={{
                                    width: '60px', height: '60px',
                                    background: `${colors.primary}15`,
                                    borderRadius: '16px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '30px',
                                    color: colors.primary
                                }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>{feature.icon || 'check_circle'}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>{feature.title}</h3>
                                <p style={{ color: colors.textMuted, lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            {process.length > 0 && (
                <section style={{ padding: '120px 20px', background: colors.surfaceDark, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '80px', textAlign: 'left' }}>
                            <span style={{ color: colors.primary, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Nasıl Çalışıyoruz?</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '16px' }}>Süreç Yönetimi</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                            {process.map((step, i) => (
                                <div key={i} className="animate-on-scroll-service fade-left" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '40px',
                                    position: 'relative',
                                    transitionDelay: `${i * 0.15}s`
                                }}>
                                    {/* Number */}
                                    <div style={{
                                        fontSize: '4rem',
                                        fontWeight: 900,
                                        color: 'transparent',
                                        WebkitTextStroke: `1px ${colors.borderDark}`,
                                        lineHeight: 0.8,
                                        minWidth: '100px'
                                    }}>
                                        0{i + 1}
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>{step.title}</h3>
                                        <p style={{ color: colors.textMuted, fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* PROJECTS / EXAMPLES */}
            {projects.length > 0 && (
                <section style={{ padding: '120px 20px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px' }}>Örnek <span style={{ color: colors.primary }}>Projeler</span></h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                            {projects.map((proj, i) => (
                                <div key={i} className="animate-on-scroll-service scale-up project-card-service" style={{
                                    position: 'relative',
                                    height: '300px',
                                    background: '#222',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    border: `1px solid ${colors.borderDark}`,
                                    transitionDelay: `${i * 0.1}s`
                                }}>
                                    {/* Placeholder if no image */}
                                    <div style={{ width: '100%', height: '100%', background: `linear-gradient(45deg, ${colors.surfaceDark}, ${colors.bgDark})` }} />

                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        padding: '40px',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        zIndex: 2
                                    }}>
                                        <span style={{ color: colors.primary, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>{proj.category}</span>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{proj.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* TECHNOLOGIES */}
            {technologies.length > 0 && (
                <section style={{ padding: '80px 20px', borderTop: `1px solid ${colors.borderDark}` }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ color: colors.textMuted, marginBottom: '40px' }}>Kullandığımız Teknolojiler ve Araçlar</p>
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                            {technologies.map((tech, i) => (
                                <span key={i} style={{
                                    padding: '12px 24px',
                                    background: colors.surfaceDark,
                                    border: `1px solid ${colors.borderDark}`,
                                    borderRadius: '100px',
                                    fontSize: '0.9rem',
                                    color: 'white',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ServiceCTA />

            {/* STYLES */}
            <style jsx global>{`
                .animate-float { animation: float 6s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-5deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }

                .animate-on-scroll-service {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .animate-on-scroll-service.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .fade-left {
                    transform: translateX(-30px);
                }
                .fade-left.visible {
                    transform: translateX(0);
                }

                .scale-up {
                    transform: scale(0.95);
                }
                .scale-up.visible {
                    transform: scale(1);
                }

                .feature-card-service:hover {
                    transform: translateY(-10px);
                    background: linear-gradient(135deg, ${colors.surfaceDark}, #1a1a24);
                    border-color: ${colors.primary}60;
                }
            `}</style>
        </div>
    );
};

export default ServiceLayout;
