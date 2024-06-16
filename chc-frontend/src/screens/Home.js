import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/home.css'; // Add a separate CSS file for home-specific styles
import '../styles/Buttons.css'

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-container">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/PrayerRequest">Send Prayer Request</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/PodCast">Podcast</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </nav>
      </div>
      <div className="header">
        <button className="menu-btn" onClick={toggleSidebar}>&#9776;</button>
		
		<div className="sign">
			<span className="fast-flicker" style={{display: 'block'}}>Welcome To</span>
			<span className='flicker' style={{display: 'flex'}}>Christian House Church</span>
		</div>
        
      </div>
	  
	  <button className='neon-loader'>
		
		<h2 style={{color: 'white'}}><span>Join the family Now!</span></h2>
		
	  </button>
	  
      <div className="content">
        <h2>Join Us for Worship</h2>
        <p>Every Sunday at 10:00 AM</p>
      </div>
    </div>
  );
}

export default Home;





