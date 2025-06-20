// "use client";

// import React, { useState, useEffect } from "react";

// export default function WorkPage() {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const workExperience = [
//         {
//             company: "JP Morgan Chase and Co.",
//             position: "Mentee, Quant Mentorship Program",
//             duration: "February 2025 - June 2025",
//             location: "Remote",
//             link: "https://www.jpmorganchase.com/",
//             description: "Quantitative finance mentorship with industry professionals",
//             technologies: ["Quantitative Finance", "Financial Modeling", "Data Analysis"]
//         },
//         {
//             company: "Campus Connect (Startup)",
//             position: "Product Marketing & Development Intern",
//             duration: "October 2024 - April 2025",
//             location: "Remote",
//             link: "",
//             description: "Market research and competitive analysis for product roadmap prioritization",
//             technologies: ["Market Research", "Product Development", "Strategic Planning"]
//         },
//         {
//             company: "Data Science Analytics Center",
//             position: "Researcher",
//             duration: "May 2024 - Present",
//             location: "",
//             link: "https://dsac.iiit.ac.in/",
//             description: "Exploring and researching new Data Visualization techniques",
//             technologies: ["Data Visualization", "Data Analytics"]
//         },
//         {
//             company: "IT Department, IIIT Hyderabad",
//             position: "Web Developer Intern",
//             duration: "January 2024 - May 2024",
//             location: "Hyderabad, Telangana",
//             link: "https://www.iiit.ac.in/",
//             description: "Developed responsive research portal serving 1000+ users with automated testing",
//             technologies: ["Node.js", "Next.js", "PostgreSQL", "CI/CD"]
//         }
//     ];

//     const education = [
//         {
//             institution: "IIIT Hyderabad",
//             degree: "Bachelor of Technology in Computer Science and Master of Science by Research in Computer Science",
//             duration: "2022 - 2027",
//             location: "Hyderabad, Telangana",
//             gpa: "",
//             link: "https://www.iiit.ac.in/",
//             coursework: []
//         },
//         {
//             institution: "Sudesh Vatika Senior Secondary School",
//             degree: "12th Grade - Science Stream",
//             duration: "2020 - 2022",
//             location: "Bathinda, Punjab",
//             gpa: "95%",
//             link: "",
//             coursework: []
//         },
//         {
//             institution: "St. Joseph's Convent Senior Secondary School",
//             degree: "10th Grade",
//             duration: "2008 - 2020",
//             location: "Bathinda, Punjab",
//             gpa: "95.8%",
//             link: "",
//             coursework: []
//         }
//     ];

//     const achievements = [
//         {
//             title: "Google Women Techmakers Badge",
//             event: "Google Women Techmakers",
//             date: "2025",
//             description: "Earned the Google Women Techmakers member badge for contributions to tech community",
//             category: "Recognition"
//         },
//         {
//             title: "Megathon Top 5",
//             event: "Megathon by E-Cell, IIIT-H",
//             date: "2023",
//             description: "Achieved top 5 ranking out of 150+ teams in one of India's largest hackathons with 1000+ students",
//             category: "Competition"
//         }
//     ];

//     const rolesAndResponsibilities = [
//         { role: "Teaching Assistant", description: "Discrete Structures & Data Visualization", duration: "2024-25" },
//         { role: "Mental Health Volunteer", description: "Supporting student wellbeing initiatives", duration: "2023-Present" },
//         { role: "ASEC - Sports Club", description: "Coordinator", duration: "2023-2025" },
//         { role: "Social Media Team Head", description: "Felicity - IIIT Hyderabad", duration: "2023-2025" },
//         { role: "Student Alumni Connect Cell", description: "Member facilitating alumni connections", duration: "2023-Present" },
//         { role: "Photography Club Member", description: "Capturing campus events and moments", duration: "2022-Present" },
//         { role: "Ping! - Writer", description: "Writer for the college's student run magazine", duration: "2024-Present" },
//         { role: "Cultural Council Member", description: "House Captain", duration: "2023-2024" },
//         { role: "Apex Member", description: "Help Freshers onboard smoothly into college", duration: "2024-Present" }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-900 py-12 px-4">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//                         Professional Journey
//                     </h1>
//                     <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
//                         Exploring opportunities and building expertise through diverse experiences in technology, finance, and research.
//                     </p>
//                 </div>

