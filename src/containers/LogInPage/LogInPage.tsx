import { useTheme } from '../../context/ThemeContext';
import LogInForm from '../../components/LogInPage/LogInForm';

import styles from './LogInPage.module.css';
import classNames from 'classnames';

const LogInPage = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.login_wrapper}>
      <div
        className={classNames(
          styles.login_title,
          theme === 'light' ? styles.login_title_Light : styles.login_title_Dark
        )}
      >
        Login to activate your Star Wars adventure!
      </div>
      <LogInForm />
    </section>
  );
};

export default LogInPage;
