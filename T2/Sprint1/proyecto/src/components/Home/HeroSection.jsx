import React from 'react';
import '../styles/layout.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Sales Site</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to Our Sales Site</h1>
      <p>Find the best products at the best prices!</p>
    </section>
  );
};

export default Navbar;
export { HeroSection };