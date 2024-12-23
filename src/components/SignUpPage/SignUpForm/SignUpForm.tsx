import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import LogRocket from 'logrocket';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { auth } from '../../../firebaseConfig';

import styles from './SignUpForm.module.css';
import { Button } from '@mui/material';
import UIButton from '../../UI-Kit/UIButton/UIButton';
import { useTheme } from '../../../context/ThemeContext';
import classNames from 'classnames';

interface FormikValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUpForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const { theme } = useTheme();

  const handleSubmit = async (values: FormikValues) => {
    const { email, password } = values;

    try {
      LogRocket.log('Attempting to create user with email:', email);

      await createUserWithEmailAndPassword(auth, email, password);

      LogRocket.log('User successfully registered:', { email });

      setError(null);
      setSuccessMessage('Registration successful! You can now log in.');

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error: any) {
      LogRocket.error('Error during registration:', error.message);

      setError(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <section
      className={classNames(
        styles.sign_form_wrapper,
        theme === 'light'
          ? styles.sign_form_wrapper_light
          : styles.sign_form_wrapper_dark
      )}
    >
      {successMessage && (
        <div className={styles.sign_message}>{successMessage}</div>
      )}
      {error && <div className={styles.sign_message}>{error}</div>}

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form_group}>
          <div className={styles.input_group}>
            <label
              htmlFor="email"
              className={classNames(
                theme === 'light'
                  ? styles.label_form_light
                  : styles.label_form_dark
              )}
            >
              Email
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              className={classNames(
                styles.field_form,
                theme === 'light'
                  ? styles.field_form_light
                  : styles.field_form_dark
              )}
              placeholder="Enter your email"
            />
            <ErrorMessage
              className={styles.error_message}
              name="email"
              component="div"
            />
          </div>
          <div className={styles.input_group}>
            <label
              htmlFor="password"
              className={classNames(
                theme === 'light'
                  ? styles.label_form_light
                  : styles.label_form_dark
              )}
            >
              Password
            </label>
            <Field
              id="password"
              type="password"
              name="password"
              className={classNames(
                styles.field_form,
                theme === 'light'
                  ? styles.field_form_light
                  : styles.field_form_dark
              )}
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error_message}
            />
          </div>
          <div className={styles.input_group}>
            <label
              htmlFor="confirmPassword"
              className={classNames(
                theme === 'light'
                  ? styles.label_form_light
                  : styles.label_form_dark
              )}
            >
              Confirm your password
            </label>
            <Field
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className={classNames(
                styles.field_form,
                theme === 'light'
                  ? styles.field_form_light
                  : styles.field_form_dark
              )}
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={styles.error_message}
            />
          </div>
          <UIButton
            classes={styles.btn_sign}
            text={'Sign Up'}
            theme={theme}
            type="submit"
          />
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpForm;
