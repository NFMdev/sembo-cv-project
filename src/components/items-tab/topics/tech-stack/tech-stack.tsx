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
            { name: "Node.js", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
            { name: "Express.js", level: "Intermediate" },
        ],
    },
    {
        title: "Frontend",
        techs: [
            { name: "Angular", level: "Advanced" },
            { name: "TypeScript", level: "Advanced"},
            { name: "HTML/CSS", level:  "Advanced"},
            { name: "React", level: "Advanced" },
            { name: "Flutter", level: "Intermediate" },
        ],
    },
    {
        title: "DevOps / Tools",
        techs: [
            { name: "Jenkins", level: "Advanced" },
            { name: "OpenShift", level: "Advanced" },
            { name: "Mulesoft", level: "Advanced" },
            { name: "Oracle Reports", level: "Intermediate" },
            { name: "Jasper Reports", level: "Intermediate" },
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