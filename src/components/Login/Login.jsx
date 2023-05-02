import React from 'react';
import { Formik } from 'formik';

import './login.css'


const Login =()=>{

return (
  <div className='form-container'>
    <h1>Signin page!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
           <input className='input'
            type="email"
            name="email"
            placeholder='abc@xyz.com'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <br/>
          <input className='input'
            type="password"
            name="password"
            placeholder='*******'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <br/>
          <button className='submit' type="submit" disabled={isSubmitting}>
            LOGIN
          </button>
        </form>
      )}
    </Formik>
  </div>
);
}

export default Login;
