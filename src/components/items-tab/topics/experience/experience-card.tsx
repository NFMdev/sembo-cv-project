import { HoverPreviewCard } from '../../../shared/hover-preview-card/hover-preview-card';
import { TextHighlight } from '../../../shared/text-highlight/text-highlight';
import './experience.css';

type CardProps = {
    company: string;
    title: string;
    webUrl: string;
    webImg: string;
    description: string[];
    technologies: Map<string, string>;
    searchQuery: string;
}

export function ExperienceCard({ company, title, webUrl, webImg, description, technologies, searchQuery }: CardProps) {
    return (
        <HoverPreviewCard webImg={webImg} webUrl={webUrl}>
            <div className="experience-header">
                <h3 className="experience-title">
                    <TextHighlight text={company} query={searchQuery} />
                </h3>
                <span className="experience-company">
                    <TextHighlight text={title} query={searchQuery} />
                </span>
            </div>
            {description.map((desc, index) => (
                <p key={index} className="experience-description">
                    <TextHighlight text={desc} query={searchQuery} />
                </p>
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
                        <TextHighlight text={tech} query={searchQuery} />
                    </a>
                ))}
            </div>
        </HoverPreviewCard>
    );
}