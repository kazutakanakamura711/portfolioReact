import React from 'react';
import { useState } from 'react';
import HamburgerContent from './HamburgerContent';
import ToggleButton from './HamburgerToggleButton';

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggleHamburgerMenu = () => {
    setOpen((prev) => !prev);
    const html = document.querySelector('html');
    html.classList.toggle('isHamburgerOpen');
  }
  return (
    <header className='hamburger'>
      <ToggleButton
        isOpen={isOpen}
        onClick={handleToggleHamburgerMenu} />
      <HamburgerContent
        isOpen={isOpen}
        onClick={handleToggleHamburgerMenu}
      />
    </header>
  )
}

export default Hamburger