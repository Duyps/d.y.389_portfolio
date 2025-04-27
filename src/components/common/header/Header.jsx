import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo"><li><NavLink to="/">Portfolio</NavLink></li></div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header