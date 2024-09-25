const pool = require('../config/database');

exports.getAllAngles = async (req, res) => { //test route to verify db connection is available
  try {
    const cheAngle = await pool.query('SELECT * FROM triangle');
    res.json(cheAngle);
  } catch (error) {
    console.error("Failed to fetch angles:", error);
    res.status(500).json({ error: 'Failed to fetch angles' });
  }
};

