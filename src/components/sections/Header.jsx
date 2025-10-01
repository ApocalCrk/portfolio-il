import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Search, Play, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import TypingGame from "../game/TypingGame";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGameHint, setShowGameHint] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Show game hint after 3 seconds
    const hintTimer = setTimeout(() => {
      setShowGameHint(true);
      setTimeout(() => setShowGameHint(false), 5000);
    }, 3000);

    return () => clearTimeout(hintTimer);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#expaw' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Command Palette Hint */}
              <div className="hidden md:block relative">
                <button
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                  onClick={() => {
                    const event = new KeyboardEvent('keydown', { key: '/' });
                    window.dispatchEvent(event);
                  }}
                >
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                  <kbd className="px-2 py-0.5 text-xs font-mono bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600">
                    /
                  </kbd>
                </button>
              </div>

              {/* Game Easter Egg */}
              <div className="relative">
                <button
                  onClick={() => setIsGameOpen(true)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                  title="Play typing game"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                </button>
                {showGameHint && (
                  <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-black dark:bg-white text-white dark:text-black text-xs rounded-lg whitespace-nowrap animate-bounce">
                    Try the typing game!
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
                ) : (
                  <Sun className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2 animate-slide-down">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Typing Game Modal */}
      {isGameOpen && <TypingGame onClose={() => setIsGameOpen(false)} />}
    </>
  );
};

export default Header;