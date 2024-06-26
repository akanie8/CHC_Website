import React, { useState } from 'react';
import '../styles/PrayerRequest.css';

function PrayerRequest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Phone:', phone);
  };

  return (
    <div className="prayer-request-container">
      <h1>Send Prayer Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default PrayerRequest;
