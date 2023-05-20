import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <h4 className='text-center'>All Right's Reserved &copy; Sree </h4>
            <p className='text-center mt-3' >
                <Link to='/about' className='m-2'>About</Link> |
                <Link to='/contact' className='m-2'>Contact</Link> |
                <Link to='/policy' className='m-2'>Privacy Policy</Link>
            </p>
        </div>
    );
};

export default Footer;
