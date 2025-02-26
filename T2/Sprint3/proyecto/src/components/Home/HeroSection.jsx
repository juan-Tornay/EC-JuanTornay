import React, { useEffect, useRef, useState } from 'react';
import '../styles/home.css';

const HeroSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdult, setIsAdult] = useState(null);
  const [showUnderageMessage, setShowUnderageMessage] = useState(false);

  useEffect(() => {
    if (isAdult === false) {
      setShowUnderageMessage(true);
    } else if (isAdult === true) {
      document.body.style.display = 'block';
    }
  }, [isAdult]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAgeVerification = (isAdult) => {
    setIsAdult(isAdult);
    if (!isAdult) {
      setShowUnderageMessage(true);
    }
  };

  if (isAdult === null) {
    return (
      <div className="age-verification-modal">
        <div className="age-verification-content">
          <h2>Verificación de Edad</h2>
          <form>
            <label>
              ¿Eres mayor de 18 años?
              <input type="radio" name="age" onClick={() => handleAgeVerification(true)} /> Sí
              <input type="radio" name="age" onClick={() => handleAgeVerification(false)} /> No
            </label>
          </form>
        </div>
      </div>
    );
  }

  if (showUnderageMessage) {
    return (
      <div className="age-verification-modal">
        <div className="age-verification-content">
          <p>Lo siento, debes ser mayor de edad para acceder al contenido.</p>
          <button onClick={() => setIsAdult(null)}>Volver al cuestionario</button>
        </div>
      </div>
    );
  }

  return (
    <section className="hero-section">
      <audio ref={audioRef} loop>
        <source src="/assets/audio/musica.mp3" type="audio/mpeg" />
        Tu navegador no soporta el audio.
      </audio>

      <img className="carousel-image" src="/assets/images/robot.webp" alt="Hero Image" />
      <img className="gif" src="/assets/images/jhony.gif" alt="GIF" />
    </section>
  );
};

export default HeroSection;