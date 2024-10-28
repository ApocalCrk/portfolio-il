import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skills } from "../../utils/data";

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 skill-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
          <Icon className="text-gray-800 text-xl" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-500 rounded-full progress-bar"
                style={{ width: 0 }}
                data-width={`${skill.level}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const progressBars = Array.from(document.querySelectorAll(".progress-bar"));

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
      }
    );

    progressBars.forEach((bar) => {
      gsap.to(bar, {
        width: bar.dataset.width,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top bottom-=50",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto border-t border-gray-100"
      id="skills"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Skills & Expertise</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive overview of my technical capabilities
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-500">Updated 2024</div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.values(skills).map((category, index) => (
          <div key={index} className="skill-card">
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
