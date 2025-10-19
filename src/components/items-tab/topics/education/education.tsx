import { HoverPreviewCard } from '../../../shared/hover-preview-card/hover-preview-card';
import { TextHighlight } from '../../../shared/text-highlight/text-highlight';
import './education.css'

const TITLE1 = 'Vocational Training in Cross-Platform Application Development';
const TITLE2 = 'Continuous learning through real-world projects and professional experience';
const SUBTITLE1 = 'International Education Center (CIDE), 2019 - 2021'
const TEXT1 = 'Technical training that provided me with a strong foundation in object-oriented programming, database design, and development for both mobile and desktop environments.'
const TEXT2 = 'Over the past few years, I\'ve deepened my knowledge of technologies such as Angular, Spring Boot, TypeScript and modern tooling by working on real projects, both collaboratively in a professional setting and independently. This hands-on experience has helped me learn quickly, adapt to new technologies, and build impactful solutions.';

export function Education({ searchQuery }: { searchQuery: string }) {
    return (
        <section className="education-container">
            <HoverPreviewCard webImg="src/assets/img/education_1.png" webUrl="https://www.cide.es/">
                <h3 className="education-title">
                    <TextHighlight text={TITLE1} query={searchQuery} />
                </h3>
                <span className="education-location">
                    <TextHighlight text={SUBTITLE1} query={searchQuery} />
                </span>
                <p className="education-description">
                    <TextHighlight text={TEXT1} query={searchQuery} />
                </p>
            </HoverPreviewCard>

            <HoverPreviewCard webImg="src/assets/img/education_2.png" webUrl="https://github.com/NFMdev">
                <h3 className="education-title">
                    <TextHighlight text={TITLE2} query={searchQuery} />
                </h3>
                <p className="education-description">
                    <TextHighlight text={TEXT2} />
                </p>
            </HoverPreviewCard>
        </section>
    );
}