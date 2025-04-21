import { ExperienceCard } from './experience-card';
import './experience.css';

const CONJURER_TECHS = new Map<string, string>([
    ["Angular", "https://angular.io/"],
    ["Spring Boot", "https://spring.io/projects/spring-boot"],
    ["TypeScript", "https://www.typescriptlang.org/"],
    ["PostgreSQL", "https://www.postgresql.org/"],
    ["Docker", "https://www.docker.com/"],
    ["Trello", "https://trello.com/"],
    ["GitHub", "https://github.com/"]
]);

const GP_TECHS = new Map<string, string>([
    ["Angular", "https://angular.io/"],
    ["Java", "https://dev.java/"],
    ["Oracle DB", "https://www.oracle.com/database/"],
    ["MuleSoft", "https://www.mulesoft.com/platform/api"],
    ["OpenShift", "https://www.openshift.com/"],
    ["Jenkins", "https://www.jenkins.io/"],
    ["Jasper Reports", "https://community.jaspersoft.com/project/jasperreports-library"],
    ["Oracle Reports Builder", "https://docs.oracle.com/middleware/11119/classic/build-reports/orbr_concepts1001.htm"],
    ["Jira", "https://www.atlassian.com/software/jira"],
    ["Microsoft Teams", "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"],
]);

const CONJURER_DESCRIPTION = [
    'Developed a custom CRM platform for managing both printed and digital labels for IKEA.',
    'Built a complete CRUD interface for label management, and a real-time dashboard to visualize their lifecycle (printing, in transit, installed).',
    'Contributed to frontend and backend implementation using modern frameworks and containerized environments.'
];

const GP_DESCRIPTION = [
    'Leading the development of enterprise tools for hotel operations and guest services.',
    'Internally, worked on a CRM used by hotel staff to manage guest statuses, reservations, services, currency exchange, and reporting dashboards.',
    'On the client side, co-developed the web and mobile platforms allowing guests to manage bookings, room services, surveys, and promotions.',
    'Managed a hybrid team, and participated in weekly client syncs.'
];

export const Experience = () => {
    return (
    <section className="experience-container">
        {ExperienceCard({
        company: "Conjurer Services S.A.",
        title: "Frontend & Backend Developer · 2021 - 2022",
        description: CONJURER_DESCRIPTION,
        technologies: CONJURER_TECHS
        })}
        {ExperienceCard({
        company: "Grupo Piñero",
        title: "Full Stack Developer · 2022 - Present",
        description: GP_DESCRIPTION,
        technologies: GP_TECHS
        })}
    </section>
    );
};  