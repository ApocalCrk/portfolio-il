import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Ferday from "../../assets/images/Ferdy.png";
import CV from "../../assets/pdf/cv.pdf";

import Modal from "../../utils/ModalPDF";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef([]);
  const imageRef = useRef(null);

  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.6,
      }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.8 }
    );
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleCVClick = () => {
    if (isMobile()) {
      window.location.href = CV;
    } else {
      openModal();
    }
  };

  return (
    <>
      <section
        className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto relative overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0 blur-lg pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold transform transition-transform duration-300 hover:scale-105"
            >
              Hello! I'm Ferdy Firmansyah
            </h1>
            <div className="space-y-4">
              <h2
                ref={subtitleRef}
                className="text-xl md:text-2xl transform transition-transform duration-300 hover:scale-105"
              >
                A Web and Mobile Developer based in Yogyakarta, Indonesia
              </h2>
              <p
                ref={textRef}
                className="text-gray-600 transform transition-transform duration-300 hover:scale-105"
              >
                I have been developing web and mobile applications for 3 years.
                I have worked with various clients and companies. I am currently
                working as a freelance developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  ref={(el) => (buttonsRef.current[0] = el)}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => (window.location.href = "#footer")}
                >
                  Talk to me
                </button>
                <button
                  ref={(el) => (buttonsRef.current[1] = el)}
                  className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transform transition-transform duration-300 hover:scale-105"
                  onClick={handleCVClick}
                >
                  Curriculum Vitae
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block place-items-end" ref={imageRef}>
            <img
              src={Ferday}
              alt="Hero"
              className="w-96 h-96 object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} pdfUrl={CV} />
    </>
  );
};

export default Hero;
