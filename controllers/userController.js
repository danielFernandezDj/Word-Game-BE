const db = require('../config/database');
const bcrypt = require('bcrypt');




exports.makeUser = async (req, res) => {
    const { username, password, email } = req.body;

    let existingUser;
    try {
        existingUser = await db.any("SELECT * FROM users WHERE username = $1 OR email = $2", [username, email]);
    } catch (err) {
        console.error("Database query failed:", err);
        return res.status(500).json({ message: "Database query failed" });
    }

    if (existingUser.length > 0) {
        return res.status(400).json({ message: "Username or email already exists" });
    }
    try{
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Insert new user into the database
        const newUser = await db.any(
            "INSERT INTO users (username, password_digest, email) VALUES ($1, $2, $3) RETURNING user_id, username, email",
            [username, hashedPassword, email]
        );
    
        if (newUser.length === 0) {
            throw new Error('No user was created.');
        }
    
        res.status(201).json(newUser[0]);
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getUsers = async (req, res) => {
    const { username, password } = req.body;
    let user;

    try {
        user = await db.any("SELECT * FROM users WHERE username = $1", [username]);
        if (user.length === 0) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user[0].password_digest);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Passwords match, user authenticated
        res.json({ message: "Login successful", user: user[0] });
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ message: "Server Error" });
    }
};