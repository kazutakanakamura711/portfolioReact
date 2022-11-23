import React from 'react'
import { Link } from 'react-router-dom'


const Menubar = () => {
  return (
    <header className='menubar'>
      <div className='logo'>
        <h1>K.NAKAMURA</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
          <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menubar