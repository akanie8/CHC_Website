import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import PrayerRequest from './screens/PrayerRequest';
import About from './screens/About';
import Podcast from './screens/PodCast';
import Contact from './screens/Contact';
import Login from './screens/Login';

import './styles/style.css'
function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/prayer-request">Send Prayer Request</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/podcast">Podcast</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
