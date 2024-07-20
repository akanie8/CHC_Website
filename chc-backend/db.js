const mysql = require('mysql2/promise');
require('dotenv').config();

async function createConnection() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });
        console.log('Successfully Connected to mySQL');
        return connection;
    } catch (err) {
        console.error('Sorry, cannot connect to mySQL', err);
        throw err;
    }
}

module.exports = createConnection;
