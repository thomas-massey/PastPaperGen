import React from 'react'
import './Navbar.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import ProfilePicture from './ProfilePicture' 
import Logo from '../assets/PastPaperGen-logo.jpeg'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">  
            <img src={Logo} alt="PastPaperGen Logo" className='navbar__logo-img' />
        </div>
        <div className="navbar__links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <LoginButton />
            <LogoutButton />
            <ProfilePicture />
        </div>
    </nav>
  )
}

export default Navbar