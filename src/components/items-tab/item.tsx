import { 
    User, 
    BriefcaseBusiness, 
    GraduationCap,
    Brain,
    Code,
    Mail
} from "lucide-react";

export const iconMap: Record<string, React.ElementType> = {
    user: User,
    experience: BriefcaseBusiness,
    education: GraduationCap,
    skills: Brain,
    stack: Code,
    mail: Mail,
};

type ItemProps = {
    name: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
};

export function Item({name, icon, isActive, onClick}: ItemProps) {
    const Icon = iconMap[icon]

    return (
        <button
            className={`tab-button ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {Icon && <Icon size={20}/>}
            {name}
        </button>
    );
}