"use client";

import React, { useState, useEffect } from "react";

export default function ProjectsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Parking in a Multi-storied Building",
            description: "Developed a system using IoT technologies to provide drivers with real-time information on available parking spots, optimize parking utilization, and reduce traffic congestion.",
            longDescription: "An IoT-based parking management system that uses sensors like LDR to detect vehicle positions and developed an algorithm to allocate the nearest parking spot based on congestion levels.",
            tech: ["IoT", "Sensors", "LDR", "Algorithms"],
            category: "iot",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: true
        },
        {
            id: 2,
            title: "Music Site",
            description: "Built a music app clone to display artists and their songs and albums and provide a feature to play the songs using basic HTML, CSS, JS.",
            longDescription: "A comprehensive music streaming application with extensive features like filtering explicit content and search functionality for discovering artists, songs, and albums.",
            tech: ["HTML", "CSS", "JavaScript", "Flask"],
            category: "frontend",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: false
        },
        {
            id: 3,
            title: "Food Delivery Inside Campus App",
            description: "This User interactive site was made to place orders inside the IIIT campus using HTML, CSS, JS and Python with Flask for hosting.",
            longDescription: "A campus-specific food delivery application that enables students to place orders within the IIIT campus, featuring seamless data conversion between strings and JSON format.",
            tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "JSON"],
            category: "fullstack",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
            live: "",
            github: "https://github.com/anshium/ISS-Hackathon.git",
            featured: true
        },
        {
            id: 4,
            title: "Olympic Database",
            description: "Created a database to store olympic game details using the ER, Relational Model and implementing it using MySQL.",
            longDescription: "A comprehensive database system for Olympic games with features to run queries like edit, delete, search, and add details in the database using proper database design principles.",
            tech: ["Database", "SQL", "MySQL", "ER Model"],
            category: "backend",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: false
        },
        {
            id: 5,
            title: "C Shell",
            description: "Built a user-defined interactive shell program using C programs arranged in a modular fashion to provide functionality for commands implemented in a linux terminal.",
            longDescription: "A comprehensive shell implementation with commonly used commands, featuring pipe-lining, I/O redirection, foreground and background processes for enhanced terminal functionality.",
            tech: ["C", "Linux", "System Programming"],
            category: "backend",
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: false
        },
        {
            id: 6,
            title: "Network File System",
            description: "Engineered a Network File System (NFS) utilizing C, facilitating user access to diverse files and directories while incorporating backup functionalities.",
            longDescription: "An interactive NFS system that maintains logs of every activity and handles failures and errors efficiently, providing robust file and directory access across networks.",
            tech: ["C", "Network Programming", "File Systems"],
            category: "backend",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: false
        },
        {
            id: 7,
            title: "IIIT H Research Portal",
            description: "A research portal website for IIITH which showcases the research work and related information with special admin access for the RnD department.",
            longDescription: "A comprehensive research portal featuring different pages to showcase RnD department work, with administrative controls for content management and research information updates.",
            tech: ["React.js", "Next.js", "Node.js", "SQL", "Prisma", "Figma", "Tailwind"],
            category: "fullstack",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            live: "",
            github: "",
            featured: true
        },
        {
            id: 8,
            title: "Data Visualization of Chess Game",
            description: "A static visualisation of a Chess Match showing the moves played and game interpretation at each instance.",
            longDescription: "An interactive chess game visualization that provides detailed analysis of each move, allowing users to understand game progression and strategic decisions throughout the match.",
            tech: ["React.js", "D3", "Tailwind"],
            category: "frontend",
            image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
            live: "",
            github: "https://github.com/Bipasha-Garg/ChessGame.git",
            featured: false
        },
        {
            id: 9,
            title: "Economics of Asylum Countries",
            description: "Depicts Visualization of the economics of the asylum countries using various visualization methods including choropleth maps and animated charts.",
            longDescription: "A comprehensive data visualization project featuring country maps, bar charts, line charts and animated bubble charts to analyze and display the economic conditions of asylum countries and migration patterns.",
            tech: ["React.js", "Tailwind", "D3", "Python"],
            category: "frontend",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            live: "",
            github: "https://github.com/bassamadnan/dv-team-project.git",
            featured: false
        },
        {
            id: 10,
            title: "Personality Analysis for Job Suitability",
            description: "Developed a system to assess candidates' suitability for various job roles by analyzing their social media activity using machine learning.",
            longDescription: "An intelligent system that applies Big Five Personality Traits model for data exploration and uses machine learning algorithms to generate quantitative personality scores from candidates' online profiles while ensuring privacy compliance.",
            tech: ["Python", "HTML", "CSS", "Flask", "SQL", "Machine Learning"],
            category: "fullstack",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            live: "",
            github: "https://github.com/TanishG03/Megathon2023.git",
            featured: true
        }
    ];

    const categories = [
        { id: "all", name: "All Projects" },
        { id: "fullstack", name: "Full Stack" },
        { id: "frontend", name: "Frontend" },
        { id: "backend", name: "Backend" },
        { id: "iot", name: "IoT" }
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A collection of projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                                    ? "bg-blue-500 text-white shadow-lg"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Projects */}
                <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => {
                            const hasLink = project.live || project.github;
                            const linkUrl = project.live || project.github;

                            const ProjectCard = ({ children }) => {
                                if (hasLink) {
                                    return (
                                        <a
                                            href={linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        >
                                            {children}
                                        </a>
                                    );
                                }
                                return (
                                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                                        {children}
                                    </div>
                                );
                            };

                            return (
                                <ProjectCard key={project.id}>
                                    <div className="relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        {hasLink && (
                                            <div className="absolute bottom-4 right-4">
                                                <span className="p-2 bg-white/80 rounded-full">
                                                    <span>🔗</span>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ProjectCard>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-20 text-center transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm always excited to work on new projects and bring ideas to life. Let's discuss the next step!
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Start a Project
                    </button>
                </div>
            </div>
        </div>
    );
}