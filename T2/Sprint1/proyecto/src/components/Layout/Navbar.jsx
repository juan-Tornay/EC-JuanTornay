import React from 'react';
import '../styles/layout.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#events">Events</a></li>
        <li className="navbar-item"><a href="#tickets">Tickets</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
        <li className="navbar-item"><a href="#about">About</a></li> {/* New menu item */}
      </ul>
    </nav>
  );
};

export default Navbar;

