import classNames from 'classnames';

import SignUpForm from '../../components/SignUpPage/SignUpForm';
import { useTheme } from '../../context/ThemeContext';

import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.sign_wrapper}>
      <div
        className={classNames(
          styles.sign_title,
          theme === 'light' ? styles.sign_title_Light : styles.sign_title_Dark
        )}
      >
        Sign Up to Begin Your Journey to the Dark Side or the Force!
      </div>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
