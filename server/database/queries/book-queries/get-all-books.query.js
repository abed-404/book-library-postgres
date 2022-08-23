const dbConnection = require('../../connection');

const query = `SELECT id, title, author, edition, img 
                FROM books 
                WHERE isDeleted = false ORDER BY id;`;

module.exports = () => dbConnection.query(query);
