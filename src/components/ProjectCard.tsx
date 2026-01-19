import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    image: string;
    category: string;
    title: string;
    description?: string;
    link?: string;
    size?: 'normal' | 'large' | 'tall';
}

const ProjectCard = ({
    image,
    category,
    title,
    description,
    link = '#',
    size = 'normal',
}: ProjectCardProps) => {
    const sizeClasses = {
        normal: 'aspect-square',
        large: 'aspect-[4/3] md:col-span-2',
        tall: 'aspect-[4/5] lg:row-span-2',
    };

    return (
        <div
            className={`group relative rounded-xl overflow-hidden bg-surface-darker cursor-pointer ${sizeClasses[size]}`}
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    quality={85}
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        {category}
                    </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
                {description && (
                    <p className="text-gray-400 text-sm hidden group-hover:block transition-all duration-300">
                        {description}
                    </p>
                )}
            </div>

            <Link
                href={link}
                className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hover:bg-primary hover:text-white z-20"
                aria-label={`${title} projesini görüntüle`}
            >
                <span className="material-symbols-outlined" aria-hidden="true">arrow_outward</span>
            </Link>
        </div>
    );
};

export default ProjectCard;
