'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile Detection
    useEffect(() => {
        const checkMobile = () => {
            if (typeof window === 'undefined') return;
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 1024;
            setIsMobile(isTouch || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Cursor Movement & Hover Logic
    useEffect(() => {
        if (isMobile || typeof window === 'undefined') return;

        const onMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            if (cursorRef.current) {
                // Direct DOM manipulation for performance (avoids re-renders)
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Traverse up to find if we are over a button/link
            const closestLink = target.closest('a');
            const closestButton = target.closest('button');
            const computedCursor = window.getComputedStyle(target).cursor;

            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                !!closestLink ||
                !!closestButton ||
                computedCursor === 'pointer';

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, [isMobile, isVisible]);

    if (isMobile) return null;

    return (
        <>
            <style jsx global>{`
                @media (min-width: 1024px) {
                    html, body, *, a, button, [role="button"], input, select, textarea {
                        cursor: none !important;
                    }
                }
            `}</style>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? '50px' : '16px',
                    height: isHovering ? '50px' : '16px',
                    backgroundColor: 'rgba(237, 109, 142, 0.7)',
                    border: 'none',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    transition: 'width 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s',
                    boxShadow: '0 0 10px rgba(237, 109, 142, 0.6)',
                    opacity: isVisible ? 1 : 0,
                    willChange: 'transform, width, height'
                }}
            />
        </>
    );
};

export default CustomCursor;
