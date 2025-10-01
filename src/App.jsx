import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Expaw from './components/sections/Expaw';
import Education from './components/sections/Education';
import TechnicalSkills from './components/sections/TechnicalSkills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import CommandPalette from './components/navigation/CommandPalette';
import MoveToTop from './components/mvtop/navigation';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Experience & Certifications Section */}
        <Expaw />

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <TechnicalSkills />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Command Palette */}
        <CommandPalette />

        {/* Move to Top Button */}
        <MoveToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;