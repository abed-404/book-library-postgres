/* eslint-disable prefer-const */
const { validateBook } = require('../../util');
const { insertBook } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await validateBook(req.body, req.method);
    let title; let author; let edition; let image;
    ({
      title, author, edition, image = 'default img url',
    } = req.body);
    const book = {
      title, author, edition, image,
    };
    await insertBook(book);
    return res.status(201).json({ massage: 'books has been added successfully', added_book: book });
  } catch (err) {
    return next(err);
  }
};
