import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import LogRocket from 'logrocket';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { auth } from '../../../firebaseConfig';

import styles from './SignUpForm.module.css';

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
      }, 5000);
    } catch (error: any) {
      LogRocket.error('Error during registration:', error.message);

      setError(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <section>
      {successMessage && <div className="success">{successMessage}</div>}
      {error && <div className="error">{error}</div>}

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm your password</label>
            <Field
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpForm;
