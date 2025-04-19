import { ExperienceCard } from './experience-card';
import './experience.css'

export function Experience() {
    // Pendiente: Agregar vídeos de los proyectos realizados en cada empresa
    // Habilitar funcionalidad al hacer click en cada card
    return (
        <div className="experience-container">
            {ExperienceCard({
                company: "Conjurer Services S.A.",
                title: "Frontend & Backend Developer 2021 - 2022",
                description: "Worked on full-stack development using modern frameworks and containerization tools.",
                technologies: ["Angular", "Springboot", "TypeScript", "PostgreSQL", "Docker"]
            })}
            {ExperienceCard({
                company: "Grupo Piñero",
                title: "Full Stack Developer 2022 - Present",
                description: "Currently working on enterprise applications and system integration across business units.",
                technologies: ["Angular", "Java", "Oracle DB", "MuleSoft", "OpenShift", "Jasper Reports", "Oracle Report Builder"]
            })}
        </div>
    );
}