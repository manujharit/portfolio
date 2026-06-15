import WorkExDesc from "./WorkExDesc";
import PageHeading from "./PageHeading";

const WorkExperience = () => {
    const data = [
        {
            id: 0,
            title: "Software Engineer",
            duration: "Nov 2024 - Present",
            org: "Metacube Software Pvt Ltd.",
            skills: ["React.js", "JavaScript", "Responsive Design", "OAuth", "QR Code Integration", "Agile"],
            desc: [
                {
                    "topic": "Project Setup & Architecture",
                    "description": "Contributed to initial project setup, including codebase structuring and brainstorming on suitable technologies, libraries, and configurations for optimal performance."
                },
                {
                    "topic": "Authentication UI Development",
                    "description": "Currently building an authentication UI for the client’s platform using React.js, focusing on responsive design and seamless user experience."
                },
                {
                    "topic": "OAuth & QR Integration",
                    "description": "Implementing key authentication features including QR code scanning and third-party OAuth integration to enhance security and user convenience."
                },
                {
                    "topic": "Cross-functional Collaboration",
                    "description": "Collaborating with backend engineers and the client team throughout the development lifecycle to ensure smooth integration and alignment with business goals."
                },
                {
                    "topic": "Agile Delivery",
                    "description": "Participating in regular code reviews and stand-ups, contributing to continuous improvement and timely delivery of project milestones."
                }
            ]
        },
        {
            id: 1,
            title: "Technology Analyst",
            duration: "July 2021 - Oct 2024",
            org: "Infosys Ltd.",
            skills: ["React.js", "Redux.js", "Node.js", "Express.js", "JavaScript", "TypeScript", "Serverless Function", "Microsoft Azure", "NewRelic"],
            desc: [
                {
                    "topic": "Web Component Development",
                    "description": "Developed a responsive web component for the client's platform using React.js and RESTful APIs, dynamically rendering content while ensuring cross-browser compatibility and optimizing load times for enhanced user experience."
                },
                {
                    "topic": "Serverless Automation",
                    "description": "Engineered an Azure function to automate client employee Workplace profile updates, integrating Service Bus for optimized operational workflows, resulting in a 90% reduction in manual interventions and improved efficiency."
                },
                {
                    "topic": "Internal Tooling",
                    "description": "Created a web application that significantly reduced ticket resolution time, decreasing analysis time by 70% and increasing overall support team efficiency by 40%, leading to improved customer satisfaction."
                },
                {
                    "topic": "Performance Tuning",
                    "description": "Optimized Serverless Functions through code refactoring and performance tuning, resulting in a 25% improvement in execution speed and a 60% reduction in failure rates, enhancing overall system reliability."
                },
                {
                    "topic": "Maintenance & Bug Fixes",
                    "description": "Upgraded client's internal npm libraries and resolved critical application bugs, enhancing system stability by 75% and reducing downtime, leading to improved productivity across the organization."
                },
                {
                    "topic": "Application Availability",
                    "description": "Ensured seamless operation and maintained high availability of client applications across multiple locations in North America, proactively identifying and resolving issues to minimize service disruptions."
                },
                {
                    "topic": "Performance Monitoring",
                    "description": "Created multiple Key Performance Metric (KPM) dashboards using Azure and NewRelic, providing real-time insights into system performance and enabling data-driven decision-making for continuous improvement."
                }
            ]
        },
        {
            id: 2,
            title: "Systems Engineer Trainee",
            duration: "Feb 2021 - Jun 2021",
            org: "Infosys Ltd.",
            skills: ["JavaScript", "React.js", "Springboot", "Java", "MySQL", "SCRUM"],
            desc: [
                {
                    "topic": "Agile DevOps Monitoring",
                    "description": "Developed a web application for tracking task progress in Agile projects, enabling task creation, progress updates, and tracking through dashboards."
                },
                {
                    "topic": "Database Architecture",
                    "description": "Architected and implemented a highly optimized MySQL database schema, ensuring efficient data storage and retrieval for enhanced application performance."
                },
                {
                    "topic": "API Management",
                    "description": "Engineered a robust Java Spring Boot application to handle API management and secure data storage, guaranteeing data integrity and reliable functionality."
                }
            ]
        }
    ];
    return (
        <div className="mt-[15%] md:mt-[12%] flex flex-col justify-center items-center">
            <PageHeading head="Timeline" />
            <span className="text-center text-gray-500 mx-[10%] mb-10">The linear view of some milestones and notable moments that happened so far. And you can always find more information on LinkedIn.</span>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-[5%] mx-[5%]">
                {data.map((item) => (
                    <li className="mb-10 ms-6" key={item.id}>
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
                            <svg
                                className="w-2.5 h-2.5 text-teal-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                            <span className="font-bold text-teal-600">{item.title}{" "}</span>
                            {item.id === 0 && (
                                <span className="bg-cyan-700 text-[#fff] text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                                    Latest
                                </span>
                            )}
                        </h3>

                        <p className="text-sm text-gray-500 font-semibold"> {item.org}  <time className=" mb-2 text-sm font-normal leading-none text-gray-400 ">
                            | {item.duration}
                        </time></p>
                        <div className="mt-4">
                            <ul>
                                {item.desc.map(desc => <WorkExDesc key={desc.topic} desc={desc} />)}
                            </ul>
                        </div>
                        <div className="flex flex-wrap mt-4">
                            {item.skills.map((i, idx) => (
                                <span key={idx} className='bg-cyan-900 text-white text-sm font-medium me-2 px-2.5 py-1 rounded mt-2'>
                                    {i}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default WorkExperience