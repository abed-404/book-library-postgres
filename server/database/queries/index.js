const getBooks = require('./book-queries/get-all-books.query');
const getBookById = require('./book-queries/get-book.query');
const deleteBookById = require('./book-queries/delete-book.query');
const insertBook = require('./book-queries/insert-book.query');
const updateBookById = require('./book-queries/update-book.query');

module.exports = {
  getBooks,
  getBookById,
  insertBook,
  updateBookById,
  deleteBookById,
};
