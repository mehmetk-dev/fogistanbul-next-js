import React from 'react';

interface MarqueeProps {
    items?: string[];
    className?: string;
}

const Marquee = ({ items, className = '' }: MarqueeProps) => {
    const defaultItems = [
        'STRATEJİ',
        'TASARIM',
        'YAZILIM',
        'PAZARLAMA',
        'BRANDING',
        'SEO',
    ];

    const displayItems = items || defaultItems;
    const itemsString = displayItems.join(' • ') + ' •';

    return (
        <div className={`w-full bg-primary py-4 overflow-hidden -skew-y-1 relative z-20 ${className}`}>
            <div className="flex whitespace-nowrap animate-marquee">
                {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="text-2xl font-black uppercase text-black mx-8 tracking-wider">
                        {itemsString}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
