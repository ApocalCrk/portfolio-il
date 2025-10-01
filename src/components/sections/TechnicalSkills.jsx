import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const TechnicalSkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
          },
        }
      );

      gsap.fromTo(
        ".skill-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top center+=150",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto"
      id="skills"
    >
      <div className="text-center mb-16">
        <h2 className="section-heading">Skills & Expertise</h2>
        <p className="section-subheading max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([key, category]) => (
          <div key={key} className="skill-card bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 card-hover">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-black dark:bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <category.icon className="text-white dark:text-black text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h4>
            </div>
            <div className="skills-grid flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-badge text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-default font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
