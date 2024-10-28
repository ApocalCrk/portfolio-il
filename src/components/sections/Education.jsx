import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { education } from "../../utils/data";

const Education = () => {
  const educationRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const fadeIn = () => {
      gsap.fromTo(
        educationRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      setHasAnimated(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            fadeIn();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto border-t border-gray-100 rounded-md"
      ref={educationRef}
      id="education"
    >
      <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
      <p className="text-gray-600 mt-2 mb-8">
        My academic background and qualifications
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="experience-item group bg-gray-50 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                {edu.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg group-hover:text-gray-600 transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-gray-600 mt-1">{edu.degree}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
