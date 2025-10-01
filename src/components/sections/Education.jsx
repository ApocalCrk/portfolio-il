import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-card",
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
      id="education"
    >
      <div className="text-center mb-16">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading max-w-2xl mx-auto">
          My academic background and educational qualifications
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="education-card bg-white dark:bg-gray-900 rounded-2xl p-8 card-hover border border-gray-200 dark:border-gray-800"
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {edu.logo}
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                {edu.school}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">{edu.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
