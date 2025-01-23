import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/home.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div key="1">
          <img className="carousel-image" src="/assets/images/OmarCourts.png" alt="OmarCourts" />
        </div>
        <div key="2">
          <img className="carousel-image" src="/assets/images/Occo1.png" alt="Occo1" />
        </div>
        <div key="3">
          <img className="carousel-image" src="/assets/images/Aanthique.png" alt="Aanthique" />
        </div>
       
      </Carousel>
    </section>
  );
};

export default HeroSection;