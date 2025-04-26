import { HoverPreviewCard } from '../../../shared/hover-preview-card/hover-preview-card';
import './experience.css';

type CardProps = {
    company: string;
    title: string;
    webUrl: string;
    webImg: string;
    description: string[];
    technologies: Map<string, string>;
}

export function ExperienceCard({ company, title, webUrl, webImg, description, technologies }: CardProps) {
    return (
        <HoverPreviewCard webImg={webImg} webUrl={webUrl}>
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
        </HoverPreviewCard>
    );
}