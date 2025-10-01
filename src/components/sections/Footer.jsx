import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ferdy Firmansyah
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              Full-Stack Developer specializing in building exceptional web and mobile applications.
              Passionate about clean code, modern design, and user experience.
            </p>
          </div>

          {/* Links & Social */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#hero" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Social</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:ferdyfirmansyah3026@gmail.com"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" size={16} />
                </a>
                <a
                  href="https://github.com/apocalcrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/ferdyfrms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" size={16} />
                </a>
                <a
                  href="https://twitter.com/algorithmehuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Ferdy Firmansyah. All rights reserved.</p>
            <p>Designed & Built with React, Tailwind CSS, and GSAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
