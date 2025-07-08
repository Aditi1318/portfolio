import React, {useEffect, useState} from "react";
import {useTheme} from "../contexts/ThemeContext";

const BackgroundParticles = () => {
    const [particles, setParticles] = useState([]);
    const {isDark} = useTheme();

    useEffect(() => {
        const newParticles = [];
        for (let i = 0; i < 20; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * 4 + 2,
                animationClass: `particle-${(i % 3) + 1}`,
                delay: Math.random() * 20,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className={`particle ${particle.animationClass} absolute rounded-full ${
                        isDark ? "bg-cyan-400" : "bg-teal-400"
                    } opacity-20`}
                    style={{
                        left: `${particle.x}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;
