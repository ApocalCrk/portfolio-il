import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const fadeIn = () => {
      gsap.fromTo(
        aboutRef.current,
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={aboutRef}
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto border-t border-gray-100 rounded-md"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-600 mb-4">
        Hello! I'm a university student at Atma Jaya Yogyakarta University. As a
        student, I have experience as a Full Stack Developer with skills in
        various frameworks including React, Next.js, Node.js, Express.js,
        Django, Laravel, CodeIgniter, and Flutter. I also have a high interest
        in UI/UX design and the potential applications of Blockchain technology.
      </p>
      <p className="text-gray-600 mb-4">
        Throughout my career journey, I have demonstrated the ability to excel
        in demanding environments, utilizing innovative and creative approaches
        to drive successful project outcomes. I am committed to contributing my
        technical expertise and creative insights to a dynamic and
        forward-thinking team, with aspirations to pursue a career in back-end
        or mobile development.
      </p>
      <p className="text-gray-600">
        In my free time, I love to contribute to open-source projects and
        explore new technologies that challenge me. Feel free to connect with me
        through my social media or professional profiles!
      </p>
    </section>
  );
};

export default AboutMe;
