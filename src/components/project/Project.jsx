import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './project.css'; // Bạn nhớ thêm CSS riêng cho đẹp
import blogImage from "../../pic/blog.png"
import pipl from "../../pic/PIPL.png"
import shaker from "../../pic/shaker.png"
import portfolio from "../../pic/portfolio.png"
function Project() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      img: blogImage ,
      name: "Web Blog",
      description: "This web blog platform allows users to create and share personal blog posts. Key features include user login, post creation, and search posts by topics. The interface is user-friendly, built with ReactJS and styled with TailwindCSS.",
      link: "https://duyps.github.io/blog-ace/",
    },
    {
      id: 2,
      img: pipl,
      name: "Lading page",
      description: "This landing page is designed to engage visitors with a modern and responsive layout. It serves as an introduction to a product, service, or event, featuring clear call-to-action (CTA) buttons and smooth navigation to encourage user interaction.",
      link: "https://duyps.github.io/Landing-page-PIPL/",
    },
    {
      id: 3,
      img: shaker,
      name: "Project Three",
      description: "This landing page is designed for an e-commerce store, showcasing products with a clean, engaging layout. It allows users to browse and purchase items easily, with clear call-to-action (CTA) buttons leading to product pages or the checkout process.",
      link: "https://duyps.github.io/VelvetShaker/",
    },
    {
      id: 4,
      img: portfolio,
      name: "Project Four",
      description: "This personal portfolio website showcases my skills, projects, and achievements as a developer. It provides an interactive experience with detailed project descriptions, contact information, and links to my GitHub and LinkedIn profiles.",
      link: "/",
    },
  ];

  const handleClick = (link) => {
    // If it's an external link (starts with http), open it in a new tab
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link); // Use navigate for internal routes
    }
  };

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      {/* Nội dung Project */}
      <div className="project-page">
      <div className="project-row">
        {projects.map((project) => (
          <motion.img
            key={project.id}
            src={project.img}
            alt={project.name}
            className="project-image"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleClick(project.link)}
          />
        ))}
      </div>

      <div className="project-info">
        {hoveredProject ? (
          <motion.div
            key={hoveredProject.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{hoveredProject.name}</h2>
            <p>{hoveredProject.description}</p>
          </motion.div>
        ) : (
          <div className="project-placeholder">
            <h2>Hover over a project to see details!</h2>
          </div>
        )}
      </div>
    </div>
    </motion.div>
    
  );
}

export default Project;
