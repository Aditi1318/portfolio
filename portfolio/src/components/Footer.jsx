import React from "react";
import {motion} from "framer-motion";
import {Github, Linkedin, Instagram, Heart} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";

const Footer = () => {
    const {isDark} = useTheme();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {icon: Github, href: "https://github.com/Aditi1318", label: "GitHub"},
        {icon: Linkedin, href: "https://linkedin.com/in/aditi-diwakar", label: "LinkedIn"},
        {icon: Instagram, href: "https://instagram.com/aditisi1318", label: "Instagram"},
    ];

    return (
        <footer
            className={`py-8 ${isDark ? "bg-gray-900 border-t border-gray-800" : "bg-white border-t border-gray-200"}`}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="mb-4 md:mb-0"
                    >
                        <p className={`flex items-center space-x-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            <span>Made with</span>
                            <Heart size={16} className="text-red-500" />
                            <span>by Aditi © {currentYear}</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="flex space-x-4"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    whileTap={{scale: 0.9}}
                                    className={`p-2 rounded-full transition-colors ${
                                        isDark
                                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                    }`}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
