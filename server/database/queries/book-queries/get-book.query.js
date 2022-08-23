const dbConnection = require('../../config/connection');

const query = `SELECT * FROM books 
                WHERE id = $1 AND isDeleted = false;`;

module.exports = (id) => dbConnection.query(query, [id]);
