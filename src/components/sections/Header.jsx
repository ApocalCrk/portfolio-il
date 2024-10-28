import React, { useEffect, useState, useRef } from "react";
import moment from "moment-timezone";
import { gsap } from "gsap";

const Header = () => {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const locationRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().tz("Asia/Jakarta").format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      locationRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="relative bg-white bg-opacity-80 backdrop-blur-md px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto flex justify-between items-center rounded-md"
        id="header"
      >
        <div className="flex items-center">
          <button
            ref={navRef}
            className="flex md:hidden items-center border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <p>Available for hire</p>
          </button>
          <nav ref={navRef} className="hidden md:flex space-x-6 items-center">
            <button className="flex items-center border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <p>Available for hire</p>
            </button>
            <a
              href="#expaw"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Experiences & Certifications
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Educations
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Skills
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div ref={locationRef} className="flex flex-col items-end">
            <span className="hidden md:inline text-sm text-gray-600">
              Batam, Indonesia
            </span>
            <span className="hidden md:inline text-sm text-gray-600 font-bold">
              Hari Ini, {time}
            </span>
          </div>
          <button
            className="md:hidden"
            ref={buttonRef}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed left-4 right-4 top-24 bg-white rounded-lg shadow-lg transform transition-opacity duration-300 z-50 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-sm text-gray-600">Batam, Indonesia</span>
            <span className="text-sm text-gray-600 font-bold">
              Hari Ini, {time}
            </span>
          </div>
          <a
            href="#expaw"
            onClick={closeMenu}
            className="text-gray-600 hover:text-black transition-colors py-2"
          >
            Experiences & Certifications
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-gray-600 hover:text-black transition-colors py-2"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={closeMenu}
            className="text-gray-600 hover:text-black transition-colors py-2"
          >
            Educations
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="text-gray-600 hover:text-black transition-colors py-2"
          >
            Skills
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
