import React from 'react'
import './Navbar.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import ProfilePicture from './ProfilePicture'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">  
            <h1>Logo</h1>
        </div>
        <div className="navbar__links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><LoginButton /></li>
                <li><LogoutButton /></li>
                <li><ProfilePicture /></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar