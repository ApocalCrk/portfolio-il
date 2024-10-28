import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

const MoveToTop = () => {
  const [scrollPage, setScrollPage] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPage(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bottom-4 right-4 z-40 ${scrollPage > 0 ? "fixed" : "hidden"}`}
    >
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-black text-white px-2 py-2 rounded-md hover:bg-gray-900 transition-colors"
      >
        <FaChevronUp size={24} />
      </button>
    </div>
  );
};

export default MoveToTop;
