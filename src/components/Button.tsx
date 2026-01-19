'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    href?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    // Allow anchor props when href is used, though strictly we should separate types
    target?: string;
    rel?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    icon,
    iconPosition = 'right',
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 cursor-pointer';

    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-[0_0_25px_rgba(238,43,124,0.5)]',
        secondary: 'bg-white hover:bg-gray-100 text-background-dark',
        outline: 'bg-transparent border border-white/20 hover:border-primary hover:text-primary text-white',
        ghost: 'bg-transparent hover:bg-white/5 text-white',
    };

    const sizes = {
        sm: 'text-sm py-2 px-4 gap-1.5',
        md: 'text-sm py-2.5 px-6 gap-2',
        lg: 'text-base py-4 px-8 gap-2',
        xl: 'text-lg py-5 px-10 gap-3',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className="material-symbols-outlined text-lg" aria-hidden="true">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">{icon}</span>
            )}
        </>
    );

    if (href) {
        if (href.startsWith('http') || href.startsWith('#')) {
            return (
                <a href={href} className={`group ${combinedClassName}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={`group ${combinedClassName}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`group ${combinedClassName}`} {...props}>
            {content}
        </button>
    );
};

export default Button;
