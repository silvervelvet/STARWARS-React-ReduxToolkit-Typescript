import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <div>
      <ul>
        <li>
          <Link
            to="/"
            className={theme === 'dark' ? styles.titleDark : styles.titleLight}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="*">404</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
