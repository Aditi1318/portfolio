import React from "react";
import {motion} from "framer-motion";
import {useTheme} from "../contexts/ThemeContext";
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const Skills = () => {
    const {isDark} = useTheme();
    const ref = useScrollAnimation();

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                {name: "Java", level: 95},
                {name: "JavaScript", level: 80},
                {name: "C/C++", level: 70},
                {name: "SQL", level: 85},
                {name: "Python (Basics)", level: 60},
            ],
        },

        {
            title: "Frontend",
            skills: [
                {name: "React", level: 90},
                {name: "JavaScript", level: 85},
                {name: "Tailwind CSS", level: 88},
                {name: "HTML", level: 82},
                {name: "CSS", level: 75},
            ],
        },
        {
            title: "Backend",
            skills: [
                {name: "Spring Boot", level: 85},
                {name: "Hibernate", level: 80},
                {name: "Microservice Architecture", level: 88},
                {name: "MySQL", level: 82},
                {name: "MongoDB", level: 78},
                {name: "Spring Security", level: 78},
            ],
        },
        {
            title: "Core CS Subjects",
            skills: [
                {name: "Data Structures & Algorithms (DSA)", level: 90},
                {name: "Object-Oriented Programming (OOP)", level: 85},
                {name: "Database Management Systems (DBMS)", level: 85},
                {name: "Operating Systems (OS)", level: 80},
                {name: "Computer Networks (CN)", level: 75},
                {name: "Machine Learning (Basics)", level: 65},
            ],
        },

        {
            title: "Tools & Others",
            skills: [
                {name: "Git and Github", level: 90},
                {name: "Docker", level: 75},
                {name: "Postman", level: 90},
                {name: "VS Code", level: 85},
                {name: "IntelliJ Idea", level: 80},
                {name: "ChatGPT", level: 85},
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                {name: "Problem Solving", level: 90},
                {name: "Team Collaboration", level: 85},
                {name: "Quick Learning", level: 90},
                {name: "Communication", level: 80},
                {name: "Time Management", level: 80},
                {name: "Creativity", level: 75},
                {name: "Leadership", level: 70},
            ],
        },
    ];

    return (
        <section id="skills" className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: categoryIndex * 0.2}}
                            className={`${
                                isDark ? "glass-dark" : "glass"
                            } rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
                        >
                            <h3
                                className={`text-2xl font-semibold mb-6 text-center ${
                                    isDark ? "text-white" : "text-gray-800"
                                }`}
                            >
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.8, delay: categoryIndex * 0.2 + skillIndex * 0.1}}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className={`font-medium ${isDark ? "text-white" : "text-gray-800"}`}>
                                                {skill.name}
                                            </span>
                                            <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div
                                            className={`h-2 rounded-full ${
                                                isDark ? "bg-gray-700" : "bg-gray-200"
                                            } skill-bar`}
                                        >
                                            <motion.div
                                                className="skill-fill h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                                                initial={{width: 0}}
                                                whileInView={{width: `${skill.level}%`}}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
