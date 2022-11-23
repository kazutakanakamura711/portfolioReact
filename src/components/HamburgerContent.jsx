import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerContent = ({ isOpen, onClick }) => {
  return (
    <div className='hamburgerContent'>
      <nav
        className={isOpen ? "isOpen" : ""}
      >
        <ul>
          <li onClick={onClick}>
            <Link to="/">TOP</Link>
          </li>
          <li onClick={onClick}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li onClick={onClick}>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li onClick={onClick}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerContent