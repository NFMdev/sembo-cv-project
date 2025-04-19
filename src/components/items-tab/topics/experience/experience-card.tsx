import './experience.css';

type CardProps = {
    company: string;
    title: string;
    description: string;
    technologies: string[];
}

export function ExperienceCard({ company, title, description, technologies }: CardProps) {
    return (
        <div className="card-container">
            <div className="experience-header">
                <h3 className="experience-title">{company}</h3>
                <span className="experience-company">{title}</span>
            </div>
            <p className="experience-description">{description}</p>
            <div className="experience-tech">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>
        </div>
    );
}