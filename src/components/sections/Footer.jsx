import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <footer
      className="text-black px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto"
      ref={contactRef}
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-gray-400 mb-8">
          Got a project in mind? Feel free to reach out via email or connect
          with me on social platforms.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:ferdyfirmansyah3026@gmail.com"
            className="hover:text-slate-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/apocalcrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ferdyfrms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/algorithmehuman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        <div className="text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ferday. Crafted with ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
