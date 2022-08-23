const dbConnection = require('../../connection');

const query = `UPDATE books 
                SET isDeleted = true 
                WHERE id = $1 AND isDeleted = false `;

module.exports = (id) => dbConnection.query(query, [id]);
