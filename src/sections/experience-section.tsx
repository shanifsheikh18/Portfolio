import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/logo.png",
            title: "Sr. Software engineer",
            company: "DeltaLabs",
            location: "Remote",
            start: "Sep 2023",
            end: "Present",
            description: [
                "Developed and maintained scalable full-stack applications using Ruby on Rails, React, and GraphQL.",
                "Optimized GraphQL schemas, backend queries, and database performance while building responsive UIs with React and Tailwind CSS.",
                "Implemented secure authentication with Devise and JWT and applied prompt engineering to enable AI-driven features."
            ],
        },
        {
            image: "/assets/logo2.png",
            title: "Full Stack developer",
            company: "Freelance / Self-Employed",
            location: "Remote",
            start: "Jan 2022",
            end: "Present",
            description: [
                "Architect and deliver scalable full-stack web applications using React and Ruby on Rails.",
                "Design and optimize REST and GraphQL APIs with PostgreSQL and MySQL for high-performance workloads.",
                "Lead client projects end-to-end from requirements gathering to deployment on Render and Vercel.",
                "Implement secure authentication, payment integrations, and real-time features.",
                "Optimize application performance, reducing load times by up to 40%.",
                "Collaborate with international clients and apply prompt engineering to integrate AI-powered features.",

            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}