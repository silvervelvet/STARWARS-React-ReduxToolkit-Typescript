import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from '../../context/ThemeToggleButton';

import styles from './Header.module.css';
import iconFacebookDarkTheme from './img/facebook_darkTheme.png';
import iconFacebookLightTheme from './img/facebook_lightTheme.png';
import iconInstDarkTheme from './img/instagram_darkTheme.png';
import iconInstLightTheme from './img/instagram_lightTheme.png';
import logoSWDarkTheme from './img/sw_dark_logo.png';
import logoSWLightTheme from './img/sw_light_logo.png';
import logoSmallSWDarkTheme from './img/sw_small_dark_logo.png';
import logoSmallSWLightTheme from './img/sw_small_light_logo.png';
import iconTikTokDarkTheme from './img/tiktok_darkTheme.png';
import iconTikTokLightTheme from './img/tiktok_lightTheme.png';
import iconTwitterDarkTheme from './img/twitter_darkTheme.png';
import iconTwitterLightTheme from './img/twitter_lightTheme.png';
import iconYoutubeDarkTheme from './img/youtube_darkTheme.png';
import iconYoutubeLightTheme from './img/youtube_lightTheme.png';

const getLinkClassNames = (isActive, theme) => {
  return classNames(styles.title, {
    [styles.titleDark]: theme === 'dark',
    [styles.titleLight]: theme === 'light',
    [styles.titleLight_active]: isActive && theme === 'light',
    [styles.titleDark_active]: isActive && theme === 'dark',
  });
};

const Header: React.FC = () => {
  const { theme } = useTheme();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const menuRef = useRef<HTMLUListElement>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);

  const locationSignUp = useLocation();
  const locationLogIn = useLocation();

  const isSignupPage = locationSignUp.pathname === '/signup';
  const isLogInPage = locationLogIn.pathname === '/login';

  const favouritePeople = useSelector(
    (state: { favourites: { favoriteIds: string[] } }) =>
      state.favourites.favoriteIds
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !hamburgerMenuRef.current?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const getLogoSrc = (): string => {
    if (windowWidth <= 768) {
      return theme === 'light' ? logoSmallSWLightTheme : logoSmallSWDarkTheme;
    } else {
      return theme === 'light' ? logoSWLightTheme : logoSWDarkTheme;
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <img src={getLogoSrc()} className={styles.logo} alt="star-wars-logo" />
        {windowWidth > 768 && (
          <div className={styles.auth_container}>
            {!isLogInPage && (
              <NavLink
                to="/login"
                className={classNames(styles.auth, {
                  [styles.authLight]: theme === 'light',
                  [styles.authDark]: theme === 'dark',
                })}
              >
                <div className={styles.auth_logIn_icon}>
                  <LoginIcon fontSize="large" />
                  <span> Log In</span>
                </div>
              </NavLink>
            )}
            {!isSignupPage && (
              <NavLink
                to="/signup"
                className={classNames(styles.auth, {
                  [styles.authLight]: theme === 'light',
                  [styles.authDark]: theme === 'dark',
                })}
              >
                Sign Up
              </NavLink>
            )}
          </div>
        )}
      </section>
      <section className={styles.navigation}>
        <div
          className={styles.hamburgerMenu}
          onClick={toggleMenu}
          ref={hamburgerMenuRef}
        >
          <div
            className={classNames(styles.bar, { [styles.open]: menuOpen })}
          ></div>
          <div
            className={classNames(styles.bar, { [styles.open]: menuOpen })}
          ></div>
          <div
            className={classNames(styles.bar, { [styles.open]: menuOpen })}
          ></div>
        </div>
        <ul
          className={classNames(styles.navigation_list, {
            [styles.open]: menuOpen,
          })}
          ref={menuRef}
        >
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
          {windowWidth <= 768 && (
            <>
              {!isLogInPage && (
                <NavLink
                  to="/login"
                  className={classNames(styles.auth, {
                    [styles.authLight]: theme === 'light',
                    [styles.authDark]: theme === 'dark',
                  })}
                >
                  <div className={styles.auth_logIn_icon}>
                    <LoginIcon fontSize="large" />
                    <span> Log In</span>
                  </div>
                </NavLink>
              )}
              {!isSignupPage && (
                <NavLink
                  to="/signup"
                  className={classNames(styles.auth, {
                    [styles.authLight]: theme === 'light',
                    [styles.authDark]: theme === 'dark',
                  })}
                >
                  Sign Up
                </NavLink>
              )}
            </>
          )}
        </ul>
        <div className={styles.themeToggleButton}>
          <ThemeToggleButton />
        </div>
      </section>
    </header>
  );
};

export default Header;
