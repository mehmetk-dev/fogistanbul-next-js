import Link from 'next/link';
import React from 'react';

interface ServiceCTAProps {
    title?: string;
    desc?: string;
}

const ServiceCTA = ({ title = "Sıradışı Bir Proje Başlatalım", desc = "Hayal gücümüzün sınırlarını zorlamak için sabırsızlanıyoruz. Markanızı geleceğe taşımaya hazır mısınız?" }: ServiceCTAProps) => {
    return (
        <section style={{
            padding: '120px 20px',
            position: 'relative',
            background: '#050505',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderTop: '1px solid #222'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(238, 43, 124, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 800,
                    marginBottom: '30px',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'white'
                }}>
                    {title}
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#9ca3af',
                    marginBottom: '50px',
                    lineHeight: 1.6
                }}>
                    {desc}
                </p>

                <Link href="/iletisim" className="premium-cta-btn" aria-label="Teklif almak için iletişim sayfasına git">
                    <span>TEKLİF ALIN</span>
                    <div className="btn-glow" aria-hidden="true"></div>
                </Link>
            </div>

            <style jsx>{`
                .premium-cta-btn {
                    position: relative;
                    display: inline-flex;
                    padding: 20px 60px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 100px;
                    color: white;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1.1rem;
                    letter-spacing: 2px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(10px);
                }
                .premium-cta-btn:hover {
                    border-color: #ed6d8f;
                    transform: scale(1.05);
                    box-shadow: 0 0 30px rgba(238, 43, 124, 0.3);
                }
                .premium-cta-btn span {
                    position: relative;
                    z-index: 2;
                }
                .btn-glow {
                    position: absolute;
                    top: 0; left: -100%;
                    width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(238, 43, 124, 0.5), transparent);
                    transition: left 0.5s;
                }
                .premium-cta-btn:hover .btn-glow {
                    left: 100%;
                    transition: left 0.5s;
                }
            `}</style>
        </section>
    );
};

export default ServiceCTA;
