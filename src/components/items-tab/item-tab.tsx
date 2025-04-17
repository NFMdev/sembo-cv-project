import { useState } from 'react';
import './item-tab.css';
import { Item } from './item';

const tabs = [
    { name: "Inicio", icon: "home" },
    { name: "Perfil", icon: "user" },
    { name: "Ajustes", icon: "settings" },
];

export function ItemTab() {
    const [activeTab, setActiveTab] = useState<string>("Inicio");

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                {tabs.map((tab) => (
                    <Item 
                        name={tab.name} 
                        icon={tab.icon} 
                        isActive={activeTab === tab.name}
                        onClick={() => setActiveTab(tab.name)}
                    ></Item>
                ))}
            </div>
            <div className="tab-content">
                {activeTab === "Inicio" && <p>Bienvenido a la página de inicio</p>}
                {activeTab === "Perfil" && <p>Este es tu perfil</p>}
                {activeTab === "Ajustes" && <p>Aquí puedes cambiar configuraciones</p>}
            </div>
        </div>
    );
}