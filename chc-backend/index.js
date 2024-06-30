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
            res.status(500).send('Error creating a prayer request')
        }
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on PORT:  ${PORT}`);
});