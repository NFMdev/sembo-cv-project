import './experience.css';

type CardProps = {
    company: string;
    title: string;
    description: string[];
    technologies: Map<string, string>;
}

export function ExperienceCard({ company, title, description, technologies }: CardProps) {
    return (
        <div className="card-container">
            <div className="experience-header">
                <h3 className="experience-title">{company}</h3>
                <span className="experience-company">{title}</span>
            </div>
            {description.map((desc, index) => (
                <p key={index} className="experience-description">{desc}</p>
            ))}
            <div className="experience-tech">
                {[...technologies.entries()].map(([tech, url], index) => (
                    <a 
                        key={index} 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-badge"
                    >
                        {tech}
                    </a>
                ))}
            </div>
        </div>
    );
}