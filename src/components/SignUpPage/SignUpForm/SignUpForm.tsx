import firebase from 'firebase/app';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import 'firebase/auth';
import LogRocket from 'logrocket';
import { useState } from 'react';
import * as Yup from 'yup';

import styles from './SignUpForm.module.css';

interface FormikValues {
    email: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email adress').required('Email is required'),
    password: Yup.string().min(8,'password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().required('Confirm passwordis required').oneOf([Yup.ref('password'), null], 'Password must match',)
})

const SignUpForm: React.FC = () => {
    const [error,  setError] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            LogRocket.log('Form submitted successfully', values)
            console.log('Form data:', values);
          }
        });

    
        const handleSubmit = async (values:FormikValues) => {
            const { email, password } = values;
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        };

    return (
        <section>
            <Formik onSubmit={handleSubmit} initialValues={{ email: '', password:'' }} 
            validationSchema={validationSchema}>
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
                        <ErrorMessage name='email' component='div' className='error'/>
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
                        <ErrorMessage name='password' component='div' className='error'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm your password</label>
                        <Field
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Confirm your password"
                        />
                        <ErrorMessage name='confirmPassword' component='div' className='error'/>
                    </div>
                    <button type="submit">Log In</button>
                </Form> 
            </Formik>
        </section>

    )
}

export default SignUpForm;