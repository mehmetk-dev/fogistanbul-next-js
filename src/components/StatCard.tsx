interface StatCardProps {
    value: string | number;
    label: string;
    isPrimary?: boolean;
}

const StatCard = ({ value, label, isPrimary = false }: StatCardProps) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <span
                className={`text-4xl md:text-5xl font-bold mb-2 ${isPrimary ? 'text-primary' : 'text-white'
                    }`}
            >
                {value}
            </span>
            <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                {label}
            </span>
        </div>
    );
};

export default StatCard;
