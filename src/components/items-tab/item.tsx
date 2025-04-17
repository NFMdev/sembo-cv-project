import { Home, User, Settings } from "lucide-react";

export const iconMap: Record<string, React.ElementType> = {
  home: Home,
  user: User,
  settings: Settings,
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
            {Icon && <Icon size={18}/>}
            {name}
        </button>
    );
}