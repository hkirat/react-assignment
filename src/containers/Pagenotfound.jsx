import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout'


const Pagenotfound = () => {
    return (
        <Layout title={'go back -Page Not Found'}>
            <div
                className=' d-flex justify-content-center align-items-center flex-column'
                style={{ minHeight: '65vh' }}
            >
                <h1 className='fs-1'>404</h1>
                <h2 className='fst-normal'>Oops ! Page not found..</h2>
                <Link
                    to='/login'
                    className='text-decoration-none tex color-black border border-black mt-2 p-1 go-to-home'
                >
                    Go Back
                </Link>
            </div>
        </Layout>
    );
};

export default Pagenotfound;
