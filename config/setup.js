const db = require('../config/database');

const createTables = async () => {
    try {
        await db.none(`
            DROP TABLE IF EXISTS users;
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password_digest TEXT NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL
            );

            CREATE TABLE IF NOT EXISTS favorites (
                favorite_id SERIAL PRIMARY KEY,
                score INTEGER,
                word_list TEXT[],
                favorite_board JSONB,
                user_id INTEGER REFERENCES users(user_id)
            );
        `);
        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
};

createTables();
