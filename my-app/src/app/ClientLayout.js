"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icon components
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

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            try {
                const saved = localStorage.getItem("theme");
                if (saved) return saved === "dark";
                return window.matchMedia("(prefers-color-scheme: dark)").matches;
            } catch (e) {
                console.error("Failed to access localStorage:", e);
                return window.matchMedia("(prefers-color-scheme: dark)").matches;
            }
        }
        return true;
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const theme = isDark ? "dark" : "light";
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {
            console.error("Failed to set localStorage:", e);
        }
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.style.transition = "all 0.5s ease";
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];



    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 border-b ${isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/icon.jpeg"
                                alt="Portfolio"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`hover:text-blue-500 transition-colors ${pathname === item.href ? "text-blue-500 font-semibold" : ""}`}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors duration-300 ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDark ? <SunIcon /> : <MoonIcon />}
                            </button>
                        </div>
                        <button
                            className="md:hidden p-2 rounded-full transition-colors duration-300"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden flex flex-col space-y-2 pb-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`hover:text-blue-500 transition-colors py-2 ${pathname === item.href ? "text-blue-500 font-semibold" : ""}`}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full text-left transition-colors duration-300 ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDark ? "Light Mode" : "Dark Mode"}
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20">{children}</main>

            {/* Footer */}
            <footer className={`py-8  border-t ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 items-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            © 2025 Bipasha Garg. All rights reserved.
                        </p>
                        <div className="flex justify-end space-x-4">
                            {/* {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    aria-label={link.name}
                                >
                                    <span>{link.icon}</span>
                                </a>
                            ))} */}


                            <p className="text-gray-600 dark:text-gray-400">
                                Built June 2025
                            </p>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}