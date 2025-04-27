import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

function Skills() {
  const sectionRef = useRef(null);
  const skillTitleRef = useRef(null);
  const [startReveal, setStartReveal] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000 && !startReveal) {
        setStartReveal(true);
      }

      if (window.scrollY <= 1000 && startReveal) {
        setStartReveal(false);
        setVisibleItems([]);
      }

      // Update position cho dòng chữ SKILL
      if (skillTitleRef.current) {
        const scrollOffset = Math.max(0, window.scrollY - 500);
        const move = Math.max(0, 100 - scrollOffset * 0.2);
        skillTitleRef.current.style.transform = `translate(-50%, calc(-50% + ${move}px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startReveal]);

  useEffect(() => {
    if (!startReveal) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    const allItems = sectionRef.current.querySelectorAll(".content-item");
    allItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [startReveal]);

  const column1 = ["LANGUAGE","• HTML", "• CSS", "• JavaScript"];
  const column2 = ["FRAMEWORK","• ReactJS", "• VueJS", "• TailwindCSS", "• GSAP"];
  const column3 = [
    "TOOLS & OTHERS",
    "• Git/GitHub", // Version control and collaboration
    "• Firebase", // Backend-as-a-service
    "• AWS", // Cloud platform for hosting and services
    "• Figma", // Design and prototyping tool
    "• VS Code", // Text editor for development
  ];
  return (
    <section ref={sectionRef} className="page-section">
      <div className="skill">SKILL</div>
      <div className="content-wrapper">
        
        

        {/* Cột 1 */}
        <div className="column">
          {column1.map((text, idx) => (
            <div
              key={idx}
              className={`content-item ${
                visibleItems.includes(idx.toString()) ? "show" : ""
              }`}
              data-index={idx}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Cột 2 */}
        <div className="column">
          {column2.map((text, idx) => (
            <div
              key={idx + 5}
              className={`content-item ${
                visibleItems.includes((idx + 5).toString()) ? "show" : ""
              }`}
              data-index={idx + 5}
            >
              {text}
            </div>
          ))}
        </div>
        
        <div className="column">
          {column3.map((text, idx) => (
            <div
              key={idx + 10}
              className={`content-item ${
                visibleItems.includes((idx + 10).toString()) ? "show" : ""
              }`}
              data-index={idx + 10}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
