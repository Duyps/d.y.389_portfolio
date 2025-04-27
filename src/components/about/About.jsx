import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./about.css";
import Skills from "../skills/Skills";

function About() {
  const lines = [
    "I am Nguyen Quoc Duy, currently a student.",
    "majoring in Computer Science at HCMUT.",
    "I have a strong passion for frontend development and UI/UX design.",
    "My goal is to build engaging and interactive web experiences.",
    "I enjoy working with ReactJS and exploring new frameworks.",
    "Feel free to check out my projects and get in touch!",
  ];

  const aboutRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(new Array(lines.length).fill(0.3));
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisibleLines((prev) =>
        prev.map((_, index) => {
          const lineElement = document.getElementById(`line-${index}`);
          if (!lineElement) return 0.2;

          const rect = lineElement.getBoundingClientRect();
          const topPercentage = rect.top / window.innerHeight;

          if (topPercentage >= 0.1 && topPercentage <= 0.4) {
            return 1;
          } else {
            return 0.2;
          }
        })
      );

      // Kiểm tra xem phần About đã đi khỏi màn hình chưa
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.bottom < window.innerHeight * 0.7) { // Khi bottom cách top 70% màn hình thì cho Skills hiện
          setShowSkills(true);
        } else {
          setShowSkills(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lines.length]);

  return (
    <>
      <div ref={aboutRef} className="about-container">
        {lines.map((text, index) => (
          <motion.p
            key={index}
            id={`line-${index}`}
            className="about-text"
            animate={{ opacity: visibleLines[index] }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Khi showSkills === true mới render Skills */}
      <div style={{ opacity: showSkills ? 1 : 0, pointerEvents: showSkills ? "auto" : "none", transition: "opacity 0.8s" }}>
        <Skills />
      </div>
    </>
  );
}

export default About;
