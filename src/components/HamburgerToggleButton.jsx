import React from 'react'

const HamburgerToggleButton = ({ isOpen, onClick }) => {
  return (
    <div className='hamburgerToggleButton'>
      <button
        type='button'
        onClick={onClick}
        className={isOpen ? "isOpen" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}

export default HamburgerToggleButton