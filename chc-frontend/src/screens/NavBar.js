import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/PrayerRequest">Send Prayer Request</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
