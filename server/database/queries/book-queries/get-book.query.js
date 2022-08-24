const dbConnection = require('../../config/connection');

const query = `SELECT id, title, author, edition, img
                FROM books 
                WHERE id = $1 AND isDeleted = false;`;

module.exports = (id) => dbConnection.query(query, [id]);
