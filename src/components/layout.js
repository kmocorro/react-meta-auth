import React from 'react'
import NavBar from './nav-bar'

const Layout = ({ children }) => (
    <div>
        <NavBar/>
        {children}
    </div>
)

export default Layout