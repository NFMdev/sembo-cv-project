import { HoverPreviewCard } from '../../../shared/hover-preview-card/hover-preview-card';
import './education.css'

export function Education() {
    return (
        <section className="education-container">
            <HoverPreviewCard webImg="src/assets/img/education_1.png" webUrl="https://www.cide.es/">
                <h3 className="education-title">Vocational Training in Cross-Platform Application Development</h3>
                <span className="education-location">International Education Center (CIDE), 2019 - 2021</span>
                <p className="education-description">
                    Technical training that provided me with a strong foundation in object-oriented programming, database design, and development for both mobile and desktop environments.
                </p>
            </HoverPreviewCard>

            <HoverPreviewCard webImg="src/assets/img/education_2.png" webUrl="https://github.com/NFMdev">
                <h3 className="education-title">Continuous learning through real-world projects and professional experience</h3>
                <p className="education-description">
                    Over the past few years, I've deepened my knowledge of technologies such as Angular, Spring Boot, TypeScript and modern tooling by working on real projects, both collaboratively in a professional setting and independently. This hands-on experience has helped me learn quickly, adapt to new technologies, and build impactful solutions.
                </p>
            </HoverPreviewCard>
        </section>
    );
}