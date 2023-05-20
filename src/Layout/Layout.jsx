import React from 'react'
import Footer from '../Layout/Footer'
import HomePage from '../containers/HomePage'
import Header from '../containers/Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header headerVisible={true} />
            <main style={{ minHeight: '77vh' }}>{children}</main>

            <Footer />

        </div >
    )
}

export default Layout
