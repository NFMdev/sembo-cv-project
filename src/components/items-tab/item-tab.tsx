import './item-tab.css';
import { Item } from './item';
import { About } from './topics/about/about';
import { Experience } from './topics/experience/experience';
import { Education } from './topics/education/education';
import { Skills } from './topics/skills/skills';
import { TechStack } from './topics/tech-stack/tech-stack';
import { Contact } from './topics/contact/contact';

const tabs = [
    { id: "about", name: "About", icon: "user" },
    { id: "experience", name: "Experience", icon: "experience" },
    { id: "education", name: "Education", icon: "education" },
    { id: "skills", name: "Skills", icon: "skills" },
    { id: "tech-stack", name: "Tech Stack", icon: "stack" },
    { id: "contact", name: "Contact", icon: "mail" },

];

type ItemTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const ItemTab = ({ activeTab, setActiveTab }: ItemTabProps) => {

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                {tabs.map((tab) => (
                    <Item 
                        name={tab.name} 
                        icon={tab.icon} 
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    ></Item>
                ))}
            </div>
            <div className="tab-content">
                {activeTab === "about" && <About />}
                {activeTab === "experience" && <Experience />}
                {activeTab === "education" && <Education />}
                {activeTab === "skills" && <Skills />}
                {activeTab === "tech-stack" && <TechStack />}
                {activeTab === "contact" && <Contact />}
            </div>
        </div>
    );
}