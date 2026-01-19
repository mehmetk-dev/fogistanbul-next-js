/* eslint-disable @next/next/no-img-element */
interface TeamCardProps {
    image: string;
    name: string;
    role: string;
    icon?: string;
}

const TeamCard = ({ image, name, role, icon }: TeamCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-surface-dark border border-border-dark hover:border-primary transition-all duration-300">
            <div className="aspect-[3/4] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-300" />
                {/* Using standard img for simplicity with dynamic/unknown imports, can be upgraded to Image later */}
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
            </div>
            <div className="p-5 relative z-20 bg-background-dark border-t border-border-dark">
                <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                <p className="text-primary text-sm font-medium">{role}</p>
                {icon && (
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-white">{icon}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
