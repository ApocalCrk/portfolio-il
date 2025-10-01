import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

const MoveToTop = () => {
  const [scrollPage, setScrollPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPage(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        scrollPage > 300 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} />
      </button>
    </div>
  );
};

export default MoveToTop;
