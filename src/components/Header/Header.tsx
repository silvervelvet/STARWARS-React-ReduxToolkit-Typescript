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
import logoSWLightTheme from './img/sw_light_logo.png';
import logoSWDarkTheme from './img/sw_dark_logo.png';

import SearchIcon from '@mui/icons-material/Search';

import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import classNames from 'classnames';
import ThemeToggleButton from '../../context/ThemeToggleButton';
import { useSelector } from 'react-redux';

const getLinkClassNames = (isActive, theme) => {
  return classNames(styles.title, {
    [styles.titleDark]: theme === 'dark',
    [styles.titleLight]: theme === 'light',
    [styles.titleLight_active]: isActive && theme === 'light',
    [styles.titleDark_active]: isActive && theme === 'dark',
  });
};

const Header = () => {
  const { theme } = useTheme();
  const favouritePeople = useSelector(
    (state: { favourites: { favoriteIds: string[] } }) =>
      state.favourites.favoriteIds
  );

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
        </ul>
        <img
          src={theme === 'light' ? logoSWLightTheme : logoSWDarkTheme}
          className={styles.logo}
          alt="star-wars-logo"
        ></img>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </section>
      <section className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => getLinkClassNames(isActive, theme)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) => getLinkClassNames(isActive, theme)}
            >
              People
            </NavLink>
          </li>
          <li className={styles.navigation_item}>
            <NavLink
              to="/search"
              className={({ isActive }) => getLinkClassNames(isActive, theme)}
            >
              <div className={styles.iconTextWrapper}>
                <SearchIcon fontSize="large" />
                <span>Search</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourite"
              className={({ isActive }) => getLinkClassNames(isActive, theme)}
            >
              Favourites
              {favouritePeople.length > 0 && (
                <span
                  className={classNames(styles.favoriteCount, {
                    [styles.favoriteCount_lightTheme]: theme === 'light',
                    [styles.favoriteCount_darkTheme]: theme === 'dark',
                  })}
                >
                  {favouritePeople.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="*"
              className={({ isActive }) => getLinkClassNames(isActive, theme)}
            >
              404
            </NavLink>
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
