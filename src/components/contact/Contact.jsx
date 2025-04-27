import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // nếu cần Link trong nội bộ site
import "./contact.css"; // nhớ tạo css file

function Contact() {
    const contacts = [
        { id: 1, label: "Email", link: "mailto:quocduy3889@gmail.com" },
        { id: 2, label: "LinkedIn", link: "https://www.linkedin.com/in/qu%E1%BB%91c-duy-7a0634233/" },
        { id: 3, label: "GitHub", link: "https://github.com/Duyps" },
      ];
    const words = ["LET'S", "GET IN", "TOUCH"]
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
        <div className="contact-left">
            {words.map((word, index) => (
                <motion.h1
                key={index}
                className={`contact-word ${word === "GET IN" ? "center" : ""}`} // 👈 thêm class center nếu từ là "GET IN"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                {word}
                </motion.h1>
            ))}
            </div>
            <div className="contact-right">
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>{contact.label}</span>
            <span className="arrow">➔</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default Contact