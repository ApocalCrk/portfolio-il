import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 about-content">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Passionate about building amazing digital experiences
          </p>
        </div>

        {/* Bio */}
        <div className="about-content mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a <span className="font-semibold text-gray-900 dark:text-white">Full-Stack Developer</span> with over 4 years of experience 
                building web and mobile applications. I specialize in creating efficient, scalable, and user-friendly solutions 
                that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                My journey in software development started at <span className="font-semibold text-gray-900 dark:text-white">Vocational High School</span>, 
                where I discovered my passion for coding. Since then, I've worked on diverse projects ranging from 
                AI-powered crop recommendation systems to fitness tracking applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field. 
                When I'm not coding, you can find me contributing to open-source projects or mentoring aspiring developers.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="about-content grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-4xl font-bold text-black dark:text-white mb-2">4+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-4xl font-bold text-black dark:text-white mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-4xl font-bold text-black dark:text-white mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

