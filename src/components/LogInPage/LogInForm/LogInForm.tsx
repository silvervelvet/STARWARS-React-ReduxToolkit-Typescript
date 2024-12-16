import { ErrorMessage, Field, Form, useFormik } from 'formik';
import styles from './LogInForm.module.css';

import LogRocket from 'logrocket';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email adress').required('Email is required'),
    password: Yup.string().min(8,'password must be at least 8 characters').required('Password is required'),
})

const LogInForm: React.FC = () => {
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            LogRocket.log('Form submitted successfully', values)
            console.log('Form data:', values);
          }
        })

    return (
        <section>
            <Form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                    type="email"
                    name="email"
                    className="form-control"
                    />
                    <ErrorMessage name='name' component='div' className='invalid-feedback'/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                    type="password"
                    name="password"
                    className="form-control"
                    />
                    <ErrorMessage name='name' component='div' className='invalid-feedback'/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </section>

    )
}

export default LogInForm;