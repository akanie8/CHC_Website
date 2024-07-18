import React, { useState } from "react";
import "../styles/PrayerRequest.css";
import axios from "axios";
function MemberReg(){

    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [joindate, setJoinDate] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [occupation, setOccupation] = useState('');
    const [isServing, setIsServing] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const memberData = {
            firstName,
            LastName,
            email,
            Gender,
            Address,
            joindate,
            password,
            phone,
            occupation,
            isServing,
        };

        axios.post('http://localhost:3000/Member', memberData, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response =>{
          console.log('Success:', response.data);

          setFirstName('');
          setLastName('');
          setEmail('');
          setGender('');
          setAddress('');
          setJoinDate('');
          setPassword('');
          setPhone('');
          setOccupation('');
          setIsServing('');
        })
    }
    return(
        <div className="prayer-request-container">
        <h1>Become A Member Today!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name:
              <input
                type="text"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
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
              Gender:
              <select
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Address:
              <input
                type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Join Date:
              <input
                type="date"
                value={joindate}
                onChange={(e) => setJoinDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Create Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Occupation:
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Are You Already Serving?
            </label>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr' , marginLeft: '10px', marginTop: '5px'}}>
              <label style={{marginRight: '10px'}}>
                Yes
                <input
                  type="checkbox"
                  checked={isServing === 'yes'}
                  onChange={(e) => setIsServing(e.target.checked ? 'yes' : (isServing === 'yes' ? '' : isServing))}
                  style={{marginLeft: '5px'}}
                />
                
              </label>
              <label style={{marginLeft:'40px'}}>
                No
                <input
                  type="checkbox"
                  checked={isServing === "no"}
                  onChange={(e) => setIsServing(e.target.checked ? 'no' : (isServing === 'yes' ? '' : isServing))}
                  style={{marginLeft: '5px'}}
                />
              </label>
            </div>
          </div>
          <button type="submit">Join Now!</button>
        </form>
      </div>

    );

}
export default MemberReg;