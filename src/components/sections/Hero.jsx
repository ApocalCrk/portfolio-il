import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CV from "../../assets/pdf/cv.pdf";
import Modal from "../../utils/ModalPDF";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);

  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCVClick = () => {
    if (isMobile()) {
      window.location.href = CV;
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24"
        id="hero"
      >
        <div className="max-w-5xl mx-auto text-center hero-content">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="inline-block text-black dark:text-white">
              Ferdy Firmansyah
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Full-Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft exceptional digital experiences through clean code and thoughtful design.
            <br />
            Specializing in modern web and mobile applications with a focus on performance and user experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-all duration-300 font-medium inline-flex items-center justify-center space-x-2"
            >
              <span>Get in touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button
              onClick={handleCVClick}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              View Resume
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pekanbaru, Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>4+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>10+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl={CV} 
      />
    </>
  );
};

export default Hero;