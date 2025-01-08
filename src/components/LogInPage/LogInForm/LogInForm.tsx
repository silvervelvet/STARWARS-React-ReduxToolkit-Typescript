import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import LogRocket from 'logrocket';
import { useState } from 'react';
import * as Yup from 'yup';

import { loginWithEmail } from '../../../authService';
import { useTheme } from '../../../context/ThemeContext';
import UIButton from '../../UI-Kit/UIButton';

import styles from './LogInForm.module.css';

interface FormikValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email adress')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const LogInForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { theme } = useTheme();

  const handleSubmit = async (values: FormikValues) => {
    const { email, password } = values;

    try {
      const user = await loginWithEmail(email, password);

      LogRocket.log('Form submitted successfully', values);

      setError(null);
      setSuccessMessage('You’re logged in successfully!');
    } catch (error) {
      setError('Login failed: ' + error.message);
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
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
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
              name="email"
              component="div"
              className={styles.error_message}
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
          <UIButton
            classes={styles.btn_sign}
            text={'Log In'}
            theme={theme}
            type="submit"
          />{' '}
        </Form>
      </Formik>
    </section>
  );
};

export default LogInForm;
