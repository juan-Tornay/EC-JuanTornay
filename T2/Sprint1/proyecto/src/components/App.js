import React from 'react';
import Navbar from './Layout/Navbar';
import HeroSection from './Home/HeroSection';
import ContentList from './Home/ContentList';
import Footer from './Layout/Footer';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg' },
  // Add more products as needed
];
<h1> caca</h1>
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ContentList products={products}/>
      <Footer/>
    </div>
  );
};

export default App;
