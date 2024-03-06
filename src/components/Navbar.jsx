import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/navbar.css'

function Navbar() {
    const [navColor, changeNavColor] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            (window.scrollY > 100) ? (changeNavColor(true)) : changeNavColor(false)
            window.removeEventListener('scroll')
        })

    }, [])

    return (
        <div className={`navbar-container ${navColor && 'nav_black'}`}>
            <img
                className='netflix-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />

            <img
                className='netflix-logo netflix-avatar'
                src="https://cdn-icons-png.flaticon.com/512/1936/1936321.png"
                alt="Avatar" />
            {/* main div */}
            {/* logo and logo */}
        </div>
    )
}

export default Navbar
