import styles from './Header.module.css';
import iconTikTokLightTheme from './img/tiktok_lightTheme.png';
import iconTikTokDarkTheme from './img/tiktok_darkTheme.png';
import iconInstLightTheme from './img/instagram_lightTheme.png';
import iconInstDarkTheme from './img/instagram_darkTheme.png';
import iconTwitterLightTheme from './img/twitter_lightTheme.png';
import iconTwitterDarkTheme from './img/twitter_darkTheme.png';
import iconFacebookLightTheme from './img/facebook_lightTheme.png';
import iconFacebookDarkTheme from './img/facebook_darkTheme.png';
import iconYoutubeLightTheme from './img/youtube_lightTheme.png';
import iconYoutubeDarkTheme from './img/youtube_darkTheme.png';
import iconKidsLightTheme from './img/icon_kids_lightTheme.png';
import iconKidsDarkTheme from './img/icon_kids_darkTheme.png';
import logoSWLightTheme from './img/sw_light_logo.png';
import logoSWDarkTheme from './img/sw_dark_logo.png';

import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import classNames from 'classnames';
import ThemeToggleButton from '../../context/ThemeToggleButton';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header>
      <section className={styles.top_header}>
        <ul className={styles.social_media_list}>
          <li className={styles.social_media_item}>
            <a
              href="https://www.tiktok.com/@starwars"
              className={styles.social_media_link}
            >
              <img
                src={
                  theme === 'light' ? iconTikTokLightTheme : iconTikTokDarkTheme
                }
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
                src={theme === 'light' ? iconInstLightTheme : iconInstDarkTheme}
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
                src={
                  theme === 'light'
                    ? iconTwitterLightTheme
                    : iconTwitterDarkTheme
                }
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
                src={
                  theme === 'light'
                    ? iconFacebookLightTheme
                    : iconFacebookDarkTheme
                }
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
                src={
                  theme === 'light'
                    ? iconYoutubeLightTheme
                    : iconYoutubeDarkTheme
                }
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
                src={theme === 'light' ? iconKidsLightTheme : iconKidsDarkTheme}
                alt="socal-media-kids"
                className={styles.social_media_img}
              ></img>
            </a>
          </li>
        </ul>
        <img
          src={theme === 'light' ? logoSWLightTheme : logoSWDarkTheme}
          className={styles.logo}
          alt="star-wars-logo"
        ></img>
        <div className={styles.log}>Log In</div>
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
        <div className={styles.themeToggleButton}>
          <ThemeToggleButton />
        </div>
      </section>
    </header>
  );
};

export default Header;
