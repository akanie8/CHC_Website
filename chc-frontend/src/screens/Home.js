import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/home.css'; // Add a separate CSS file for home-specific styles
import '../styles/Buttons.css'
import Committee from '../components/Committee';
function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

	const calculateTimeLeft = () => {
		const now = new Date();
		let nextSunday = new Date(now);
		nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
		nextSunday.setHours(10,0,0,0);

		if(nextSunday - now < 0){
			nextSunday.setDate(nextSunday.getDate() + 7);
		}

		const difference = nextSunday - now;

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000*60*60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
			difference,
		};
	}
	 const getMessage = (timeLeft) =>{
		const now = new Date();
		const currentDay = now.getDay();
		const currentHour = now.getHours();
		const currentMinutes = now.getMinutes();

		if(currentDay === 0 && currentHour >= 10 && currentHour	< 12){
			
			return(
				<div>
					<h1>SERVICE UNDERWAY</h1>
				</div>
			);
		}
		return '';
	 };
	 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	 const [message, setMessage] = useState(getMessage(timeLeft));

	 useEffect(() => {
		const timer = setInterval(() => {
			const timeLeft = calculateTimeLeft();
			setTimeLeft(timeLeft);
			setMessage(getMessage(timeLeft));
		}, 1000);
		return () => clearInterval(timer);
	 }, []);

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
			<li><a href="/SignUp">Sign Up</a></li>
          </ul>
        </nav>
      </div>
      <div className="header">
        <button className="menu-btn" onClick={toggleSidebar}>&#9776;</button>
		
		<div className="sign">
			<span className="fast-flicker" style={{display: 'block'}}>Welcome ✞o</span>
			<span className='flicker' style={{display: 'flex'}}>Chris✟ian House Church.</span>
		</div>
        
      </div>

	  <div>
		{message ? (
			<h2>{message}</h2>
		) : (
			<div className='content'>
				<h2>Next Sunday Service At 10:00 AM: </h2>
				<p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
			</div>
		)}
	  </div>
	  
	  <button className='neon-loader'>
		
		<h2 style={{color: 'white'}}><span>Join the family Now!</span></h2>
		<h1></h1>
		
	  </button>
	 
    </div>
	
  );
}

export default Home;





