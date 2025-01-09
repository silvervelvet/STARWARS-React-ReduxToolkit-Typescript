import classNames from 'classnames';

import SignUpForm from '../../components/SignUpPage/SignUpForm';
import { useTheme } from '../../context/ThemeContext';

import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.sign_container}>
      <p
        className={classNames(
          styles.sign_title,
          theme === 'light'
            ? styles.sign_title_lightTheme
            : styles.sign_title_darkTheme
        )}
      >
        Sign Up to Begin Your Journey to the Dark Side or the Force!
      </p>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
