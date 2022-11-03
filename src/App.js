// import logo from './logo.svg';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Profile from './components/Profile';
import Top from './components/Top';
import Works from './components/Works';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/works' element={<Works />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
