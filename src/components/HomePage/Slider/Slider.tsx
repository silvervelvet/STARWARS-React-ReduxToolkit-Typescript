import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../../../context/ThemeContext';

import img1Slider from './img/crew-tentpole-hero-slider.jpeg';
import img3Slider from './img/ep-3-sc-slider.jpeg';
import img2Slider from './img/lego-youtube-slider.jpeg';
import nextIconBtn from './img/next-button.png';
import prevIconBtn from './img/prev-button.png';
import sw_skeleton_crew from './img/star-wars-skeleton-crew-logo-white.png';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const images = [img1Slider, img2Slider, img3Slider];
  const titleContent = [
    'Our heroes face a surprise in a familiar settings',
    'Production designers Doug Chiang and Oliver Scholl explore the worlds of Star Wars: Skeleton Crew.',
    'Sing along (in Huttese!) to the Skeleton Crew trailer song',
  ];
  const btnContent = ['Stream on Disney+', 'Read more', 'Turn it up'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { theme } = useTheme();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.slider_container}>
      <div className={styles.slider_img_container}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className={styles.content_container}>
        <img
          className={styles.sw_logo_img}
          src={sw_skeleton_crew}
          alt="sw_skeleton_crew-logo"
        />
        <div className={styles.title_content}>{titleContent[currentIndex]}</div>
        <Link
          to={'btnLinks[currentIndex]'}
          className={classNames(
            styles.btn_link,
            theme === 'light' ? styles.btn_link_lightTheme : styles.btn_link_darkTheme
          )}
        >
          {btnContent[currentIndex]}
        </Link>
        {currentIndex === 0 && (
          <Link
            to={'btnLinks[currentIndex]'}
            className={classNames(
              styles.btn_link,
              theme === 'light'
                ? styles.extra_btn_link_lightTheme
                : styles.extra_btn_link_darkTheme
            )}
          >
            Episode guide
          </Link>
        )}
      </div>
      <button
        className={classNames(styles.btn_action, styles.btn_prev)}
        onClick={prevImage}
      >
        <img src={prevIconBtn} alt="arrow-left" />
      </button>
      <button
        className={classNames(styles.btn_action, styles.btn_next)}
        onClick={nextImage}
      >
        <img src={nextIconBtn} alt="arrow-right" />
      </button>
      <div className={styles.indicator_container}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentIndex === index ? (theme === 'light' ? styles.active_lightTheme : theme === 'dark' ? styles.active_darkTheme : '') : ''}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
