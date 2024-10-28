import React from 'react';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Expaw from './components/sections/Expaw';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
// import AboutMe from './components/AboutMe';
import Footer from './components/sections/Footer';
import MoveToTop from './components/mvtop/navigation';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Licenses & Certifications Section */}
      <Expaw />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Footer */}
      <Footer />

      <MoveToTop />
    </div>
  );
};

export default App;