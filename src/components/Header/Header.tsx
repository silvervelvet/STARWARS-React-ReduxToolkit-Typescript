import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="*">404</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
