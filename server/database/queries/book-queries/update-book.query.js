const dbConnection = require('../../connection');

const query = `UPDATE books 
                SET title = $1, author = $2, edition = $3, img = $4 
                WHERE id = $5 AND isDeleted = false `;

module.exports = (id, {
  title, author, edition, image,
}) => dbConnection.query(query, [title, author, edition, image, id]);
