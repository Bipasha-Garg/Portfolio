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
            duration: "February 2025 - June 2025",
            location: "Remote",
            link: "https://www.jpmorganchase.com/",
            description: "Quantitative finance mentorship with industry professionals",
            technologies: ["Quantitative Finance", "Financial Modeling", "Data Analysis"]
        },
        {
            company: "Campus Connect (Startup)",
            position: "Product Marketing & Development Intern",
            duration: "October 2024 - April 2025",
            location: "Remote",
            link: "",
            description: "Market research and competitive analysis for product roadmap prioritization",
            technologies: ["Market Research", "Product Development", "Strategic Planning"]
        },
        {
            company: "Data Science Analytics Center",
            position: "Researcher",
            duration: "May 2024 - Present",
            location: "",
            link: "https://dsac.iiit.ac.in/",
            description: "Exploring and researching new Data Visualization techniques",
            technologies: ["Data Visualization", "Data Analytics"]
        },
        {
            company: "IT Department, IIIT Hyderabad",
            position: "Web Developer Intern",
            duration: "January 2024 - May 2024",
            location: "Hyderabad, Telangana",
            link: "https://www.iiit.ac.in/",
            description: "Developed responsive research portal serving 1000+ users with automated testing",
            technologies: ["Node.js", "Next.js", "PostgreSQL", "CI/CD"]
        }
    ];

    const education = [
        {
            institution: "IIIT Hyderabad",
            degree: "Bachelor of Technology in Computer Science and Master of Science by Research in Computer Science",
            duration: "2022 - 2027",
            location: "Hyderabad, Telangana",
            gpa: "",
            link: "https://www.iiit.ac.in/",
            coursework: []
        },
        {
            institution: "St. Joseph's Convent Senior Secondary School",
            degree: "10th Grade",
            duration: "2008 - 2020",
            location: "Bathinda, Punjab",
            gpa: "95.8%",
            link: "",
            coursework: []
        },
        {
            institution: "Sudesh Vatika Senior Secondary School",
            degree: "12th Grade - Science Stream",
            duration: "2020 - 2022",
            location: "Bathinda, Punjab",
            gpa: "95%",
            link: "",
            coursework: []
        }
    ];

    const achievements = [
        {
            title: "Google Women Techmakers Badge",
            event: "Google Women Techmakers",
            date: "2025",
            description: "Earned the Google Women Techmakers member badge for contributions to tech community",
            category: "Recognition"
        },
        // {
        //     title: "UGEE Ranking",
        //     event: "Undergraduate Entrance Exam",
        //     date: "2022",
        //     description: "Ranked 93 in UGEE among thousands of candidates",
        //     category: "Academic"
        // },
        {
            title: "Megathon Top 5",
            event: "Megathon by E-Cell, IIIT-H",
            date: "2023",
            description: "Achieved top 5 ranking out of 150+ teams in one of India's largest hackathons with 1000+ students",
            category: "Competition"
        }
    ];

    const rolesAndResponsibilities = [
        { role: "Teaching Assistant", description: "Discrete Structures & Data Visualization", duration: "2024-25" },
        { role: "Mental Health Volunteer", description: "Supporting student wellbeing initiatives", duration: "2023-Present" },
        { role: "ASEC - Sports Club", description: "Coordinator", duration: "2023-2025" },
        { role: "Social Media Team Head", description: "Felicity - IIIT Hyderabad", duration: "2023-2025" },
        { role: "Student Alumni Connect Cell", description: "Member facilitating alumni connections", duration: "2023-Present" },
        { role: "Photography Club Member", description: "Capturing campus events and moments", duration: "2022-Present" },
        { role: "Ping! - Writer", description: "Writer for the college's student run magazine", duration: "2024-Present" },
        { role: "Cultural Council Member", description: "House Captain", duration: "2023-2024" },
        { role: "Apex Member", description: "Help Freshers onboard smoothly into college", duration: "2024-Present" }
    ];

    return (
        <div className="py-20 px-4">

            <div className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Journey</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            I might not have achieved much but have tried my best to explore as much as possible.
                        </p>
                    </div>

                    {/* Work Experience Section */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Work Experience</h2>
                            <div className="space-y-6">
                                {workExperience.map((job, index) => (
                                    <div
                                        key={index}
                                        className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 300} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                                    >
                                        <div
                                            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
                                            onClick={() => job.link && window.open(job.link, '_blank')}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                                                        {job.position}
                                                    </h3>
                                                    <h4 className="text-lg text-gray-700 dark:text-gray-300">
                                                        {job.company}
                                                    </h4>
                                                    {job.location && (
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                                                    )}
                                                </div>
                                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mt-2 md:mt-0">
                                                    {job.duration}
                                                </span>
                                            </div>
                                            {job.description && (
                                                <p className="text-gray-600 dark:text-gray-400 mb-3">{job.description}</p>
                                            )}
                                            {job.technologies && job.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {job.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Education</h2>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 500} ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                                    >
                                        <div
                                            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
                                            onClick={() => edu.link && window.open(edu.link, '_blank')}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-blue-500 group-hover:text-blue-800 transition-colors duration-200">
                                                        {edu.degree}
                                                    </h3>
                                                    <h4 className="text-lg text-gray-700 dark:text-gray-300">
                                                        {edu.institution}
                                                    </h4>
                                                    {edu.location && (
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                                                    )}
                                                </div>
                                                <div className="flex flex-col items-end mt-2 md:mt-0">
                                                    <span className="px-3 py-1 bg-green-100 dark:bg-blue-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                                                        {edu.duration}
                                                    </span>
                                                    {edu.gpa && <span className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</span>}
                                                </div>
                                            </div>
                                            {edu.coursework && edu.coursework.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, courseIndex) => (
                                                        <span
                                                            key={courseIndex}
                                                            className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-xs"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Achievements</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 700} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                    >
                                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                                                    {achievement.title}
                                                </h3>
                                                {achievement.date && <span className="text-sm text-blue-500">{achievement.date}</span>}
                                            </div>
                                            {achievement.event && (
                                                <h4 className="text-md text-blue-600 dark:text-gray-300 mb-2">
                                                    {achievement.event}
                                                </h4>
                                            )}
                                            {achievement.description && (
                                                <p className="text-sm text-blue-600 dark:text-gray-100">
                                                    {achievement.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Roles and Responsibilities Section */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Roles & Responsibilities</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rolesAndResponsibilities.map((role, index) => (
                                    <div
                                        key={index}
                                        className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 900} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                    >
                                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-lg font-bold text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                                                    {role.role}
                                                </h3>
                                                {role.duration && (
                                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                                                        {role.duration}
                                                    </span>
                                                )}
                                            </div>
                                                {role.description && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {role.description}
                                                    </p>
                                                )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}