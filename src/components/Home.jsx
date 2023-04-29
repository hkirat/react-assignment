import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <main id='homeMain' >
            <Link id='homeLink' to={"/problemset/all/"} >All Problems</Link>
        </main>
    )
}
