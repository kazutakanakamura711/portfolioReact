// import logo from './logo.svg';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import About from './components/About';
import Top from './components/Top';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menubar from './components/Menubar';
import React, { useState } from "react";
import Hamburger from './components/Hamburger';

function App() {
  const getWidth = () => window.outerWidth;
  const [width, setWidth] = useState(getWidth);
  window.addEventListener('resize', () => {
    setWidth(getWidth)
  })
  return (
    <Router>
      <div className="App">
        {width > 800 ? <Menubar /> : <Hamburger />}
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
