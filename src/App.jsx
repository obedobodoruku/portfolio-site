import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between p-3 font-extrabold">
        <div className="text-2xl">App</div>
        <ul className='flex items-center justify-center gap-3'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  )
}

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;