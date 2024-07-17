import React, { useState } from "react";
function MemberReg(){

    const [FirstName, setFirst] = useState('');
    const [LastName, setLast] = useState('');
    const [Gender, setGender] = useState('');
    const [Address, setAddress] = useState('');
    const [joindate, setJoinDate] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [occupation, setOccupation] = useState('');
    const [isServing, setIsServing] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const memberData = {
            FirstName,
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

        fetch('http://localhost:3000/Member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(memberData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                setFirst('');
                setLast('');
                setEmail('');
                setGender('');
                setAddress('');
                setJoinDate('');
                setPassword('');
                setPhone('');
                setOccupation('');
                setIsServing(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }
    return(
        <div className="member-registration-container">
        <h1>Register Member</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              First Name:
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name:
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
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
                value={gender}
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
                value={address}
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
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
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
              Is Serving:
              <input
                type="checkbox"
                checked={isServing}
                onChange={(e) => setIsServing(e.target.checked)}
              />
            </label>
          </div>
          <button type="submit">Register Member</button>
        </form>
      </div>

    );

}
export default MemberReg;