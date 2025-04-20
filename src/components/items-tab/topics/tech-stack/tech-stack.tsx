import { useState } from 'react';
import './tech-stack.css';

type TechItem = {
    name: string;
    level: 'Familiar' | 'Intermediate' | 'Advanced';
}

type Category = {
    title: string;
    techs: TechItem[];
}

const techCategories: Category[] = [
    {
        title: "Backend",
        techs: [
            { name: "Java", level: "Advanced" },
            { name: "Spring Boot", level: "Advanced" },
            { name: "Oracle SQL", level: "Advanced" },
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Node.js", level: "Intermediate" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "Express.js", level: "Familiar" },
        ],
    },
    {
        title: "Frontend",
        techs: [
            { name: "Angular", level: "Advanced" },
            { name: "TypeScript", level: "Advanced"},
            { name: "HTML/CSS", level:  "Advanced"},
            { name: "React", level: "Intermediate" },
            { name: "Flutter", level: "Familiar" },
        ],
    },
    {
        title: "DevOps / Tools",
        techs: [
            { name: "Jenkins", level: "Advanced" },
            { name: "OpenShift", level: "Intermediate" },
            { name: "Mulesoft", level: "Intermediate" },
            { name: "Oracle Reports", level: "Familiar" },
            { name: "Jasper Reports", level: "Familiar" },
        ],
    },
];

export const TechStack = () => {
    const [activeCategory, setActiveCategory] = useState("Backend");

    return (
        <section className='techstack-container'>
            <div className="techstack-tabs">
                {techCategories.map((category) => (
                    <button
                        key={category.title}
                        className={`techstack-tab ${activeCategory === category.title ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.title)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <div className="techstack-content">
                {
                    techCategories.find(
                        (cat) => cat.title === activeCategory)?.techs.map((tech, index) => (
                            <div className="tech-card" key={index}>
                                <span className="tech-name">{tech.name}</span>
                                <div className={`tech-bar ${getLevelClass(tech.level)}`}>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
};

const getLevelClass = (level: string) => {
    switch (level) {
        case 'Familiar':
            return 'level-familiar';
        case 'Intermediate':
            return 'level-intermediate';
        case 'Advanced':
            return 'level-advanced';
        default:
            return ''; 
    }
};