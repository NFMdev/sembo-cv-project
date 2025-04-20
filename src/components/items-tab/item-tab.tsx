import { useState } from 'react';
import './item-tab.css';
import { Item } from './item';
import { About } from './topics/about/about';
import { Experience } from './topics/experience/experience';
import { Education } from './topics/education/education';
import { Skills } from './topics/skills/skills';
import { TechStack } from './topics/tech-stack/tech-stack';

const tabs = [
    { name: "About", icon: "user" },
    { name: "Experience", icon: "experience" },
    { name: "Education", icon: "education" },
    { name: "Skills", icon: "skills" },
    { name: "Tech Stack", icon: "stack" },
    { name: "Contact", icon: "mail" },

];

export const ItemTab = () => {
    const [activeTab, setActiveTab] = useState<string>("About");

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
                {activeTab === "About" && <About />}
                {activeTab === "Experience" && <Experience />}
                {activeTab === "Education" && <Education />}
                {activeTab === "Skills" && <Skills />}
                {activeTab === "Tech Stack" && <TechStack />}
                {activeTab === "Contact" && <p>Contact</p>}
            </div>
        </div>
    );
}