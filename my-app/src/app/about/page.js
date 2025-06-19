"use client";

import React, { useState, useEffect } from "react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Firebase"] },
        { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
    ];

    return (
        <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, I am Bipasha</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I am an enthusiast who is always seeking for something cool! But above all, I love being part of a team, where i can contribute and be an asset. Coding is one part of my life but there's lot other than that too.
                    </p>
                </div>

                <div className="grid  gap-12 items-center mb-20">
                
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Started as a curious fresher at IIIT-H and now have landed in world of Data. I am currently a fourth year Research Student @Data Science & Analytics Center in IIIT Hyderabad, working with Professor Kamalkar Karlapalem as my advisor. I have fallen in love Data Visualization while I have been trying to explore and discover a new one. Data Scientists stay tuned! A new viz is coming up soon.
                            </p>
                           
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                {/* <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillSet, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-center text-blue-500">{skillSet.category}</h3>
                                <div className="space-y-2">
                                    {skillSet.items.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Personal Touch */}
                <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-3xl font-bold mb-6">Beyond Code</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        When I'm not coding, you can find me exploring new technologies, playing some sport, or just lost in the beauty of skies. I believe that great software comes from understanding both the technical and human aspects of development.
                    </p>
                </div>
            </div>
        </div>
    );
}