// "use client";

// import React, { useState, useEffect } from "react";

// export default function AboutPage() {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 min-h-screen">
//             <div className="max-w-6xl mx-auto">
//                 {/* Hero Section */}
//                 <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="mb-8">
//                         <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//                             Hello, I'm Bipasha
//                         </h1>
//                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
//                     </div>
//                     <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
//                         A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">data scientist</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">visualization enthusiast</span> on a mission to transform complex data into beautiful, meaningful stories.
//                     </p>
//                 </div>

//                 {/* Main Content */}
//                 <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
//                     <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
//                         <p className="text-lg md:text-xl">
//                             My journey began at St. Joseph's Convent School, and just like any other kid, I too had no clue what I wanted to be in the future. But then my hard work and fate led me to <strong className="text-purple-600 dark:text-purple-400">IIIT Hyderabad</strong>, one of India's premier technical institutions.
//                         </p>

//                         <p className="text-lg md:text-xl">
//                             Currently in my fourth year as a Research Student at the <strong className="text-indigo-600 dark:text-indigo-400">Data Science & Analytics Center</strong>, working with <strong>Professor Kamalakar Karlapalem</strong>. My research focuses on pioneering new approaches to data visualization that make complex insights accessible to everyone.
//                         </p>

//                         <p className="text-lg md:text-xl font-medium text-blue-700 dark:text-blue-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl">
//                             Currently developing breakthrough visualization techniques that will revolutionize how we interact with data. Stay tuned!
//                         </p>

//                         <p className="text-lg md:text-xl">
//                             Beyond the world of data and code, I'm a curious soul with a love for creativity and exploration. I capture stories through <strong className="text-emerald-600 dark:text-emerald-400">photography</strong> and express ideas through <strong className="text-rose-600 dark:text-rose-400"><a href="https://pingiiit.org/2023/07/breaking-the-silence/">writing</a></strong> — not so recently penned an article on mental health, a topic close to my heart.
//                         </p>

//                         <p className="text-lg md:text-xl">
//                             I'm a sports enthusiast, often found on the <strong className="text-orange-600 dark:text-orange-400">the field</strong>. Music is my escape, and I find joy in long walks under vibrant skies, soaking in nature's beauty. You can also sometimes find me sketching my favorite people! Life is a canvas of experiences, and I'm always eager to add new colors through learning, exploring, and connecting with others.
//                         </p>

//                     </div>
//                 </div>

//                 {/* Call to Action */}
//                 {/* <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//                     <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-3xl shadow-2xl">
//                         <h3 className="text-3xl font-bold mb-4">Let's Create Something Amazing Together</h3>
//                         <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
//                             Ready to transform your data into beautiful, actionable insights? Let's collaborate and bring your vision to life.
//                         </p>
//                         <div className="flex flex-wrap justify-center gap-6">
//                             <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
//                                 View My Work
//                             </button>
//                             <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
//                                 Get In Touch
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// }   

"use client";

import React, { useState, useEffect } from "react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Sample photo URLs - replace these with your actual photo URLs
    const photoUrls = [
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "1.jpeg",
        // "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg",
        "10.jpeg",
        "12.jpeg",
        "11.jpeg",
    ];

    return (
        <div className="relative py-20 px-4 min-h-screen overflow-hidden">
            {/* Photo Collage Background - Symmetric from Center */}
            <div className="absolute inset-0 opacity-80">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-4">
                    {/* Symmetric layout with proper grid positions and larger heights */}
                    {photoUrls.map((url, index) => {
                        // Define symmetric positions with larger row spans
                        const positions = [
                            "col-start-4 col-end-6 row-start-3 row-end-6",   // center (3 rows tall)
                            "col-start-2 col-end-4 row-start-3 row-end-6",   // center-left (3 rows tall)
                            "col-start-6 col-end-8 row-start-3 row-end-6",   // center-right (3 rows tall)
                            "col-start-3 col-end-5 row-start-1 row-end-3",   // top center (2 rows tall)
                            "col-start-5 col-end-7 row-start-1 row-end-3",   // top center-right (2 rows tall)
                            "col-start-3 col-end-5 row-start-6 row-end-8",   // bottom center (2 rows tall)
                            "col-start-5 col-end-7 row-start-6 row-end-8",   // bottom center-right (2 rows tall)
                            "col-start-1 col-end-2 row-start-2 row-end-5",   // left side (3 rows tall)
                            "col-start-8 col-end-9 row-start-2 row-end-5",   // right side (3 rows tall)
                            "col-start-1 col-end-2 row-start-5 row-end-7",   // left-bottom (2 rows tall)
                            "col-start-8 col-end-9 row-start-5 row-end-7",   // right-bottom (2 rows tall)
                            "col-start-1 col-end-3 row-start-1 row-end-2",   // top-left (1 row)
                        ];

                        return (
                            <div
                                key={index}
                                className={`bg-cover bg-center transform hover:scale-105 transition-all duration-500 rounded-xl shadow-lg ${positions[index] || 'col-start-1 col-end-2 row-start-8 row-end-9'}`}
                                style={{
                                    backgroundImage: `url(${url})`,
                                    filter: 'brightness(0.9) contrast(1.1)'
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`absolute inset-0 transition-all duration-700 ${showPhotos
                        ? 'bg-gray-900/20'
                        : 'bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-900'
                    }`}
            />

            {/* Content */}
            <div
                className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-700 ${showPhotos ? 'opacity-20' : 'opacity-100'
                    }`}
            >
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
                            Beyond the world of data and code, I'm a curious soul with a love for creativity and exploration. I capture stories through{" "}
                            <strong
                                className="text-emerald-600 dark:text-emerald-400 cursor-pointer hover:text-emerald-500 transition-colors duration-300 relative z-20"
                                onMouseEnter={() => setShowPhotos(true)}
                                onMouseLeave={() => setShowPhotos(false)}
                            >
                                photography
                            </strong>{" "}
                            and express ideas through <strong className="text-rose-600 dark:text-rose-400"><a href="https://pingiiit.org/2023/07/breaking-the-silence/">writing</a></strong> — not so recently penned an article on mental health, a topic close to my heart.
                        </p>

                        <p className="text-lg md:text-xl">
                            I'm a sports enthusiast, often found on the <strong className="text-orange-600 dark:text-orange-400">the field</strong>. Music is my escape, and I find joy in long walks under vibrant skies, soaking in nature's beauty. You can also sometimes find me sketching my favorite people! Life is a canvas of experiences, and I'm always eager to add new colors through learning, exploring, and connecting with others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}