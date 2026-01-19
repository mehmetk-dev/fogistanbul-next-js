'use client';

import { ErrorBoundary } from './ErrorBoundary';

interface ErrorBoundaryWrapperProps {
    children: React.ReactNode;
}

/**
 * Wrapper component to use ErrorBoundary in Server Components
 * Since layout.tsx is a Server Component, we need this Client Component wrapper
 */
export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
    return (
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    );
}
