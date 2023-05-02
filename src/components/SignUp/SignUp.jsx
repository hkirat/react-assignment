import React from 'react';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='form-container'>
      <h1>SignUp Page !!</h1>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input className='input'
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input className='input'
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <input className='input'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input className='input'
            id="password"
            type="password"
            name="password"
            placeholder='*******'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
      <br />
      <button  className='submit' type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Signup;