import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // đổi BrowserRouter -> HashRouter
import { AnimatePresence } from "framer-motion";
import Home from './components/home/Home'
import Header from './components/common/header/Header'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router> {/* HashRouter ở đây */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
