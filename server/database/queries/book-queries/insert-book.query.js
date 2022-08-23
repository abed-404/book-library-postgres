const dbConnection = require('../../connection');

const query = `INSERT INTO books (title, author, edition, img) 
                VALUES ($1,$2,$3,$4)`;

module.exports = ({
  title, author, edition, image,
}) => dbConnection.query(query, [title, author, edition, image]);
