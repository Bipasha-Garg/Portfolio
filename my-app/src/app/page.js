"use client";

import React from "react";
import Image from "next/image";

// Contact icons
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Introduction */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Bipasha Garg
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-black dark:text-gray-300">
                An Engineer
              </p>

              <div className="space-y-4 text-lg text-gray-900 dark:text-gray-300 leading-relaxed">
                <p>
                  Well, I just a girl with dreams and lil amount of curiosity. I like to explore new stuff, new domains, new sports, new music perhaps?
                </p>

                <p>
                  Currently, I am a fourth year student at IIIT Hyderabad working as a researcher @Data Science & Analytics Center with Professor Kamal Karlapalem as my Research Advisor in the field of Data Visualization. After exploring so many existing visualizations, I am now on the way to make one of my own. Cool right? Stay tuned!
                </p>

                <p>
                  I have also been exploring a little bit of Quantitative Finance along Data Science and web development. Apart from staring at my screen, you will find me playing a new sport everytime and being good at it (&gt;_&lt;), or lost in the beauty of skies.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/projects" className="inline-block">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View My Work
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Picture and Contact */}
          <div className="space-y-8">

            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
                  <Image
                    src="/my.jpeg"
                    alt="Bipasha Garg"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            {/* Contact Information - Centered */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>

              <div className="space-y-4 max-w-sm w-full">
                {/* Email */}
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:bipasha.garg@research.iiit.ac.in" className="text-sm font-semibold hover:text-blue-500 transition-colors">
                      bipasha.garg@research.iiit.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links - Centered */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 w-full max-w-sm">
                <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com/in/bipasha-garg" className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    <LinkedInIcon />
                  </a>
                  <a href="https://github.com/bipasha-garg" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}