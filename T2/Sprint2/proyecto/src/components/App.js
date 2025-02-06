import React from 'react';
import Navbar from './Layout/Navbar';
import HeroSection from './Home/HeroSection';
import ContentList from './Home/ContentList';
import Footer from './Layout/Footer';
import './styles/layout.css';
import RegisterForm from './Auth/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import ForgotPasswordForm from './Auth/ForgotPasswordForm';
import Compraas from './Home/Compraas'; // Import the Compraas component

const products = []; // Definir el array products

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
            <div className="content-container">
         
         
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ContentList />
              </>
            }
          />
          <Route path="/registrar" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/Compra" element={<Compraas products={products} />} /> {/* Pass products as a prop */}
        
        
        </Routes>
    
        <Footer />
      </div>
    </Router>
  );
};

export default App;