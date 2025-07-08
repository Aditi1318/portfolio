import React, {useState} from "react";
import {motion} from "framer-motion";
import {Mail, Phone, MapPin, Send} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const Contact = () => {
    const {isDark} = useTheme();
    const ref = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({name: "", email: "", message: ""});
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "aditikushwaha.1318@gmail.com",
            href: "mailto:aditikushwaha.1318@gmail.com",
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 9113197825",
            href: "tel:9113197825",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Ara, Bihar",
            href: "#",
        },
    ];

    return (
        <section id="contact" className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel
                        free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="space-y-8"
                    >
                        <div className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-8`}>
                            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                                Let's Connect
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.div
                                            key={info.title}
                                            initial={{opacity: 0, y: 20}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{duration: 0.8, delay: index * 0.1}}
                                            className="flex items-center space-x-4"
                                        >
                                            <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <h4
                                                    className={`font-semibold ${
                                                        isDark ? "text-white" : "text-gray-800"
                                                    }`}
                                                >
                                                    {info.title}
                                                </h4>
                                                <a
                                                    href={info.href}
                                                    className={`${
                                                        isDark
                                                            ? "text-gray-300 hover:text-cyan-400"
                                                            : "text-gray-600 hover:text-cyan-600"
                                                    } transition-colors`}
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                            className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-8`}
                        >
                            <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
                                💭 Fun Fact
                            </h3>
                            <p className={`${isDark ? "text-gray-300" : "text-gray-600"} italic`}>
                                "I believe that great code is like poetry - it should be beautiful, meaningful, and
                                leave a lasting impact."
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-8`}
                    >
                        <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
                            Send Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    className={`block text-sm font-medium mb-2 ${
                                        isDark ? "text-white" : "text-gray-800"
                                    }`}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:border-cyan-500 focus:outline-none transition-colors ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                                    }`}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    className={`block text-sm font-medium mb-2 ${
                                        isDark ? "text-white" : "text-gray-800"
                                    }`}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:border-cyan-500 focus:outline-none transition-colors ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                                    }`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label
                                    className={`block text-sm font-medium mb-2 ${
                                        isDark ? "text-white" : "text-gray-800"
                                    }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:border-cyan-500 focus:outline-none transition-colors resize-none ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                                    }`}
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
