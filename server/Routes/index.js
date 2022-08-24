const express = require('express');
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} = require('../controllers');

const router = express.Router();
router.use(express.json());

router.get('/', getAllBooks);
router.post('/', addBook);
router.get('/:id', getBookById);
router.put('/:id', updateBookById);
router.delete('/:id', deleteBookById);

module.exports = router;
