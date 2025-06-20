"use client";

import React, { useState, useEffect } from "react";

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const contactLinks = [
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: "www.linkedin.com/in/bipasha-garg",
            color: "bg-blue-600 hover:bg-blue-500"
        },
        {
            name: "GitHub",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            href: "https://github.com/Bipasha-Garg",
            color: "bg-gray-700 hover:bg-gray-600"
        },
        // {
        //     name: "Twitter",
        //     icon: (
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        //             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        //         </svg>
        //     ),
        //     href: "https://twitter.com/bipasha",
        //     color: "bg-black hover:bg-gray-800"
        // },
        {
            name: "Gmail",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.832L12 10.58l9.532-6.759h.832c.904 0 1.636.732 1.636 1.636z" />
                </svg>
            ),
            href: "mailto:bipashagarg06@gmail.com",
            color: "bg-red-500 hover:bg-red-400"
        },
        {
            name: "Outlook",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.2.57.54.22.33.31.76.1.4.1.85zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5q2.28 0 3.9 1.62Q13 9.24 13 11.5q0 1.93-1.17 3.48-.68.84-1.78 1.28H11.9l.9-.53q.39-.23.64-.65.23-.4.23-.85 0-.74-.44-1.26-.45-.52-1.18-.52-.73 0-1.17.52-.44.52-.44 1.26 0 .45.22.85.23.42.64.65l.02.01-1.44-.01q1.05-.43 1.7-1.24 1.08-1.33 1.08-3.12 0-1.97-1.39-3.36Q11.47 7.5 9.5 7.5H3.5v9h2.5V12H24z" />
                </svg>
            ),
            href: "mailto:bipasha.garg@research.iiit.ac.in",
            color: "bg-blue-700 hover:bg-blue-600"
        }
    ];

    return (
        <div className="py-52 bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact me.</h1>

                    <p className="text-lg md:text-xl text-gray-300  leading-relaxed">
                        Feel free to contact me via LinkedIn, or email. I'm always happy to connect, chat about opportunities, or just geek out over cool ideas!
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">

                    Whether you have a question, an idea, or just want to say hi — don’t hesitate to reach out!                    </p>
                    <div className="flex justify-center space-x-6">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 rounded-lg ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                                title={link.name}
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {link.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}