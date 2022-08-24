const getAllBooks = require('./books/get-all-books.controllers');
const getBookById = require('./books/get-book.cotrollers');
const deleteBookById = require('./books/delete-book.controllers');
const addBook = require('./books/post-book.controller');
const updateBookById = require('./books/update-book.controllers');

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
