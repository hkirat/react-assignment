import React from 'react'
import Layout from '../Layout/Layout';
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            <Layout>
                <h3 className='mt-4'>Welcome to LeetCode Home page </h3>
                <p>To view Problems click on below button </p>
                <button to='all-problems'>
                    <Link to='all-problems'>
                        Problems Section
                    </Link>
                </button>
            </Layout>
        </div>
    )
}

export default HomePage
