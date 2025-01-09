import { useTheme } from '../../../context/ThemeContext';
import UIButton from '../../UI-Kit/UIButton';

import styles from './PeopleNavigation.module.css';

interface PeopleNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  switchBack: boolean;
  switchNext: boolean;
}

const PeopleNavigation: React.FC<PeopleNavigationProps> = ({
  onPrevious,
  onNext,
  switchBack,
  switchNext,
}) => {
  const { theme } = useTheme();

  return (
    <nav className={styles.btn_nav_container}>
      <UIButton
        text={'Previous'}
        onClick={onPrevious}
        disabled={!switchBack}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.btn_nav_lightTheme
            : styles.btn_nav_darkTheme
        }
      />
      <UIButton
        text={'Next'}
        onClick={onNext}
        disabled={!switchNext}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.btn_nav_lightTheme
            : styles.btn_nav_darkTheme
        }
      />
    </nav>
  );
};

export default PeopleNavigation;
