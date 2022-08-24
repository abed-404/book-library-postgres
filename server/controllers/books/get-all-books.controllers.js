const { getBooks } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const books = (await getBooks()).rows;
    return res.json(books);
  } catch (err) {
    return next(err);
  }
};
