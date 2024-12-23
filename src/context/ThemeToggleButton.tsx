import classNames from 'classnames';

import iconDarkTheme from './img/death-star_darkTheme.png';
import iconLightTheme from './img/jedi_lightTheme.png';
import { useTheme } from './ThemeContext';
import styles from './ThemeToggleButton.module.css';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()!;

  return (
    <section>
      {/* <div>Choose your side</div> */}
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
