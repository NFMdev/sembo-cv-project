import './education.css'

export function Education() {
    return (
        <section className="education-container">
            <div className="education-item">
                <h3 className="education-title">Vocational Training in Cross-Platform Application Development</h3>
                <span className="education-location">International Education Center (CIDE), 2019 - 2021</span>
                <p className="education-description">
                    Technical training that provided me with a strong foundation in object-oriented programming, database design, and development for both mobile and desktop environments.
                </p>
            </div>

            <div className="education-item">
                <h3 className="education-title">Continuous learning through real-world projects and professional experience</h3>
                <p className="education-description">
                    Over the past few years, I've deepened my knowledge of technologies such as Angular, Spring Boot, TypeScript and modern tooling by working on real projects, both collaboratively in a professional setting and independently. This hands-on experience has helped me learn quickly, adapt to new technologies, and build impactful solutions.
                </p>
            </div>
        </section>
    );
}