import { useEffect, useState } from 'react';

import styles from './Slider.module.css';
import img1Slider from './img/crew-tentpole-hero-slider.jpeg';
import img2Slider from './img/ep-3-sc-slider.jpeg';
import img3Slider from './img/lego-youtube-slider.jpeg';
import prevIconBtn from './img/prev-button.png';
import nextIconBtn from './img/next-button.png';

const Slider: React.FC = () => {
  const images = [img1Slider, img2Slider, img3Slider];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.slider_container}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {currentIndex === 0 && (
        <button className="extra-button">Extra Button</button>
      )}

      <button onClick={prevImage}>
        <img src={prevIconBtn} alt="arrow-left" />
      </button>
      <button onClick={nextImage}>
        <img src={nextIconBtn} alt="arrow-right" />
      </button>
      <button className="action-button">Button</button>

      <div className={styles.indicator_container}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
