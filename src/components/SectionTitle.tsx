import React from 'react';

interface SectionTitleProps {
    subtitle?: string;
    title?: string;
    description?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

const SectionTitle = ({
    subtitle,
    title,
    description,
    align = 'left',
    className = '',
}: SectionTitleProps) => {
    const alignments = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right',
    };

    return (
        <div className={`max-w-2xl ${alignments[align]} ${className}`}>
            {subtitle && (
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block">
                    {subtitle}
                </span>
            )}
            {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    {title}
                </h2>
            )}
            {description && (
                <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            )}
        </div>
    );
};

export default SectionTitle;
