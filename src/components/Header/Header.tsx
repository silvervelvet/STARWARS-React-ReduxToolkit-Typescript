import styles from './Header.module.css';
import iconTikTok from './img/tiktok.png';
import iconInstagram from './img/instagram.png';
import iconTwitter from './img/twitter.png';
import iconFacebook from './img/facebook.png';
import iconYoutube from './img/youtube.png';
import iconKids from './img/icon_kids.svg';
import starwarslogo from './img/sw_logo_light.png';

import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import classNames from 'classnames';
import ThemeToggleButton from '../../context/ThemeToggleButton';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={
        theme === 'dark' ? styles.border_bottomDark : styles.border_bottomLight
      }
    >
      <section className={styles.top_header}>
        <ul className={styles.social_media_list}>
          <li className={styles.social_media_item}>
            <a
              href="https://www.tiktok.com/@starwars"
              className={styles.social_media_link}
            >
              <img
                src={iconTikTok}
                alt="socal-media-TikTok"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
          <li className={styles.social_media_item}>
            <a
              href="https://www.instagram.com/starwars/"
              className={styles.social_media_link}
            >
              <img
                src={iconInstagram}
                alt="socal-media-instagram"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
          <li className={styles.social_media_item}>
            <a
              href="https://twitter.com/starwars"
              className={styles.social_media_link}
            >
              <img
                src={iconTwitter}
                alt="socal-media-twitter"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
          <li className={styles.social_media_item}>
            <a
              href="https://www.facebook.com/StarWars"
              className={styles.social_media_link}
            >
              <img
                src={iconFacebook}
                alt="socal-media-facebook"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
          <li className={styles.social_media_item}>
            <a
              href="https://www.youtube.com/user/starwars"
              className={styles.social_media_link}
            >
              <img
                src={iconYoutube}
                alt="socal-media-youtube"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
          <li className={styles.social_media_item}>
            <a
              href="https://starwarskids.com/"
              className={styles.social_media_link}
            >
              <img
                src={iconKids}
                alt="socal-media-kids"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
        </ul>
        <img
          src={starwarslogo}
          className={styles.logo}
          alt="star-wars-logo"
        ></img>
      </section>
      <section className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>
            <Link
              to="/"
              className={classNames(styles.title, {
                [styles.titleDark]: theme === 'dark',
                [styles.titleLight]: theme === 'light',
              })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/people"
              className={classNames(styles.title, {
                [styles.titleDark]: theme === 'dark',
                [styles.titleLight]: theme === 'light',
              })}
            >
              People
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={classNames(styles.title, {
                [styles.titleDark]: theme === 'dark',
                [styles.titleLight]: theme === 'light',
              })}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/favourite"
              className={classNames(styles.title, {
                [styles.titleDark]: theme === 'dark',
                [styles.titleLight]: theme === 'light',
              })}
            >
              Favourite People
            </Link>
          </li>
          <li>
            <Link
              to="*"
              className={classNames(styles.title, {
                [styles.titleDark]: theme === 'dark',
                [styles.titleLight]: theme === 'light',
              })}
            >
              404
            </Link>
          </li>
        </ul>
        <ThemeToggleButton />
      </section>
    </header>
  );
};

export default Header;
