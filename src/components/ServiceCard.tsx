import Link from 'next/link';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    link?: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
    return (
        <article className="group p-8 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
            {link && (
                <Link
                    href={link}
                    className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    aria-label={`${title} hizmeti hakkında detaylı bilgi`}
                >
                    Detaylı Bilgi
                    <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                </Link>
            )}
        </article>
    );
};

export default ServiceCard;
