const { getData } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const books = (await getData()).rows;
    return res.json(books);
  } catch (err) {
    return next(err);
  }
};
