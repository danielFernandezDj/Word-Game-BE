const db = require('../config/database');

const burner = async () => {
    try{
        await db.none('DROP TABLE IF EXISTS triangle');
        console.log('Burned down the database');
    }
    catch (error){
        console.error('Error burning down the database:', error);
    }
}

burner();
