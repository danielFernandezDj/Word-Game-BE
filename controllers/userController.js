const pool = require('../config/database');

exports.getAllAngles = async (req, res) => { //test route to verify db connection is available
  try {
    const cheAngle = await db.any('SELECT * FROM triangle');
    res.json(cheAngle);
  } catch (error) {
    console.error("Failed to fetch angles:", error);
    res.status(500).json({ error: 'Failed to fetch angles' });
  }
};

exports.getUsers = async (req, res) => {//find user by username
  try{
    const { username } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    res.json(user.rows);
  }
  catch (error){
    console.error("Failed to fetch user:", error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }

}

const db = require('../config/database');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.any('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        console.error("Failed to fetch users:", error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Add more functions for CRUD operations on users and favorites
