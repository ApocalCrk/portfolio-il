import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  const platforms = ['all', 'Web', 'Mobile', 'Web & Mobile'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.platform === filter);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto"
      id="projects"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading max-w-2xl mx-auto">
          A curated selection of my recent work, showcasing technical skills and creative problem-solving
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setFilter(platform)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === platform
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {platform === 'all' ? 'All' : platform}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Project Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 flex-1 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
            {project.title}
          </h3>
          <svg 
            className={`w-5 h-5 flex-shrink-0 ml-2 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
          {project.platform}
        </span>
      </div>

      {/* Project Body */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex justify-between items-start z-10">
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
              {project.platform}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              About This Project
            </h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* APIs */}
          {project.apis && project.apis.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                APIs & Integrations
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.apis.map((api, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg"
                  >
                    {api}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-all duration-300 font-medium"
          >
            <span>View Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
