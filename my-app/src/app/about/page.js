"use client";

import React, { useState, useEffect } from "react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                            Hello, I'm Bipasha
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">data scientist</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">visualization enthusiast</span> on a mission to transform complex data into beautiful, meaningful stories.
                    </p>
                </div>

                {/* Main Content */}
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                    <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p className="text-lg md:text-xl">
                            My journey began at St. Joseph's Convent School, and just like any other kid, I too had no clue what I wanted to be in the future. But then my hard work and fate led me to <strong className="text-purple-600 dark:text-purple-400">IIIT Hyderabad</strong>, one of India's premier technical institutions.
                        </p>

                        <p className="text-lg md:text-xl">
                            Currently in my fourth year as a Research Student at the <strong className="text-indigo-600 dark:text-indigo-400">Data Science & Analytics Center</strong>, working with <strong>Professor Kamalakar Karlapalem</strong>. My research focuses on pioneering new approaches to data visualization that make complex insights accessible to everyone.
                        </p>

                        <p className="text-lg md:text-xl font-medium text-blue-700 dark:text-blue-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl">
                            Currently developing breakthrough visualization techniques that will revolutionize how we interact with data. Stay tuned!
                        </p>

                        <p className="text-lg md:text-xl">
                            Beyond the world of data and code, I'm a curious soul with a love for creativity and exploration. I capture stories through <strong className="text-emerald-600 dark:text-emerald-400">photography</strong> and express ideas through <strong className="text-rose-600 dark:text-rose-400">writing</strong> — not so recently penned an article on mental health, a topic close to my heart.
                        </p>

                        <p className="text-lg md:text-xl">
                            I'm a sports enthusiast, often found on the <strong className="text-orange-600 dark:text-orange-400">the field</strong>. Music is my escape, and I find joy in long walks under vibrant skies, soaking in nature's beauty. You can also sometimes find me sketching my favorite people! Life is a canvas of experiences, and I'm always eager to add new colors through learning, exploring, and connecting with others.
                        </p>

                    </div>
                </div>

                {/* Call to Action */}
                {/* <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">Let's Create Something Amazing Together</h3>
                        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                            Ready to transform your data into beautiful, actionable insights? Let's collaborate and bring your vision to life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                                View My Work
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}   