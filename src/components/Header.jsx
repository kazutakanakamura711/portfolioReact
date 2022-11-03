import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h1>K.NAKAMURA</h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">TOP</a>
          </li>
          <li>
            <a href="/">PROFILE</a>
          </li>
          <li>
            <a href="/">WORKS</a>
          </li>
          <li>
            <a href="/">GALLERY</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header