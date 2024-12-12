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
    <div className={styles.button_container}>
      <UIButton
        text={'Previous'}
        onClick={onPrevious}
        disabled={!switchBack}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.peopleNavigationLightButton
            : styles.peopleNavigationDarkButton
        }
      />
      <UIButton
        text={'Next'}
        onClick={onNext}
        disabled={!switchNext}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.peopleNavigationLightButton
            : styles.peopleNavigationDarkButton
        }
      />
    </div>
  );
};

export default PeopleNavigation;
