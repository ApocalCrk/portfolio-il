import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, User, Briefcase, Award, Code, Mail, Search, ChevronRight } from 'lucide-react';

const sections = [
  { name: 'Home', id: 'hero', icon: Home },
  { name: 'About', id: 'about', icon: User },
  { name: 'Projects', id: 'projects', icon: Briefcase },
  { name: 'Experience', id: 'expaw', icon: Award },
  { name: 'Skills', id: 'skills', icon: Code },
  { name: 'Contact', id: 'contact', icon: Mail },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const paletteRef = useRef(null);
  const inputRef = useRef(null);

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open with / key
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
        setSearchQuery('');
        setSelectedIndex(0);
      }
      // Close with Escape
      else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchQuery('');
      }
      // Navigate with arrow keys
      else if (isOpen && e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSections.length - 1 ? prev + 1 : 0
        );
      }
      else if (isOpen && e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSections.length - 1
        );
      }
      // Select with Enter
      else if (isOpen && e.key === 'Enter' && filteredSections.length > 0) {
        e.preventDefault();
        navigateToSection(filteredSections[selectedIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchQuery, selectedIndex, filteredSections]);

  useEffect(() => {
    if (isOpen && paletteRef.current) {
      gsap.fromTo(
        paletteRef.current,
        { opacity: 0, scale: 0.95, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: 'power2.out' }
      );
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Command Palette */}
      <div 
        ref={paletteRef}
        className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400"
              />
              <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                ESC
              </kbd>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredSections.length > 0 ? (
              <div className="p-2">
                {filteredSections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => navigateToSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        index === selectedIndex
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                        index === selectedIndex ? 'text-white dark:text-black' : 'text-gray-600 dark:text-gray-400'
                      }`} />
                      <span className={`flex-1 text-left font-medium ${
                        index === selectedIndex ? 'text-white dark:text-black' : 'text-gray-900 dark:text-white'
                      }`}>
                        {section.name}
                      </span>
                      {index === selectedIndex && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400">
                No sections found
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <kbd className="px-2 py-1 font-mono bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">↑↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center space-x-1">
                <kbd className="px-2 py-1 font-mono bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">↵</kbd>
                <span>Select</span>
              </span>
              <span className="flex items-center space-x-1">
                <kbd className="px-2 py-1 font-mono bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">/</kbd>
                <span>Open</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandPalette;
