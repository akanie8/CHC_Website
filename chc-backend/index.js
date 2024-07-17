const express = require('express');
const connection = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/prayer_request', (req, res) =>{
    const {name, email, phone, descrption} = req.body;
    const query = 'INSERT INTO prayer_request (name, email, phone, description) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, email, phone, descrption], (err,results) =>{
        if(err){
            console.error('Error creating prayer request', err);
            res.status(500).send('Error creating a prayer request');
        }
    })
})

app.post('/Member', (req, res) => {
    const {firstname, lastname, email, gender, address, joindate, password, phone, occupation, isServing} = req.body;
    const query = 'INSERT INTO Member (firstname, lastname, email, gender, address, joindate, password, phone, occupation, isServing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [firstname, lastname, email, gender, address, joindate, password, phone, occupation, isServing], (err, results) => {
        if(err) {
            console.error('Error creating a new member', err);
            res.status(500).send('sorry, error creating a member');
            return;
        }
        res.status(201).json({id: results.insertId, firstname, lastname, email, gender, address, joindate, password, phone, occupation, isServing });
    })
})


app.listen(PORT, () =>{
    console.log(`Server is running on PORT:  ${PORT}`);
});

