const fs = require('fs');
const db = require('../config/database');

// Read JSON file
fs.readFile('words_dictionary.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse JSON data
    const dictionary = JSON.parse(data);
    const batchSize = 1000; // Set your desired batch size
    const words = Object.keys(dictionary);
    
    const insertQuery = 'INSERT INTO dictionary (word) VALUES ($1) ON CONFLICT (word) DO NOTHING';

    const tasks = [];
    
    for (let i = 0; i < words.length; i += batchSize) {
        // Slice the array to get the current batch
        const batch = words.slice(i, i + batchSize);
        
        // Create a batch insert query
        const batchInsert = batch.map(word => db.none(insertQuery, [word]));
        
        // Push the current batch's insert tasks
        tasks.push(db.task(t => t.batch(batchInsert)));
    }

    // Execute all batch insertions
    db.task('insert-words', async t => {
        await t.batch(tasks);
    })
    .then(() => {
        console.log('All words have been inserted successfully.');
    })
    .catch(error => {
        console.error('Error inserting words:', error);
    })
    
});