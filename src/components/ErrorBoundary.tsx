'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { logClientError } from '@/lib/monitoring.client';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary Component
 * 
 * React class component that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * 
 * Backend Analogy: Like a try-catch block in Spring Boot's @ControllerAdvice
 * that catches all exceptions and returns a standardized error response.
 */
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to monitoring service
        logClientError(error, {
            tags: {
                errorBoundary: 'react-error-boundary',
                componentStack: errorInfo.componentStack ? 'available' : 'unavailable',
            },
            extra: {
                componentStack: errorInfo.componentStack,
            },
        });

        this.setState({
            error,
            errorInfo,
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <div style={{
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '2rem',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}>
                    <div style={{
                        maxWidth: '500px',
                        textAlign: 'center',
                        padding: '2rem',
                        border: '1px solid rgba(237, 109, 143, 0.2)',
                        borderRadius: '12px',
                        background: 'rgba(10, 10, 10, 0.8)',
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                            color: '#ed6d8f',
                        }}>
                            ⚠️
                        </div>

                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            color: '#fff',
                        }}>
                            Bir Hata Oluştu
                        </h2>

                        <p style={{
                            fontSize: '0.9rem',
                            color: '#888',
                            marginBottom: '1.5rem',
                            lineHeight: 1.6,
                        }}>
                            {process.env.NODE_ENV === 'development' && this.state.error
                                ? this.state.error.message
                                : 'Bir şeyler ters gitti. Lütfen sayfayı yenileyin.'}
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                            <details style={{
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                color: '#666',
                                fontFamily: 'monospace',
                                textAlign: 'left',
                                maxHeight: '200px',
                                overflow: 'auto',
                            }}>
                                <summary style={{
                                    cursor: 'pointer',
                                    marginBottom: '0.5rem',
                                    color: '#ed6d8f',
                                }}>
                                    Error Stack (Development Only)
                                </summary>
                                <pre style={{
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                }}>
                                    {this.state.error?.stack}
                                    {'\n\n'}
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <button
                                onClick={this.handleReset}
                                style={{
                                    padding: '10px 20px',
                                    background: '#ed6d8f',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#d85a7a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#ed6d8f';
                                }}
                            >
                                Tekrar Dene
                            </button>

                            <Link
                                href="/"
                                style={{
                                    padding: '10px 20px',
                                    background: 'transparent',
                                    color: '#ed6d8f',
                                    border: '1px solid #ed6d8f',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(237, 109, 143, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                Ana Sayfa
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
