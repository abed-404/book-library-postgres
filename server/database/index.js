const path = require('path');
const fs = require('fs').promises;
const dbConnection = require('./connection');

const filePath = path.join(__dirname, 'books.json');

const readJson = () => fs.readFile(filePath, 'utf8');

const updateJson = (books) => fs.writeFile(filePath, JSON.stringify(books));

const getData = () => dbConnection.query('SELECT * FROM books;');
const getAllData = () => dbConnection.query('SELECT * FROM books WHERE isDeleted = false;');
module.exports = {
  readJson,
  updateJson,
  getData,
  getAllData,
};
