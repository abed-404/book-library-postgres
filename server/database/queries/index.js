const getData = require('./book-queries/get-all-books.query');
const getBook = require('./book-queries/get-book.query');
const deleteBook = require('./book-queries/delete-book.query');
const insertBook = require('./book-queries/insert-book.query');
const updateBook = require('./book-queries/update-book.query');

module.exports = {
  getData,
  getBook,
  insertBook,
  updateBook,
  deleteBook,
};
