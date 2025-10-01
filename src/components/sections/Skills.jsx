import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 card-hover border border-gray-200 dark:border-gray-800 skill-card">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center">
          <Icon className="text-white dark:text-black text-xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
          A comprehensive overview of my technical capabilities and areas of expertise
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
          Last updated {new Date().getFullYear()}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.values(skills).map((category, index) => (
          <div key={index}>
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
