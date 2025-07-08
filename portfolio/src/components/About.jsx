import React from "react";
import {motion} from "framer-motion";
import {Code, Palette, Zap} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const About = () => {
    const {isDark} = useTheme();
    const ref = useScrollAnimation();

    const features = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Building robust web applications with modern technologies and best practices.",
        },
        {
            icon: Code,
            title: "Backend Developer",
            description:
                "Building scalable, secure, and high-performance server-side applications with Java and Spring Boot.",
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Ensuring fast, responsive, and scalable applications for the best user experience.",
        },
    ];

    return (
        <section id="about" className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        I'm a passionate developer and designer with a love for creating digital experiences that make a
                        difference. With expertise in both front-end and back-end technologies, I bring ideas to life
                        through clean code and thoughtful design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                    >
                        <div className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-8`}>
                            <img
                                src="/Nit.jpeg"
                                alt="Aditi working"
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <div className={`${isDark ? "text-gray-300" : "text-gray-600"} space-y-4`}>
                                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                    I'm a final-year MCA student at{" "}
                                    <span className="font-semibold text-cyan-500">NIT Raipur</span>, passionate about
                                    Full-Stack Development and Backend Engineering. With hands-on experience in{" "}
                                    <span className="font-semibold">Java, Spring Boot, React, and Microservices</span>,
                                    I’ve built scalable web applications and explored Machine Learning through
                                    real-world projects. I have a strong foundation in{" "}
                                    <span className="font-semibold">DSA, DBMS, OS, and CN</span>, and have secured{" "}
                                    <span className="font-semibold">AIR 578 in NIMCET 2023</span>. A quick learner and
                                    collaborative team player, I'm actively seeking software development roles where I
                                    can grow and make meaningful contributions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="space-y-6"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: index * 0.1}}
                                    whileHover={{scale: 1.02}}
                                    className={`${
                                        isDark ? "glass-dark" : "glass"
                                    } rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className={`text-xl font-semibold mb-2 ${
                                                    isDark ? "text-white" : "text-gray-800"
                                                }`}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
