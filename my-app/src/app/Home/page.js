"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);

    // Mount animation
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
            <div className={`text-center z-10 px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center">
                            <span className="text-5xl">💻</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Bipasha Garg
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    An enthusiast
                </p>
                <p className="text-lg mb-12 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                    Crafting digital experiences that combine beautiful design with powerful functionality. Passionate about creating solutions that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/projects"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Download Resume
                    </button>
                </div>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                        <span>GitHub</span>
                    </a>
                    <a href="#" className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
                        <span>LinkedIn</span>
                    </a>
                    <a href="#" className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition-colors">
                        <span>Email</span>
                    </a>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link href="/about">
                    <span className="text-3xl cursor-pointer">⬇️</span>
                </Link>
            </div>
        </section>
    );
}