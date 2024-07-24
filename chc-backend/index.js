const express = require('express');
const createConnection = require('./db');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

let connection;

// Initialize the database connection
(async () => {
    try {
        connection = await createConnection();
    } catch (err) {
        console.error('Failed to establish database connection:', err);
    }
})();

// Handle prayer requests
app.post('/prayer_request', async (req, res) => {
    const { name, email, phone, description } = req.body;
    console.log('Received prayer request:', req.body); // Log received data

    const query = 'INSERT INTO prayer_request (name, email, phone, description) VALUES (?, ?, ?, ?)';
    try {
        const [results] = await connection.execute(query, [name, email, phone, description]);
        res.status(201).json({ id: results.insertId, name, email, phone, description });
    } catch (err) {
        console.error('Error creating prayer request:', err);
        res.status(500).send('Error creating a prayer request');
    }
});

// Handle member registration
app.post('/Member', async (req, res) => {
    const { FirstName, LastName, Email, Gender, Address, JoinDate, Password, phone, Occupation, IsServing } = req.body;
    console.log('Received member registration:', req.body); // Log received data

    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const hashedPassword = await bcrypt.hash(String(Password), 10); // Ensure Password is a string
        const ConIsServing = IsServing === 'yes' ? 1 : 0;
        const query = 'INSERT INTO Member (FirstName, LastName, Email, Gender, Address, JoinDate, Password, phone, Occupation, IsServing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const [results] = await connection.execute(query, [FirstName, LastName, Email, Gender, Address, JoinDate, hashedPassword, phone, Occupation, ConIsServing]);
        res.status(201).json({ id: results.insertId, FirstName, LastName, Email, Gender, Address, JoinDate, phone, Occupation, IsServing });
    } catch (err) {
        console.error('Error creating a new member:', err);
        res.status(500).send('Sorry, error creating a member');
    }
});

// Handle login
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await connection.execute('SELECT * FROM Member WHERE Email = ?', [email]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'This user is not found' });
        }
        const user = rows[0];

        // Compare Passwords
        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.json({ message: 'Login Successful', user });
    } catch (error) {
        console.error('Error during login: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

