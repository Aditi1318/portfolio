import React, {useState} from "react";
import {motion} from "framer-motion";
import {Moon, Sun, Menu, X} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";

const Header = () => {
    const {isDark, toggleTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {label: "Home", href: "#home"},
        {label: "About", href: "#about"},
        {label: "Skills", href: "#skills"},
        {label: "Projects", href: "#projects"},
        {label: "Contact", href: "#contact"},
    ];

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.8}}
            className={`fixed top-0 left-0 right-0 z-50 ${
                isDark ? "glass-dark" : "glass"
            } backdrop-blur-md border-b border-white/20`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{scale: 1.05}} className="text-2xl font-bold gradient-text font-orbitron">
                        ADITI DIWAKAR
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                className={`transition-colors hover:text-cyan-400 font-space-grotesk font-medium ${
                                    isDark ? "text-white" : "text-gray-800"
                                }`}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${
                                isDark ? "bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-800"
                            } transition-colors`}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2 rounded-full ${
                                isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                            } transition-colors`}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="md:hidden mt-4 pb-4"
                    >
                        {menuItems.map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                whileHover={{scale: 1.05}}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-2 transition-colors hover:text-cyan-400 font-space-grotesk ${
                                    isDark ? "text-white" : "text-gray-800"
                                }`}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
