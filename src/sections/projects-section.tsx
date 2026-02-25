import Section from "../components/section";
import aiPowered from "../../public/assets/ai-powered.jpeg";
import stuffsus from "../../public/assets/Stuffsus-E-Commmerce.jpeg";
import projectManagementTool from "../../public/assets/project-management-tool.jpeg";
import dapprDashboard from "../../public/assets/dappr-dashboard.jpeg";

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "AI-Powered Task Management System",
            description:
                "Intermediate-level full-stack app that uses AI suggestions for prioritizing and automating tasks. Built with React, Next.js, Node.js, Express, PostgreSQL, and Tailwind CSS.",
            image: aiPowered,
            tech: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "JavaScript"],
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built using Next.js, TypeScript, Node.js, Express, MySQL, and Tailwind CSS.",
            image: stuffsus,
            tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "JavaScript"],
        },
        {
            id: 3,
            title: "Project Management Tool",
            description:
                "Team collaboration and task tracking app with Kanban boards, project analytics, and GraphQL API integration. Built with React, Ruby on Rails, PostgreSQL, and Tailwind CSS.",
            image: projectManagementTool,
            tech: ["React.js", "Ruby on Rails", "GraphQL", "PostgreSQL", "Tailwind CSS", "JavaScript"],
        },
        {
            id: 4,
            title: "Dashboard Application",
            description:
                "Dynamic dashboard displaying analytics and KPIs with charts, tables, and interactive components. Built using Next.js, TypeScript, React, GraphQL, and Tailwind CSS.",
            image: dapprDashboard,
            tech: ["Next.js", "TypeScript", "React.js", "GraphQL", "Tailwind CSS", "JavaScript"],
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-start items-stretch gap-4">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <img
                            className="rounded-t-xl h-50 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}