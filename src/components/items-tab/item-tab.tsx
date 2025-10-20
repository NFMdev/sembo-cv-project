import './item-tab.css';
import { Item } from './item';
import { About } from './topics/about/about';
import { Experience } from './topics/experience/experience';
import { Education } from './topics/education/education';
import { Skills } from './topics/skills/skills';
import { TechStack } from './topics/tech-stack/tech-stack';
import { Contact } from './topics/contact/contact';
import { TABS } from '../shared/constants/tabs-constants';

type ItemTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeSubtab?: string;
  setActiveSubtab?: (subtab: string) => void;
  searchQuery: string;
};

export const ItemTab = ({
    activeTab,
    setActiveTab,
    activeSubtab,
    setActiveSubtab,
    searchQuery
}: ItemTabProps) => {

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                {TABS.map((tab) => (
                    <Item 
                        name={tab.name} 
                        icon={tab.icon} 
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    ></Item>
                ))}
            </div>
            <div className="tab-content">
                {activeTab === "about" && <About searchQuery={searchQuery} />}
                {activeTab === "experience" && <Experience searchQuery={searchQuery} />}
                {activeTab === "education" && <Education searchQuery={searchQuery} />}
                {activeTab === "skills" && <Skills />}
                {activeTab === "tech-stack" && (
                    <TechStack activeSubtab={activeSubtab} setActiveSubtab={setActiveSubtab} searchQuery={searchQuery} />
                )}
                {activeTab === "contact" && <Contact />}
            </div>
        </div>
    );
}