import React from "react";
import {motion} from "framer-motion";
import {
    Github,
    ExternalLink,
    Code,
    Palette,
    Zap,
    MessageCircle,
    Globe,
    Puzzle,
    GlobeIcon,
    Monitor,
    Store,
} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const Projects = () => {
    const {isDark} = useTheme();
    const ref = useScrollAnimation();

    const projects = [
        {
            id: 7,
            title: "Sweet Shop Management System",
            description: "A comprehensive management system for a sweet shop, designed to streamline daily operations.",
            image: "/sweet-shop.jpg",
            tech: ["ReactJS", "Spring Boot", "MySQL", "TailwindCSS", "Docker", "Spring Security"],
            liveUrl: "https://sweet-shop-app.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/Sweet-Shop-Management-System",
            category: "Full Stack",
            icon: Store,
        },
        {
            id: 5,
            title: "Selfie Booth",
            description:
                "A fun web-based selfie booth app that lets users take pictures with real-time camera filters and create downloadable film-style photo collages.",
            image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
            tech: ["ReactJS", "Tailwind CSS", "Webcam API", "HTML5 Canvas"],
            liveUrl: "https://selfie-booth-t1br.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/selfie-booth",
            category: "Web App",
            icon: Zap,
        },
        {
            id: 1,
            title: "Salon Booking System - BOOK-AND-STYLE",
            description:
                "A full-stack Salon Management System with modern UI/UX, payment integration, and admin/user dashboard.",
            image: "beauty-salon.jpg",
            tech: [
                "ReactJS",
                "Spring Boot",
                "Microservices",
                "MySQL",
                "Stripe/RazorPay",
                "Tailwind CSS",
                "Docker",
                "Spring Security",
            ],
            liveUrl: "https://book-and-style.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/BOOK-AND-STYLE",
            category: "Full Stack",
            icon: Globe,
        },
        {
            id: 2,
            title: "Chat Application - Chit-Chat",
            description:
                "A feature-rich real-time chat platform built using Java, Spring Boot, React, and WebSockets. The application enables instant messaging, file sharing, emojis, andcreating an engaging user experience similar to modern messaging platforms.",
            image: "/chat.jpg",
            tech: ["ReactJS", "Spring Boot", "MongoDB", "Socket.io", "TailwindCSS"],
            liveUrl: "https://chat-room-eight-amber.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/Chat-Room",
            category: "Full Stack",
            icon: MessageCircle,
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A stunning portfolio website with glassmorphism design and smooth animations.",
            image: "/portfolio.webp",
            tech: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
            liveUrl: "https://aditi-diwakar.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/portfolio",
            category: "Web App",
            icon: Monitor,
        },
        {
            id: 4,
            title: "Weather App",
            description: "A responsive weather app with location-based forecasts.",
            image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600",
            tech: ["HTML", "CSS3", "OpenWeather API", "JavaScript"],
            liveUrl: "https://weather-app-lovat-two-12.vercel.app/",
            githubUrl: "https://github.com/Aditi1318/weatherApp",
            category: "Web App",
            icon: GlobeIcon,
        },

        {
            id: 6,
            title: "PlayVerse AI (coming soon..)",
            description:
                "PlayVerse AI is a voice-controlled web app featuring classic and casual games like Ludo, Chess, and Snake & Ladder. Users can play and navigate games hands-free using a built-in AI voice assistant.",
            image: "/game.png",
            tech: ["ReactJS", "Tailwind CSS", "Contentful", "Styled Components", "Speech Recognition API"],
            liveUrl: "https://github.com/Aditi1318/playverse-ai",
            githubUrl: "https://github.com/Aditi1318/playverse-ai",
            category: "Web App",
            icon: Puzzle,
        },
    ];

    return (
        <section id="projects" className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Here are some of my recent projects that showcase my skills and passion for development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: index * 0.1}}
                                whileHover={{scale: 1.02}}
                                className={`${
                                    isDark ? "glass-dark" : "glass"
                                } rounded-2xl overflow-hidden project-card group hover:shadow-2xl transition-all duration-300 flex flex-col`}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
                                            <Icon size={16} className="text-white" />
                                        </div>
                                        <span
                                            className={`text-sm px-2 py-1 rounded-full ${
                                                isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                                            }`}
                                        >
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3
                                        className={`text-xl font-semibold mb-3 ${
                                            isDark ? "text-white" : "text-gray-800"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`text-xs px-2 py-1 rounded-full ${
                                                    isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex justify-between gap-4 pt-4">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                            className={`flex items-center space-x-2 px-4 py-2 border-2 border-gray-400 rounded-lg hover:shadow-lg transition-all duration-300 ${
                                                isDark
                                                    ? "text-white hover:bg-gray-800"
                                                    : "text-gray-800 hover:bg-gray-50"
                                            }`}
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
