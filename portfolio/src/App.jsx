import React from "react";
import {ThemeProvider} from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundParticles from "./components/BackgroundParticles";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
    return (
        <ThemeProvider>
            <div className="relative min-h-screen font-inter">
                <BackgroundParticles />
                <ScrollIndicator />
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
