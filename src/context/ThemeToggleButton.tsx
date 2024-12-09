import styles from './ThemeToggleButton.module.css';
import iconDarkTheme from './img/death-star.png';
import iconLightTheme from './img/jedi.png';

import classNames from 'classnames';

import { useTheme } from './ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()!;

  return (
    <section>
      <div>Choose your side</div>
      <img
        className={styles.icon_toggleTheme}
        src={theme === 'light' ? iconLightTheme : iconDarkTheme}
        onClick={toggleTheme}
        alt="side-variant"
      />
    </section>
  );
};

export default ThemeToggleButton;
