const dotenv = require('dotenv');
const { Pool } = require('pg');
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use DATABASE_URL provided by Railway
    ssl: {
        rejectUnauthorized: false // Necessary for external connections in some cases
    }
});

module.exports = pool;