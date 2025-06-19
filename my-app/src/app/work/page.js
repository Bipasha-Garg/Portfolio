"use client";

import React, { useState, useEffect } from "react";

export default function WorkPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const workExperience = [
        {
            company: "JP Morgan Chase and Co.",
            position: "Mentee, Quant Mentorship Program",
            duration: "Feb 2025 - Present",
            location: "Remote",
            link: "https://www.jpmorganchase.com/",
            description: "Engage in quantitative finance courses and mentorship with industry professionals.",
            achievements: [
                "Participate in structured quantitative finance curriculum",
                "Receive mentorship from industry professionals",
                "Develop foundational skills in quantitative analysis"
            ],
            technologies: ["Quantitative Finance", "Financial Modeling", "Data Analysis"]
        },
        {
            company: "Campus Connect (Startup)",
            position: "Product Marketing & Development Intern",
            duration: "Oct 2024 - Apr 2025",
            location: "Remote",
            link: "", // Replace with actual URL
            description: "Conducted market research and competitive analysis to prioritize product roadmap and identify market opportunities.",
            achievements: [
                "Conducted comprehensive market research and competitive analysis",
                "Contributed to product roadmap prioritization",
                "Identified key market opportunities for startup growth"
            ],
            technologies: ["Market Research", "Product Development", "Competitive Analysis", "Strategic Planning"]
        },
        {
            company: "Data Science Analytics Center",
            position: "Researcher",
            duration: "May 2024 - Present",
            location: "",
            link: "https://dsac.iiit.ac.in/", // Replace with actual URL
            description: "Exploring and researching new Data Visualization",
            achievements: ["Exploring and researching new Data Visualization"
            ],
            technologies: ["Data Visualization", "Data Analytics"]
        },
        {
            company: "IT Department, IIIT Hyderabad",
            position: "Web Developer Intern",
            duration: "Jan 2024 - May 2024",
            location: "Hyderabad, Telangana",
            link: "https://www.iiit.ac.in/",
            description: "Developed a responsive research portal using Node.js, Next.js, and PostgreSQL, serving 1000+ users.",
            achievements: [
                "Developed a responsive research portal serving 1000+ users",
                "Streamlined SDLC with automated testing and CI/CD pipelines",
                "Reduced manual testing time by 20 hours through automation"
            ],
            technologies: ["Node.js", "Next.js", "PostgreSQL", "CI/CD", "Automated Testing"]
        }
    ];

    return (
        <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Work Experience</h1>
                    {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        My professional journey and the experiences that shaped my development career
                    </p> */}
                </div>

                {/* Experience Timeline */}
                <div className="mb-20">
                    {/* <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2> */}
                    <div className="space-y-8">
                        {workExperience.map((job, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                                    }`}
                            >
                                <div
                                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
                                    onClick={() => window.open(job.link, '_blank')}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                                                {job.position}
                                            </h3>
                                            <h4 className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                                                {job.company}
                                            </h4>
                                        </div>
                                        <div className="mt-2 md:mt-0 flex items-center space-x-2">
                                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                                {job.duration}
                                            </span>
                                            {/* <svg
                                                className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg> */}
                                        </div>
                                    </div>
                                    {/* <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p> */}
                                    <div className="mb-4">
                                        {/* <h5 className="font-semibold mb-2">Description:</h5> */}
                                        <ul className="space-y-1">
                                            {job.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="flex items-start space-x-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Call to Action */}
                {/* <div className={`mt-20 text-center transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Download Resume
                        </button>
                        <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}