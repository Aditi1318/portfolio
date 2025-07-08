import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="scroll-indicator fixed top-0 left-0 h-1 bg-cyan-500 origin-left z-50"
            style={{scaleX: scrollProgress}}
        />
    );
};

export default ScrollIndicator;
