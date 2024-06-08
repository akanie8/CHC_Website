import React, { useState } from 'react';

function Contact() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [number, setNumberPhone] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('number:', number);
    console.log('message: ', message);
    
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
      <div>
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
        <div>
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
        <div>
          <label>
            Phone Number:
            <textarea
              value={number}
              onChange={(e) => setNumberPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Contact Now!</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
