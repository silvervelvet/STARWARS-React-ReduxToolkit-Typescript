import iconDarkTheme from './img/death-star_darkTheme.png';
import iconLightTheme from './img/jedi_lightTheme.png';
import { useTheme } from './ThemeContext';
import styles from './ThemeToggleButton.module.css';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()!;

  return (
    <button onClick={toggleTheme} className={styles.icon_btn_toggleTheme}>
      <img
        src={theme === 'light' ? iconLightTheme : iconDarkTheme}
        alt="side-variant"
      />
    </button>
  );
};

export default ThemeToggleButton;
