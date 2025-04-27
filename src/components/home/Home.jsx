import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import blogImage from "../../pic/blog.png"
import pipl from "../../pic/PIPL.png"
import shaker from "../../pic/shaker.png"
import portfolio from "../../pic/portfolio.png"
function Home() {
  const navigate = useNavigate();
  const [startTransition, setStartTransition] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    { id: 1, img: blogImage },
    { id: 2, img: pipl},
    { id: 3, img: portfolio},
    { id: 4, img: shaker},
  ];

  const handleClick = () => {
    setStartTransition(true);
  };

  // Khi animation fade-out xong sẽ gọi navigate
  const handleTransitionComplete = () => {
    if (startTransition) {
      navigate("/project");
    }
  };

  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: startTransition ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      onAnimationComplete={handleTransitionComplete}
    >
      <motion.h1
        className="hero-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: startTransition ? 0 : 1,
          y: startTransition ? -50 : 0,
          scale: startTransition ? 0.8 : 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        HELLO, I'M <br /> NGUYEN QUOC DUYyyyy
      </motion.h1>

      <div
        className="stack-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {projects.map((project, index) => (
          <motion.img
            key={project.id}
            src={project.img}
            alt={`Project ${index + 1}`}
            className="stack-image"
            initial={{ rotate: 0, x: 0, y: 0 }}
            animate={
              startTransition
                ? {
                    x: `${(index / (projects.length - 1)) * 100 - 50}vw`,
                    y: "-40vh",
                    scale: 1.2,
                    rotate: 0,
                  }
                : isHovered
                ? { rotate: (index - (projects.length - 1) / 2) * 10, x: (index - (projects.length - 1) / 2) * 40, y: -10 }
                : { rotate: 0, x: 0, y: 0 }
            }
            transition={{ duration: 1, type: "spring", stiffness: 150, damping: 15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