//                 {/* Work Experience Section */}
//                 <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
//                         <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Work Experience</h2>
//                         <div className="space-y-6">
//                             {workExperience.map((job, index) => (
//                                 <div
//                                     key={index}
//                                     className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 300} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
//                                 >
//                                     <div
//                                         className={`bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-blue-500 group ${job.link ? 'cursor-pointer' : ''}`}
//                                         onClick={() => job.link && window.open(job.link, '_blank')}
//                                     >
//                                         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                                             <div className="flex-1">
//                                                 <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-200 mb-1">
//                                                     {job.position}
//                                                 </h3>
//                                                 <h4 className="text-lg text-white font-semibold mb-1">
//                                                     {job.company}
//                                                 </h4>
//                                                 {job.location && (
//                                                     <p className="text-sm text-gray-400">{job.location}</p>
//                                                 )}
//                                             </div>
//                                             <div className="mt-3 lg:mt-0 lg:ml-6">
//                                                 <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
//                                                     {job.duration}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         {job.description && (
//                                             <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
//                                         )}
//                                         {job.technologies && job.technologies.length > 0 && (
//                                             <div className="flex flex-wrap gap-2">
//                                                 {job.technologies.map((tech, techIndex) => (
//                                                     <span
//                                                         key={techIndex}
//                                                         className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm border border-gray-500"
//                                                     >
//                                                         {tech}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Education Section */}
//                 <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
//                         <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Education</h2>
//                         <div className="space-y-6">
//                             {education.map((edu, index) => (
//                                 <div
//                                     key={index}
//                                     className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 500} ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
//                                 >
//                                     <div
//                                         className={`bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-green-500 group ${edu.link ? 'cursor-pointer' : ''}`}
//                                         onClick={() => edu.link && window.open(edu.link, '_blank')}
//                                     >
//                                         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
//                                             <div className="flex-1">
//                                                 <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-200 mb-1">
//                                                     {edu.degree}
//                                                 </h3>
//                                                 <h4 className="text-lg text-white font-semibold mb-1">
//                                                     {edu.institution}
//                                                 </h4>
//                                                 {edu.location && (
//                                                     <p className="text-sm text-gray-400">{edu.location}</p>
//                                                 )}
//                                             </div>
//                                             <div className="mt-3 lg:mt-0 lg:ml-6 flex flex-col items-start lg:items-end">
//                                                 <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-2">
//                                                     {edu.duration}
//                                                 </span>
//                                                 {edu.gpa && (
//                                                     <span className="text-sm text-gray-300 font-medium">
//                                                         Grade: {edu.gpa}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         {edu.coursework && edu.coursework.length > 0 && (
//                                             <div className="flex flex-wrap gap-2 mt-4">
//                                                 {edu.coursework.map((course, courseIndex) => (
//                                                     <span
//                                                         key={courseIndex}
//                                                         className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm border border-gray-500"
//                                                     >
//                                                         {course}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Achievements Section */}
//                 <div className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
//                         <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">Achievements</h2>
//                         <div className="grid md:grid-cols-2 gap-6">
//                             {achievements.map((achievement, index) => (
//                                 <div
//                                     key={index}
//                                     className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 700} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//                                 >
//                                     <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-yellow-500 group">
//                                         <div className="flex items-start justify-between mb-3">
//                                             <h3 className="text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200 flex-1">
//                                                 {achievement.title}
//                                             </h3>
//                                             {achievement.date && (
//                                                 <span className="text-sm text-gray-300 font-medium ml-4">
//                                                     {achievement.date}
//                                                 </span>
//                                             )}
//                                         </div>
//                                         {achievement.event && (
//                                             <h4 className="text-md text-white font-medium mb-2">
//                                                 {achievement.event}
//                                             </h4>
//                                         )}
//                                         {achievement.description && (
//                                             <p className="text-sm text-gray-300 leading-relaxed">
//                                                 {achievement.description}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Roles and Responsibilities Section */}
//                 <div className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
//                         <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">Roles & Responsibilities</h2>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {rolesAndResponsibilities.map((role, index) => (
//                                 <div
//                                     key={index}
//                                     className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 900} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//                                 >
//                                     <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-purple-500 group h-full">
//                                         <div className="flex flex-col h-full">
//                                             <div className="flex items-start justify-between mb-3">
//                                                 <h3 className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-200 flex-1 leading-tight">
//                                                     {role.role}
//                                                 </h3>
//                                             </div>
//                                             {role.description && (
//                                                 <p className="text-sm text-gray-300 mb-3 flex-1 leading-relaxed">
//                                                     {role.description}
//                                                 </p>
//                                             )}
//                                             {role.duration && (
//                                                 <span className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-medium self-start">
//                                                     {role.duration}
//                                                 </span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

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
            institution: "Sudesh Vatika Senior Secondary School",
            degree: "12th Grade - Science Stream",
            duration: "2020 - 2022",
            location: "Bathinda, Punjab",
            gpa: "95%",
            link: "",
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
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Professional Journey
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Exploring opportunities and building expertise through diverse experiences in technology, finance, and research.
                    </p>
                </div>

                {/* Work Experience Section */}
                <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-center mb-6 text-white">Work Experience</h2>
                        <div className="space-y-4">
                            {workExperience.map((job, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 300} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                                >
                                    <div
                                        className={`bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-500 group ${job.link ? 'cursor-pointer' : ''}`}
                                        onClick={() => job.link && window.open(job.link, '_blank')}
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-200 mb-1">
                                                    {job.position}
                                                </h3>
                                                <h4 className="text-md text-gray-300 font-medium mb-1">
                                                    {job.company}
                                                </h4>
                                                {job.location && (
                                                    <p className="text-sm text-gray-400">{job.location}</p>
                                                )}
                                            </div>
                                            <div className="mt-2 lg:mt-0 lg:ml-4">
                                                <span className="inline-block px-3 py-1 bg-gray-600 text-gray-200 rounded-md text-sm">
                                                    {job.duration}
                                                </span>
                                            </div>
                                        </div>
                                        {job.description && (
                                            <p className="text-gray-300 mb-3 text-sm leading-relaxed">{job.description}</p>
                                        )}
                                        {job.technologies && job.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {job.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs"
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
                <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-center mb-6 text-white">Education</h2>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 500} ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                                >
                                    <div
                                        className={`bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-500 group ${edu.link ? 'cursor-pointer' : ''}`}
                                        onClick={() => edu.link && window.open(edu.link, '_blank')}
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-200 mb-1">
                                                    {edu.degree}
                                                </h3>
                                                <h4 className="text-md text-gray-300 font-medium mb-1">
                                                    {edu.institution}
                                                </h4>
                                                {edu.location && (
                                                    <p className="text-sm text-gray-400">{edu.location}</p>
                                                )}
                                            </div>
                                            <div className="mt-2 lg:mt-0 lg:ml-4 flex flex-col items-start lg:items-end">
                                                <span className="inline-block px-3 py-1 bg-gray-600 text-gray-200 rounded-md text-sm mb-1">
                                                    {edu.duration}
                                                </span>
                                                {edu.gpa && (
                                                    <span className="text-sm text-gray-300">
                                                        Grade: {edu.gpa}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {edu.coursework && edu.coursework.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {edu.coursework.map((course, courseIndex) => (
                                                    <span
                                                        key={courseIndex}
                                                        className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs"
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
                <div className={`mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-center mb-6 text-white">Achievements</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 700} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                >
                                    <div className="bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-500 group">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-200 flex-1">
                                                {achievement.title}
                                            </h3>
                                            {achievement.date && (
                                                <span className="text-sm text-gray-300 ml-4">
                                                    {achievement.date}
                                                </span>
                                            )}
                                        </div>
                                        {achievement.event && (
                                            <h4 className="text-md text-gray-300 font-medium mb-2">
                                                {achievement.event}
                                            </h4>
                                        )}
                                        {achievement.description && (
                                            <p className="text-sm text-gray-300 leading-relaxed">
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
                <div className={`mb-12 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-center mb-6 text-white">Roles & Responsibilities</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {rolesAndResponsibilities.map((role, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-1000 delay-${(index + 1) * 100 + 900} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                >
                                    <div className="bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-500 group h-full">
                                        <div className="flex flex-col h-full">
                                            <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-200 mb-2 leading-tight">
                                                {role.role}
                                            </h3>
                                            {role.description && (
                                                <p className="text-sm text-gray-300 mb-3 flex-1 leading-relaxed">
                                                    {role.description}
                                                </p>
                                            )}
                                            {role.duration && (
                                                <span className="inline-block px-2 py-1 bg-gray-600 text-gray-200 rounded text-xs self-start">
                                                    {role.duration}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}