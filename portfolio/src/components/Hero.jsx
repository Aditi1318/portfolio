import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Github, Linkedin, Instagram, ChevronDown, Download, Code, Palette, Coffee, Puzzle} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";

const Hero = () => {
    const {isDark} = useTheme();
    const [currentText, setCurrentText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const baseText = "Hi, I'm Aditi — ";
    const roles = [
        "Java Developer",
        "Web Developer",
        "Software Engineer",
        "Problem Solver",
        "Tech Enthusiast",
        "Creative Thinker",
    ];

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const fullText = baseText + currentRole;

        const timer = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentText.length < fullText.length) {
                        setCurrentText(fullText.slice(0, currentText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (currentText.length > baseText.length) {
                        setCurrentText(currentText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timer);
    }, [currentText, currentRoleIndex, isDeleting]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/AditiDResume.pdf";
        link.download = "Aditi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {icon: Github, href: "https://github.com/Aditi1318", label: "GitHub"},
        {icon: Linkedin, href: "https://linkedin.com/in/aditi-diwakar", label: "LinkedIn"},
        {icon: Instagram, href: "https://instagram.com/aditisi1318", label: "Instagram"},
    ];

    const highlights = [
        {icon: Coffee, text: "Java Developer", color: "from-cyan-500 to-blue-500"},
        {icon: Code, text: "Software Engineer", color: "from-teal-500 to-green-500"},
        {icon: Puzzle, text: "Problem Solver", color: "from-purple-500 to-pink-500"},
    ];

    return (
        <section
            id="home"
            className={`pt-24 pb-16 min-h-screen flex items-center relative ${
                isDark
                    ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
                    : "bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50"
            }`}
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{scale: [1, 1.2, 1], rotate: [0, 180, 360]}}
                    transition={{duration: 20, repeat: Infinity}}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{scale: [1.2, 1, 1.2], rotate: [360, 180, 0]}}
                    transition={{duration: 25, repeat: Infinity}}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-purple-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1}}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{rotate: 360}}
                                transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                                className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-400/40 w-96 h-96"
                            />
                            <motion.div
                                animate={{rotate: -360}}
                                transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                                className="absolute inset-4 rounded-full border-2 border-dotted border-teal-400/30 w-88 h-88"
                            />
                            <div className="floating-animation relative z-10">
                                <div className="relative">
                                    <img
                                        src="/Aditi.jpeg"
                                        alt="Aditi's Profile"
                                        className="w-96 h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                                        style={{
                                            boxShadow: `
                        0 0 80px rgba(6, 182, 212, 0.5),
                        0 0 160px rgba(34, 211, 238, 0.3),
                        inset 0 0 80px rgba(255, 255, 255, 0.1)
                      `,
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-teal-500/20 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                        className="text-center lg:text-left space-y-8"
                    >
                        <motion.h1
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.5}}
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-space-grotesk ${
                                isDark ? "text-white" : "text-gray-800"
                            }`}
                        >
                            <span className="inline-block modern-typewriter">
                                {currentText}
                                <span
                                    className={`inline-block w-1 h-12 ml-1 ${
                                        showCursor ? "bg-cyan-500" : "bg-transparent"
                                    } transition-colors duration-100`}
                                />
                            </span>
                        </motion.h1>

                        {/* Highlights */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 1.2}}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        >
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <motion.div
                                        key={highlight.text}
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.8, delay: 1.4 + index * 0.1}}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${highlight.color} text-white shadow-lg font-poppins font-medium`}
                                    >
                                        <Icon size={16} />
                                        <span className="text-sm">{highlight.text}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 1.8}}
                            className={`text-xl md:text-2xl leading-relaxed font-poppins ${
                                isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            A passionate{" "}
                            <span className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent futuristic-text">
                                Computer Science student
                            </span>{" "}
                            currently pursuing my final year of MCA at{" "}
                            <span className="font-semibold text-cyan-500">NIT Raipur</span>, eager to craft innovative
                            solutions and engaging digital experiences that make a meaningful impact.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 2.2}}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                onClick={() =>
                                    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})
                                }
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold shadow-xl"
                            >
                                View My Projects
                            </motion.button>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                onClick={handleDownloadResume}
                                className={`px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold flex items-center justify-center space-x-2 ${
                                    isDark ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
                                }`}
                            >
                                <Download size={20} />
                                <span>Download Resume</span>
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 2.4}}
                            className="flex justify-center lg:justify-start space-x-6"
                        >
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.8, delay: 2.6 + index * 0.1}}
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.9}}
                                        className={`p-4 rounded-full backdrop-blur-md border ${
                                            isDark ? "bg-white/10 border-white/20" : "bg-white/50 border-white/40"
                                        }`}
                                    >
                                        <Icon size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 3.5}}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 2, repeat: Infinity}}
                        className="cursor-pointer"
                        onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})}
                    >
                        <ChevronDown size={32} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
