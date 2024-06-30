const mysql = require('mysql2');
require('dotenv').config();

//establishing connection

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


connection.connect((err) =>{
    if(err){
        console.error('Sorry, cannot connect to mySQL', err);
        return;
    }
    console.log('Successfully Connected to mySQL');
});

module.exports = connection;