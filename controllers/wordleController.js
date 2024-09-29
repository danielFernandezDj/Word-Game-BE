const db = require('../config/database');

exports.getRandomWord = async (req, res) => {
    try {
        // Query to get a random 5-letter word
        const result = await db.any("SELECT word FROM Dictionary WHERE LENGTH(word) = 5 ORDER BY RANDOM() LIMIT 1");
        
        if (result.length === 0) {
            return res.status(404).json({ message: "No 5-letter words found." });
        }

        const randomWord = result[0].word; // Get the word from the result
        res.json({ word: randomWord });
    } catch (error) {
        console.error("Error fetching random word:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// New function to validate the user's word
exports.validateWord = async (req, res) => {
    const { word } = req.body; // Get the word from the request body
    try {
        const result = await db.any("SELECT word FROM Dictionary WHERE word = $1", [word]);
        
        if (result.length === 0) {
            return res.status(400).json({ message: "Invalid word." }); // Word not found
        }

        res.json({ message: "Valid word." }); // Word is valid
    } catch (error) {
        console.error("Error validating word:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};