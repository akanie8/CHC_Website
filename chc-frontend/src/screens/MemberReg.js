import React, { useState } from "react";
import axios from 'axios';
import "../styles/PrayerRequest.css";
import { useNavigate } from 'react-router-dom';

function MemberReg() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Gender, setGender] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [JoinDate, setJoinDate] = useState('');
    const [Password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [IsServing, setIsServing] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            FirstName,
            LastName,
            Email,
            Gender,
            Address,
            JoinDate,
            Password,
            phone,
            Occupation,
            IsServing,
        };

        try {
            const response = await axios.post('http://localhost:3000/Member', memberData);
            console.log('Success:', response.data);
            navigate('/Login');  // Redirect to login page
        } catch (error) {
            console.error('Error:', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="prayer-request-container">
            <h1>Become A Member Today!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={FirstName}
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
                            value={Email}
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
                            value={JoinDate}
                            onChange={(e) => setJoinDate(e.target.value)}
                            max={new Date().toISOString().split("T")[0]}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Password:
                        <input
                            type="password"
                            value={Password}
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
                            value={Occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Are You Already Serving?
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '10px', marginTop: '5px' }}>
                        <label style={{ marginRight: '10px' }}>
                            Yes
                            <input
                                type="checkbox"
                                checked={IsServing === 'yes'}
                                onChange={(e) => setIsServing(e.target.checked ? 'yes' : (IsServing === 'yes' ? '' : IsServing))}
                                style={{ marginLeft: '5px' }}
                            />
                        </label>
                        <label style={{ marginLeft: '40px' }}>
                            No
                            <input
                                type="checkbox"
                                checked={IsServing === 'no'}
                                onChange={(e) => setIsServing(e.target.checked ? 'no' : (IsServing === 'yes' ? '' : IsServing))}
                                style={{ marginLeft: '5px' }}
                            />
                        </label>
                    </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Join Now!</button>
            </form>
        </div>
    );
}

export default MemberReg;
