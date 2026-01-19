"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CodeLine {
    text: string;
    top: string;
    left: string;
    rotation: string;
    size: string;
}

const NotFound = () => {
    // ... (state hooks)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [bgCodes, setBgCodes] = useState<CodeLine[]>([]);

    const getRandomCodeString = useCallback(() => {
        const codes = [
            "ERROR_404_VOID", "SYSTEM_HALT", "CONFIDENTIAL_DATA", "DO_NOT_LEAK",
            "UNAUTHORIZED_ACCESS", "TRACE_DETECTED", "IP_LOGGED", "MEMORY_LEAK",
            "BINARY_OVERFLOW", "SECRET_PROTOCOL", "KIMSEYE_SOYLEME", "GIZLI_BILGI"
        ];
        return codes[Math.floor(Math.random() * codes.length)];
    }, []);

    const generateCodeLines = useCallback((count: number): CodeLine[] => {
        const lines: CodeLine[] = [];
        for (let i = 0; i < count; i++) {
            lines.push({
                text: getRandomCodeString(),
                top: `${Math.random() * 95}%`,
                left: `${Math.random() * 95}%`,
                rotation: `${(Math.random() * 20) - 10}deg`,
                size: `${Math.random() * 0.5 + 0.5}rem`
            });
        }
        return lines;
    }, [getRandomCodeString]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', checkMobile);
        checkMobile();

        const initialCodesId = requestAnimationFrame(() => {
            setBgCodes(generateCodeLines(window.innerWidth <= 768 ? 0 : 30));
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
            cancelAnimationFrame(initialCodesId);
        };
    }, [generateCodeLines]);

    return (
        <>
            <Header />
            <div style={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: '#050505',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Syne", sans-serif',
                cursor: isMobile ? 'auto' : 'none',
                zIndex: 1 // Reduced z-index to allow Header (z:10000) to be on top
            }}>
                {/* ... existing styles and content ... */}
                <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=VT323&family=Syne:wght@800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');

                /* Flashlight Effect */
                .flashlight {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    pointer-events: none;
                    background: radial-gradient(
                        circle 200px at var(--x) var(--y),
                        transparent 0%,
                        rgba(5, 5, 5, 0.98) 100%
                    );
                    z-index: 10;
                }

                /* Hidden Code in Background */
                .hidden-code {
                    position: absolute;
                    font-family: 'VT323', monospace;
                    color: #222; 
                    user-select: none;
                    pointer-events: none;
                    white-space: nowrap;
                    z-index: 5;
                    transition: color 0.1s;
                }
                
                .hidden-code-item {
                    color: #00f2ea;
                    text-shadow: 0 0 5px rgba(0, 242, 234, 0.5);
                    opacity: 0.3;
                }

                /* Central Box */
                .secret-file {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    max-width: 90%;
                    padding: 60px;
                    border: 1px solid #333;
                    background: #0a0a0a;
                    text-align: center;
                    z-index: 20;
                    box-shadow: 0 0 50px rgba(0,0,0,0.8);
                }

                .surprised-emoji {
                    font-size: 8rem;
                    margin-bottom: 20px;
                    display: inline-block;
                    animation: bounce 2s infinite ease-in-out;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .btn-secret {
                    display: inline-block;
                    margin-top: 30px;
                    padding: 15px 40px;
                    border: 1px solid #fff;
                    color: #fff;
                    font-family: 'Special Elite', cursive;
                    font-size: 1.2rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    cursor: pointer;
                    z-index: 30; /* Ensure button clickable */
                    position: relative;
                }
                .btn-secret:hover {
                    background: #fff;
                    color: #000;
                    letter-spacing: 2px;
                }

                /* Typewriter Font */
                .secret-font {
                    font-family: 'Special Elite', cursive;
                    color: #ccc;
                }

                .redacted {
                    background: #fff;
                    color: #000;
                    padding: 0 5px;
                }

                /* Mobile Adjustment */
                @media (max-width: 768px) {
                    .flashlight {
                        background: rgba(5,5,5,0.9);
                    }
                    .secret-file {
                        padding: 30px;
                    }
                    .hidden-code-item {
                        display: none;
                    }
                }

            `}</style>

                <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#050505' }} />

                {!isMobile && bgCodes.map((code, i) => (
                    <div
                        key={i}
                        className="hidden-code hidden-code-item"
                        style={{
                            top: code.top,
                            left: code.left,
                            transform: `rotate(${code.rotation})`,
                            fontSize: code.size
                        }}
                    >
                        {code.text}
                    </div>
                ))}

                {!isMobile && (
                    <div
                        className="flashlight"
                        style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as React.CSSProperties}
                    ></div>
                )}

                <div className="secret-file">
                    <div style={{
                        fontFamily: 'Special Elite',
                        fontSize: '4rem',
                        color: '#333',
                        border: '3px solid #333',
                        display: 'inline-block',
                        padding: '5px 20px',
                        marginBottom: '30px',
                        transform: 'rotate(-5deg)',
                        opacity: 0.7,
                        letterSpacing: '5px',
                        fontWeight: 'bold'
                    }}>
                        DOSYA #404
                    </div>

                    <h1 style={{ fontFamily: 'Special Elite', fontSize: '3rem', marginBottom: '20px', color: '#ed6d8f' }}>
                        KİMSEYE SÖYLEME.
                    </h1>

                    <p className="secret-font" style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                        Şşş... Burada olmaman gerekiyordu.
                        <span className="redacted">GİZLİ KODLARI</span> görmedin, tamam mı?
                        Sadece sessizce geri dön ve bu anı hiç yaşanmamış sayalım.
                    </p>

                    <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
                        DURUM: <span style={{ color: '#d02e2e' }}>KRİTİK</span> • GÖRGÜ TANIĞI: 1
                    </div>

                    <Link href="/" className="btn-secret">
                        TAMAM, GÖRMEDİM
                    </Link>
                </div>

                {!isMobile && (
                    <div style={{
                        position: 'fixed',
                        top: mousePos.y,
                        left: mousePos.x,
                        width: '10px', height: '10px',
                        background: '#ed6d8f',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 20
                    }}></div>
                )}

            </div>
            <div style={{ position: 'relative', zIndex: 50 }}>
                <Footer />
            </div>
        </>
    );
};

export default NotFound;
