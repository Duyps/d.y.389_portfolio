import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './project.css'; // Import file CSS đã cập nhật
import blogImage from "../../pic/blog.png"
import pipl from "../../pic/PIPL.png"
import shaker from "../../pic/shaker.png"
import portfolio from "../../pic/portfolio.png"
import recruitment from '../../pic/recruitment.png';

function Project() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, img: blogImage, name: "Web Blog", description: "This web blog platform allows users to create and share personal blog posts. Key features include user login, post creation, and search posts by topics. The interface is user-friendly, built with ReactJS and styled with TailwindCSS.", link: "https://duyps.github.io/blog-ace/" },
    { id: 2, img: recruitment, name: "Recruitment Platfom", description: "This recruitment website allows employers to post jobs and view candidate profiles, while job seekers can search for jobs, explore companies, and apply online. Built with ReactJS, Firebase, and Cloudinary for a smooth and modern user experience.", link: "https://duyps.github.io/recruitment/" },
    { id: 3, img: pipl, name: "Lading page", description: "This landing page is designed to engage visitors with a modern and responsive layout. It serves as an introduction to a product, service, or event, featuring clear call-to-action (CTA) buttons and smooth navigation to encourage user interaction.", link: "https://duyps.github.io/Landing-page-PIPL/" },
    { id: 4, img: shaker, name: "Project Three", description: "This landing page is designed for an e-commerce store, showcasing products with a clean, engaging layout. It allows users to browse and purchase items easily, with clear call-to-action (CTA) buttons leading to product pages or the checkout process.", link: "https://duyps.github.io/VelvetShaker/", },
    { id: 5, img: portfolio, name: "Project Four", description: "This personal portfolio website showcases my skills, projects, and achievements as a developer. It provides an interactive experience with detailed project descriptions, contact information, and links to my GitHub and LinkedIn profiles.", link: "/", },
  ];

  const handleClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-row">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card" // Class này quan trọng để áp dụng bố cục Staggered/Masonry
            whileHover={{ scale: 1.0 }} 
            onClick={() => handleClick(project.link)}
          >
            <img
              src={project.img}
              alt={project.name}
              className="project-image"
            />
            
            <div className="project-overlay">
              <div className="overlay-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;