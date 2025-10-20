import { TextHighlight } from '../../../shared/text-highlight/text-highlight';
import './about.css';

const TEXT1 = 'I\'m a software developer with over six years of experience and a genuine passion for technology.';
const TEXT2 = 'What started as curiosity quickly became a career path that has deeply shaped the way I think and approach the world. Software development has brought structure to my life, pushed me to grow, and opened the door to meaningful collaborations with incredible people.';
const TEXT3 = 'I\'m committed to continuous learning and to building solutions that are not only technically solid, but also thoughtful and impactful.';
const TEXT4 = 'My goal is to contribute fresh ideas, deliver high-quality work, and be part of teams that strive to create innovative experiences that truly make a difference.';
const TEXT5 = 'I look forward to contributing and growing alongside others who share that same vision.';

export function About({searchQuery}: {searchQuery: string}) {
    return (
        <section className="about-container">
            <p>
                <TextHighlight text={TEXT1} query={searchQuery} />
            </p>
            <p>
                <TextHighlight text={TEXT2} query={searchQuery} />
            </p>
            <p>
                <TextHighlight text={TEXT3} query={searchQuery} />
            </p>
            <p>
                <TextHighlight text={TEXT4} query={searchQuery} />
            </p>
            <p>
                <TextHighlight text={TEXT5} query={searchQuery} />
            </p>
        </section>
    );
}