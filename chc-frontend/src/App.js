
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import PrayerRequest from './screens/PrayerRequest';
import About from './screens/About';
import PodCast from './screens/PodCast';
import Contact from './screens/Contact';
import Login from './screens/Login';
import MemberReg from './screens/MemberReg';
import logo from './assets/logo-chc.png';
import './styles/style.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/PrayerRequest">Send Prayer Request</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/PodCast">Podcast</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/MemberReg">Become A Member</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PrayerRequest" element={<PrayerRequest />} />
          <Route path="/About" element={<About />} />
          <Route path="/PodCast" element={<PodCast />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/MemberReg" element={<MemberReg/>} />
        </Routes>
      </main>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
