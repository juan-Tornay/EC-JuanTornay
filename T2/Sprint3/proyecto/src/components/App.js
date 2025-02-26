import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import HeroSection from './Home/HeroSection';
import ContentList from './Home/ContentList';
import Footer from './Layout/Footer';
import './styles/layout.css';
import RegisterForm from './Auth/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import ForgotPasswordForm from './Auth/ForgotPasswordForm';
import Compraas from './Home/Compraas';
import Contacto from './Home/Contacto';
import Cart from './Home/Cart';

const products = [];

const App = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMusic = () => {
    setIsMusicOn(!isMusicOn);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartItems={cartItems} />
        <div className="content-container">
          <button onClick={toggleMusic}>
            {isMusicOn ? 'Apagar música' : 'Encender música'}
          </button>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ContentList addToCart={addToCart} />
              </>
            }
          />
          <Route path="/registrar" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/Compra" element={<Compraas products={products} addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;