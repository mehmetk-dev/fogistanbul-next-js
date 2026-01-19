'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { logClientError } from '@/lib/monitoring.client';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log error to monitoring service (Sentry if configured, otherwise console)
        logClientError(error, {
            tags: {
                errorBoundary: 'global-error',
                digest: error.digest || 'unknown',
            },
        });
    }, [error]);

    return (
        <>
            <Header />
            <div style={{
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#0a0a0a',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '2rem',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
            }}>
                <div style={{
                    maxWidth: '600px',
                    textAlign: 'center',
                    padding: '3rem',
                    border: '1px solid rgba(237, 109, 143, 0.2)',
                    borderRadius: '12px',
                    background: 'rgba(10, 10, 10, 0.8)',
                }}>
                    {/* Error Icon */}
                    <div style={{
                        fontSize: '4rem',
                        marginBottom: '1.5rem',
                        color: '#ed6d8f',
                    }}>
                        ⚠️
                    </div>

                    {/* Error Title */}
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        color: '#fff',
                    }}>
                        Bir Hata Oluştu
                    </h1>

                    {/* Error Message */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#888',
                        marginBottom: '2rem',
                        lineHeight: 1.6,
                    }}>
                        {process.env.NODE_ENV === 'development' 
                            ? error.message || 'Beklenmeyen bir hata oluştu.'
                            : 'Üzgünüz, bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.'}
                    </p>

                    {/* Error Details (Development Only) */}
                    {process.env.NODE_ENV === 'development' && error.digest && (
                        <div style={{
                            marginBottom: '2rem',
                            padding: '1rem',
                            background: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            color: '#666',
                            fontFamily: 'monospace',
                            wordBreak: 'break-all',
                        }}>
                            <strong>Error Digest:</strong> {error.digest}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <button
                            onClick={reset}
                            style={{
                                padding: '12px 24px',
                                background: '#ed6d8f',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#d85a7a';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#ed6d8f';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Tekrar Dene
                        </button>

                        <Link
                            href="/"
                            style={{
                                padding: '12px 24px',
                                background: 'transparent',
                                color: '#ed6d8f',
                                border: '1px solid #ed6d8f',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(237, 109, 143, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
