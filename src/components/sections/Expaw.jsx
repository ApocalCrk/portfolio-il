import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import { Experiences, Certificates } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const Expaw = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expaw-card",
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto"
      id="expaw"
    >
      <div className="text-center mb-20">
        <h2 className="section-heading">Experience & Certifications</h2>
        <p className="section-subheading max-w-3xl mx-auto">
          My professional journey and achievements in the tech industry, showcasing my growth and expertise
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8 4h8v2H8V4zm12 14H4V8h16v10z"/>
                <path d="M6 10h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work & Organization Experience</h3>
          </div>
          
          <div className="space-y-6">
            {Experiences.map((data, index) => (
              <div
                key={index}
                className="expaw-card bg-white dark:bg-gray-900 rounded-2xl p-6 card-hover border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{data.company}</h4>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{data.position}</p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full font-mono mt-2 sm:mt-0">
                        {data.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">{data.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.split(', ').map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
          </div>
          
          <div className="space-y-4">
            {Certificates.map((LCert, index) => (
              <div
                key={index}
                className="expaw-card bg-white dark:bg-gray-900 rounded-2xl p-6 card-hover border border-gray-200 dark:border-gray-800 group cursor-pointer"
                onClick={() => window.open(LCert.link, "_blank")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors text-gray-900 dark:text-white">
                        {LCert.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full mt-2 sm:mt-0">
                        {LCert.proficency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-semibold">{LCert.company}</span> • <span className="font-mono">{LCert.date}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {LCert.skills.split(', ').map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors">
                      <FaArrowRight className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expaw;

