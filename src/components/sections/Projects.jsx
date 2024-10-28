import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "../../utils/data";

const Projects = () => {
  const projectRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);

    const fadeIn = (element) => {
      gsap.to(element, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeIn(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <section
      className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto"
      id="projects"
    >
      <div className="flex flex-row md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
            Personal Projects
          </h2>
          <p className="text-gray-600">A selection of my personal projects</p>
        </div>
        <button
          className="border border-black px-2 md:px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-xs md:text-sm"
          onClick={toggleModal}
        >
          View all
        </button>
      </div>

      <div className="space-y-12">
        {projects.slice(0, 2).map((project, index) => (
          <div
            className="projects-item border-t border-gray-200 pt-8 opacity-0 translate-y-12"
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <ProjectItem project={project} isModal={false} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-custom">
          <div
            ref={modalRef}
            className="bg-white w-full max-w-3xl p-8 rounded-lg overflow-y-auto max-h-[90vh]"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">All Projects</h2>
              <button onClick={toggleModal} className="text-gray-600 text-xl">
                ✕
              </button>
            </div>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <ProjectItem project={project} isModal={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectItem = ({ project, isModal }) => (
  <div>
    <div className="flex justify-between items-start group cursor-pointer" onClick={() => window.open(project.link, "_blank")}>
      <div className="space-y-4">
        <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
          {project.title}
          &nbsp;
          <span className="text-xs text-gray-600">
            {project.platform} Application
          </span>
        </h3>
        <p className="text-gray-600 max-w-2xl">{project.description}</p>
      </div>
      <FaArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    {isModal && (
      <div
        className={`mt-8 grid ${
          project.platform === "Mobile"
            ? "grid-cols-3 md:grid-cols-5"
            : "grid-cols-1 md:grid-cols-2"
        } gap-4`}
      >
        {project.images.map((image, imgIndex) => (
          <img
            src={image}
            alt="Project Image"
            className={`w-100 ${
              project.platform === "Mobile" ? "h-64" : "min-h-60"
            } object-cover rounded-md border-gray-100 border-2`}
            key={imgIndex}
          />
        ))}
      </div>
    )}
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-medium">Tech Stack & APIs</h3>
      <div className="flex flex-wrap gap-4">
        {project.techStack.map((tech, techIndex) => (
          <span
            className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-full"
            key={techIndex}
          >
            <code className="text-gray-600">{tech}</code>
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {project.apis.map((api, apiIndex) => (
          <span
            className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-full"
            key={apiIndex}
          >
            <code className="text-gray-600">{api}</code>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
