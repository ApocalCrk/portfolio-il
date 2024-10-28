import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import { Experiences, Certificates } from "../../utils/data";

const Expaw = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto rounded-md"
      id="expaw"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Working Experiences
          </h2>
          <div className="space-y-8">
            {Experiences.map((data, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="experience-item flex items-start space-x-4"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {data.image}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3
                      className="font-medium cursor-"
                      onClick={() => console.log(data)}
                    >
                      {data.company}
                    </h3>
                    <div className="bg-gray-200 text-xs px-2 py-1 rounded-full hidden md:block">
                      {data.position}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{data.duration}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{data.desc}</p>
                  </div>
                  <code className="text-sm text-gray-600 mt-2">
                    {data.skills}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Licenses & Certifications
          </h2>
          <div className="space-y-8">
            {Certificates.map((LCert, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[3 + index] = el)}
                className="experience-item flex items-center justify-between group cursor-pointer"
                onClick={() => window.open(LCert.link, "_blank")}
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium group-hover:text-gray-600 transition-colors">
                      {LCert.title}
                    </h3>
                    <div className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                      {LCert.proficency}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {LCert.company}{" "}
                    <label className="text-xs text-gray-500">
                      {LCert.date}
                    </label>
                  </p>
                  <code className="text-sm text-gray-600 mt-2">
                    {LCert.skills}
                  </code>
                </div>
                <FaArrowRight className="text-xl opacity-0 group-hover:opacity-50 transition-opacity text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expaw;
