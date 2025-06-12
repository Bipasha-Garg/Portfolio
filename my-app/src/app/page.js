"use client";

import React, { useState, useEffect } from "react";

// Icon components (as in your sample, can be moved to a separate file)
const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
  </svg>
);
// ... (other icons: GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, ChevronDownIcon, CodeIcon, PaletteIcon, ZapIcon)

export default function PortfolioHomepage() {
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });
  const [isVisible, setIsVisible] = useState(false);

  // Mount animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sync theme with localStorage and document
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Portfolio content data
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Python", level: 75 },
  ];
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration and admin dashboard",
      tech: ["Next.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      live: "#",
      github: "#",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat application with real-time messaging and AI integration",
      tech: ["React", "Socket.io", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance and metrics",
      tech: ["Vue.js", "D3.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      live: "#",
      github: "#",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="flex items-center space-x-6">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                aria-label="Toggle dark mode"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className={`text-center z-10 px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className={`w-full h-full rounded-full ${isDark ? "bg-gray-900" : "bg-white"} flex items-center justify-center`}>
                {/* <CodeIcon /> */}
                <span className="text-5xl">💻</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Crafting digital experiences that combine beautiful design with powerful functionality. Passionate about creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className={`px-8 py-4 border-2 ${isDark ? "border-gray-600 hover:border-gray-500" : "border-gray-300 hover:border-gray-400"} rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}>
              Download Resume
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              {/* <GithubIcon /> */} <span>GitHub</span>
            </a>
            <a href="#" className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
              {/* <LinkedinIcon /> */} <span>LinkedIn</span>
            </a>
            <a href="#" className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition-colors">
              {/* <MailIcon /> */} <span>Email</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* <ChevronDownIcon /> */}
          <span className="text-3xl">⬇️</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer with over 5 years of experience building modern web applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  {/* <CodeIcon /> */}
                  <span>💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Clean Code</h3>
                  <p className="text-gray-600 dark:text-gray-400">Writing maintainable, scalable code</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  {/* <PaletteIcon /> */}
                  <span>🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Beautiful Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">Creating stunning user interfaces</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-pink-500 rounded-lg">
                  {/* <ZapIcon /> */}
                  <span>⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400">Optimized for speed and efficiency</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.live} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      {/* <ExternalLinkIcon /> */} <span>🔗</span>
                    </a>
                    <a href={project.github} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      {/* <GithubIcon /> */} <span>🐱</span>
                    </a>
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 John Doe. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
