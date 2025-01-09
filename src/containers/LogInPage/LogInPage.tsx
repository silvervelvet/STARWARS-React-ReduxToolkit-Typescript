import classNames from 'classnames';

import LogInForm from '../../components/LogInPage/LogInForm';
import { useTheme } from '../../context/ThemeContext';

import styles from './LogInPage.module.css';

const LogInPage = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.login_container}>
      <p
        className={classNames(
          styles.login_title,
          theme === 'light'
            ? styles.login_title_lightTheme
            : styles.login_title_darkTheme
        )}
      >
        Login to activate your Star Wars adventure!
      </p>
      <LogInForm />
    </section>
  );
};

export default LogInPage;
