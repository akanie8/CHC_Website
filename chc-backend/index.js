const express = require('express');
const connection = require('./db');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001'
}));

// Handle prayer requests
app.post('/prayer_request', (req, res) => {
    const { name, email, phone, description } = req.body;
    console.log('Received prayer request:', req.body); // Log received data

    const query = 'INSERT INTO prayer_request (name, email, phone, description) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, email, phone, description], (err, results) => {
        if (err) {
            console.error('Error creating prayer request:', err);
            res.status(500).send('Error creating a prayer request');
            return;
        }
        res.status(201).json({ id: results.insertId, name, email, phone, description });
    });
});

// Handle member registration
app.post('/Member', async (req, res) => {
    const { FirstName, LastName, Email, Gender, Address, JoinDate, Password, phone, Occupation, IsServing } = req.body;
    console.log('Received member registration:', req.body); // Log received data

    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const hashedPassword = await bcrypt.hash(Password, 10);
        const ConIsServing = IsServing === 'yes' ? 1 : 0;
        const query = 'INSERT INTO Member (FirstName, LastName, Email, Gender, Address, JoinDate, Password, phone, Occupation, IsServing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [FirstName, LastName, Email, Gender, Address, JoinDate, hashedPassword, phone, Occupation, ConIsServing], (err, results) => {
            if (err) {
                console.error('Error creating a new member:', err);
                res.status(500).send('Sorry, error creating a member');
                return;
            }
            res.status(201).json({ id: results.insertId, FirstName, LastName, Email, Gender, Address, JoinDate, phone, Occupation, IsServing });
        });
    } catch (err) {
        console.error('Error hashing the password:', err);
        res.status(500).send('Error hashing the password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

